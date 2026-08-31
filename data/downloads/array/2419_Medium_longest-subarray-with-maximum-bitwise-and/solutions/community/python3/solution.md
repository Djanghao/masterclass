# [Java/Python 3] Longest consecutive max subarray.

**Author:** rock
**Votes:** 32
**Link:** [https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/2620515/](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/2620515/)

---

Max bitwise `AND` subarray must include maximum element(s) **ONLY**. Therefore, we only need to find the longest subarray including max only.

**Method1: Two Pass:**

```java
    public int longestSubarray(int[] nums) {
        int max = 0, longest = 1, cur = 0;
        for (int num : nums) {
            max = Math.max(max, num);
        }
        for (int num : nums) {
            if (num == max) {
                longest = Math.max(longest, ++cur);
            }else {
                cur = 0;
            }
        }
        return longest;
    }
```
```python
    def longestSubarray(self, nums: List[int]) -> int:
        mx = max(nums)
        longest = cur = 0
        for num in nums:
            if num == mx:
                cur += 1
                longest = max(longest, cur)
            else:
                cur = 0
        return longest
```

----


**Method 2: 1 Pass** - inspired by **@conchwu**

```java
    public int longestSubarray(int[] nums) {
        int max = 0, longest = 0, cur = 0;
        for (int num : nums) {
            if (num == max) {
                longest = Math.max(longest, ++cur);
            }else if (num > max) {
                max = num;
                cur = longest = 1;
            }else {
                cur = 0;
            }
        }
        return longest;
    }
```
or 
```java
    public int longestSubarray(int[] nums) {
        int max = 0, longest = 0, cur = 0;
        for (int num : nums) {
            if  (num > max) {
                max = num;
                longest = cur = 0;
            }
            cur = num == max ? ++cur : 0;
            longest = Math.max(longest, cur);
        }
        return longest;
    }
```

----

```python
    def longestSubarray(self, nums: List[int]) -> int:
        longest = cur = mx = 0
        for num in nums:
            if num > mx:
                mx = num
                longest = cur = 1
            elif num == mx:
                cur += 1
                longest = max(longest, cur)
            else:
                cur = 0    
        return longest
```
or

```python
    def longestSubarray(self, nums: List[int]) -> int:
        longest = cur = mx = 0
        for num in nums:
            if num > mx:
                mx = num
                longest = cur = 0
            cur = cur + 1 if num == mx else 0
            longest = max(longest, cur)
        return longest
```
**Analysis:**

Time: `O(n)`, space: `O(1)`.