export interface IScheduleModel {
    id?: number,
    date: Date,
    group_name: string,
    has_lessons: true,
    start_time: string,
    end_time: string,
    subject: string,
    teacher: string,
    auditorium?: string,
    building?: string
}