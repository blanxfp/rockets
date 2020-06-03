class Rocket {
    code: string;
    thrusters: number;
    powers: number[] = new Array();
    
    constructor(code:string, thrusters:number, powers: number[]){
        this.code = code;
        this.thrusters = thrusters;
        this.powers = powers;
    }
    
    showRocket():string {
        return `Rocket ${this.code} has ${this.thrusters} thrusters. The powers of each thruster are: ${this.powers} respectively.`
    }
}
