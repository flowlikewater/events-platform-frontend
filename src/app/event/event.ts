export class Event {
    constructor(
        public id?:number,
        public name?: string,
        public description?: string,
        public updated_at?: string,
        public created_at?: string        
    ) {}
}