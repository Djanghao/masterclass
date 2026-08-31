# Typescript Easy Solution (95 ms faster than 69.51%, 45.1 MB less than 70.73%)

**Author:** toniton
**Votes:** 1
**Link:** [https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/2533858/](https://leetcode.com/problems/numbers-with-same-consecutive-differences/solutions/2533858/)

---

Explanation:
1. First step, get all the first digits that can make up possible combinations and store in a stack. ( e.g: `[1, 2, 3, 4]` ).
2. Loop through the stack and get a current item from the top/left. In this case, the first item retrieved should be `1`.
3. Store the current item in a global state, if the length of the current item is equal the constraint `N`.
4. Since there are only two possible values at each point in stack (upperbound, and lowerbound), generate the next value within the constraints.

Note: 
* `x%10` will give you the last digit of an integer.
* `(x*10)+y` will always result to `xy` string equivalent.


```
function numsSameConsecDiff(n: number, k: number): number[] {
    const results = [];
    
    const roots = [];
    for (let i = 1; i <= 9; i++) {
        if (((i + k) <= 9) || ((i - k) >= 0)) {
            roots.push(i);
        }
    }
    
    while (roots.length > 0) {
        const current = roots.shift();
        if ((current >= 10**(n-1) ) && (current < 10**n )) {
            results.push(current);
            continue;
        }
        
        const upperBound = (current % 10) + k;
        const lowerBound = (current % 10) - k;
        
        if (upperBound <= 9) {
            const nextVal = ((current * 10) + upperBound);
            roots.push(nextVal);
        }
        
        if ((lowerBound >= 0) && (upperBound !== lowerBound)) {
            const nextVal = ((current * 10) + lowerBound);
            roots.push(nextVal);
        }
    }

    return results;
};
```