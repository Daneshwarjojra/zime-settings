import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { ProfileProps } from "@/components/ProfileSettings";
import Badge from "@/components/Badge";
import { HubSpotIcon, SalesForceIcon, Slack, Teams } from "./Icons/assets";

const AdminSettings = ({ updateProgress }: ProfileProps) => {
    const [connections, setConnections] = useState({
        salesforce: false,
        hubspot: false,
        slack: false,
        teams: false,
    });
    const [badge, setBadge] = useState<boolean>(false);

    useEffect(() => {
        const allConnected = Object.values(connections).some((val) => val === true);
        setBadge(Object.values(connections).some((val) => val === true));
        updateProgress("admin", allConnected);
    }, [Object.values(connections), updateProgress]);

    const toggleConnection = (key: keyof typeof connections) => {
        setConnections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <Card className="mt-[30px]">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold">Admin Settings</h2>
                    <p className="font-semibold">Manage organization-wide settings</p>
                </div>
                <Badge isActive={badge} text={badge ? 'Connected' : 'Not Connected'} />
            </div>
            {/* CRM Integration */}
            <div className="mt-4">
                <h3 className="text-md font-medium">CRM Integration</h3>
                <div className="grid grid-cols-2 gap-3 mt-2">
                    {["salesforce", "hubspot"].map((key) => (
                        <Button
                            key={key}
                            kind="custom"
                            buttonText={key}
                            buttonIconLeft={key === 'salesforce' ? <SalesForceIcon /> : <HubSpotIcon />}
                            subText={connections[key as keyof typeof connections] ? "Connected" : "Not connected"}
                            onClick={() => toggleConnection(key as keyof typeof connections)}
                            customClassName={`flex capitalize text-[#000] items-center cursor-pointer md:text-start gap-x-3 flex-col md:flex-row p-4 border rounded-md ${connections[key as keyof typeof connections]
                                ? "bg-green-100 border-green-400"
                                : "bg-gray-100 border-gray-400"
                                }`
                            }
                        />
                    ))}
                </div>
            </div>

            {/* Communication Platforms */}
            <div className="mt-4">
                <h3 className="text-md font-medium">Communication Platforms</h3>
                <div className="grid grid-cols-2 gap-3 mt-2">
                    {["slack", "teams"].map((key) => (
                        <Button
                            key={key}
                            kind='custom'
                            buttonIconLeft={key === 'teams' ? <Teams /> : <Slack />}
                            buttonText={key === 'teams' ? 'Microsoft Teams' : key}
                            subText={connections[key as keyof typeof connections] ? "Connected" : "Not connected"}
                            onClick={() => toggleConnection(key as keyof typeof connections)}
                            customClassName={`flex items-center text-[#000] md:text-start cursor-pointer capitalize gap-x-3 flex-col md:flex-row p-4 border rounded-md ${connections[key as keyof typeof connections]
                                ? "bg-green-100 border-green-400"
                                : "bg-gray-100 border-gray-400"
                                }`
                            }
                        />
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
