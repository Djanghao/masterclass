# 🔥💥⚡Easiest C++✅Python3✅Java✅C✅Python🐍✅☠💀 Beats 💯Bit Manipulation💥🔥

**Author:** Edwards310
**Votes:** 26
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5085617/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5085617/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-04-29 054255.png](./images/1.png)
![Screenshot 2024-04-29 054709.png](./images/2.png)
![Screenshot 2024-04-29 054702.png](./images/3.png)
![Screenshot 2024-04-29 054654.png](./images/4.png)
![Screenshot 2024-04-29 054645.png](./images/5.png)
```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        int ans = 0;
        for (auto& x : nums) {
            ans = ans ^ x;
        }
        ans = ans ^ k;
        int res = 0;
        while (ans > 0) {
            if (ans & 1)
                res++;
            ans = ans >> 1;
        }
        return res;
    }
};
```
```python3 []
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        ans = 0
        for x in nums:
            ans ^= x
        ans ^= k
        res = 0
        while ans > 0:
            if (ans & 1) != 0:
                res += 1
            ans >>= 1
        
        return res
```
```C []
int minOperations(int* nums, int numsSize, int k) {
    int ans = 0;
    for (int x = 0; x < numsSize; x++) {
        ans = ans ^ nums[x];
    }
    ans = ans ^ k;
    int res = 0;
    while (ans > 0) {
        if (ans & 1)
            res++;
        ans = ans >> 1;
    }
    return res;
}
```
```Java []
class Solution {
    public int minOperations(int[] nums, int k) {
        int ans = 0;
        for (int x : nums) {
            ans = ans ^ x;
        }
        ans = ans ^ k;
        int res = 0;
        while (ans > 0) {
            if ((ans & 1) != 0)
                res++;
            ans = ans >> 1;
        }
        return res;
    }
}
```
```python []
class Solution(object):
    def minOperations(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        temp = 0
        for i in nums:
            temp ^= i
        temp ^= k
        return bin(temp).count('1')
```
```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        for(int x: nums)
            k ^= x;
        return __builtin_popcount(k);
    }
};
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
    int minOperations(vector<int>& nums, int k) {
        for(int x: nums)
            k ^= x;
        return __builtin_popcount(k);
    }
};
```
# Please upvote if it's useful for you.. thanks 
![th.jpeg](./images/6.jpeg)
