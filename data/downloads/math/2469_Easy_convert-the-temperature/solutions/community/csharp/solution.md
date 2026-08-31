# C# easy solution.

**Author:** aloneguy
**Votes:** 3
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/3280280/](https://leetcode.com/problems/convert-the-temperature/solutions/3280280/)

---


# Complexity
- Time complexity:83 ms.Beats 90.75% of other solutions.

- Space complexity:36.3 MB.

# Code
```
public class Solution {
    public double[] ConvertTemperature(double celsius) {
        double[] ans={celsius + 273.15,celsius * 1.80 + 32.00};
        return ans;
    }
}
```