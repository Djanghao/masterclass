# ✅☑[C++/Java/Python/JavaScript] || DP || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4278580/](https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4278580/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. **Initialization:**

    - Initialize a 2D array `dp` to store the minimum operations for different scenarios.
1. **Dynamic Programming Loop:**

    - Iterate through the arrays from the end to the beginning.
    - For each position, consider two cases:
         - Case 1: Include the current elements in the non-decreasing subsequence.
         - Case 2: Swap the current elements and include them in the non-decreasing subsequence.
1. **Result:**

    - The result is the minimum of the operations needed to make both arrays non-decreasing from the start.
1. **Check Feasibility:**

    - If the best result is greater than the size of the arrays, it means it's not possible to make both arrays non-decreasing.



# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []

class Solution {
public:
    // Function to calculate the minimum number of operations to make two arrays non-decreasing.
    int minOperations(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size();

        // dp[i][0]: Minimum operations if we make nums1[i:] and nums2[i:] non-decreasing.
        // dp[i][1]: Minimum operations if we swap nums1[i] and nums2[i] and then make nums1[i:] and nums2[i:] non-decreasing.
        vector<array<int, 2>> dp(n);

        // Initialize base cases for the last element.
        dp[n-1][0] = 0;
        dp[n-1][1] = 1;

        const int inf = 1e9;

        // Dynamic Programming loop to fill in dp array.
        for (int i = n-2; i >= 0; --i) {
            dp[i][0] = dp[i][1] = inf;

            // Case 1: If nums1[i] and nums2[i] can be included in the non-decreasing subsequence.
            if (nums1[i] <= nums1[n-1] and nums2[i] <= nums2[n-1]) {
                dp[i][0] = min(dp[i][0], dp[i+1][0]);
                dp[i][1] = min(dp[i][1], dp[i+1][1] + 1);
            }

            // Case 2: If nums1[i] and nums2[i] can be swapped and included in the non-decreasing subsequence.
            if (nums1[i] <= nums2[n-1] and nums2[i] <= nums1[n-1]) {
                dp[i][0] = min(dp[i][0], dp[i+1][0] + 1);
                dp[i][1] = min(dp[i][1], dp[i+1][1]);
            }
        }

        // The best result is the minimum of operations needed to make both arrays non-decreasing from index 0.
        int best = min(dp[0][0], dp[0][1]);

        // If the best result is greater than n (the size of the arrays), it means it's not possible.
        if (best > n) return -1;

        // Return the minimum operations needed.
        return best;
    }
};


```
```C []

// Structure to represent a 2D array with 2 columns.
struct Array2D {
    int data[2];
};

// Function to calculate the minimum number of operations to make two arrays non-decreasing.
int minOperations(int* nums1, int* nums2, int n) {
    // dp[i][0]: Minimum operations if we make nums1[i:] and nums2[i:] non-decreasing.
    // dp[i][1]: Minimum operations if we swap nums1[i] and nums2[i] and then make nums1[i:] and nums2[i:] non-decreasing.
    struct Array2D dp[n];

    // Initialize base cases for the last element.
    dp[n-1].data[0] = 0;
    dp[n-1].data[1] = 1;

    const int inf = 1e9;

    // Dynamic Programming loop to fill in dp array.
    for (int i = n-2; i >= 0; --i) {
        dp[i].data[0] = dp[i].data[1] = inf;

        // Case 1: If nums1[i] and nums2[i] can be included in the non-decreasing subsequence.
        if (nums1[i] <= nums1[n-1] && nums2[i] <= nums2[n-1]) {
            dp[i].data[0] = (dp[i].data[0] < dp[i+1].data[0]) ? dp[i].data[0] : dp[i+1].data[0];
            dp[i].data[1] = (dp[i].data[1] < dp[i+1].data[1] + 1) ? dp[i].data[1] : dp[i+1].data[1] + 1;
        }

        // Case 2: If nums1[i] and nums2[i] can be swapped and included in the non-decreasing subsequence.
        if (nums1[i] <= nums2[n-1] && nums2[i] <= nums1[n-1]) {
            dp[i].data[0] = (dp[i].data[0] < dp[i+1].data[0] + 1) ? dp[i].data[0] : dp[i+1].data[0] + 1;
            dp[i].data[1] = (dp[i].data[1] < dp[i+1].data[1]) ? dp[i].data[1] : dp[i+1].data[1];
        }
    }

    // The best result is the minimum of operations needed to make both arrays non-decreasing from index 0.
    int best = (dp[0].data[0] < dp[0].data[1]) ? dp[0].data[0] : dp[0].data[1];

    // If the best result is greater than n (the size of the arrays), it means it's not possible.
    if (best > n) return -1;

    // Return the minimum operations needed.
    return best;
}


}



```

```Java []
import java.util.Arrays;

