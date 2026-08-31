# One Liner | Time O(1) | Docs

**Author:** OmarThinks
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/4410064/](https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/4410064/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Time repeats every 24 hours

Total time  = `arrivalTime` + `delayedTime`

For example : Total time = 20 + 15 = 35
So, we need the residual of the division over 24

35 % 24 = 11

### More Examples:
1 % 24 = 1
2 % 24 = 2
23 % 24 = 23
24 % 24 = 0
25 % 24 = 1
30 % 24 = 6

# Complexity
- Time complexity: `O(1)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  `O(1)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

## 1) TypeScript

```TypeScript
function findDelayedArrivalTime(arrivalTime: number, delayedTime: number): number {
    return (arrivalTime+delayedTime)%24
};
```

## 2) JavaScript

```JavaScript
function findDelayedArrivalTime(arrivalTime, delayedTime) {
    return (arrivalTime+delayedTime)%24
};
```





