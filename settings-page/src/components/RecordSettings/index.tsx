import { useState, useEffect } from "react";
import Image from "next/image";
import { ProfileProps } from "@/components/ProfileSettings";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Badge from "@/components/Badge";

interface RecordingProps {
    externalHost?: boolean,
    internalHost?: boolean,
    internal?: boolean
}

const RecordingSettings = ({ updateProgress }: ProfileProps) => {
    const [recordingCategory, setRecordingCategory] = useState<RecordingProps>({
        externalHost: false,
        internalHost: false,
        internal: false
    });
    const [isConnected, setConnection] = useState<boolean>(false);

    useEffect(() => {
        const isChecked = Object.values(recordingCategory).some((val) => val === true);
        updateProgress("recording", isChecked);
    }, [recordingCategory, updateProgress]);

    const handleConnect = () => {
        setConnection(!isConnected);
    }

    return (
        <Card className="mt-[30px]">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold">My Recordings</h2>
                    <p className="text-secondary font-semibold">Manage your calendar integration</p>
                </div>
                <Badge isActive={isConnected} text={isConnected ? 'Active' : 'In Active'} />
            </div>
            <div className="flex justify-between items-center mt-[24px]">
                <div className="flex items-center">
                    <Image src='./google.svg' width={32} height={32} alt="google-icon" className="me-[10px]" />
                    <div className="flex flex-col">
                        <p className="text-primary text-sm">Google Calendar</p>
                        {isConnected && <p className="text-primary text-sm">Connected</p>}
                    </div>
                </div>
                <Button onClick={handleConnect} kind="primary" buttonText={isConnected ? 'Disconnect' : 'Connect'} />
            </div>
            {isConnected && <ul className="mt-[20px]">
                <li className="mb-[15px]">
                    <Checkbox
                        text="External Meetings (External Host)"
                        name="externalHost"
                        className="me-[10px]"
                        checked={recordingCategory.externalHost}
                        onChange={(e) => setRecordingCategory({ ...recordingCategory, externalHost: e?.target.checked })}
                    />
                </li>
                <li className="mb-[15px]">
                    <Checkbox
                        text="External Meetings (Internal Host)"
                        name="internalHost"
                        className="me-[10px]"
                        checked={recordingCategory.internalHost}
                        onChange={(e) => setRecordingCategory({ ...recordingCategory, internalHost: e?.target.checked })}
                    />
                </li>
                <li>
                    <Checkbox
                        text="Internal Meetings"
                        name="internal"
                        className="me-[10px]"
                        checked={recordingCategory.internal}
                        onChange={(e) => setRecordingCategory({ ...recordingCategory, internal: e?.target.checked })}
                    />
                </li>
            </ul>}
        </Card>
    );
};

export default RecordingSettings;