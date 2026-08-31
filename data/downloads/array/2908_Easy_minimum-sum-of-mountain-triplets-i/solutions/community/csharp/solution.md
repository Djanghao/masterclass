# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 💯

**Author:** Edwards310
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/5539207/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/5539207/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-07-26 190450.png](./images/1.png)
These are the almost same questions which are similar to this one which are as follows :-

---
***Q - 1460 -->*** https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5538697/easiestfaster-lesser-cpython3javacpythoncexplained-beats

***Q - 1534 -->*** https://leetcode.com/problems/count-good-triplets/solutions/5538845/easiestfaster-lesser-cpython3javacpythoncexplained-beats

***Q - 2475-->*** https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/5538953/easiestfaster-lesser-cpython3javacpythoncexplained-beats

***Q - 2367 -->*** https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/5539085/easiestfaster-lesser-cpython3javacpythoncexplained-beats

---


```C++ []
// Start Of Anuj Bhati aka Edwards310's Template...
#pragma GCC optimize("O2")
#include <bits/stdc++.h>

using namespace std;
#define INF 1000000005
#define FOR(a, b, c) for (int a = b; a < c; a++)
#define FOR1(a, b, c) for (int a = b; a <= c; ++a)
#define Rep(i, n) FOR(i, 0, n)

// end of Anuj Bhati's aka Edwards310's Template
class Solution {
public:
    int minimumSum(vector<int>& nums) {
        int n = nums.size();
        int ans = INF;
        Rep(i, n - 2){
            FOR(j, i + 1, n - 1){
                if(nums[i] < nums[j]){
                    FOR(k, j + 1, n){
                        if(nums[k] < nums[j])
                            ans = fmin(ans, (nums[i] + nums[j] + nums[k]));
                    }
                }
            }
        }
        return ans == INF ? - 1 : ans;
    }
};
```
```python3 []
class Solution:
    def minimumSum(self, nums: List[int]) -> int:
        n = len(nums)
        ans = float('inf')
        for i in range(n - 2):
            for j in range(i + 1, n - 1):
                if nums[i] < nums[j]:
                    for k in range(j + 1, n):
                        if nums[k] < nums[j]:
                            ans = min(ans, nums[i] + nums[j] + nums[k])


        return -1 if ans == float('inf') else ans
```
```C# []
public class Solution {
    public int MinimumSum(int[] nums) {
        int n = nums.Length;
        int ans = 1000000005;
        for(int i = 0; i < n - 2; i++)
            for(int j = i + 1; j < n - 1; ++j)
                if(nums[i] < nums[j])
                    for(int k = j + 1; k < n; ++k)
                        if(nums[k] < nums[j])
                            ans = Math.Min(ans, (nums[i] + nums[j] + nums[k]));

        return ans == 1000000005  ? -1 : ans;
    }
}
```
```Java []
class Solution {
    public int minimumSum(int[] nums) {
        int n = nums.length;
        int ans = 1000000005;
        for(int i = 0; i < n - 2; i++)
            for(int j = i + 1; j < n - 1; ++j)
                if(nums[i] < nums[j])
                    for(int k = j + 1; k < n; ++k)
                        if(nums[k] < nums[j])
                            ans = Math.min(ans, (nums[i] + nums[j] + nums[k]));

        return ans == 1000000005  ? -1 : ans;
    }
}
```
```python []
class Solution(object):
    def minimumSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        ans = float('inf')
        for i in range(n - 2):
            for j in range(i + 1, n - 1):
                if nums[i] < nums[j]:
                    for k in range(j + 1, n):
                        if nums[k] < nums[j]:
                            ans = min(ans, nums[i] + nums[j] + nums[k])


        return -1 if ans == float('inf') else ans
```
```C []
int minimumSum(int* nums, int numsSize) {
    int n = numsSize;
        int ans = 1000000005;
        for(int i = 0; i < n - 2; i++)
            for(int j = i + 1; j < n - 1; ++j)
                if(nums[i] < nums[j])
                    for(int k = j + 1; k < n; ++k)
                        if(nums[k] < nums[j])
                            ans = fmin(ans, (nums[i] + nums[j] + nums[k]));

        return ans == 1000000005  ? -1 : ans;
}
```

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
      O(n^3)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
      O(1)
# Code
```
class Solution {
    public int minimumSum(int[] nums) {
        int n = nums.length;
        int ans = 1000000005;
        for(int i = 0; i < n - 2; i++)
            for(int j = i + 1; j < n - 1; ++j)
                if(nums[i] < nums[j])
                    for(int k = j + 1; k < n; ++k)
                        if(nums[k] < nums[j])
                            ans = Math.min(ans, (nums[i] + nums[j] + nums[k]));

        return ans == 1000000005  ? -1 : ans;
    }
}
```
![th.jpeg](./images/2.jpeg)
