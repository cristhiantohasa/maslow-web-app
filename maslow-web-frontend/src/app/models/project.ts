export class Project {
    constructor(
        public _id: string | null,
        public name: String | null,
        public date: String | null,
        public architect: String | null,
        public sector: String | null,
        public type: String | null,
        public entry: Number | null,
        public dues: Number | null,
        public against: Number | null,
        public image: string | null
    ) {}
}