import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { ProfileProps } from "@/components/ProfileSettings";

const AdminSettings = ({ updateProgress }: ProfileProps) => {
    const [connections, setConnections] = useState({
        salesforce: false,
        hubspot: false,
        slack: false,
        teams: false,
    });

    useEffect(() => {
        const allConnected = Object.values(connections).some((val) => val === true);
        updateProgress("admin", allConnected);
    }, [Object.values(connections), updateProgress]);

    const toggleConnection = (key: keyof typeof connections) => {
        setConnections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <Card className="mt-[30px]">
            {/* Header */}
            <h2 className="text-lg font-semibold">Admin Settings</h2>
            <p className="text-secondary font-semibold">Manage organization-wide settings</p>

            {/* CRM Integration */}
            <div className="mt-4">
                <h3 className="text-md font-medium">CRM Integration</h3>
                <div className="grid grid-cols-2 gap-2 mt-2">
                    {["salesforce", "hubspot"].map((key) => (
                        <button
                            key={key}
                            onClick={() => toggleConnection(key as keyof typeof connections)}
                            className={`flex items-center justify-between flex-col md:flex-row p-4 border rounded-md ${connections[key as keyof typeof connections]
                                ? "bg-green-100 border-green-400"
                                : "bg-gray-100 border-gray-300"
                                }`}
                        >
                            <span className="font-medium capitalize">{key}</span>
                            <span className="text-sm">
                                {connections[key as keyof typeof connections] ? "Connected" : "Not connected"}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Communication Platforms */}
            <div className="mt-4">
                <h3 className="text-md font-medium">Communication Platforms</h3>
                <div className="grid grid-cols-2 gap-2 mt-2">
                    {["slack", "teams"].map((key) => (
                        <button
                            key={key}
                            onClick={() => toggleConnection(key as keyof typeof connections)}
                            className={`flex items-center justify-between flex-col md:flex-row p-4 border rounded-md ${connections[key as keyof typeof connections]
                                ? "bg-green-100 border-green-400"
                                : "bg-gray-100 border-gray-300"
                                }`}
                        >
                            <span className="font-medium capitalize">{key === "teams" ? "Microsoft Teams" : key}</span>
                            <span className="text-sm">
                                {connections[key as keyof typeof connections] ? "Connected" : "Not connected"}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* User Management */}
            <div className="mt-6">
                <h3 className="text-md font-medium mb-[10px]">User Management</h3>
                <Button kind="primaryFilled" buttonText='ManageUsers' />
            </div>
        </Card>
    );
};

export default AdminSettings;
