import { mockStudents, mockCourses } from '../../lib/mockData';
import { Badge } from '../ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Input } from '../ui/Input';
import { Search } from 'lucide-react';
import { useState } from 'react';

export function StudentsTable() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStudents = mockStudents.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getCourseName = (courseId: string) => {
        return mockCourses.find(c => c.id === courseId)?.name || 'Sin Asignar';
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Estado de Colegiaturas</CardTitle>
                <div className="w-64">
                    <Input
                        placeholder="Buscar alumno..."
                        startIcon={<Search className="w-4 h-4" />}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </CardHeader>
            <CardContent>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-neutral-400">
                        <thead className="text-xs text-neutral-500 uppercase bg-neutral-800/50">
                            <tr>
                                <th scope="col" className="px-6 py-3 rounded-l-lg">Alumno</th>
                                <th scope="col" className="px-6 py-3">Curso</th>
                                <th scope="col" className="px-6 py-3">Fecha Inscripción</th>
                                <th scope="col" className="px-6 py-3 rounded-r-lg text-right">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors">
                                    <td className="px-6 py-4 font-medium text-white">
                                        <div>{student.name}</div>
                                        <div className="text-xs text-neutral-500">{student.email}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {getCourseName(student.courseId)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {new Date(student.enrollmentDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Badge variant={
                                            student.paymentStatus === 'paid' ? 'success' :
                                                student.paymentStatus === 'pending' ? 'warning' : 'destructive'
                                        }>
                                            {student.paymentStatus === 'paid' ? 'Pagado' :
                                                student.paymentStatus === 'pending' ? 'Pendiente' : 'Atrasado'}
                                        </Badge>
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
