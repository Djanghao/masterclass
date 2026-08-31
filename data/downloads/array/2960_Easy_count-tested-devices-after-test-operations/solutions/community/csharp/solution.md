# C# 1-liner with linq aggregate

**Author:** Legon2k
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4385453/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4385453/)

---

# Code
```
public class Solution {
    public int CountTestedDevices(int[] batteryPercentages) 
      => batteryPercentages.Aggregate(0, (c, p) => p-c > 0 ? ++c : c);
}
```