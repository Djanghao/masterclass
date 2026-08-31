# O(n) time + O(1) space detailed solution, no modification to original array

**Author:** Maristie
**Votes:** 7
**Link:** [https://leetcode.com/problems/stone-game-viii/solutions/1224903/](https://leetcode.com/problems/stone-game-viii/solutions/1224903/)

---

## Intuition
Observe that each player gets a score of prefix subarray sum from the original array, and the length of prefix subarray is strictly increasing.

Assume the current player chooses the subarray `[0..k]` (`k` exclusive), then the next player would be faced with a choice set of `[0..k+1], [0..k+2], ..., [0..n]` as the prefix subarray, in which the next player would try to select one with maximized possible final score difference.

If we denote the current player by `A`, next player by `B`, and the maximum possible score difference `score(A) - score(B)` with a choice set of `[0..k], [0..k+1], ..., [0..n]` by `maxDiff(k)`, then
```
maxDiff(k) = max { sum(0..i) - maxDiff(i + 1) for all k <= i <= n }
```

From the above definition, note further that
```
maxDiff(k) = max(maxDiff(k + 1), sum(0..k) - maxDiff(k + 1))
```

And for our purpose, we want to compute `maxDiff(2)`. As a base case, `maxDiff(n) = sum(0..n)`.
Hence the code below follows.

## Implementation

```java
    public int stoneGameVIII(int[] stones) {
        int n = stones.length;
        int sum = 0;
        for (int i = 0; i < n; ++i) {
            sum += stones[i];
        }
        
        int max = sum;
        for (int i = n - 1; i >= 2; --i) {
            sum -= stones[i];
            max = Math.max(max, sum - max);
        }
        return max;
    }
```