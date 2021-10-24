import { GenderType } from "../shared/constant";

export class User {
    constructor(public email: string, public password: string, public education?: number,
        public gender: number = GenderType.FEMALE) { }
}

export class Course {
    constructor(public id: number, public name: string, public teacher: string, public price: number, public startDate?: Date, public description?: string) { }
}

export class UserCourse {
    constructor(public email: string, public courseId: number) { }
}

export class InMemoryDB {

    public static USERS: User[] = [];
    public static COURSES: Course[] = [
        new Course(1, 'English', 'Akbari', 2500, new Date(2022, 4, 2), 'Very good english course with Mr.Akbari on Wendsdays'),
        new Course(2, 'English', 'Saberi', 5000, new Date(2022, 8, 5), 'Excellent english course with Ms.Saberi on Sunday'),
        new Course(3, 'Germany', 'Hani', 10000, new Date(2022, 10, 2), 'Excellent germany course with Mr.Hani on Monday'),
        new Course(4, 'Turkish', 'Yari', 3000, new Date(2022, 9, 3), 'Very good Turkish course with Mr.Yari on Tuesday'),
        new Course(5, 'English', 'Alavi', 7000, new Date(2022, 7, 1), 'Excellent English course with Ms.Alavi on Suterday'),
        new Course(6, 'English', 'Mosavi', 6000, new Date(2022, 5, 16), 'Excellent English course with Mr.Mosavi on Tursday')
    ];
    static USERS_COURSES: UserCourse[] = [];
    static CURRENT_USER: string = "";

    constructor() {
    }

}