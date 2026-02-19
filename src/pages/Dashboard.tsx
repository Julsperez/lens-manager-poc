import { DollarSign, Users, GraduationCap, TrendingUp } from 'lucide-react';
import { KPICard } from '../components/dashboard/KPICard';
import { FinanceChart } from '../components/dashboard/FinanceChart';
import { mockFinanceStats, mockStudents, mockCourses } from '../lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export default function Dashboard() {
    // Calculate stats from mock data
    const totalStudents = mockStudents.length;
    const activeCourses = mockCourses.length;
    const lastMonthIncome = mockFinanceStats[mockFinanceStats.length - 1].income;
    const lastMonthExpenses = mockFinanceStats[mockFinanceStats.length - 1].expenses;
    const incomeGrowth = "+12% vs mes anterior";

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
                <p className="text-neutral-400">Resumen de actividad y rendimiento financiero.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <KPICard
                    title="Ingresos Totales"
                    value={`$${lastMonthIncome.toLocaleString()}`}
                    icon={DollarSign}
                    iconColor="text-status-success"
                    trend="up"
                    trendValue={incomeGrowth}
                    description=""
                />
                <KPICard
                    title="Egresos"
                    value={`$${lastMonthExpenses.toLocaleString()}`}
                    icon={TrendingUp}
                    iconColor="text-status-error"
                    trend="down"
                    trendValue="+4%"
                    description="vs mes anterior"
                />
                <KPICard
                    title="Alumnos Activos"
                    value={totalStudents}
                    icon={Users}
                    iconColor="text-brand-accent"
                    trend="up"
                    trendValue="+2"
                    description="nuevos inscritos"
                />
                <KPICard
                    title="Cursos Activos"
                    value={activeCourses}
                    icon={GraduationCap}
                    iconColor="text-purple-500"
                    description="En curso actual"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 lg:col-span-4">
                    <FinanceChart data={mockFinanceStats} />
                </div>

                <Card className="col-span-4 lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Cursos Recientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {mockCourses.map((course) => (
                                <div key={course.id} className="flex items-center justify-between p-3 bg-neutral-800/50 rounded-lg border border-neutral-800/50 hover:border-neutral-700 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-10 rounded-full" style={{ backgroundColor: course.color }}></div>
                                        <div>
                                            <p className="font-medium text-white">{course.name}</p>
                                            <p className="text-xs text-neutral-500">{course.schedule}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs px-2 py-1 rounded-full bg-neutral-700 text-neutral-300">
                                            {course.enrolledStudents.length}/{course.maxCapacity}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
