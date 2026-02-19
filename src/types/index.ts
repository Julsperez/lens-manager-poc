export type PaymentStatus = 'paid' | 'pending' | 'overdue';

export interface Student {
    id: string;
    name: string;
    email: string;
    avatar: string;
    courseId: string;
    paymentStatus: PaymentStatus;
    enrollmentDate: string;
}

export interface Course {
    id: string;
    name: string;
    teacherId: string;
    schedule: string;
    days: string[];
    maxCapacity: number;
    enrolledStudents: string[]; // Array of student IDs
    color: string;
}

export interface Teacher {
    id: string;
    name: string;
    email: string;
    avatar: string;
    contractType: 'hourly' | 'fixed';
    rate: number;
    hoursWorked: number;
}

export interface FinanceStats {
    month: string;
    income: number;
    expenses: number;
}

export interface DashboardStats {
    totalStudents: number;
    monthlyIncome: number;
    monthlyExpenses: number;
    activeCourses: number;
}
