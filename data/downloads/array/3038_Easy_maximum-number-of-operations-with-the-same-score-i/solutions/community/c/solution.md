# 🏆💢💯 Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅💥🔥💫Explained☠💥🔥 Beats 💯

**Author:** Edwards310
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/4745018/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/4745018/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-02-18 110555.png](./images/1.png)
![Screenshot 2024-02-18 110700.png](./images/2.png)
![Screenshot 2024-02-18 110848.png](./images/3.png)
```Python3 []
class Solution:
    def maxOperations(self, nums: List[int]) -> int:
        cnt = 1
        sum = nums[0] + nums[1]
        for i in range(2, len(nums) - 1, 2):
            if nums[i] + nums[i + 1] == sum:
                cnt += 1
            else:
                break
        return cnt
```
```Java []
class Solution {
    public int maxOperations(int[] nums) {
         int cnt = 1, sum = nums[0] + nums[1];
        for (int i = 2; i < nums.length - 1; i += 2) {
            if (nums[i] + nums[i + 1] == sum)
                cnt++;
            else
                break;
        }
        return cnt;
    }
}
```
```C++ []
class Solution {
public:
    int maxOperations(vector<int>& nums) {
        int cnt = 1, sum = nums[0] + nums[1];
        for (int i = 2; i < nums.size() - 1; i += 2) {
            if (nums[i] + nums[i + 1] == sum)
                cnt++;
            else
                break;
        }
        return cnt;
    }
};
```
```Pthon []
class Solution(object):
    def maxOperations(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        cnt = 1
        sum = nums[0] + nums[1]
        for i in range(2, len(nums) - 1, 2):
            if nums[i] + nums[i + 1] == sum:
                cnt += 1
            else:
                break
        return cnt
```
```C []
int maxOperations(int* nums, int numsSize) {
    int cnt = 1, sum = nums[0] + nums[1];
    for (int i = 2; i < numsSize - 1; i += 2) {
        if (nums[i] + nums[i + 1] == sum)
            cnt++;
        else
            break;
    }
    return cnt;
}
```
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n/2) --> O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
# Code
```
class Solution {
public:
    int maxOperations(vector<int>& nums) {
        int cnt = 1, sum = nums[0] + nums[1];
        for (int i = 2; i < nums.size() - 1; i += 2) {
            if (nums[i] + nums[i + 1] == sum)
                cnt++;
            else
                break;
        }
        return cnt;
    }
};
```
# ***Please upvote if it's useful for you.***
![th.jpeg](./images/4.jpeg)
