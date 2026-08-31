# C#, O(1)

**Author:** chuletsva
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3955831/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3955831/)

---

```
public class Solution {
    public int DistMoney(int money, int children)
    {
        if (money < children) return -1;

        money -= children;

        var (div, mod) = (money / 7, money % 7);

        if (div == children)
        {
            return mod == 0 ? children : children - 1;
        }

        if (div < children)
        {
            return mod == 3 && children - div == 1 ? div - 1 : div;
        }

        return children - 1;
    }
}
```