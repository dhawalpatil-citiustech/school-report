export interface Student {
    studentId: number;
    studentName: string;
    age: number;
    email: string;
    subject: Subject[]
}

export interface Subject {
    name: string;
    marks: number;
}