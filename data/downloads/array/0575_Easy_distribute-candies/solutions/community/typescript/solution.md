# Easy solution without loop

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/5851995/](https://leetcode.com/problems/distribute-candies/solutions/5851995/)

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
function distributeCandies(candyType: number[]): number {

    const n:number = candyType.length
    const uniqCandy  = new Set(candyType)

    const consumedCandy:number = Math.floor(n/2)

    return Math.min(uniqCandy.size,consumedCandy)
    
};
```