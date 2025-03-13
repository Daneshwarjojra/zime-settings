'use client';

import { useState, useEffect, useCallback } from "react";
import ProfileSettings from "@/components/ProfileSettings";
import RecordingSettings from "@/components/RecordSettings";
import AdminSettings from "@/components/AdminSettings";
import ProgressBar from "@/components/Progressbar";
import PrepNotesSettings from "@/components/PrepNoteSettings";

export type SectionsState = {
  profile: boolean;
  recording: boolean;
  prepNotes: boolean;
  admin: boolean;
};

export default function Home() {
  const [progress, setProgress] = useState<number>(0);
  const [sections, setSections] = useState<SectionsState>({
    profile: false,
    recording: false,
    prepNotes: false,
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
    <div className="grid lg:grid-flow-col lg:gird-cols-2 h-full w-full">
      <div className="zime-sidebar col-span-1"></div>
      <div className="grid lg:grid-flow-col lg:gird-cols-1 col-span-1 mt-[60px] gap-x-4 lg:pe-[72px] md:pe[48px] px-[24px]">
        <div className="zime-settings-fow col-span-1 mt-[40px] lg:mt-0">
          <h1 className="text-xl font-bold">Settings</h1>
          <p className="text-l font-regular text-grey">Mangae your account settings and preferences</p>
          <ProfileSettings updateProgress={updateProgress} />
          <RecordingSettings updateProgress={updateProgress} />
          <PrepNotesSettings updateProgress={updateProgress} />
          <AdminSettings updateProgress={updateProgress} />
        </div>
        <div className="zime-settings-progressbar col-span-1">
          <ProgressBar sections={sections} progress={progress} />
        </div>
      </div>
    </div>
  );
}