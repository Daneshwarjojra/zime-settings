import { SectionsState } from "@/app/page";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Input from "@/components/Input";

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

    useEffect(() => {
        const filledFields = Object.values(profile).every((val) => val !== "");
        updateProgress("profile", filledFields);
    }, [profile, updateProgress]);

    return (
        <Card className="mt-[30px]">
            <h2 className="text-lg font-bold mb-[8px]">My Profile</h2>
            <div className="grid grid-flow-col lg:grid-flow-row grid-cols-2 gap-x-4">
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