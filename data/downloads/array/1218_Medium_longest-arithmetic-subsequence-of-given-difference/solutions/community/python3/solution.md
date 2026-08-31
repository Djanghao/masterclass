# ✅Recursion to Tabulation || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 114
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761477/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761477/)

---

# Intuition:
The Intuition is to iterate through the array and uses dynamic programming to find the length of the longest subsequence with a given difference. It maintains a map to store the maximum length of subsequences ending at each number. By leveraging this map and updating the maximum length seen so far, it efficiently computes the desired result.

# Recursion: (TLE)
```C++ []
class Solution {
public:
    int helper(int index, int prev, vector<int>& arr, int diff){
        int n = arr.size();
        if(index >= n){
            return 0;
        }

        int take = 0;
        int notake = 0;
        if(prev == -10000){
            notake = helper(index + 1, prev, arr, diff);
            take = 1 + helper(index + 1, arr[index], arr, diff);
        }
        else{
            notake = helper(index + 1, prev, arr, diff);
            if(arr[index] - prev == diff){
                take = 1 + helper(index + 1, arr[index], arr, diff);
            }
        }
        return max(take, notake);
    }
    int longestSubsequence(vector<int>& arr, int difference) {
        int n = arr.size();
        return helper(0, -10000, arr, difference);
    }
};
```
```Java []
class Solution {
    public int helper(int index, int prev, int[] arr, int diff) {
        int n = arr.length;
        if (index >= n) {
            return 0;
        }

        int take = 0;
        int notake = 0;
        if (prev == -10000) {
            notake = helper(index + 1, prev, arr, diff);
            take = 1 + helper(index + 1, arr[index], arr, diff);
        } else {
            notake = helper(index + 1, prev, arr, diff);
            if (arr[index] - prev == diff) {
                take = 1 + helper(index + 1, arr[index], arr, diff);
            }
        }
        return Math.max(take, notake);
    }

    public int longestSubsequence(int[] arr, int difference) {
        int n = arr.length;
        return helper(0, -10000, arr, difference);
    }
}

```
```Python3 []
class Solution:
    def helper(self, index, prev, arr, diff):
        n = len(arr)
        if index >= n:
            return 0

        take = 0
        notake = 0
        if prev == -10000:
            notake = self.helper(index + 1, prev, arr, diff)
            take = 1 + self.helper(index + 1, arr[index], arr, diff)
        else:
            notake = self.helper(index + 1, prev, arr, diff)
            if arr[index] - prev == diff:
                take = 1 + self.helper(index + 1, arr[index], arr, diff)
        return max(take, notake)

    def longestSubsequence(self, arr, difference):
        n = len(arr)
        return self.helper(0, -10000, arr, difference)
```

Tried converting to Memoization but still TLE
# Tabulation:
# Explanation:
1. Iterate through the array:
2. For each index `i` from 0 to `n-1`, do the following:
3. Retrieve the number at the current index: `num = arr[i]`.
4. Check if there exists a number `num - difference` in the `dp` map. If it does, it means we can extend the subsequence ending at `num - difference` by including the current number `num`. So, we set `dp[num]` to be `dp[num - difference] + 1`, indicating that the length of the subsequence ending at `num` is one greater than the length of the subsequence ending at `num - difference`.
5. If there is no `num - difference` in the `dp` map, it means we have found a new subsequence starting at `num`. So, we set `dp[num]` to 1, indicating the start of a new subsequence.
6 Update the `ans` variable with the maximum length seen so far by comparing `ans` with `dp[num]`.

# Complexity:
**Time Complexity:** $$ O(n) $$
**Space Complexity:** $$ O(n) $$

# Code
```C++ []
class Solution {
public:
    int longestSubsequence(vector<int>& arr, int difference) {
        int n = arr.size();
        unordered_map<int, int> dp; // Stores the maximum length at each index
        
        int ans = 1; // Initialize with the minimum length of 1
        
        for (int i = 0; i < n; i++) {
            int num = arr[i];
            if (dp.find(num - difference) != dp.end()) {
                dp[num] = dp[num - difference] + 1;
            } else {
                dp[num] = 1;
            }
            
            ans = max(ans, dp[num]);
        }
        
        return ans;
    }
};
```
```Java []
class Solution {
    public int longestSubsequence(int[] arr, int difference) {
        int n = arr.length;
        Map<Integer, Integer> dp = new HashMap<>(); // Stores the maximum length at each index
        
        int ans = 1; // Initialize with the minimum length of 1
        
        for (int i = 0; i < n; i++) {
            int num = arr[i];
            if (dp.containsKey(num - difference)) {
                dp.put(num, dp.get(num - difference) + 1);
            } else {
                dp.put(num, 1);
            }
            
            ans = Math.max(ans, dp.get(num));
        }
        
        return ans;
    }
}
```
```Python3 []
class Solution:
    def longestSubsequence(self, arr: List[int], difference: int) -> int:
        n = len(arr)
        dp = {}  # Stores the maximum length at each index
        
        ans = 1  # Initialize with the minimum length of 1
        
        for i in range(n):
            num = arr[i]
            if num - difference in dp:
                dp[num] = dp[num - difference] + 1
            else:
                dp[num] = 1
            
            ans = max(ans, dp[num])
        
        return ans
```

**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**

