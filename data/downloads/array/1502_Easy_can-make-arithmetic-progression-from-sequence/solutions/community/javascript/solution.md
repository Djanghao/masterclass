# JS & TS O(n) solution and O(nlogn) solution

**Author:** JinZihang
**Votes:** 13
**Link:** [https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/1832357/](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/1832357/)

---

O(n) solution:

```
function canMakeArithmeticProgression(arr: number[]): boolean {
    const max = Math.max(...arr);
    let current = Math.min(...arr);
    const gap = (max - current) / (arr.length - 1);
    const set: Set<number> = new Set(arr);
    
    while (current < max) {
        current += gap;
        if (!set.has(current)) return false;
    }
    return true;
};
```

O(nlogn) solution using ```sort```:
```
function canMakeArithmeticProgression(arr: number[]): boolean {
    if (arr.length < 3) return true;
    
    arr.sort((a, b) => a - b);
    for (let i = 2; i < arr.length; i++)
        if (arr[i] - arr[i - 1] !== arr[i - 1] - arr[i - 2]) return false;
    return true;
};
```