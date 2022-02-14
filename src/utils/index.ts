import { Enterprise, TypeFakePeople, ListByCompany } from "../types";

export const separateByCompany = (list: TypeFakePeople[]) => {
    const listByCompany: ListByCompany = {};

    list.map((data:TypeFakePeople) => {
        const check = listByCompany.hasOwnProperty(data.company);
        if (!check) {
        listByCompany[data.company] = [data];
        return;
        }
        listByCompany[data.company].push(data);
    });

    return listByCompany;
}

export const numberEnterprise = (allCompanies: ListByCompany) => {
    const enterprises: Enterprise[] = [];

    for (const company in allCompanies) {
        enterprises.push({ company });
    }
    return enterprises;
}

export const numberPeopleSameCompany = (allCompanies: ListByCompany) => {
    const enterprises: Enterprise[] = [];

    for (const company in allCompanies) {
        enterprises.push({
        company,
        numberOfWorkers: allCompanies[company].length,
        });
    }
    return enterprises;
}

export const numberMansAndWomans = (allCompanies: ListByCompany) => {
    const enterprises: Enterprise[] = [];

    for (const company in allCompanies) {
        let woman = 0;
        let man = 0;

        allCompanies[company].forEach((person: { gender: string }) => {
        if (person.gender === 'male') {
            man += 1;
            return;
        }
        woman += 1;
        });

        enterprises.push({
            company,
            numberOfWorkers: allCompanies[company].length,
            numberWoman: woman,
            numberMan: man,
        });
    }
    return enterprises;
}

export const averageAgeByCompany = (allCompanies: ListByCompany) => {
    const enterprises: Enterprise[] = [];

    for (const company in allCompanies) {
        let woman = 0;
        let man = 0;

        const totalAges = allCompanies[company].reduce(
            (acc: number, person: TypeFakePeople) => {
              const today = new Date();
              var birthDate = new Date(person.birthday);
              var age = today.getFullYear() - birthDate.getFullYear();
              return acc + age;
            },
            0,
          );

          allCompanies[company].forEach((person: { gender: string }) => {
            if (person.gender === 'male') {
                man += 1;
                return;
            }
            woman += 1;
            });
      
          enterprises.push({
            company,
            numberOfWorkers: allCompanies[company].length,
            numberWoman: woman,
            numberMan: man,
            averageAge: `${(totalAges / allCompanies[company].length).toFixed(0)} anos`,
          });
    }

    return enterprises;
}

export const orderListCrescent = (allCompanies: ListByCompany) =>{
    const enterprises = averageAgeByCompany(allCompanies)
    return enterprises.sort((a, b) => a.company.localeCompare(b.company));
}
