import { fakeData } from "./data";
import { TypeFakePeople } from "./types";
import { FilterBy } from "./types/filter";
import { 
    numberPeopleSameCompany, 
    numberEnterprise, 
    numberMansAndWomans, 
    averageAgeByCompany, 
    separateByCompany, 
    orderListCrescent 
} from "./utils";


const groupBy = (fakeData: TypeFakePeople[], filter: FilterBy) => {
    const allCompanies = separateByCompany(fakeData);
    
    switch (filter) {
        
        case FilterBy.NUMBER_PERSON:
            return numberPeopleSameCompany(allCompanies);

        case FilterBy.TOTAL_ENTERPRISES:
            return numberEnterprise(allCompanies);
        
        case FilterBy.TOTAL_MAN_WOMAN:
            return numberMansAndWomans(allCompanies);


        case FilterBy.AVERAGE_AGE:
            return averageAgeByCompany(allCompanies);

        case FilterBy.ORDER_CRESCENT:
            return orderListCrescent(allCompanies);

        default: fakeData;
    }
};

// const info = groupBy(fakeData, FilterBy.TOTAL_ENTERPRISES);
// const info1 = groupBy(fakeData, FilterBy.NUMBER_PERSON);
// const info2 = groupBy(fakeData, FilterBy.TOTAL_MAN_WOMAN);
// const info3 = groupBy(fakeData, FilterBy.AVERAGE_AGE);
const info4 = groupBy(fakeData, FilterBy.ORDER_CRESCENT);

// console.table(info);
// console.table(info1);
// console.table(info2);
// console.table(info3);
console.table(info4);
