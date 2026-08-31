# C# O(log(n))

**Author:** Torge
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/2947328/](https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/2947328/)

---

# Approach
1. Min set is what is required to cover set 1, set 2 or both. 
2. LCM is formula is used to calculate the number of skipped elements for the combined set.

# Complexity
- Time complexity:
O(log(n)), where n = 2 * 10^9 - Min(uniqueCnt1, uniqueCnt2)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public int MinimizeSet(int divisor1, int divisor2, int uniqueCnt1, int uniqueCnt2) {
        return Math.Max(
            GetMinCount(Lcm(divisor1, divisor2), uniqueCnt1 + uniqueCnt2),
            Math.Max(
                GetMinCount(divisor1, uniqueCnt1), 
                GetMinCount(divisor2, uniqueCnt2)));
    }

    private static int GetMinCount(long divisor, int count) {
        var lo = count;
        var hi = 2000000000; // to cover 10^9 + 10^9

        while (lo <= hi) {
            var mid = lo + (hi - lo) / 2;

            var skipped = mid / divisor;
            var remaining = mid - skipped;

            if (remaining > count) {
                hi = mid - 1;
            }
            else if (remaining < count) {
                lo = mid + 1;
            }
            else {
                var left = mid - 1;
                var leftSkipped = left / divisor;
                var leftRemaining = left - leftSkipped;

                // ensure that only the minimum value is returned
                if (leftRemaining < count) {
                    return (int)mid;
                }

                hi = left;
            }
        }

        return -1;
    }

    private static int Gfc(int a, int b)
    {
        while (b != 0)
        {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    private static long Lcm(int a, int b)
    {
        return (a / Gfc(a, b)) * (long)b;
    }
}

```