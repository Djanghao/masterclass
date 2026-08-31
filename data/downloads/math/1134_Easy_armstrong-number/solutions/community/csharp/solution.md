# C# EZ Solution /w Linq

**Author:** Stacks_And_Queues
**Votes:** 0
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/3596171/](https://leetcode.com/problems/armstrong-number/solutions/3596171/)

---

# Code
```
public class Solution {
    public bool IsArmstrong(int n) {
        int[] ia = n.ToString().Select(n => Convert.ToInt32(n) - 48).ToArray();
        double sum = 0.0;
        foreach(int num in ia)
            sum += Math.Pow(num, ia.Length);
        return (sum == n);
    }
}
```