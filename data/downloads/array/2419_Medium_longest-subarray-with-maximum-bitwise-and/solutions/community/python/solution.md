# 🚀 count longest subarray with max element + MEME😜

**Author:** HarshitMaurya
**Votes:** 117
**Link:** [https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/2620481/](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/2620481/)

---

* The **Bitwise AND** of two different numbers will **always** be **strictly less** than the **maximum** of those **two numbers**
* so the longest subarray with max bitwise AND would be the **subarray containing only the max numbers**

**Example :**
1.   count length of the subarray where **only** maximum number is **included**

1.  Example Testcase : [1,3,4,5,5,5,6,7, **8,8,8,8** ]
 
1.  Ans : **`4 `**



Java:

```
class Solution {
    public int longestSubarray(int[] nums) {
        int result = 0, length = 0, max = 0;
        for (int ele : nums) {
            max = Math.max(max, ele);
        }

        for (int ele : nums) {
            if (ele == max) {
                result = Math.max(result, ++length);
            } else length = 0;
        }
        return result;
    }
}
```

C++:
```
        int longestSubarray(vector<int> &nums)
        {
            int x = *max_element(nums.begin(), nums.end());
            int ans = 0, len = 0;
            for (int ele: nums)
            {
                if (ele == x) ans = max(ans, ++len);
                else len = 0;
            }
            return ans;
        }
```

Python3:

```
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        max_n = max(nums)
        return max(len(list(it)) for n, it in groupby(nums) if n == max_n)
```

**Meme :**

![image](./images/0.jpeg)



