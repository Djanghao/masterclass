# 873. Length of Longest Fibonacci Subsequence :  2 - DP and two pointers

**Author:** aftabmk
**Votes:** 3
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/4256837/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/4256837/)

---

# Complexity
- Time complexity: `O(n * n)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n * n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# C++
```
class Solution {
public:
    int lenLongestFibSubseq(vector<int>& arr) {
        int n = arr.size(); // Get the size of the input array.
        int result = 0; // Initialize the result to 0 to store the length of the longest Fibonacci subsequence.
        vector<vector<int>> dp(n, vector<int>(n, 0)); // Create a 2D dynamic programming table with all values initialized to 0.

        for (int i = 2; i < n; i++) {
            int l = 0, r = i - 1; // Initialize two pointers, l and r.

            while (l < r) {
                int sum = arr[l] + arr[r]; // Calculate the sum of two elements at positions l and r.
                
                if (sum > arr[i]) {
                    r--; // If the sum is greater than the current element, decrement the right pointer (r).
                } else if (sum < arr[i]) {
                    l++; // If the sum is less than the current element, increment the left pointer (l).
                } else {
                    // If the sum equals the current element (Fibonacci pair found):
                    dp[r][i] = dp[l][r] + 1; // Update the length in the dynamic programming table.
                    result = max(result, dp[r][i]); // Update the result with the maximum subsequence length found.
                    l++; // Increment the left pointer.
                    r--; // Decrement the right pointer.
                }
            }
        }

        // If a valid Fibonacci subsequence is found, return its length plus 2 (to account for the first two elements).
        if (result != 0) {
            return result + 2;
        }

        return 0; // Return 0 if no valid Fibonacci subsequence is found.
    }
};
```
no_comments
```
class Solution {
public:
    int lenLongestFibSubseq(vector<int>& arr) {
        int n = arr.size(), len = 0;
        vector<vector<int>> dp(n,vector<int>(n));

        for(int i=2;i<n;i++){
            int l = 0, r = i - 1;
            while(l < r) {
                int sum = arr[l] + arr[r];
                if(sum < arr[i]) l++;
                else if(sum > arr[i]) r--;
                else {
                    dp[r][i] = 1 + dp[l][r];
                    len = max(len,dp[r][i]);
                    l++,r--;
                }
            }
        }

        if(len != 0) return len + 2;
        return 0;
    }
};
```
# Java
```
class Solution {
    public int lenLongestFibSubseq(int[] arr) {
        int n = arr.length;
        int result = 0;
        int[][] dp = new int[n][n];

        for (int i = 2; i < n; i++) {
            int l = 0, r = i - 1;

            while (l < r) {
                int sum = arr[l] + arr[r];
                if (sum > arr[i]) {
                    r--;
                } else if (sum < arr[i]) {
                    l++;
                } else {
                    dp[r][i] = dp[l][r] + 1;
                    result = Math.max(result, dp[r][i]);
                    l++;
                    r--;
                }
            }
        }

        if (result != 0) {
            return result + 2;
        }

        return 0;
    }

```
# TS/JS
```
class Solution {
    lenLongestFibSubseq(arr: number[]): number {
        const n : number = arr.length;
        let result : number = 0;
        const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

        for (let i = 2; i < n; i++) {
            let l : number = 0, r : number = i - 1;

            while (l < r) {
                const sum : number = arr[l] + arr[r];
                if (sum > arr[i]) r--;
                else if (sum < arr[i]) l++;
                else {
                    dp[r][i] = dp[l][r] + 1;
                    result = Math.max(result, dp[r][i]);
                    l++;
                    r--;
                }
            }
        }

        if (result !== 0) {
            return result + 2;
        }

        return 0;
    }
}
```