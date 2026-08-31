# [Java/C++/Python] Straight Forward Solution

**Author:** lee215
**Votes:** 171
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2758216/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2758216/)

---

# **Explanation**
While the current sum of digits is bigger than `target`,
we do `n = n // 10 + 1`
Take example of `n = 123456`, the process is
**123456** -> **12346**0 -> **1235**00 -> **124**000 -> **13**0000 -> **2**000000

We find the valid `n` with digits sum no bigger than `target`,
then we return the final value of `n` minus its original value `n0`.
<br>

# **Complexity**
Time `O(lognlogn)`
Space `O(1)`
<br>

**Java**
```java
    private int sum(long n) {
        int res = 0;
        while (n > 0) {
            res += n % 10;
            n /= 10;
        }
        return res;
    }

    public long makeIntegerBeautiful(long n, int target) {
        long n0 = n, base = 1;
        while (sum(n) > target) {
            n = n / 10 + 1;
            base *= 10;
        }
        return n * base - n0;
    }
```
**C++**
```cpp
    int sum(long long n) {
        int res = 0;
        while (n) {
            res += n % 10;
            n /= 10;
        }
        return res;
    }

    long long makeIntegerBeautiful(long long n, int target) {
        long long n0 = n, base = 1;
        while (sum(n) > target) {
            n = n / 10 + 1;
            base *= 10;
        }
        return n * base - n0;
    }
```
**Python**
```py
    def makeIntegerBeautiful(self, n, target):
        n0 = n
        i = 0
        while sum(map(int, str(n))) > target:
            n = n // 10 + 1
            i += 1
        return n * (10 ** i) - n0
```
