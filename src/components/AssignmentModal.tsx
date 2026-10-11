import React from 'react';
import { X } from 'lucide-react';
import { AssignmentItem } from '../data/assignmentsList';
import { StudentProfile } from '../data/studentProfile';
import { AssignmentDemos } from './AssignmentDemos';

interface Props {
  assignment: AssignmentItem | null;
  profile: StudentProfile;
  onClose: () => void;
}

export const AssignmentModal: React.FC<Props> = ({ assignment, profile, onClose }) => {
  if (!assignment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="bg-white border border-zinc-200 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header: Clean, Simple, Professional */}
        <div className="p-6 border-b border-zinc-200 flex items-start justify-between gap-4 bg-zinc-50/80">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-1 rounded-full text-xs font-black font-mono bg-zinc-950 text-white">
                {assignment.assignmentLabel}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                {assignment.tag}
              </span>
              <span className="text-xs font-bold text-zinc-600 hidden sm:inline">
                {profile.courseName} • Instructor: {profile.teacherName}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
              {assignment.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1 font-medium">
              {assignment.shortDesc}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-zinc-200 text-zinc-500 hover:text-zinc-950 transition-colors"
            aria-label="Close assignment"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: SHOWS ONLY THE PURE WORKING ASSIGNMENT ITSELF */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-white">
          <AssignmentDemos assignmentId={assignment.id} profile={profile} />
        </div>
      </div>
    </div>
  );
};
