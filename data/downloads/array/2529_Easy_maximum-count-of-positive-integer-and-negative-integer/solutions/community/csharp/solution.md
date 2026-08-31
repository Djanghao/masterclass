# ☠💀🔥💫Easiest C++✅Python3✅C#✅Java✅Python🐍✅C✅JavaScript✅C#✅👾🔥 Explained🏆✨👌💀 Beats 💯

**Author:** Edwards310
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/4995644/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/4995644/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-04-09 072638.png](./images/1.png)
![Screenshot 2024-04-09 072658.png](./images/2.png)
```C++ []
class Solution {
public:
    int maximumCount(vector<int>& nums) {
        int neg = 0, pos = 0;
        for (auto& x : nums) {
            if (x > 0)
                pos++;
            else if (x < 0)
                neg++;
        }
        return max(neg, pos);
    }
};
```
```python3 []
class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        ng = ps = 0
        for x in nums:
            if x > 0:
                ps += 1
            elif x < 0:
                ng += 1

        return max(ng , ps)
```
```C# []
public class Solution {
    public int MaximumCount(int[] nums) {
        int ng = 0, ps = 0;
        foreach(int x in nums)
            if (x > 0)
                ps++;
            else if (x < 0)
                ng++;
        return Math.Max(ng, ps);
    }
}
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    var ps = 0;
    var ng = 0;
    for (var i = 0; i < nums.length; i++)
        if (nums[i] > 0)
            ps++;
        else if (nums[i] < 0)
            ng++;
    var res = (ps > ng) ? ps : ng;
    return res;
};
```
```python []
class Solution(object):
    def maximumCount(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        ng = ps = 0
        for x in nums:
            if x > 0:
                ps += 1
            elif x < 0:
                ng += 1

        return max(ng , ps)
```
```C []
int maximumCount(int* nums, int numsSize) {
    int ng = 0, ps = 0;
    for (int x = 0; x < numsSize; x++)
        if (nums[x] > 0)
            ps++;
        else if (nums[x] < 0)
            ng++;
    return fmax(ng, ps);
}
```
```java []
class Solution {
    public int maximumCount(int[] nums) {
        int ng = 0, ps = 0;
        for (int x : nums)
            if (x > 0)
                ps++;
            else if (x < 0)
                ng++;
        return Math.max(ng, ps);
    }
}
```



<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
# Code
```
class Solution {
public:
    int maximumCount(vector<int>& nums) {
        int neg = 0, pos = 0;
        for (auto& x : nums) {
            if (x > 0)
                pos++;
            else if (x < 0)
                neg++;
        }
        return max(neg, pos);
    }
};
```
# Please upvote if it's useful
![th.jpeg](./images/3.jpeg)
