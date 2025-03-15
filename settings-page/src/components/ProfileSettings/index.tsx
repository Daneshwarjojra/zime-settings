import { SectionsState } from "@/app/page";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Badge from "@/components/Badge";

export interface ProfileProps {
    updateProgress: (section: keyof SectionsState, status: boolean) => void;
}

const ProfileSettings = ({ updateProgress }: ProfileProps) => {
    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        managerEmail: "",
        location: "",
    });
    const [badge, setBadge] = useState<boolean>(false);

    useEffect(() => {
        const filledFields = Object.values(profile).every((val) => val !== "");
        setBadge(filledFields);
        updateProgress("profile", filledFields);
    }, [Object.values(profile), updateProgress]);

    return (
        <Card className="mt-[30px]">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold">My Profile</h2>
                    <p className="font-semibold">Update your personal information</p>
                </div>
                <Badge text={badge ? 'Completed' : 'In Complete'} isActive={badge} />
            </div>
            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-x-4">
                <Input
                    type="text"
                    placeholder="Full Name"
                    value={profile.fullName}
                    onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                    className="input"
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="input"
                />
                <Input
                    type="text"
                    placeholder="Manager Email"
                    value={profile.managerEmail}
                    onChange={(e) => setProfile({ ...profile, managerEmail: e.target.value })}
                    className="input"
                />
                <Input
                    type="text"
                    placeholder="Location"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="input"
                />
            </div>
        </Card>
    );
};

export default ProfileSettings;