import { GenderType } from "../shared/constant";

export class RegistrationModel {
    constructor(public email: string, public password: string, public education?: number, public gender: number = GenderType.FEMALE) {
    }

}