import { SectionsState } from "@/app/page";
import { useState, useEffect } from "react";

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
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-lg font-bold">My Profile</h2>
            <input
                type="text"
                placeholder="Full Name"
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                className="input"
            />
            <input
                type="email"
                placeholder="Email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="input"
            />
            <input
                type="text"
                placeholder="Manager Email"
                value={profile.managerEmail}
                onChange={(e) => setProfile({ ...profile, managerEmail: e.target.value })}
                className="input"
            />
            <input
                type="text"
                placeholder="Location"
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                className="input"
            />
        </div>
    );
};

export default ProfileSettings;