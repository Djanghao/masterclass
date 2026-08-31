# easy understand, 0 ms

**Author:** morris367
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/6128573/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/6128573/)

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
```typescript []
function minimumChairs(s: string): number {
    let person: number = 0
    let chairs: number = 0

    for (let i: number = 0; i < s.length; i++) {
        person += s[i] == "E" ? 1 : -1
        if (person > chairs) chairs = person
    }

    return chairs
};
```