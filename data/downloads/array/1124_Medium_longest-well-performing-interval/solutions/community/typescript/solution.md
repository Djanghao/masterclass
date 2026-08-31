# TypeScript + Prefix Sum w/explaination

**Author:** dp_god
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-well-performing-interval/solutions/3267794/](https://leetcode.com/problems/longest-well-performing-interval/solutions/3267794/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->
See code comment.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(2n) (can be further optimized)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function longestWPI(hours: number[]): number {
    const preSumToIndex = new Map()
    const prefixSum = Array(hours.length + 1)
    prefixSum[0] = 0
    let res = 0
    for (let i = 1; i < prefixSum.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + (hours[i - 1] > 8 ? 1 : -1)
        if (!preSumToIndex.has(prefixSum[i])) {
            preSumToIndex.set(prefixSum[i], i)
        }

        if (prefixSum[i] > 0) {
            // if prefixSum[i] > 0, means [0...i-1] is a Well-Performing Interval
            res = Math.max(res, i)
        } else {
            // if prefixSum[i] < 0, we can try to find a prefixSum[j],
            // such that prefixSum[i] - prefixSum[j] > 0, where 'j' needs to be minimized.

            // We can make an observation that if such a 'j' exist,
            // 'prefixSum[i] - prefixSum[j] = 1' will always hold.

            // For example if the prefixSum array is [0, -1, -2, -3, -4, -3, -2]
            // and we assume such a 'j' exists and 'prefixSum[i] - prefixSum[j] = 2'.

            // Now consider prefixSum[6] - prefixSum[4] = 2 > 0,
            // where 'j' is 4, the 'j' is NOT minimized, because in fact 'j' can be 3,
            // so that prefixSum[6] - prefixSum[3] = 1 > 0

            // The reason is that the prefixSum array is a continuous array,
            // If we can find a 'k' to let prefixSum[i] - prefixSum[k] > 1,
            // we can guarantee there will be a 'j' to let prefixSum[i] - prefixSum[j] = 1,
            // because the prefixSum array needs a prefixSum[j] to get to prefixSum[k]
            // in this case, -3 has to be there so that -4 can exist, you can't jump from -2 to -4

            if (preSumToIndex.has(prefixSum[i] - 1)) {
                res = Math.max(res, i - preSumToIndex.get(prefixSum[i] - 1))
            }
        }
    }

    return res
};
```