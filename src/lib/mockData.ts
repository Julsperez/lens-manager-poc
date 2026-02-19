import type { Course, FinanceStats, Student, Teacher } from '../types';

export const mockStudents: Student[] = [
    { id: '1', name: 'Ana García', email: 'ana@example.com', avatar: '', courseId: 'c1', paymentStatus: 'paid', enrollmentDate: '2023-01-15' },
    { id: '2', name: 'Carlos Ruiz', email: 'carlos@example.com', avatar: '', courseId: 'c1', paymentStatus: 'pending', enrollmentDate: '2023-01-20' },
    { id: '3', name: 'Elena Torres', email: 'elena@example.com', avatar: '', courseId: 'c2', paymentStatus: 'paid', enrollmentDate: '2023-02-01' },
    { id: '4', name: 'David M.', email: 'david@example.com', avatar: '', courseId: 'c2', paymentStatus: 'overdue', enrollmentDate: '2023-01-10' },
    { id: '5', name: 'Sofia L.', email: 'sofia@example.com', avatar: '', courseId: 'c3', paymentStatus: 'paid', enrollmentDate: '2023-03-05' },
];

export const mockTeachers: Teacher[] = [
    { id: 't1', name: 'Marcos V.', email: 'marcos@lens.com', avatar: '', contractType: 'fixed', rate: 2500, hoursWorked: 160 },
    { id: 't2', name: 'Laura B.', email: 'laura@lens.com', avatar: '', contractType: 'hourly', rate: 35, hoursWorked: 45 },
];

export const mockCourses: Course[] = [
    {
        id: 'c1',
        name: 'Fotografía de Retrato',
        teacherId: 't1',
        schedule: '10:00 - 13:00',
        days: ['Mon', 'Wed'],
        maxCapacity: 12,
        enrolledStudents: ['1', '2'],
        color: '#FF4500'
    },
    {
        id: 'c2',
        name: 'Iluminación Studio',
        teacherId: 't2',
        schedule: '16:00 - 19:00',
        days: ['Tue', 'Thu'],
        maxCapacity: 8,
        enrolledStudents: ['3', '4'],
        color: '#10B981'
    },
    {
        id: 'c3',
        name: 'Edición Digital',
        teacherId: 't1',
        schedule: '18:00 - 20:00',
        days: ['Fri'],
        maxCapacity: 15,
        enrolledStudents: ['5'],
        color: '#F59E0B'
    },
];

export const mockFinanceStats: FinanceStats[] = [
    { month: 'Ene', income: 12500, expenses: 8000 },
    { month: 'Feb', income: 15000, expenses: 8500 },
    { month: 'Mar', income: 11000, expenses: 7800 },
    { month: 'Abr', income: 14000, expenses: 9000 },
    { month: 'May', income: 18000, expenses: 10000 },
    { month: 'Jun', income: 16500, expenses: 9500 },
];
