# Python🔥Java🔥C++🔥Simple Solution🔥Easy to Understand

**Author:** techwired8
**Votes:** 103
**Link:** [https://leetcode.com/problems/uncrossed-lines/solutions/3510371/](https://leetcode.com/problems/uncrossed-lines/solutions/3510371/)

---

**!! BIG ANNOUNCEMENT !!**
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers. I planned to give for next 10,000 Subscribers as well. If you're interested **DON'T FORGET** to Subscribe

# Search \uD83D\uDC49 `Tech Wired Leetcode` to Subscribe

# Video Solution 

# Search \uD83D\uDC49 `Uncrossed Lines by Tech Wired`

# or

# Click the Link in my Profile

# Approach:

- The problem can be solved using dynamic programming. We can define a two-dimensional array dp, where dp[i][j] represents the maximum number of uncrossed lines between the first i elements of nums1 and the first j elements of nums2. The base case is dp[0][j] = 0 and dp[i][0] = 0, since there are no elements in either array.

- For each element nums1[i-1] in nums1 and each element nums2[j-1] in nums2, we can either include or exclude the current element. If nums1[i-1] is equal to nums2[j-1], then we can include it in the uncrossed lines, and the maximum number of uncrossed lines is dp[i-1][j-1] + 1. Otherwise, we can exclude it, and the maximum number of uncrossed lines is the maximum of dp[i-1][j] and dp[i][j-1].

- The final answer is dp[m][n], where m and n are the lengths of nums1 and nums2 respectively.

# Intuition:
- The problem asks us to find the maximum number of uncrossed lines between two arrays. We can think of the elements in nums1 and nums2 as points on two parallel lines, and the uncrossed lines as line segments connecting these points. If two points have the same value, then we can draw a line segment between them, indicating that they are uncrossed. The goal is to find the maximum number of such line segments.

- To find the maximum number of uncrossed lines, we can use dynamic programming. We can start with the base case of zero elements, and then gradually build up the solution by adding elements one by one. At each step, we consider whether to include or exclude the current element, and update the maximum number of uncrossed lines accordingly.

- By considering all possible combinations of elements from both arrays, we can find the maximum number of uncrossed lines between the two arrays. The dynamic programming approach allows us to avoid redundant calculations and find the optimal solution efficiently.






```Python []
class Solution:
    def maxUncrossedLines(self, nums1: List[int], nums2: List[int]) -> int:
        m, n = len(nums1), len(nums2)
        if m < n:
            nums1, nums2, m, n = nums2, nums1, n, m
        dp = [0] * (n + 1)
        for i in range(1, m + 1):
            prev = 0
            for j in range(1, n + 1):
                curr = dp[j]
                if nums1[i-1] == nums2[j-1]:
                    dp[j] = prev + 1
                else:
                    dp[j] = max(dp[j-1], curr)
                prev = curr
        return dp[n]

```
```Java []
class Solution {
    public int maxUncrossedLines(int[] nums1, int[] nums2) {
        int m = nums1.length, n = nums2.length;
        if (m < n) {
            int[] temp = nums1;
            nums1 = nums2;
            nums2 = temp;
            m = nums1.length;
            n = nums2.length;
        }
        int[] dp = new int[n + 1];
        for (int i = 1; i <= m; i++) {
            int prev = 0;
            for (int j = 1; j <= n; j++) {
                int curr = dp[j];
                if (nums1[i-1] == nums2[j-1]) {
                    dp[j] = prev + 1;
                } else {
                    dp[j] = Math.max(dp[j-1], curr);
                }
                prev = curr;
            }
        }
        return dp[n];
    }
}

```
```C++ []
class Solution {
public:
    int maxUncrossedLines(vector<int>& nums1, vector<int>& nums2) {
        int m = nums1.size(), n = nums2.size();
        if (m < n) {
            swap(nums1, nums2);
            swap(m, n);
        }
        vector<int> dp(n + 1);
        for (int i = 1; i <= m; i++) {
            int prev = 0;
            for (int j = 1; j <= n; j++) {
                int curr = dp[j];
                if (nums1[i-1] == nums2[j-1]) {
                    dp[j] = prev + 1;
                } else {
                    dp[j] = max(dp[j-1], curr);
                }
                prev = curr;
            }
        }
        return dp[n];
    }
};

```
# An Upvote will be encouraging \uD83D\uDC4D
