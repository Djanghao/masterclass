# Typescript solution

**Author:** sreerajsr03
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4739865/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4739865/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function distributeCandies(n: number, limit: number): number {
    let output: number = 0;
    for (let i = 0; i <= limit; i++) {
        for (let j = 0; j <= limit; j++) {
            for (let k = 0; k <= limit; k++) {
                if ((i + j + k) === n)
                    output++;
                else 
                continue;
            }
        }
    }
    return output;
};
```