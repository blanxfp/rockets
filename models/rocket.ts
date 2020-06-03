class Rocket {
    code: string;
    thrusters: number;
    
    constructor(code:string, thrusters:number){
        this.code = code;
        this.thrusters = thrusters;
    }
    
    showRocket():string {
        return `Rocket ${this.code} has ${this.thrusters} thrusters.`
    }
}
