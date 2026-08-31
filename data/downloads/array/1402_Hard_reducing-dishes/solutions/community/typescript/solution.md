# [JS / TS] || Beats 100% || Beginner Friendly

**Author:** haslie22
**Votes:** 1
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/4584195/](https://leetcode.com/problems/reducing-dishes/solutions/4584195/)

---

# Intuition

The goal is to maximize the sum of like-time coefficients for a chef preparing dishes. The like-time coefficient for a dish is defined as the time taken to cook that dish (including the time taken for previous dishes) multiplied by its satisfaction level.

The key insight is that to maximize the sum, ***dishes with higher satisfaction levels should contribute more to the like-time coefficient***.

# Approach
The solution begins by sorting the satisfaction array in ***descending*** order. This ensures that the dishes with higher satisfaction levels come first.
Next, it iterates through the sorted satisfaction array and calculates the cumulative sum of satisfaction levels. 
The loop breaks if the current cumulative sum becomes non-positive, as further addition of negative satisfaction values would only decrease the total like-time coefficient.

The algorithm keeps track of the maximum sum of like-time coefficients and returns this maximum sum as the result.

# Complexity
- Time complexity: **O(n log n)**
The dominant factor in the time complexity is the sorting of the satisfaction array, which takes **O(n log n)** time.
The subsequent iteration through the sorted array takes linear time, **O(n)**.

- Space complexity: **O(1)**
The algorithm uses a **constant** amount of extra space (2 variables), regardless of the input size.

# Code
```javascript []
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => b - a);

    let maxSum = 0;
    let currentSum = 0;

    for (const satisfactionLevel of satisfaction) {
        currentSum += satisfactionLevel;
        if (currentSum > 0) {
            maxSum += currentSum;
        } else {
            break;
        }
    }

    return maxSum;
};
```
```typescript []
function maxSatisfaction(satisfaction: number[]): number {
    satisfaction.sort((a, b) => b - a);

    let maxSum = 0;
    let currentSum = 0;

    for (const satisfactionLevel of satisfaction) {
        currentSum += satisfactionLevel;
        if (currentSum > 0) {
            maxSum += currentSum;
        } else {
            break;
        }
    }

    return maxSum;
};
```