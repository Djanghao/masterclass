# Java | easy to understand

**Author:** conchwu
**Votes:** 16
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/2706437/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/2706437/)

---

```
   public int countTime(String time) {
        if (time.equals("??:??")) return 24 * 60;
        int res = 1;

        if (time.charAt(0) == '?' && time.charAt(1) == '?') {
            res *= 24;
        } else if (time.charAt(0) == '?'){
            res *= (time.charAt(1) - '0' >= 4 ? 2 : 3);
        } else if (time.charAt(1) == '?'){
            res *= (time.charAt(0) - '0' >= 2 ? 4 : 10);
        }

        if (time.charAt(4) == '?') res *= 10;
        if (time.charAt(3) == '?') res *= 6;
        return res;
    }
```