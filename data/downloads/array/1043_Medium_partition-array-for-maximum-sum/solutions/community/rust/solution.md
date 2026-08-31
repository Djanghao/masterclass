# [Rust] DP advance and look back k

**Author:** tmtappr
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4370103/](https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4370103/)

---

# Intuition
This is similar to the simple staircase problem where the subject climbing stairs has the option to use the next step or the step after it. Each step is assigned a value, and the objective is to maximize the score.

That problem is similar because as the subject advances, he looks back at the last two steps to choose which one was the best one to come from. This is because the value of the current step is added to the best choice of the last two steps.

# Approach
In a similar fashion, as the elements of `arr` are iterated over, the current element can be grouped with `0` to `k` elements behind it. The `dp` array will hold the total of the best subgroups for that item and behind it. 

So if, for instance, the current item was item `arr[8]`, first we consider what contribution it would have to the total score alone by adding its value to `dp[8]` (***`dp`'s indices are 1-based wrt `arr`***), then we consider its contribution to the total score if combined with another element behind it using `2 * max(arr[8], arr[7]) + dp[7]`.

Then we can look back one more time, gouping elements `6, 7, 8`, calculate their worth as a subgroup, and add that to `dp[6]`: `3 * max(arr[6], arr[7], arr[8]) + dp[6]`. If that is better, that's the grouping we go with and `dp[9]` is set to that total value. We look back like this up to `k - 1` times. This is done for the full array.

Each position `i` in `dp[i]` reflects the best grouping strategy for the prefix subarray ending in `i`.


# Complexity
- Time complexity: $$O(n * k)$$
- Space complexity: $$O(n)$$

# Code
``` rust []
impl Solution {
    pub fn max_sum_after_partitioning(arr: Vec<i32>, k: i32) -> i32 {
        let (n, k) = (arr.len(), k as usize);
        let mut dp = vec![0; n + 1];

        dp[1] = arr[0];

        for i in 1..n {
            let mut max_value  = 0;
            let mut max_groups = 0;

            for j in 0..k.min(i + 1) {
                max_value  = max_value.max(arr[i - j]);
                max_groups = max_groups.max((j + 1) as i32 * max_value + dp[i - j]);
            }
            dp[i + 1] = max_groups;
        }
        dp[n]
    }
}
```
``` C []
#define MAX(a, b) (a > b) ? a : b

int maxSumAfterPartitioning(int* arr, int arrSize, int k) {
    int  n  = arrSize;
    int* dp = (int*)calloc(n + 1, sizeof(int));

    dp[1] = arr[0];

    for (int i = 1; i < n; i++) {
        int max_value  = 0;
        int max_groups = 0;

        for (int j = 0; j < k && j < i + 1; j++) {
            max_value  = MAX(max_value, arr[i - j]);
            max_groups = MAX(max_groups, (j + 1) * max_value + dp[i - j]);
        }
        dp[i + 1] = max_groups;
    }
    int result = dp[n];
    free(dp);
    return result;
}
```
``` C++ []
class Solution {
public:
    int maxSumAfterPartitioning(vector<int>& arr, int k) {
        vector<int> dp(arr.size() + 1, 0);

        dp[1] = arr[0];

        for (int i = 1; i < arr.size(); i++) {
            int max_value  = 0;
            int max_groups = 0;

            for (int j = 0; j < k && j < i + 1; j++) {
                max_value  = max(max_value, arr[i - j]);
                max_groups = max(max_groups, (j + 1) * max_value + dp[i - j]);
            }
            dp[i + 1] = max_groups;
        }
        return dp[arr.size()];
    }
};
```
``` python []
class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        dp = [0] * (len(arr) + 1)

        dp[1] = arr[0]

        for i in range(1, len(arr), 1):
            max_value  = 0
            max_groups = 0

            for j in range(0, min(k, i + 1), 1):
                max_value  = max(max_value, arr[i - j])
                max_groups = max(max_groups, (j + 1) * max_value + dp[i - j])

            dp[i + 1] = max_groups

        return dp[len(arr)]
```
``` java []
class Solution {
    public int maxSumAfterPartitioning(int[] arr, int k) {
        var dp = new int[arr.length + 1];

        dp[1] = arr[0];

        for (int i = 1; i < arr.length; i++) {
            int max_value  = 0;
            int max_groups = 0;

            for (int j = 0; j < k && j < i + 1; j++) {
                max_value  = max(max_value, arr[i - j]);
                max_groups = max(max_groups, (j + 1) * max_value + dp[i - j]);
            }
            dp[i + 1] = max_groups;
        }
        return dp[arr.length];
    }
    int max(int a, int b) {
        return (a > b) ? a : b;
    }
}
```
``` kotlin []
class Solution {
    fun maxSumAfterPartitioning(arr: IntArray, k: Int): Int {
        val dp = IntArray(arr.size + 1)

        dp[1] = arr[0]

        for (i in 1 until arr.size) {
            var maxValue = 0
            var maxGroups = 0

            for (j in 0 until minOf(k, i + 1)) {
                maxValue = maxOf(maxValue, arr[i - j])
                maxGroups = maxOf(maxGroups, (j + 1) * maxValue + dp[i - j])
            }
            dp[i + 1] = maxGroups
        }
        return dp[arr.size]
    }
}
```
``` javascript []
function maxSumAfterPartitioning(arr, k) {
    let dp = Array(arr.length + 1).fill(0);

    dp[1] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let max_value  = 0;
        let max_groups = 0;

        for (let j = 0; j < k && j < i + 1; j++) {
            max_value  = max(max_value, arr[i - j]);
            max_groups = max(max_groups, (j + 1) * max_value + dp[i - j]);
        }
        dp[i + 1] = max_groups;
    }
    return dp[arr.length];
}

const max = Math.max;
```
``` C# []
public class Solution {
    public int MaxSumAfterPartitioning(int[] arr, int k) {
        var dp  = new int[arr.Length + 1];

        dp[1] = arr[0];

        for (int i = 1; i < arr.Length; i++) {
            int max_value  = 0;
            int max_groups = 0;

            for (int j = 0; j < k && j < i + 1; j++) {
                max_value  = max(max_value, arr[i - j]);
                max_groups = max(max_groups, (j + 1) * max_value + dp[i - j]);
            }
            dp[i + 1] = max_groups;
        }
        return dp[arr.Length];
    }
    int max(int a, int b) {
        return (a > b) ? a : b;
    }
}
```