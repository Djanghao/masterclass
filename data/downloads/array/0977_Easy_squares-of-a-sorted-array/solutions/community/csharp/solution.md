# C# concise O(n) solution

**Author:** fracta11
**Votes:** 24
**Link:** [https://leetcode.com/problems/squares-of-a-sorted-array/solutions/1783139/](https://leetcode.com/problems/squares-of-a-sorted-array/solutions/1783139/)

---

C# doesn't get enough love here, but here's a fairly simple/intuitive example of a concise one pass solution using C#

```
    public int[] SortedSquares(int[] nums) {
        var arr = new int[nums.Length];
        int begIndex = 0;
        int endIndex = nums.Length-1;
        int end = endIndex;
        while (begIndex <= endIndex)
            arr[end--] = Math.Abs(nums[endIndex]) > Math.Abs(nums[begIndex])
                ? nums[endIndex] * nums[endIndex--]
                : nums[begIndex] * nums[begIndex++];
        return arr;
    }
```