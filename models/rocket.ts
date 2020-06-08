class Rocket {
    code: string;
    thrusters: number;
    max_powers: number[] = new Array();
    current_powers: number[] = new Array();
    
    constructor(code:string, thrusters:number, max_powers: number[], current_powers: number[]){
        this.code = code;
        this.thrusters = thrusters;
        this.max_powers = max_powers;
        this.current_powers = current_powers;
    }

    accelerate() {
        var r: number[] = new Array();
        let i: number;
        let current_new: number;
        var not_updated: number[] = new Array();
        let returnString: string;
        
        for(i = 0; i < this.current_powers.length; i++){
            current_new = 10 + this.current_powers[i];
            if (current_new <= this.max_powers[i]) {
                r[i] = current_new;
            } else {
                r[i] = this.current_powers[i];
                not_updated.push(i+1);
            }
        }
        this.current_powers = r;
        if (not_updated.length != 0) {
            returnString = `The current powers each thuster of Rocket ${this.code} after accleration are: ${this.current_powers}. The following thursters: ${not_updated} were not updated because they were exceeding the max power of that thurster.`
        } else {
            returnString = `The current powers each thuster of Rocket ${this.code} after acceleration are: ${this.current_powers}.`
        }
        return returnString;
    }

    brake() {
        var r: number[] = new Array();
        let i: number;
        let current_new: number;
        var not_updated: number[] = new Array();
        let returnString: string;
        
        for(i = 0; i < this.current_powers.length; i++){
            current_new = this.current_powers[i] - 10;
            if (current_new >= 0) {
                r[i] = current_new;
            } else {
                r[i] = this.current_powers[i];
                not_updated.push(i+1);
            }
            
        }
        this.current_powers = r;
        if (not_updated.length != 0) {
            returnString = `The current powers of each thuster of Rocket ${this.code} after brake are: ${this.current_powers}. The following thursters: ${not_updated} were not updated because they were lower than the min power of that thurster.`
        } else {
            returnString = `The current powers of each thuster of Rocket ${this.code} after brake are: ${this.current_powers}.`
        }
        return returnString;
    }

    showCurrentPower():string {
        return `The current powers of each thuster of Rocket ${this.code} are: ${this.current_powers}. Therefore actual power of Rocket ${this.code} is ${this.current_powers.reduce((a, b) => a + b, 0)}.`
    }
    
    showRocket():string {
        // return `Rocket ${this.code} has ${this.thrusters} thrusters. The powers of each thruster are: ${this.max_powers} respectively.`
        return `Rocket ${this.code} has ${this.thrusters} thrusters. The max. powers of each thruster are: ${this.max_powers} respectively. And the current powers of each thuster are: ${this.current_powers}.`
    }
}
