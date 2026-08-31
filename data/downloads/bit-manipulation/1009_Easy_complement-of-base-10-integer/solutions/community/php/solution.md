# [PHP] Simple one line solution (faster than 100%)

**Author:** rozinko
**Votes:** 1
**Link:** [https://leetcode.com/problems/complement-of-base-10-integer/solutions/879895/](https://leetcode.com/problems/complement-of-base-10-integer/solutions/879895/)

---

```
function bitwiseComplement($N)
    {
        return bindec(str_replace(['1', '0', '2'], ['2', '1', '0'], decbin($N)));
    }
```