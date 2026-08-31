# 🐌 C#

**Author:** user7166Uf
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/2166422/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/2166422/)

---

```
public class Solution {
    public int SumBase(int n, int k)
    {
        int sum = 0;
        while (n > 0)
        {
            sum += n % k;
            n /= k;
        }

        return sum;
    }
}
```