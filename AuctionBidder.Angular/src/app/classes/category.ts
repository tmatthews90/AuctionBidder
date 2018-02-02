export class Category {

    constructor(obj?: any) {
        this.id =               ('id' in obj ? obj.id : '');
        this.name =             ('name' in obj ? obj.name : '');
        this.description =      ('description' in obj ? obj.description : '');
        this.timeAvailable =    ('timeAvailable' in obj ? obj.timeAvailable : null);
        this.timeEnd =          ('timeEnd' in obj ? obj.timeEnd : null);
    }

    id: number;
    name: string;
    description: string;
    timeAvailable: Date;
    timeEnd: Date;
}

export const TestCategories = [
    new Category({
        id: 1001,
        name: 'Home',
        description: null
    }),
    new Category({
        id: 1002,
        name: 'Sporting',
        description: null
    }),
    new Category({
        id: 1003,
        name: 'Out on the Town',
        description: null
    }),
    new Category({
        id: 1004,
        name: 'Kids',
        description: null
    })
];
