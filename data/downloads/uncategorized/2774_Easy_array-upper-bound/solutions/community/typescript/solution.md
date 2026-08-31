# Typescript solution - beats 92%

**Author:** RedMonkez
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-upper-bound/solutions/4336345/](https://leetcode.com/problems/array-upper-bound/solutions/4336345/)

---

# Intuition
I needed to iterate over the array, and the question was from where to start.

# Approach
I initially attempted to approach the problem from the beginning, but due to issues with duplicates, I found it more effective to start from the end.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
declare global {
    interface Array<T> {
        upperBound(target: number): number;
    }
}

Array.prototype.upperBound = function(target): number {
    for (let i = this.length - 1; i > -1; i--) {
        if (this[i] === target) {
            return i;
        }
    }

    return -1;
};

// [3,4,5].upperBound(5); // 2
// [1,4,5].upperBound(2); // -1
// [3,4,6,6,6,6,7].upperBound(6) // 5
```