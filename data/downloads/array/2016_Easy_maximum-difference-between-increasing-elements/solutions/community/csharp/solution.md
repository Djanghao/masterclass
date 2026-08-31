# Easiest Solutions in C++ / Python3 / Java / C# / Python / C / Go  - beats 100%

**Author:** Edwards310
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/4975275/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/4975275/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)

![Screenshot 2024-04-05 064409.png](./images/1.png)
![Screenshot 2024-04-05 064401.png](./images/2.png)
![Screenshot 2024-04-05 064048.png](./images/3.png)
<!-- Describe your first thoughts on how to solve this problem. -->
```C++ []
class Solution {
public:
    int maximumDifference(vector<int>& nums) {
        int maxi = -1;
        for (int i = 0; i < nums.size() - 1; i++) {
            for (int j = i + 1; j < nums.size(); ++j)
                if (nums[i] < nums[j])
                    maxi = max(maxi, nums[j] - nums[i]);
        }
        return maxi;
    }
};
```
```python3 []
class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        maxi = -1
        for i in range(len(nums) - 1):
            for j in range(i + 1, len(nums)):
                if nums[i] < nums[j]:
                    maxi = max(maxi, nums[j] - nums[i])
        return maxi
```
```C# []
public class Solution {
    public int MaximumDifference(int[] nums) {
        int l = 0, r = 1, res = Int32.MinValue;
        while (r < nums.Length) {
            if (nums[r] > nums[l]) {
                res = Math.Max(res, nums[r] - nums[l]);
                r++;
            } else {
                l = r++;
            };
        }
        return (res == Int32.MinValue ? -1 : res);
    }
}
```
```java []
class Solution {
    public int maximumDifference(int[] nums) {
        int l = 0, r = 1, res = Integer.MIN_VALUE;
        while (r < nums.length) {
            if (nums[r] > nums[l]) {
                res = Math.max(res, nums[r] - nums[l]);
                r++;
            } else {
                l = r++;
            };
        }
        return (res == Integer.MIN_VALUE ? -1 : res);
    }
}
```
```python []
class Solution(object):
    def maximumDifference(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        buy = nums[0]
        profit = -1
        for i, num in enumerate(nums):
            if i == 0:
                continue
            current_profit = num - buy
            if buy < num:
                profit = max(current_profit, profit)
            else:
                buy = num
        return profit
```
```C []
int maximumDifference(int* nums, int numsSize) {
    int l = 0, r = 1, res = INT_MIN;
    while (r < numsSize) {
        if (nums[r] > nums[l]) {
            res = fmax(res, nums[r] - nums[l]);
            r++;
        } else {
            l = r++;
        };
    }
    return (res == INT_MIN ? -1 : res);
}
```

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
      O(nlogn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
      O(1)
# Code
```
public class Solution {
    public int MaximumDifference(int[] nums) {
        int l = 0, r = 1, res = Int32.MinValue;
        while (r < nums.Length) {
            if (nums[r] > nums[l]) {
                res = Math.Max(res, nums[r] - nums[l]);
                r++;
            } else {
                l = r++;
            };
        }
        return (res == Int32.MinValue ? -1 : res);
    }
}
```
# Thanks for viewing .. keep supporting me . Please upvote
![th.jpeg](./images/4.jpeg)
