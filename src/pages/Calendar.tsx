import { mockCourses } from '../lib/mockData';


const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const HOURS = Array.from({ length: 13 }, (_, i) => i + 8); // 8:00 to 20:00

export default function Calendar() {

    const getCourseStyle = (course: any) => {
        // Parse schedule "10:00 - 13:00"
        const [start, end] = course.schedule.split(' - ');
        const startHour = parseInt(start.split(':')[0]);
        const endHour = parseInt(end.split(':')[0]);
        const duration = endHour - startHour;

        return {
            top: `${(startHour - 8) * 60}px`,
            height: `${duration * 60}px`,
            backgroundColor: course.color,
        };
    };

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">Calendario de Estudios</h1>
                <p className="text-neutral-400">Visualización de ocupación semanal por curso y estudio.</p>
            </div>

            <div className="flex-1 overflow-auto bg-neutral-900 rounded-xl border border-neutral-800 shadow-sm">
                <div className="min-w-[800px]">
                    {/* Header */}
                    <div className="grid grid-cols-6 border-b border-neutral-800">
                        <div className="p-4 border-r border-neutral-800 bg-neutral-900 sticky left-0 z-10 text-center font-semibold text-neutral-500 text-sm">Hora</div>
                        {DAYS.map(day => (
                            <div key={day} className="p-4 text-center font-semibold text-neutral-300 border-r border-neutral-800 last:border-r-0 bg-neutral-900">
                                {day === 'Mon' ? 'Lunes' :
                                    day === 'Tue' ? 'Martes' :
                                        day === 'Wed' ? 'Miércoles' :
                                            day === 'Thu' ? 'Jueves' : 'Viernes'}
                            </div>
                        ))}
                    </div>

                    {/* Body */}
                    <div className="grid grid-cols-6 relative">
                        {/* Time labels */}
                        <div className="border-r border-neutral-800 bg-neutral-900 relative">
                            {HOURS.map(hour => (
                                <div key={hour} className="h-[60px] border-b border-neutral-800/50 text-xs text-neutral-500 flex items-start justify-center pt-2">
                                    {hour}:00
                                </div>
                            ))}
                        </div>

                        {/* Days Columns */}
                        {DAYS.map(day => (
                            <div key={day} className="border-r border-neutral-800 last:border-r-0 relative bg-neutral-900/50">
                                {/* Grid lines */}
                                {HOURS.map(hour => (
                                    <div key={hour} className="h-[60px] border-b border-neutral-800/50"></div>
                                ))}

                                {/* Events */}
                                {mockCourses
                                    .filter(c => c.days.includes(day))
                                    .map(course => (
                                        <div
                                            key={course.id}
                                            className="absolute left-1 right-1 rounded-md p-2 text-xs font-medium text-white shadow-sm hover:brightness-110 transition-all cursor-pointer z-10"
                                            style={getCourseStyle(course)}
                                        >
                                            <div className="font-bold truncate">{course.name}</div>
                                            <div className="opacity-80 truncate">{course.schedule}</div>
                                            <div className="mt-1 opacity-70 truncate">Estudio A</div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
