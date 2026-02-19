import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';
import { mockCourses, mockStudents } from '../lib/mockData';
import type { Student } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { cn } from '../lib/utils';

export default function Groups() {
    const [courses] = useState(mockCourses);
    const [students, setStudents] = useState<Student[]>(mockStudents);

    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const studentId = draggableId;
        const newCourseId = destination.droppableId;

        // Update student's courseId
        const updatedStudents = students.map(s =>
            s.id === studentId ? { ...s, courseId: newCourseId } : s
        );

        setStudents(updatedStudents);

        // In a real app, we would make an API call here
        console.log(`Moved student ${studentId} to course ${newCourseId}`);
    };

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">Gestión de Grupos</h1>
                <p className="text-neutral-400">Arrastra y suelta alumnos para reasignar grupos.</p>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 overflow-x-auto pb-4">
                    {courses.map((course) => {
                        const courseStudents = students.filter(s => s.courseId === course.id);

                        return (
                            <div key={course.id} className="flex flex-col h-full">
                                <Card className="h-full flex flex-col bg-neutral-800 border-neutral-700">
                                    <CardHeader className="pb-3 border-b border-neutral-700">
                                        <div className="flex justify-between items-center">
                                            <CardTitle className="text-lg">{course.name}</CardTitle>
                                            <span className="text-xs px-2 py-1 rounded bg-neutral-900 text-neutral-400">
                                                {courseStudents.length} / {course.maxCapacity}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-neutral-400 mt-1">
                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: course.color }}></div>
                                            <span>{course.schedule}</span>
                                        </div>
                                    </CardHeader>

                                    <Droppable droppableId={course.id}>
                                        {(provided, snapshot) => (
                                            <CardContent
                                                className={cn(
                                                    "flex-1 p-4 transition-colors min-h-[150px]",
                                                    snapshot.isDraggingOver ? "bg-neutral-700/50" : ""
                                                )}
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                <div className="space-y-3">
                                                    {courseStudents.map((student, index) => (
                                                        <Draggable key={student.id} draggableId={student.id} index={index}>
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    className={cn(
                                                                        "p-3 rounded-lg border bg-neutral-900 border-neutral-700 flex items-center gap-3 hover:border-brand-accent/50 transition-colors cursor-grab active:cursor-grabbing shadow-sm",
                                                                        snapshot.isDragging ? "shadow-lg ring-2 ring-brand-accent z-50" : ""
                                                                    )}
                                                                    style={provided.draggableProps.style}
                                                                >
                                                                    <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-medium">
                                                                        {student.name.charAt(0)}
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-sm font-medium text-white">{student.name}</p>
                                                                        <p className="text-xs text-neutral-500">{student.email}</p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            </CardContent>
                                        )}
                                    </Droppable>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </DragDropContext>
        </div>
    );
}
