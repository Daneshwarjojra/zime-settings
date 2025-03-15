'use client';

import { useState, useEffect, useCallback } from "react";
import ProfileSettings from "@/components/ProfileSettings";
import RecordingSettings from "@/components/RecordSettings";
import AdminSettings from "@/components/AdminSettings";
import ProgressBar from "@/components/Progressbar";
import PrepNotesSettings from "@/components/PrepNoteSettings";
import ThemeSwitch from "@/components/ThemeSwitch";

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
    <div className="flex flex-col lg:flex-row" suppressHydrationWarning={true}>
      <div className="zime-sidebar fixed scale-x-0 w-full max-w-[300] lg:relative lg:scale-x-100">
        <img src='./zime-sidebar.png' className="h-full object-cover w-full" alt="zime-sidebar" width='100%' height='100%' />
      </div>
      <div className="w-full grid lg:grid-flow-col mt-[60px] gap-x-10 lg:pe-[72px] md:pe[48px] px-[24px] mb-[70px]">
        <div className="zime-settings-fow col-span-1 mt-[40px] lg:mt-0">
          <h1 className="text-xl font-bold">Settings</h1>
          <p className="text-l font-regular text-grey">Mangae your account settings and preferences</p>
          <ProfileSettings updateProgress={updateProgress} />
          <RecordingSettings updateProgress={updateProgress} />
          <PrepNotesSettings updateProgress={updateProgress} />
          <AdminSettings updateProgress={updateProgress} />
        </div>
        <div className="zime-settings-progressbar col-span-1">
          <ThemeSwitch />
          <ProgressBar sections={sections} progress={progress} />
        </div>
      </div>
    </div>
  );
}