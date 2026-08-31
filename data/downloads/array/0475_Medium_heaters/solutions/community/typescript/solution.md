# Easy to understand solution in TypeScript/JavaScript

**Author:** elyorsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/heaters/solutions/4317743/](https://leetcode.com/problems/heaters/solutions/4317743/)

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
function findRadius(houses: number[], heaters: number[]): number {
    let radius = 0
    for (const house of houses){
      let min = Number.MAX_SAFE_INTEGER
      for (const heater of heaters){
        min = Math.min(min, Math.abs(heater - house))
      }

      radius = Math.max(min, radius)
    }
    return radius
}
```
```javascript []
function findRadius(houses, heaters) {
    let radius = 0
    for (const house of houses){
      let min = Number.MAX_SAFE_INTEGER
      for (const heater of heaters){
        min = Math.min(min, Math.abs(heater - house))
      }

      radius = Math.max(min, radius)
    }
    return radius
}
```