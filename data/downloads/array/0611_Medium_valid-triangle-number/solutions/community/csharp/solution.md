# Two Pointers

**Author:** mansoorafzal
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/6112643/](https://leetcode.com/problems/valid-triangle-number/solutions/6112643/)

---

# Complexity
- Time complexity:
$$O(n^3)$$

- Space complexity:
$$O(1)$$

# Code
```csharp []
public class Solution {
    public int TriangleNumber(int[] nums) {
        int n = nums.Length;

        if (n <= 2) {
            return 0;
        }

        Array.Sort(nums);

        int a = 0;
        int triangles = 0;

        while (a < n && nums[a] == 0) {
            a++;
        }

        while(a < n - 2) {
            int b = a + 1;

            while (b < n - 1) {
                int c = b + 1;

                while (c < n && nums[a] + nums[b] > nums[c]) {
                    triangles++;
                    c++;
                }
                
                b++;
            }

            a++;
        }

        return triangles;
    }
}
```