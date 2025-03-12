'use client';

import { useState, useEffect, useCallback } from "react";
import ProfileSettings from "@/components/ProfileSettings";
import RecordingSettings from "@/components/RecordSettings";
import AdminSettings from "@/components/AdminSettings";
import ProgressBar from "@/components/Progressbar";

export type SectionsState = {
  profile: boolean;
  recording: boolean;
  admin: boolean;
};

export default function Home() {
  const [progress, setProgress] = useState<number>(0);
  const [sections, setSections] = useState<SectionsState>({
    profile: false,
    recording: false,
    admin: false,
  });

  const updateProgress = useCallback((section: keyof SectionsState, status: boolean) => {
    setSections((prev) => {
      if (prev[section] !== status) {
        return { ...prev, [section]: status };
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    const filledSections = Object.values(sections).filter(Boolean).length;
    setProgress((filledSections / Object.keys(sections).length) * 100);
  }, [sections]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      <ProgressBar progress={progress} />
      <ProfileSettings updateProgress={updateProgress} />
      <RecordingSettings updateProgress={updateProgress} />
      <AdminSettings updateProgress={updateProgress} />
    </div>
  );
}