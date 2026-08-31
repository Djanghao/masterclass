# 💥[EXPLAINED] Runtime beats 98.73%, Memory beats 45.65%

**Author:** r9n
**Votes:** 7
**Link:** [https://leetcode.com/problems/candy/solutions/5679459/](https://leetcode.com/problems/candy/solutions/5679459/)

---

# Intuition
Give each child at least one candy, then adjust so higher-rated children get more than their neighbors.

# Approach
Initialize: Start with 1 candy for each child.

Left to Right: Increase candies if a child\u2019s rating is higher than the previous one.

Right to Left: Adjust candies if a child\u2019s rating is higher than the next one.

Sum Up: Add all candies.

# Complexity
- Time complexity:
O(n), where n is the number of children. Each pass through the ratings array takes linear time, and there are two passes.

- Space complexity:
O(n), where n is the number of children. An additional array of size n is used to keep track of the candy count for each child.

# Code
```typescript []
function candy(ratings: number[]): number {
    const n = ratings.length;
    if (n === 0) return 0;

    // Step 1: Initialize the candies array where each child gets at least 1 candy.
    const candies = new Array(n).fill(1);

    // Step 2: Left to right pass
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Step 3: Right to left pass
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Step 4: Calculate the total number of candies
    return candies.reduce((sum, candy) => sum + candy, 0);
}

```