import { Plus, Clock } from 'lucide-react';
import type { Booking } from '../../types/booking';
import { CallCard } from './CallCard';

interface TimeSlotProps {
  time: string;
  booking?: Booking;
  isSpanned?: boolean;
  onBook: (time: string) => void;
  onDelete: (booking: Booking) => void;
  isDisabled?: boolean;
}

export function TimeSlot({ time, booking, isSpanned, onBook, onDelete, isDisabled }: TimeSlotProps) {
  // If this slot is covered by a 40-min call from the previous slot, render nothing.
  if (isSpanned) {
    return null;
  }

  const isLongBooking = booking?.durationMins === 40;

  return (
    <div className="group relative">
      <div className="flex items-stretch bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden m-2">
        {/* Time Label Column */}
        <div className={`w-32 flex-shrink-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center border-r border-gray-200 dark:border-gray-600 ${isDisabled ? 'opacity-60' : ''}`}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm font-poppins tracking-wide">
              {time}
            </span>
          </div>
        </div>

        {/* Slot Content Column */}
        <div className="flex-grow p-2">
          {booking ? (
            <CallCard
              booking={booking}
              isLong={isLongBooking}
              onDelete={() => onDelete(booking)}
            />
          ) : (
            <div className="relative h-full min-h-[68px]">
              {isDisabled ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 font-poppins">
                      Past Time
                    </span>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => onBook(time)}
                  className="w-full h-full relative overflow-hidden border-2 border-dashed border-blue-200 dark:border-blue-400 hover:border-blue-400 dark:hover:border-blue-400 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center gap-2 h-full">
                    <div className="relative">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-white" />
                      </div>
                      {/* Pulse ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400 dark:border-blue-500 animate-pulse opacity-20 group-hover/button:opacity-40" />
                    </div>
                    
                    <div className="text-center">
                      <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm font-poppins group-hover/button:text-blue-800 dark:group-hover/button:text-blue-200 transition-colors duration-300">
                        Click to Book
                      </div>
                      <div className="text-xs text-blue-600/70 dark:text-blue-400/70 font-poppins mt-1 group-hover/button:text-blue-700 dark:group-hover/button:text-blue-300 transition-colors duration-300">
                        Available slot
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-400/5 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300 rounded-lg" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Subtle glow effect for available slots */}
      {!booking && !isDisabled && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-sm" />
      )}
    </div>
  );
}