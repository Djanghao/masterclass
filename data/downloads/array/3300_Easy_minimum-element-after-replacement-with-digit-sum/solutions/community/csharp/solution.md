# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5844941/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5844941/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
```javascript []
//JavaScript Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let ans = Infinity;

        for (let num of nums) {
            const digitSum = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
            ans = Math.min(ans, digitSum);
        }

        return ans;
};
```
```C++ []
//?C++ Solution
#include <bits/stdc++.h>
using namespace std;

#define FOR(a, b, c) for (int a = b; a < c; a++)
#define FOR1(a, b, c) for (int a = b; a <= c; ++a)
#define Rep(i, n) FOR(i, 0, n)
#define Rep1(i, n) FOR1(i, 1, n)
#define RepA(ele, nums) for (auto& ele : nums)

class Solution {
public:
    int minElement(vector<int>& nums) {
        int ans = INT_MAX;
        RepA (num, nums){
            int sum = 0;
            string str = to_string(num);
            RepA (c, str)
                sum += c - '0';
            ans = fmin(ans, sum);
        }
        return ans;
    }
};
```
```Python3 []
#Python3 Solution
class Solution:
    def minElement(self, nums: List[int]) -> int:
        return min(sum(int(d) for d in str(num)) for num in nums)
```
```Java []
//Java Solution
class Solution {
    public int minElement(int[] nums) {
        int n = nums.length;
        int ans = Integer.MAX_VALUE;
        for (int x : nums) {
            int sum = 0;
            while (x != 0) {
                sum += (x % 10);
                x /= 10;
            }
            ans = Math.min(ans, sum);
        }
        return ans;
    }
}
```
```C []
//C Solution

int minElement(int* nums, int numsSize) {
    int ans = INT_MAX;
    for (int i = 0; i < numsSize; ++i) {
        int sum = 0;
        while(nums[i]) {
            sum += nums[i] % 10;
            nums[i] /= 10;
        }
        ans = fmin(ans, sum);
    }
    return ans;
}
```
```python []
#Python SOlution
class Solution(object):
    def minElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        ans = float('inf')
        for num in nums:
            ans = min(ans, sum(ord(x) - ord('0') for x in str(num)))
        return ans
```
```C# []
//C# Solution
public class Solution {
    public int MinElement(int[] nums) {
        var ans = Int32.MaxValue;
        foreach (var x in nums) {
            var sum = 0;
            var num = x;
            while (num != 0) {
                sum += num % 10;
                num /= 10;
            }
            ans = Math.Min(ans, sum);
        }
        return ans;
    }
}
```

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
![th.jpeg](./images/1.jpeg)
