import { StudentsTable } from '../components/finance/StudentsTable';
import { TeachersTable } from '../components/finance/TeachersTable';

export default function Finance() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">Finanzas</h1>
                <p className="text-neutral-400">Control de pagos de alumnos y nómina docente.</p>
            </div>

            <div className="grid gap-6">
                <StudentsTable />
                <TeachersTable />
            </div>
        </div>
    )
}
