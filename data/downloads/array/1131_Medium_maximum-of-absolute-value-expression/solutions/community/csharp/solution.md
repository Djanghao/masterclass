# Simple O(N) solution using 8 variables

**Author:** Shashidhar_B
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/4547775/](https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/4547775/)

---

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaxAbsValExpr(int[] arr1, int[] arr2) {
        int max1 = int.MinValue;
        int max2 = int.MinValue;
        int max3 = int.MinValue;
        int max4 = int.MinValue;
        int min1 = int.MaxValue;
        int min2 = int.MaxValue;
        int min3 = int.MaxValue;
        int min4 = int.MaxValue;

        for(int i = 0; i < arr1.Length; i++) {
            max1 = Math.Max(max1, arr1[i] + arr2[i] + i);
            min1 = Math.Min(min1, arr1[i] + arr2[i] + i);

            max2 = Math.Max(max2, arr1[i] - arr2[i] + i);
            min2 = Math.Min(min2, arr1[i] - arr2[i] + i);

            max3 = Math.Max(max3, -arr1[i] + arr2[i] + i);
            min3 = Math.Min(min3, -arr1[i] + arr2[i] + i);

            max4 = Math.Max(max4, -arr1[i] - arr2[i] + i);
            min4 = Math.Min(min4, -arr1[i] - arr2[i] + i);
        }

        return Math.Max(Math.Max(max1-min1, max2-min2), Math.Max(max3-min3, max4-min4));
    }
}
```