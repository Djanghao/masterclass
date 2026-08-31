# Java | 2 Approaches

**Author:** nadaralp
**Votes:** 11
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/3084828/](https://leetcode.com/problems/alternating-digit-sum/solutions/3084828/)

---

One approach is top cast the number to string so we can iterate over it easily.

# Code
```
class Solution {
    public int alternateDigitSum(int n) {
        String s = String.valueOf(n);
        int factor = 1;
        int res = 0;

        for (char chr : s.toCharArray()) {
            res += (Character.getNumericValue(chr) * factor);
            factor *= -1;
        }
        return res;
    }
}
```

# Approach 2

Another approach is to itearte over the number without casting.

```
class Solution {
    public int alternateDigitSum(int n) {
        int exp = (int)Math.log10(n);
        int factor = 1;
        int res = 0;

        while (n > 0) {
            int mostSignificant = n / (int)Math.pow(10, exp);
            res += mostSignificant * factor;
            n -= mostSignificant * Math.pow(10, exp);

            exp--;
            factor *= -1;
        }
        return res;
    }
}
```