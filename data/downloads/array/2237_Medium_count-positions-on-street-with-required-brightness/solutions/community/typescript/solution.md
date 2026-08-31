# TypeScript (JavaScript) solution

**Author:** alexandresheva
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/1951013/](https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/1951013/)

---

TypeScript (JavaScript) solution, beats 100% of typescript submissions (for now), 148 ms

```
function meetRequirement(n: number, lights: number[][], requirement: number[]): number {
    const helper: number[] = Array(n + 1).fill(0);
    for(let lamp of lights) {
        helper[Math.max(0, lamp[0] - lamp[1])]++;
        helper[Math.min(n, lamp[0] + lamp[1] + 1)]--;
    }
    
    let brightness: number = 0;
    let result: number = 0;
    
    for(let i = 0; i < n; i++) {
        brightness += helper[i];
        if(brightness >= requirement[i]) {
            result++;
        }
    }
    return result;
};
```