# java 100%/100% w/ comments

**Author:** carti
**Votes:** 20
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/407604/](https://leetcode.com/problems/armstrong-number/solutions/407604/)

---

```java
public boolean isArmstrong(int N) {
        //number of digits in N
        int k = (int) (Math.log10(N) + 1);
        //temporary variable (so we dont modify N)
        int x = N;
        //to hold sum
        int sum = 0;
        //get each digit
        while (x != 0) {
            //add this digit^k to sum
            sum += Math.pow(x % 10, k);
            //get next digit
            x /= 10;
        }
        return sum == N;
    }
```