public class Solution {
    // Function to calculate the minimum number of operations to make two arrays non-decreasing.
    public int minOperations(int[] nums1, int[] nums2) {
        int n = nums1.length;

        // dp[i][0]: Minimum operations if we make nums1[i:] and nums2[i:] non-decreasing.
        // dp[i][1]: Minimum operations if we swap nums1[i] and nums2[i] and then make nums1[i:] and nums2[i:] non-decreasing.
        int[][] dp = new int[n][2];

        // Initialize base cases for the last element.
        dp[n-1][0] = 0;
        dp[n-1][1] = 1;

        final int inf = (int) 1e9;

        // Dynamic Programming loop to fill in dp array.
        for (int i = n-2; i >= 0; --i) {
            Arrays.fill(dp[i], inf);

            // Case 1: If nums1[i] and nums2[i] can be included in the non-decreasing subsequence.
            if (nums1[i] <= nums1[n-1] && nums2[i] <= nums2[n-1]) {
                dp[i][0] = Math.min(dp[i][0], dp[i+1][0]);
                dp[i][1] = Math.min(dp[i][1], dp[i+1][1] + 1);
            }

            // Case 2: If nums1[i] and nums2[i] can be swapped and included in the non-decreasing subsequence.
            if (nums1[i] <= nums2[n-1] && nums2[i] <= nums1[n-1]) {
                dp[i][0] = Math.min(dp[i][0], dp[i+1][0] + 1);
                dp[i][1] = Math.min(dp[i][1], dp[i+1][1]);
            }
        }

        // The best result is the minimum of operations needed to make both arrays non-decreasing from index 0.
        int best = Math.min(dp[0][0], dp[0][1]);

        // If the best result is greater than n (the size of the arrays), it means it's not possible.
        if (best > n) return -1;

        // Return the minimum operations needed.
        return best;
    }
}



```
```python3 []

class Solution:
    # Function to calculate the minimum number of operations to make two arrays non-decreasing.
    def minOperations(self, nums1, nums2):
        n = len(nums1)

        # dp[i][0]: Minimum operations if we make nums1[i:] and nums2[i:] non-decreasing.
        # dp[i][1]: Minimum operations if we swap nums1[i] and nums2[i] and then make nums1[i:] and nums2[i:] non-decreasing.
        dp = [[0, 1] for _ in range(n)]

        inf = 10**9

        # Dynamic Programming loop to fill in dp array.
        for i in range(n-2, -1, -1):
            dp[i][0] = dp[i][1] = inf

            # Case 1: If nums1[i] and nums2[i] can be included in the non-decreasing subsequence.
            if nums1[i] <= nums1[n-1] and nums2[i] <= nums2[n-1]:
                dp[i][0] = min(dp[i][0], dp[i+1][0])
                dp[i][1] = min(dp[i][1], dp[i+1][1] + 1)

            # Case 2: If nums1[i] and nums2[i] can be swapped and included in the non-decreasing subsequence.
            if nums1[i] <= nums2[n-1] and nums2[i] <= nums1[n-1]:
                dp[i][0] = min(dp[i][0], dp[i+1][0] + 1)
                dp[i][1] = min(dp[i][1], dp[i+1][1])

        # The best result is the minimum of operations needed to make both arrays non-decreasing from index 0.
        best = min(dp[0][0], dp[0][1])

        # If the best result is greater than n (the size of the arrays), it means it's not possible.
        if best > n:
            return -1

        # Return the minimum operations needed.
        return best


```
```javascript []

class Solution {
    // Function to calculate the minimum number of operations to make two arrays non-decreasing.
    minOperations(nums1, nums2) {
        const n = nums1.length;

        // dp[i][0]: Minimum operations if we make nums1[i:] and nums2[i:] non-decreasing.
        // dp[i][1]: Minimum operations if we swap nums1[i] and nums2[i] and then make nums1[i:] and nums2[i:] non-decreasing.
        const dp = new Array(n).fill().map(() => [0, 1]);

        const inf = 1e9;

        // Dynamic Programming loop to fill in dp array.
        for (let i = n-2; i >= 0; --i) {
            dp[i][0] = dp[i][1] = inf;

            // Case 1: If nums1[i] and nums2[i] can be included in the non-decreasing subsequence.
            if (nums1[i] <= nums1[n-1] && nums2[i] <= nums2[n-1]) {
                dp[i][0] = Math.min(dp[i][0], dp[i+1][0]);
                dp[i][1] = Math.min(dp[i][1], dp[i+1][1] + 1);
            }

            // Case 2: If nums1[i] and nums2[i] can be swapped and included in the non-decreasing subsequence.
            if (nums1[i] <= nums2[n-1] && nums2[i] <= nums1[n-1]) {
                dp[i][0] = Math.min(dp[i][0], dp[i+1][0] + 1);
                dp[i][1] = Math.min(dp[i][1], dp[i+1][1]);
            }
        }

        // The best result is the minimum of operations needed to make both arrays non-decreasing from index 0.
        const best = Math.min(dp[0][0], dp[0][1]);

        // If the best result is greater than n (the size of the arrays), it means it's not possible.
        if (best > n) return -1;

        // Return the minimum operations needed.
        return best;
    }
}

```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---