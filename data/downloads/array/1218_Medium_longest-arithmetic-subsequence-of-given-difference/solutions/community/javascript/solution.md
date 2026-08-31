# Ex-Amazon explains a solution with a video, Python, JavaScript, Java and C++

**Author:** niits
**Votes:** 6
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3765644/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3765644/)

---

# Intuition
Use Dynamic Programming to store the longest length of subsequence at each number.

# Solution Video
Please subscribe to my channel from here. I have 222 LeetCode videos as of July 15th, 2023.
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

https://youtu.be/Yi2hGxQsL6Y

# Please Upvote!!

---

# Approach
This is based on Python code. Here's a step-by-step algorithm for the provided code:

1. Create an empty dictionary `dp` to store the length of the longest subsequence for each number encountered.
2. Initialize `max_length` to 0, which will keep track of the maximum subsequence length seen so far.
3. Iterate through each number `n` in the `arr` list:
   a. Check if `n - difference` exists as a key in the `dp` dictionary.
   b. If the key exists:
      - Set `dp[n]` to be equal to `dp[n - difference] + 1`, indicating that the subsequence length of `n` is one greater than the subsequence length of `n - difference`.
   c. If the key doesn't exist:
      - Set `dp[n]` to 1, indicating that the subsequence length of `n` is 1, as it is the first occurrence of `n` in the sequence.
   d. Update `max_length` by taking the maximum value between `max_length` and `dp[n]`.
4. Return `max_length`, which represents the length of the longest arithmetic subsequence with the given difference.

# Complexity
- Time complexity: O(n)
n is the length of the input list arr. This is because we iterate through the arr list once, performing a constant-time operation for each element.

- Space complexity: O(n)
n is the length of the input list arr. This is because we use a dictionary dp to store the longest subsequence length for each number encountered. In the worst case scenario, where all elements in arr are distinct, the dictionary will have a size of n.

```python []
class Solution:
    def longestSubsequence(self, arr: List[int], difference: int) -> int:
        dp = {}
        max_length = 0

        for n in arr:
            if n - difference in dp:
                dp[n] = dp[n - difference] + 1
            else:
                dp[n] = 1
            
            max_length = max(max_length, dp[n])
        
        return max_length
```
```javascript []
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    let dp = {};
    let max_length = 0;

    for (let n of arr) {
        if (n - difference in dp) {
            dp[n] = dp[n - difference] + 1;
        } else {
            dp[n] = 1;
        }
        
        max_length = Math.max(max_length, dp[n]);
    }
    
    return max_length;    
};
```
```java []
class Solution {
    public int longestSubsequence(int[] arr, int difference) {
        Map<Integer, Integer> dp = new HashMap<>();
        int maxLength = 0;

        for (int n : arr) {
            if (dp.containsKey(n - difference)) {
                dp.put(n, dp.get(n - difference) + 1);
            } else {
                dp.put(n, 1);
            }

            maxLength = Math.max(maxLength, dp.get(n));
        }

        return maxLength;        
    }
}
```
```C++ []
class Solution {
public:
    int longestSubsequence(vector<int>& arr, int difference) {
        std::unordered_map<int, int> dp;
        int maxLength = 0;

        for (int n : arr) {
            if (dp.count(n - difference)) {
                dp[n] = dp[n - difference] + 1;
            } else {
                dp[n] = 1;
            }

            maxLength = std::max(maxLength, dp[n]);
        }

        return maxLength;        
    }
};
```
