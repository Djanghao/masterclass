# Very simple solution TS

**Author:** makarofalex
**Votes:** 5
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/3523634/](https://leetcode.com/problems/jewels-and-stones/solutions/3523634/)

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
function numJewelsInStones(jewels: string, stones: string): number {
    let set = new Set([...jewels])
    let count = 0;
    for( let stone of [...stones]) {
        if(set.has(stone)) count++
    }
    return count
};
```