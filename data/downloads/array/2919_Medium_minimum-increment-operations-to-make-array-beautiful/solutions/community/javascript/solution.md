# ✅☑[C++/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4221410/](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4221410/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. The `minIncrementOperations` function takes a vector of integers `nums` and an integer `k` as input.

1. It aims to minimize the increment operations required to make the sum of any three adjacent elements in the array at least `k`.

1. It initializes a DP array `dp` of size `n + 1` and sets all elements to a large value (1e18). This array will be used to store the minimum cost to achieve the desired sum.

1. It sets the base case `dp[0]` to 0, as no operations are required for an empty array.

1. It iterates through the elements of the input array `nums` starting from the first element (index 1).

1. For each element, it calculates the required increment `required` to make the sum of the current element and its two adjacent elements at least `k`. This is done by subtracting `k` from the current element and taking the maximum with 0.

1. It then iterates through a specific range of previous elements (up to three previous elements) to find the minimum cost required to achieve the desired sum. This range is controlled by the `max(0, i - 3)` condition.

1. It updates the DP array `dp` for the current element with the minimum cost found in the previous step and adds the `required` increment to the cost.

1. After processing all elements, it returns the minimum cost from the last three states in the DP array, which represents the minimum cost to make the desired sum for any three adjacent elements.



# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    long long minIncrementOperations(vector<int>& nums, int k) {
        int n = nums.size();
        vector<long long> dp(n + 1, 1e18); // Initialize a dynamic programming (DP) array with a large value.
        dp[0] = 0; // Initialize the base case.

        for (int i = 1; i <= n; i++) {
            long long required = max(0, k - nums[i - 1]); // Calculate the required increment for the current element.

            // Iterate through a specific range of previous elements to find the minimum cost.
            for (int j = i - 1; j >= max(0, i - 3); j--) {
                dp[i] = min(dp[j], dp[i]); // Update the DP array with the minimum cost.
            }
            dp[i] += required; // Add the required increment to the current DP state.
        }

        // Return the minimum cost from the last three states in the DP array.
        return min({dp[n], dp[n - 1], dp[n - 2]});
    }
};



```
```C []

#include <stdio.h>
#include <stdlib.h>

long long minIncrementOperations(int* nums, int n, int k) {
    long long* dp = (long long*)malloc((n + 1) * sizeof(long long));
    for (int i = 0; i <= n; i++) {
        dp[i] = 1e18;
    }
    dp[0] = 0;

    for (int i = 1; i <= n; i++) {
        long long required = (k - nums[i - 1] > 0) ? k - nums[i - 1] : 0;
        for (int j = i - 1; j >= (i >= 3 ? i - 3 : 0); j--) {
            if (dp[j] < dp[i]) {
                dp[i] = dp[j];
            }
        }
        dp[i] += required;
    }

    long long result = dp[n] < dp[n - 1] ? dp[n] : dp[n - 1];
    if (dp[n - 2] < result) {
        result = dp[n - 2];
    }

    free(dp);
    return result;
}

int main() {
    int nums[] = {3, 3, 3, 3};
    int n = sizeof(nums) / sizeof(nums[0]);
    int k = 2;

    long long result = minIncrementOperations(nums, n, k);
    printf("Minimum Increment Operations: %lld\
", result);

    return 0;
}


```
```Java []

public class Solution {
    public long minIncrementOperations(int[] nums, int k) {
        int n = nums.length;
        long[] dp = new long[n + 1];
        for (int i = 0; i <= n; i++) {
            dp[i] = (long) 1e18;
        }
        dp[0] = 0;

        for (int i = 1; i <= n; i++) {
            long required = Math.max(0, k - nums[i - 1]);
            for (int j = i - 1; j >= Math.max(0, i - 3); j--) {
                dp[i] = Math.min(dp[j], dp[i]);
            }
            dp[i] += required;
        }

        long result = Math.min(Math.min(dp[n], dp[n - 1]), dp[n - 2]);
        return result;
    }
}


```
```python3 []

class Solution:
    def minIncrementOperations(self, nums, k):
        n = len(nums)
        dp = [float('inf')] * (n + 1)
        dp[0] = 0

        for i in range(1, n + 1):
            required = max(0, k - nums[i - 1])
            for j in range(i - 1, max(0, i - 3) - 1, -1):
                dp[i] = min(dp[j], dp[i])
            dp[i] += required

        result = min(dp[n], dp[n - 1], dp[n - 2])
        return result


```
```javascript []
class Solution {
    minIncrementOperations(nums, k) {
        const n = nums.length;
        const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
        dp[0] = 0;

        for (let i = 1; i <= n; i++) {
            const required = Math.max(0, k - nums[i - 1]);
            for (let j = i - 1; j >= Math.max(0, i - 3); j--) {
                dp[i] = Math.min(dp[j], dp[i]);
            }
            dp[i] += required;
        }

        const result = Math.min(dp[n], dp[n - 1], dp[n - 2]);
        return result;
    }
}

```


---



# PLEASE UPVOTE IF IT HELPED

---
---


---