import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import type { FinanceStats } from '../../types';

interface FinanceChartProps {
    data: FinanceStats[];
}

export function FinanceChart({ data }: FinanceChartProps) {
    return (
        <Card className="col-span-4 lg:col-span-3">
            <CardHeader>
                <CardTitle>Balance Financiero</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#E2E2E2" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#E2E2E2" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#FF4500" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#FF4500" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="month"
                                stroke="#525252"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#525252"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1E1E1E', border: '1px solid #262626', borderRadius: '8px' }}
                                itemStyle={{ color: '#E2E2E2' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="income"
                                name="Ingresos"
                                stroke="#E2E2E2"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorIncome)"
                            />
                            <Area
                                type="monotone"
                                dataKey="expenses"
                                name="Egresos"
                                stroke="#FF4500"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorExpenses)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
