# Efficient Binary Search solution

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/fixed-point/solutions/4879288/](https://leetcode.com/problems/fixed-point/solutions/4879288/)

---

# Code
```
public class Solution {
    public int FixedPoint(int[] arr) 
    {
        var l = 0;
        var r = arr.Length - 1;
        var index = -1;

        while (l <= r)
        {
            var m = l + (r - l) / 2;

            if (arr[m] == m)
            {
                index = m;
                r = m - 1;
            }
            else if (arr[m] > m)
            {
                r = m - 1;
            }
            else
            {
                l = m + 1;
            }
        }

        return index;
    }
}
```