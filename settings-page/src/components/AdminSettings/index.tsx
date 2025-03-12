import { useState, useEffect } from "react";
import { ProfileProps } from "../ProfileSettings";

const AdminSettings = ({ updateProgress }: ProfileProps) => {
    const [isConnected, setIsConnected] = useState({
        salesforce: false,
        slack: false,
    });

    useEffect(() => {
        const allConnected = Object.values(isConnected).every((val) => val === true);
        updateProgress("admin", allConnected);
    }, [isConnected, updateProgress]);

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Admin Settings</h2>
            <label>
                <input
                    type="checkbox"
                    checked={isConnected.salesforce}
                    onChange={() =>
                        setIsConnected({ ...isConnected, salesforce: !isConnected.salesforce })
                    }
                />
                Salesforce Connected
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={isConnected.slack}
                    onChange={() =>
                        setIsConnected({ ...isConnected, slack: !isConnected.slack })
                    }
                />
                Slack Connected
            </label>
        </div>
    );
};

export default AdminSettings;