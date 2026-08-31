# ✅✅|| EASY PEASY ||  C#, Java, Python || 🔥🔥🔥

**Author:** ilxamovic
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4393355/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4393355/)

---

# Intuition
The problem involves finding the maximum product of two elements in an array. The provided code suggests an approach of iteratively updating the two largest elements in the array as we traverse through it.

# Approach
1. Initialize two variables, `max1` and `max2`, to store the two largest elements in the array.
2. Iterate through the array, updating `max1` and `max2` as needed.
3. Calculate and return the product of `(max1 - 1) * (max2 - 1)`.

# Complexity
- **Time complexity:** O(n), where n is the length of the array. The algorithm makes a single pass through the array.
- **Space complexity:** O(1), as the algorithm uses a constant amount of extra space to store `max1` and `max2`.

```csharp []
public class Solution {
    public int MaxProduct(int[] nums) {
        int max1 = 0, max2 = 0;

        foreach (var num in nums) {
            if (num > max1) {
                max2 = max1;
                max1 = num;
            } else if (num > max2) {
                max2 = num;
            }
        }

        return (max1 - 1) * (max2 - 1);
    }
}
```
```python []
class Solution:
    def maxProduct(self, nums):
        max1, max2 = 0, 0

        for num in nums:
            if num > max1:
                max2 = max1
                max1 = num
            elif num > max2:
                max2 = num

        return (max1 - 1) * (max2 - 1)

```
``` Java []
import java.util.Arrays;

public class Solution {
    public int maxProduct(int[] nums) {
        int max1 = 0, max2 = 0;

        for (int num : nums) {
            if (num > max1) {
                max2 = max1;
                max1 = num;
            } else if (num > max2) {
                max2 = num;
            }
        }

        return (max1 - 1) * (max2 - 1);
    }
}
```

![image name](https://i.imgur.com/JdL5kBI.gif)

- Please upvote me !!!