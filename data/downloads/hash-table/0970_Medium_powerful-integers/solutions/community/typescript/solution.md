# Simple TypeScript solution, beats 100%

**Author:** tomrr6
**Votes:** 0
**Link:** [https://leetcode.com/problems/powerful-integers/solutions/4577917/](https://leetcode.com/problems/powerful-integers/solutions/4577917/)

---

# Code
```
function powerfulIntegers(x: number, y: number, bound: number): number[] {
    const powerfulNumbers = new Set<number>();

    for(let xFactor = 1; xFactor < bound; xFactor *= x){
        for(let yFactor = 1; yFactor + xFactor <= bound; yFactor *= y){
            powerfulNumbers.add(yFactor + xFactor);
            
            if(y == 1) break;
        }

        if(x == 1) break;
    }

    return Array.from(powerfulNumbers);
};
```