# ✅ Beats 100%, TypeScript/JavaScript solution

**Author:** elyorsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/nth-digit/solutions/4403017/](https://leetcode.com/problems/nth-digit/solutions/4403017/)

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
function findNthDigit(n: number): number {
  
  let len = 1
  let count = 9
  let start = 1

  while(n > len * count){
    n -= len * count
    len += 1
    count *= 10
    start *= 10
  }

  start += (n - 1) / len


  return Number(start.toString()[(n - 1) % len])
}
```
```javascript []
function findNthDigit(n){
  
  let len = 1
  let count = 9
  let start = 1

  while(n > len * count){
    n -= len * count
    len += 1
    count *= 10
    start *= 10
  }

  start += (n - 1) / len


  return Number(start.toString()[(n - 1) % len])
}
```

