# A simple C# solution with O(1) memory

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/5495683/](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/5495683/)

---


# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int NumSubarrayBoundedMax(int[] nums, int left, int right) {
        int res = 0;
        for(int i = 0; i < nums.Length; i++)
        {
            if(nums[i] > right)
                continue;
            int max = int.MinValue;
            for(int j = i; j < nums.Length; j++)
            {
                max = Math.Max(max, nums[j]);
                if(max > right)
                    break;
                if(max >= left)
                    res++;
            }
        }
        return res;
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
