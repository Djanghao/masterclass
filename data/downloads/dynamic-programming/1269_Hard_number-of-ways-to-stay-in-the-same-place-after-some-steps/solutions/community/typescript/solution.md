# 100% | Bottom-Up DP | Time: O(Smin(S,N)) | Space: O(min(S,N))

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/4173137/](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/4173137/)

---

# Complexity

- Time complexity: $O(S\\min(S,N))$

- Space complexity: $O(\\min(S, N))$

[JavaScript](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/submissions/1446104058/)

![JavaScript](./images/0.png)

# Code

```typescript []
const MOD = 1e9+7;

function numWays(steps: number, arrLen: number): number {
    const N = Math.min((steps + 2) >> 1, arrLen);
    const arr = new Array(N + 1).fill(0);
    arr[0] = 1;
    
    for (let step = 1; step <= steps; ++step) {
        const M = Math.min(step + 1, N);
        let prev = 0;
        for (let i = 0; i < M; ++i) {
            const curr = arr[i];
            arr[i] = (prev + curr + arr[i+1]) % MOD;
            prev = curr;
        }
    }
    
    return arr[0];
}
```

```javascript []
const MOD = 1e9+7;

/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
function numWays(steps, arrLen) {
    const N = Math.min((steps + 2) >> 1, arrLen);
    const arr = new Array(N + 1).fill(0);
    arr[0] = 1;
    
    for (let step = 1; step <= steps; ++step) {
        const M = Math.min(step + 1, N);
        let prev = 0;
        for (let i = 0; i < M; ++i) {
            const curr = arr[i];
            arr[i] = (prev + curr + arr[i+1]) % MOD;
            prev = curr;
        }
    }
    
    return arr[0];
}
```