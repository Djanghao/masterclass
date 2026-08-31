# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS -Prefix Sum -Interview Solution

**Author:** lancertech6
**Votes:** 149
**Link:** [https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5349360/](https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5349360/)

---

![Screenshot 2024-06-22 061620.png](./images/0.png)

# YouTube Video Explanation:

### To watch the video please click on "Watch On Youtube" option  available the left bottom corner of the thumbnail.

<!-- **If you want a video for this question please write in the comments** -->

https://youtu.be/fORIuIT_KDQ


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2250 Subscribers*
*Current Subscribers: 2197*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires counting the number of continuous subarrays with exactly `k` odd numbers. To achieve this, we can use a prefix sum approach. The key idea is to keep track of the number of odd numbers encountered so far while iterating through the array, and use this information to count subarrays with the desired property efficiently.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialize Variables**:
   - `n`: Length of the input array `nums`.
   - `cnt`: An array to keep track of the count of prefix sums (number of odd numbers encountered).
   - `cnt[0]`: Set to 1 initially, since a prefix sum of 0 (no odd numbers encountered) occurs once by default.
   - `ans`: Variable to store the final result (number of nice subarrays).
   - `t`: Variable to store the current count of odd numbers while iterating through the array.

2. **Iterate Through the Array**:
   - For each element `v` in `nums`, update the count of odd numbers (`t`) encountered so far. This is done by checking if `v` is odd using `v & 1`.
   - Check if there exists a prefix sum `t - k` (i.e., a previous state where there were `t - k` odd numbers). If so, add the count of such prefix sums to `ans`.
   - Increment the count of the current prefix sum (`t`) in the `cnt` array.

3. **Return the Result**:
   - After iterating through the entire array, `ans` will contain the number of nice subarrays.


# Complexity
- **Time Complexity**: The solution iterates through the array once and performs constant time operations in each iteration. Thus, the time complexity is \\(O(n)\\), where \\(n\\) is the length of the array.
- **Space Complexity**: The space complexity is \\(O(n)\\) due to the additional `cnt` array used to store the count of prefix sums.


# Step by Step Explanation


### Example

Let's use an example to explain the approach:  
`nums = [1, 1, 2, 1, 1]`, `k = 3`

| Index | `nums[i]` | Odd Count (`t`) | `cnt` Array (Updated) | `t - k` | Count of `t - k` in `cnt` | Result (`ans`) |
|-------|-----------|-----------------|-----------------------|---------|---------------------------|----------------|
| 0     | 1         | 1               | [1, 1, 0, 0, 0, 0]    | -2      | 0                         | 0              |
| 1     | 1         | 2               | [1, 1, 1, 0, 0, 0]    | -1      | 0                         | 0              |
| 2     | 2         | 2               | [1, 1, 2, 0, 0, 0]    | -1      | 0                         | 0              |
| 3     | 1         | 3               | [1, 1, 2, 1, 0, 0]    | 0       | 1                         | 1              |
| 4     | 1         | 4               | [1, 1, 2, 1, 1, 0]    | 1       | 1                         | 2              |

### Steps Explained with Example

1. **Initialization**:
   - `cnt = [1, 0, 0, 0, 0, 0]`
   - `ans = 0`
   - `t = 0`

2. **Iteration**:
   - **Index 0**: 
     - `nums[0] = 1` (odd)
     - `t = 1` (1 odd number)
     - Update `cnt`: `cnt[1] += 1` \u2192 `cnt = [1, 1, 0, 0, 0, 0]`
     - `t - k = 1 - 3 = -2` (invalid)
     - `ans = 0`
   
   - **Index 1**:
     - `nums[1] = 1` (odd)
     - `t = 2` (2 odd numbers)
     - Update `cnt`: `cnt[2] += 1` \u2192 `cnt = [1, 1, 1, 0, 0, 0]`
     - `t - k = 2 - 3 = -1` (invalid)
     - `ans = 0`
   
   - **Index 2**:
     - `nums[2] = 2` (even)
     - `t = 2` (no change in odd count)
     - Update `cnt`: `cnt[2] += 1` \u2192 `cnt = [1, 1, 2, 0, 0, 0]`
     - `t - k = 2 - 3 = -1` (invalid)
     - `ans = 0`
   
   - **Index 3**:
     - `nums[3] = 1` (odd)
     - `t = 3` (3 odd numbers)
     - Update `cnt`: `cnt[3] += 1` \u2192 `cnt = [1, 1, 2, 1, 0, 0]`
     - `t - k = 3 - 3 = 0`
     - `cnt[0] = 1` (one valid prefix sum)
     - `ans += 1` \u2192 `ans = 1`
   
   - **Index 4**:
     - `nums[4] = 1` (odd)
     - `t = 4` (4 odd numbers)
     - Update `cnt`: `cnt[4] += 1` \u2192 `cnt = [1, 1, 2, 1, 1, 0]`
     - `t - k = 4 - 3 = 1`
     - `cnt[1] = 1` (one valid prefix sum)
     - `ans += 1` \u2192 `ans = 2`

### Final Answer
The number of nice subarrays is `2`.

---



# Code
```java []
class Solution {
    public int numberOfSubarrays(int[] nums, int k) {
        int n = nums.length;
        int[] cnt = new int[n + 1];
        cnt[0] = 1;
        int ans = 0, t = 0;
        for (int v : nums) {
            t += v & 1;
            if (t - k >= 0) {
                ans += cnt[t - k];
            }
            cnt[t]++;
        }
        return ans;
    }
}
```
```C++ []
class Solution {
public:
    int numberOfSubarrays(vector<int>& nums, int k) {
        int n = nums.size();
        vector<int> cnt(n + 1, 0);
        cnt[0] = 1;
        int ans = 0, t = 0;
        for (int v : nums) {
            t += v & 1;
            if (t - k >= 0) {
                ans += cnt[t - k];
            }
            cnt[t]++;
        }
        return ans;
    }
};
```
```Python []
class Solution(object):
    def numberOfSubarrays(self, nums, k):
        n = len(nums)
        cnt = [0] * (n + 1)
        cnt[0] = 1
        ans = 0
        t = 0
        for v in nums:
            t += v & 1
            if t - k >= 0:
                ans += cnt[t - k]
            cnt[t] += 1
        return ans
        
```
```JavaScript []
var numberOfSubarrays = function(nums, k) {
    let n = nums.length;
    let cnt = new Array(n + 1).fill(0);
    cnt[0] = 1;
    let ans = 0, t = 0;
    for (let v of nums) {
        t += v & 1;
        if (t - k >= 0) {
            ans += cnt[t - k];
        }
        cnt[t]++;
    }
    return ans;
};
```
![upvote.png](./images/1.png)
