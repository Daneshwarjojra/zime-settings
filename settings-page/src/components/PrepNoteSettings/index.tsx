import React, { useEffect, useState } from "react";
import { ProfileProps } from "@/components/ProfileSettings";
import Card from "@/components/Card";
import Checkbox from "../Checkbox";

const PrepNotesSettings = ({ updateProgress }: ProfileProps) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [timing, setTiming] = useState("1 hour before");
    const [deliveryMethods, setDeliveryMethods] = useState<string[]>([]);

    const handleToggle = () => {
        setIsEnabled((prev) => !prev);
    };

    const handleTimingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTiming(event.target.value);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setDeliveryMethods((prev) =>
            checked ? [...prev, value] : prev.filter((method) => method !== value)
        );
    };

    useEffect(() => {
        updateProgress('prepNotes', deliveryMethods.length > 0);
    }, [deliveryMethods.length, updateProgress])

    return (
        <Card className="mt-[30px]">
            {/* Header */}
            <h2 className="text-lg font-semibold">Call Best Practices</h2>
            <p className="text-secondary font-semibold">
                Configure your prep notes settings
            </p>

            {/* Toggle Switch */}
            <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-medium">Enable Prep Notes</span>
                <button
                    onClick={handleToggle}
                    className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${isEnabled ? "bg-blue-500" : "bg-gray-300"
                        }`}
                >
                    <div
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${isEnabled ? "translate-x-5" : "translate-x-0"
                            }`}
                    />
                </button>
            </div>

            {/* Prep Notes Timing */}
            <div className="mt-4">
                <label className="block text-sm font-medium">Prep Notes Timing</label>
                <select
                    value={timing}
                    onChange={handleTimingChange}
                    className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-gray-100"
                    disabled={!isEnabled}
                >
                    <option>1 hour before</option>
                    <option>30 minutes before</option>
                    <option>10 minutes before</option>
                </select>
            </div>

            {/* Delivery Method */}
            <div className="mt-4">
                <label className="block text-sm font-medium">Delivery Method</label>
                <div className="mt-2 space-y-2">
                    {["Email", "Slack", "Microsoft Teams"].map((method) => (
                        <Checkbox
                            value={method}
                            key={method}
                            children={method}
                            checked={deliveryMethods.includes(method)}
                            onChange={(e) => { handleCheckboxChange(e as React.ChangeEvent<HTMLInputElement>) }}
                            className="me-[10px]"
                            disabled={!isEnabled}
                        />
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default PrepNotesSettings;
