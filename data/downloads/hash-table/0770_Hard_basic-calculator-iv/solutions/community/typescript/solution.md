# Stack and OOP

**Author:** waxm
**Votes:** 0
**Link:** [https://leetcode.com/problems/basic-calculator-iv/solutions/4604262/](https://leetcode.com/problems/basic-calculator-iv/solutions/4604262/)

---

# Code
```
class Unit {
    exp: string[];
    mul: number;
    sign: number;
    constructor(unit?: Unit) {
        this.exp = unit ? [...unit.exp] : [];
        this.mul = unit ? unit.mul : 1;
        this.sign = unit ? unit.sign : 1;
    }

    add(unit: Unit): void {
        if (this.sign === unit.sign) this.mul += unit.mul;
        else {
            this.sign = unit.mul > this.mul ? unit.sign : this.sign;
            this.mul = Math.abs(unit.mul - this.mul);
        }
    }

    sub(unit: Unit): void {
        unit.sign *= -1;
        this.add(unit);
    }

    mult(unit: Unit): void {
        this.exp = this.exp.concat(unit.exp);
        this.mul *= unit.mul;
        this.sign *= unit.sign;
        this.exp.sort();
    }
}

class Poly {
    units: Unit[];
    constructor(unit: Unit) {
        this.units = [unit];
    }

    operate(operator: string, poly: Poly): void {
        switch (operator) {
            case "+": return this.add(poly);
            case "-": return this.sub(poly);
            case "*": return this.mul(poly);
            default: throw new Error("Unhandled operation.");
        }
    }

    construct(): string[] {
        this.units.sort(
            (a, b) => a.exp.length === b.exp.length ?
            a.exp < b.exp ? -1 : 1 :
            b.exp.length - a.exp.length
        );
        
        return this.units.reduce((a, c) => {
            if (c.mul === 0) return a;
            const term = c.exp.join("*");
            a.push((c.mul * c.sign) + (term === "" ? "" : "*" + term));
            return a;
        }, []);
    }

    private add(poly: Poly): void {
        poly.units.forEach(u => {
            let flag = true;
            for (let i = 0; i < this.units.length; ++i) {
                const unit = this.units[i];
                if (unit.exp.join("*") === u.exp.join("*")) {
                    flag = false;
                    unit.add(u);
                    break;
                }
            }

            if (flag) this.units.push(u);
        })
    }

    private sub(poly: Poly): void {
        poly.units.forEach(u => {
            let flag = true;
            for (let i = 0; i < this.units.length; ++i) {
                const unit = this.units[i];
                if (unit.exp.join("*") === u.exp.join("*")) {
                    flag = false;
                    unit.sub(u);
                    break;
                }
            }

            if (flag) {
                u.sign *= -1;
                this.units.push(u);
            }
        })
    }

    private mul(p: Poly): void {
        const res: Unit[] = [];
        p.units.forEach(u => {
            for (const unit of this.units) {
                const cp = new Unit(unit);
                cp.mult(u);
                res.push(cp);          
            }
        });

        this.units = res;
        this.reduce();
    }

    private reduce(): void {
        for (let i = 0; i < this.units.length - 1; ++i) {
            for (let j = i + 1; j < this.units.length; ++j) {
                if (
                    this.units[i] && this.units[j] &&
                    this.units[i].exp.join("*") === this.units[j].exp.join("*")) {
                    this.units[i].add(this.units[j]);
                    this.units[j] = null;
                }
            }
        }

        this.units = this.units.filter(u => u !== null);
    }
}

const precedence = {
    "+": ["+", "-", "*"],
    "-": ["+", "-", "*"],
    "*": ["*"],
}

function basicCalculatorIV(expression: string, evalvars: string[], evalints: number[]): string[] {
    const varMap: Map<string, number> = new Map();
    for (let i = 0; i < evalvars.length; ++i) {
        varMap.set(evalvars[i], evalints[i]);
    }
    
    const stack: Poly[] = [];
    const operators: string[] = [];
    const reduce = (cond: () => boolean) => {
        while (operators.length && cond()) {
            const r = stack.pop();
            const l = stack.pop();
            const op = operators.pop();
            l.operate(op, r);
            stack.push(l);
        }    
    } 

    for (let i = 0; i < expression.length; ++i) {
        if (expression[i] === " ") continue;
        else if (expression[i] === "(") operators.push(expression[i]);
        else if (expression[i] >= "0" && expression[i] <= "9") {
            let num = expression[i++];
            while (
                i < expression.length &&
                expression[i] >= "0" && expression[i] <= "9" &&
                expression[i] !== " "
            ) num += expression[i++];
            i--;

            const unit = new Unit();
            unit.mul = Number(num);
            stack.push(new Poly(unit));
        } else if (expression[i] >= "a" && expression[i] <= "z") {
            let exp = expression[i++];
            while (
                i < expression.length &&
                expression[i] >= "a" && expression[i] <= "z"
            ) exp += expression[i++];
            i--;

            const unit = new Unit();
            if (varMap.has(exp)) unit.mul = varMap.get(exp);
            else unit.exp.push(exp);

            stack.push(new Poly(unit));
        } else if (precedence[expression[i]]) {
            const prec = precedence[expression[i]];
            reduce(() => prec.includes(operators[operators.length - 1]));
            operators.push(expression[i]);
        } else {
            reduce(() => operators[operators.length - 1] !== "(");
            operators.pop();
        }
    }
    
    reduce(() => true);
    return stack.pop().construct();
};
```