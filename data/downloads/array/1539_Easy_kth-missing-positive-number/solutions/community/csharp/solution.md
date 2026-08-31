# ✅ Clean C# solution using Binary Search [O(log(n)), O(1)]

**Author:** KamronSaliev
**Votes:** 14
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/3263155/](https://leetcode.com/problems/kth-missing-positive-number/solutions/3263155/)

---

# Complexity
- Time complexity: $$O(log(n))$$

- Space complexity: $$O(1)$$

# Code
```
public class Solution 
{
    public int FindKthPositive(int[] arr, int k)
    {
        var left = 0;
        var right = arr.Length - 1;

        while (left <= right)
        {
            var mid = left + (right - left) / 2;

            if (arr[mid] - mid - 1 < k)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return left + k;
    }
}
```

![pleaseupvote.jpg](./images/0.jpeg)
