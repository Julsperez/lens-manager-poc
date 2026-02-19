import { mockTeachers } from '../../lib/mockData';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { DollarSign } from 'lucide-react';

export function TeachersTable() {

    const calculateTotal = (teacher: typeof mockTeachers[0]) => {
        if (teacher.contractType === 'fixed') {
            return teacher.rate;
        }
        return teacher.rate * teacher.hoursWorked;
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Nómina de Profesores</CardTitle>
                <Button variant="default" className="bg-brand-accent hover:bg-brand-accent/90 text-white">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Generar Dispersión
                </Button>
            </CardHeader>
            <CardContent>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-neutral-400">
                        <thead className="text-xs text-neutral-500 uppercase bg-neutral-800/50">
                            <tr>
                                <th scope="col" className="px-6 py-3 rounded-l-lg">Profesor</th>
                                <th scope="col" className="px-6 py-3">Contrato</th>
                                <th scope="col" className="px-6 py-3">Tarifa / Horas</th>
                                <th scope="col" className="px-6 py-3 rounded-r-lg text-right">Total a Pagar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockTeachers.map((teacher) => (
                                <tr key={teacher.id} className="border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors">
                                    <td className="px-6 py-4 font-medium text-white">
                                        {teacher.name}
                                        <div className="text-xs text-neutral-500">{teacher.email}</div>
                                    </td>
                                    <td className="px-6 py-4 capitalize">
                                        {teacher.contractType === 'fixed' ? 'Sueldo Fijo' : 'Por Horas'}
                                    </td>
                                    <td className="px-6 py-4">
                                        {teacher.contractType === 'fixed'
                                            ? `$${teacher.rate}/mes`
                                            : `$${teacher.rate}/h (${teacher.hoursWorked}h)`}
                                    </td>
                                    <td className="px-6 py-4 text-right font-bold text-white">
                                        ${calculateTotal(teacher).toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
