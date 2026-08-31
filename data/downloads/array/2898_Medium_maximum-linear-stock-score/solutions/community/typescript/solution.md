# [Typescript]: O(n) solution using Map

**Author:** asdfryan123
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-linear-stock-score/solutions/4594608/](https://leetcode.com/problems/maximum-linear-stock-score/solutions/4594608/)

---

# Intuition
The main thing to recognize is that for any given *linear* subsequence of indices, `price[i] - i` must remain constant.

# Approach
You can perform a single loop to:
1. Compute `price[i] - i`
2. Add the current price to the score for the subsequence corresponding to that diff

# Complexity
- Time complexity: O(n) to perform single loop through prices

- Space complexity: O(n) extra space to store the mapping from diff to score

# Code
```
function maxScore(prices: number[]): number {
    const diffToScore = new Map<number, number>();
    let maxScore = 0;
    prices.forEach((price, idx) => {
        const diff = price - idx
        diffToScore.set(diff, (diffToScore.get(diff) ?? 0) + price);
        maxScore = Math.max(diffToScore.get(diff), maxScore);
    });
    return maxScore;
};
```