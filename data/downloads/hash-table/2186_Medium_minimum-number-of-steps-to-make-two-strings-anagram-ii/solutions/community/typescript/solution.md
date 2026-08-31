# Simple solution using Map and Set.

**Author:** Hanuman-Ghawade
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/5186594/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/5186594/)

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
function minSteps(s: string, t: string): number {
    let map1 = new Map();
    let map2 = new Map();
    let count: number = 0;
    for (let char of s) {
        map1.set(char, (map1.get(char) || 0) + 1)
    }
    for (let char of t) {
        map2.set(char, (map2.get(char) || 0) + 1)
    }
    const set = new Set([...map1.keys(), ...map2.keys()])
    console.log(set)
    for (let ele of set.keys()) {
        const count1 = map1.get(ele) || 0;
        const count2 = map2.get(ele) || 0;
        console.log(ele)
        count += Math.abs(count1 - count2)
    }

    return count
};
```