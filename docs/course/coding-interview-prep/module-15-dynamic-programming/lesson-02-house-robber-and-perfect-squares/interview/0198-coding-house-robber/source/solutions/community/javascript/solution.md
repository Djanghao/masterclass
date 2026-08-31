# ✅Beats 100% - C++/Java/Python/JS - Explained with [ Video ] - Dynamic Programming - Space Optimized

**Author:** lancertech6
**Votes:** 175
**Link:** [https://leetcode.com/problems/house-robber/solutions/4600148/](https://leetcode.com/problems/house-robber/solutions/4600148/)

---

![Screenshot 2024-01-21 060855.png](./images/0.png)

# YouTube Video Explanation:

<!-- **If you want a video for this question please write in the comments** -->

<!-- https://www.youtube.com/watch?v=ujU-jeO1v-k -->

https://youtu.be/ZsSvSM8MDVU

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 1600 Subscribers*
*Current Subscribers: 1513*

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem can be solved by dynamic programming, considering the two scenarios at each house: whether to rob it or not. The goal is to maximize the total amount of money robbed without alerting the police.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Use two variables, `rob` and `norob`, to keep track of the maximum amount of money robbed with or without robbing the current house.
2. Iterate through each house, and at each step, calculate the maximum amount of money if the current house is robbed (`newRob`) and if it is not robbed (`newNoRob`).
3. Update `rob` and `norob` for the next iteration.
4. The final result is the maximum amount between the two scenarios: robbing the last house or not robbing it.

# Complexity
- Time Complexity: O(N), where N is the number of houses.
- Space Complexity: O(1), as we use constant space for variables `rob` and `norob`.

# Code
```java []
class Solution {
    public int rob(int[] nums) {
        int rob = 0;
        int norob = 0;
        for (int i = 0; i < nums.length; i ++) {
            int newRob = norob + nums[i];
            int newNoRob = Math.max(norob, rob);
            rob = newRob;
            norob = newNoRob;
        }
        return Math.max(rob, norob);
    }
}
```
```C++ []
class Solution {
public:
    int rob(vector<int>& nums) {
        int rob = 0;
        int norob = 0;
        for (int i = 0; i < nums.size(); i++) {
            int newRob = norob + nums[i];
            int newNoRob = max(norob, rob);
            rob = newRob;
            norob = newNoRob;
        }
        return max(rob, norob);
    }
};
```
```Python []
class Solution(object):
    def rob(self, nums):
        rob, norob = 0, 0
        for num in nums:
            newRob = norob + num
            newNoRob = max(norob, rob)
            rob, norob = newRob, newNoRob
        return max(rob, norob)
        
```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob = 0;
    let norob = 0;
    for (let i = 0; i < nums.length; i++) {
        let newRob = norob + nums[i];
        let newNoRob = Math.max(norob, rob);
        rob = newRob;
        norob = newNoRob;
    }
    return Math.max(rob, norob);
};
```
![upvote.png](./images/1.png)
