# ✅ Easy-to-understand C# solution using Binary Search [O(log(n)), O(1)]

**Author:** KamronSaliev
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-peak-element/solutions/3291626/](https://leetcode.com/problems/find-peak-element/solutions/3291626/)

---

# Complexity
- Time complexity: $$O(log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution 
{
    public int FindPeakElement(int[] nums)
    {
        var left = 0;
        var right = nums.Length - 1;

        while (left + 1 < right)
        {
            var mid = left + (right - left) / 2;

            if (nums[mid] < nums[mid + 1])
            {
                left = mid;
            }
            else
            {
                right = mid;
            }
        }

        return nums[left] > nums[right] ? left : right;
    }
}
```

![pleaseupvote.jpg](./images/0.jpeg)
