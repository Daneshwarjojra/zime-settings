import { SectionsState } from "@/app/page";
import Card from "@/components/Card";
import CheckIcon from "./CheckIcon";

interface ProgressBarprops {
    progress: number,
    sections: SectionsState
}

const ProgressBar = ({ progress, sections }: ProgressBarprops) => {
    return (
        <Card className="lg:mt-[82px] mt-[40px]">
            <p className="text-grey font-semibold text-xl flex justify-between items-center">
                Setup Progress
                {progress != 0 && <span className="text-sm">{`${progress}%`}</span>}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-[10px]">
                <div
                    className="bg-[#222] h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}>

                </div>
            </div >
            <ul className="progress-sections mt-[30px]">
                <li className={`progress-sections-list flex items-center gap-x-[8px] mb-[10px] ${sections.profile ? 'is-active' : 'in-active cursor-not-allowed text-[#ccc]'}`}>
                    <CheckIcon color={sections.profile ? '#000' : '#ccc'} />
                    Profile Information
                </li>
                <li className={`progress-sections-list flex items-center gap-x-[8px] mb-[10px] ${sections.recording ? 'is-active' : 'in-active cursor-not-allowed text-[#ccc]'}`}>
                    <CheckIcon color={sections.recording ? '#000' : '#ccc'} />
                    Calendar Integration
                </li>
                <li className={`progress-sections-list flex items-center gap-x-[8px] mb-[10px] ${sections.prepNotes ? 'is-active' : 'in-active cursor-not-allowed text-[#ccc]'}`}>
                    <CheckIcon color={sections.prepNotes ? '#000' : '#ccc'} />
                    Notetaker Settings
                </li>
                <li className={`progress-sections-list flex items-center gap-x-[8px] mb-[10px] ${sections.admin ? 'is-active' : 'in-active cursor-not-allowed text-[#ccc]'}`}>
                    <CheckIcon color={sections.admin ? '#000' : '#ccc'} />
                    Admin Configuration
                </li>
            </ul>
        </Card>
    );
};

export default ProgressBar;