# Brute force

**Author:** pvorona
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-good-triplets/solutions/3465360/](https://leetcode.com/problems/count-good-triplets/solutions/3465360/)

---

# Complexity
- Time complexity:
O(N ** 3)

- Space complexity:
O(1)

# Code
```
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (
                    Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c
                ) count++
            }
        }
    }
    return count
};

// Approach A.  Brute Force
// 3 nested loops
```