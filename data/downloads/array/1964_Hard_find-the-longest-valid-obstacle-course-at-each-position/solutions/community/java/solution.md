# Image Explanation-🏆//Step by step Explanation//Easy C++ /java solutions/Easy to Understand

**Author:** Red-hawk
**Votes:** 33
**Link:** [https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3494494/](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3494494/)

---

# Intuition
We can solve this problem using dynamic programming. We can define a vector dp of length n, where dp[i] represents the smallest ending number of an increasing subsequence of obstacles that includes the i-th obstacle. We can also define another vector ans of length n, where ans[i] represents the length of the longest increasing subsequence of obstacles that includes the i-th obstacle.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
we have the input array obstacles as follows:
```
obstacles = [3, 1, 4, 2]
```
We start by initializing two vectors, ans and dp, with empty arrays:

```
ans = []
dp = []
```
We then iterate through each obstacle in obstacles, and for each obstacle, we find the length of the longest obstacle course that includes that obstacle.

# Iteration 1 (i=0)
The first obstacle is 3. We compare it with the dp vector to find the position where it can be added to form an increasing obstacle course. Since dp is currently empty, we simply add 3 to the end of dp, and the length of the obstacle course is 1. We also add the length of the obstacle course to the ans vector.
```
obstacles = [3, 1, 4, 2]
dp = [3]
ans = [1]
```
# Iteration 2 (i=1)
The second obstacle is 1. We compare it with the dp vector to find the position where it can be added to form an increasing obstacle course. Since 1 is smaller than 3, we can't add it to dp to form an increasing obstacle course. Instead, we create a new obstacle course that starts with 1 and ends with 1, and the length of the obstacle course is 1. We also add the length of the obstacle course to the ans vector.
```
obstacles = [3, 1, 4, 2]
dp = [3]
ans = [1, 1]
```
# Iteration 3 (i=2)
The third obstacle is 4. We compare it with the dp vector to find the position where it can be added to form an increasing obstacle course. Since 4 is greater than 3, we can add it to the end of dp to form an increasing obstacle course. The length of the obstacle course is 2. We also add the length of the obstacle course to the ans vector.

```
obstacles = [3, 1, 4, 2]
dp = [3, 4]
ans = [1, 1, 2]
```
# Iteration 4 (i=3)
The fourth obstacle is 2. We compare it with the dp vector to find the position where it can be added to form an increasing obstacle course. Since 2 is smaller than 4, we replace the first obstacle in dp that is greater than or equal to 2 with 2, which is the first obstacle in dp. The resulting dp vector is [2, 4], and the length of the obstacle course is still 2. We also add the length of the obstacle course to the ans vector.
```
obstacles = [3, 1, 4, 2]
dp = [2, 4]
ans = [1, 1, 2, 2]
```
After iterating through all the obstacles in obstacles, we return the ans vector, which contains the length of the longest obstacle course for each position in the input array:
```
[1, 1, 2, 2]
```
I hope this helps!
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- ---------------------------------
# Please Upvote it if It helps You
---------------------------------------

# Code
```
class Solution {
public:
    vector<int> longestObstacleCourseAtEachPosition(vector<int>& obstacles) {
        vector<int> ans;
        vector<int> dp;
        for (int i = 0; i < obstacles.size(); i++) {
            int len = lower_bound(dp.begin(), dp.end(), obstacles[i] + 1) - dp.begin();
            if (len == dp.size()) {
                dp.push_back(obstacles[i]);
            } else {
                dp[len] = obstacles[i];
            }
            ans.push_back(len + 1);
        }
        return ans;
    }
};

```
# java code 
```
class Solution {
    public int[] longestObstacleCourseAtEachPosition(int[] obstacles) {
        int n = obstacles.length;
        int[] dp = new int[n];  // stores the smallest ending number of an increasing subsequence
        int[] ans = new int[n]; // stores the length of the longest increasing subsequence that includes each obstacle
        
        int len = 0; // length of the longest increasing subsequence seen so far
        
        for (int i = 0; i < n; i++) {
            int idx = binarySearch(dp, 0, len - 1, obstacles[i]); // find the position where we can add the current obstacle
            
            dp[idx] = obstacles[i]; // add the current obstacle to the dp array at the correct position
            
            if (idx == len) { // if we added the current obstacle to the end of the dp array
                len++; // update the length of the longest increasing subsequence seen so far
            }
            
            ans[i] = idx + 1; // update the length of the longest increasing subsequence that includes the i-th obstacle
        }
        
        return ans;
    }
    
    // binary search to find the position where we can add the current obstacle in the dp array
    private int binarySearch(int[] dp, int left, int right, int target) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (dp[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
}
```

