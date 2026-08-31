# js/dp solution/time:O(m*n)/space:O(m)/ for m is the max val

**Author:** wannaleave
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5645185/](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5645185/)

---

## Intuition

The problem asks us to count the number of valid monotonic pairs `(arr1, arr2)` where:
- `arr1` is monotonically non-decreasing.
- `arr2` is monotonically non-increasing.
- `arr1[i] + arr2[i] = nums[i]` for all `i`.

Given the constraints, directly generating all possible pairs would be infeasible. Therefore, we employ a dynamic programming (DP) approach to efficiently count the valid pairs by transitioning through possible states.

## Approach

### Dynamic Programming Setup

We define a DP array `dp[i][j]` where:
- `i` represents the current index in the `nums` array that we're processing.
- `j` represents the value of `arr1[i]`.
- `dp[i][j]` holds the number of valid pairs `(arr1, arr2)` where `arr1[i] = j`, `arr1` is non-decreasing up to index `i`, and `arr2[i] = nums[i] - j`.

### Initial State

We start by initializing the DP array for the last element in `nums`:
- For `i = n-1`, where `n` is the length of `nums`, we set `dp[n-1][j] = 1` for all `0 <= j <= nums[n-1]`.
- This means that at the last index, any valid pair `(arr1[n-1], arr2[n-1])` can exist with `arr1[n-1] = j` and `arr2[n-1] = nums[n-1] - j`.

### DP Transition

We process the array backwards from `i = n-2` to `i = 0`:
- For each `i`, we calculate a new DP array `cur`, which represents the number of valid pairs for each possible value of `arr1[i]`.
- To compute `dp[i][j]`, we accumulate values from the next state `dp[i+1][k]` where `k >= j` (since `arr1` is non-decreasing). For each valid `j`, we add up the valid transitions and store the results in `dp[i][j]`.

### Example

Consider `nums = [3, 2, 1]`:

- **Initialization for `i = 2`:**
  - `dp[2][0] = 1`, `dp[2][1] = 1`, since for `nums[2] = 1`, valid pairs are `(0, 1)` and `(1, 0)`.

- **Transition to `i = 1`:**
  - For `nums[1] = 2`, we consider possible values for `arr1[1]`:
    - If `arr1[1] = 0`, then `arr2[1] = 2`. Accumulate values from `dp[2][j]` for `j >= 0` to update `dp[1][0]`.
    - If `arr1[1] = 1`, do similar accumulation to update `dp[1][1]`.

- **Final State at `i = 0`:**
  - The final result is obtained by summing all values in `dp[0][j]`.

### Complexity

- **Time complexity**: `O(n * m)`, where `n` is the length of `nums` and `m` is the maximum value in `nums`, capped at 1000.
- **Space complexity**: `O(m)`, due to the `dp` array that stores possible values for each `arr1[i]`.

## Code

```javascript
const MOD = 1e9 + 7;

var countOfPairs = function(nums) {
    const n = nums.length;
    let prev = new Array(1000).fill(0);

    // Initialize for the last element in nums
    for (let j = 0; j <= nums[n-1]; j++) {
        prev[j] = 1;
    }

    // Process the array backwards
    for (let i = n - 2; i >= 0; i--) {
        let start = Math.max(0, nums[i + 1] - nums[i]);
        const cur = new Array(1000).fill(0);
        let acu = 0;

        for (let j = nums[i + 1]; j >= start; j--) {
            acu += prev[j];
            acu = acu % MOD;
            cur[j - start] = acu;
        }

        prev = cur;
    }

    // Sum up all possibilities
    const rtn = prev.reduce((acu, cur) => (acu + cur) % MOD, 0);
    return rtn;
};
```