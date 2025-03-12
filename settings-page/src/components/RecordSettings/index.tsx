import { useState, useEffect } from "react";
import { ProfileProps } from "../ProfileSettings";

const RecordingSettings = ({ updateProgress }: ProfileProps) => {
    const [recordingEnabled, setRecordingEnabled] = useState(false);

    useEffect(() => {
        updateProgress("recording", recordingEnabled);
    }, [recordingEnabled, updateProgress]);

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-lg font-bold">My Recordings</h2>
            <label>
                <input
                    type="checkbox"
                    checked={recordingEnabled}
                    onChange={(e) => setRecordingEnabled(e.target.checked)}
                />
                Enable Recordings
            </label>
        </div>
    );
};

export default RecordingSettings;