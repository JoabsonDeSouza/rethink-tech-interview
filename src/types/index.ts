export type TypeFakePeople = {
    email: string;
    salary: string;
    title: string;
    full_name: string;
    company: string;
    birthday: string;
    gender: string;
};

export type Enterprise = {
    company: string;
    numberOfWorkers?: number;
    numberWoman?: number;
    numberMan?: number;
    averageAge?: string;
};

export interface ListByCompany {
    [key: string]: any;
}
  
