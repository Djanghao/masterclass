# find-positive-integer-solution-for-a-given-equation - TS Solution

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/5965854/](https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/5965854/)

---


# Code
```typescript []


function findSolution(customfunction: CustomFunction, z: number): number[][] {

    
    let x: number = 1, y: number = z;

    
    let result: number[][] = [];

    
    while (y > 0 && x <= 1000) {

        
        let value: number = customfunction.f(x, y);

        
        if (value === z) {

            
            result.push([x, y]);

            
            x++;
            y--;
        } else if (value > z) {

            
            y--;
        } else {

            
            x++;
        }
    }

    
    return result;
};
```