import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineCalendarDays,
  HiOutlineClock,
} from "react-icons/hi2";
import { getPortalCopy } from "@/i18n/portal";
import type { Locale } from "@/i18n/config";

export default function CalendarPreview({ locale }: { locale: Locale }) {
  const t = getPortalCopy(locale).projects.dienstplan;
  return (
    <div className="calendar-composition">
      <div className="calendar-sheet" aria-hidden="true">
        <div className="calendar-heading">
          <span>{t.calendar}</span>
          <span>
            <HiChevronLeft />
            <HiChevronRight />
          </span>
        </div>
        <div className="calendar-grid">
          {t.weekdays.map((day) => (
            <span key={day} className="weekday">
              {day}
            </span>
          ))}
          {Array.from({ length: 6 }, (_, i) => (
            <span key={`empty-${i}`} />
          ))}
          {Array.from({ length: 30 }, (_, i) => {
            const day = i + 1;
            const shift = day % 7;
            return (
              <span
                key={day}
                className={`calendar-day ${shift === 1 || shift === 2 ? "shift-early" : shift === 3 || shift === 4 ? "shift-late" : ""} ${day === 14 ? "selected-day" : ""}`}
              >
                {day}
                {shift > 0 && shift < 5 && <i />}
              </span>
            );
          })}
        </div>
        <div className="calendar-legend">
          <span>
            <i className="early-dot" />
            {locale === "de" ? "Früh" : "Early"}
          </span>
          <span>
            <i className="late-dot" />
            {locale === "de" ? "Spät" : "Late"}
          </span>
          <span>
            <i className="free-dot" />
            {locale === "de" ? "Frei" : "Off"}
          </span>
        </div>
      </div>
      <div className="shift-note" aria-hidden="true">
        <span className="shift-note-icon">
          <HiOutlineCalendarDays />
        </span>
        <div>
          <span>{t.today}</span>
          <strong>{t.shift}</strong>
          <small>
            <HiOutlineClock />
            {t.shiftTime}
          </small>
        </div>
      </div>
      <p className="preview-caption">{t.label}</p>
    </div>
  );
}
