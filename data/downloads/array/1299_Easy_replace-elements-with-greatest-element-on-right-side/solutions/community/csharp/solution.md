# C# one Iteration

**Author:** SaleemKassab
**Votes:** 3
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/2840278/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/2840278/)

---

```
public class Solution {
    public int[] ReplaceElements(int[] arr) {
        int rightMax = -1, newMax = 0;

            for (int i = arr.Length - 1; i >= 0; i--)
            {
                newMax = Math.Max(rightMax, arr[i]);
                arr[i] = rightMax;
                rightMax = newMax;
            }

            arr[arr.Length - 1] = -1;

            return arr;
    }
}
```