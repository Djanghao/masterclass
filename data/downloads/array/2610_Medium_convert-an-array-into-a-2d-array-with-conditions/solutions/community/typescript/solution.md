# BEST MINIMAL SOLUTION

**Author:** ASK-Baloch
**Votes:** 3
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4492207/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4492207/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
BEST SOLUTION OUT THERE 
# Code
```
function findMatrix(nums: number[]): number[][] {
    let result: number[][] = [];
    let map: Map<number, number> = new Map();

    for (let num of nums) {
        let index = map.get(num) || 0;
        if (result.length <= index) {
            result.push([]);
        }
        result[index].push(num);
        map.set(num, index + 1);
    }

    return result;
}
```