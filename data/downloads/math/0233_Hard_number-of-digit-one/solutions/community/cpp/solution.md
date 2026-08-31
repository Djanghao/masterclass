# 4+ lines, O(log n), C++/Java/Python

**Author:** StefanPochmann
**Votes:** 482
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/64381/](https://leetcode.com/problems/number-of-digit-one/solutions/64381/)

---

Go through the digit positions one at a time, find out how often a "1" appears at each position, and sum those up.

**C++ solution**

    int countDigitOne(int n) {
        int ones = 0;
        for (long long m = 1; m <= n; m *= 10)
            ones += (n/m + 8) / 10 * m + (n/m % 10 == 1) * (n%m + 1);
        return ones;
    }

**Explanation**

Let me use variables `a` and `b` to make the explanation a bit nicer.

    int countDigitOne(int n) {
        int ones = 0;
        for (long long m = 1; m <= n; m *= 10) {
            int a = n/m, b = n%m;
            ones += (a + 8) / 10 * m + (a % 10 == 1) * (b + 1);
        }
        return ones;
    }

Go through the digit positions by using position multiplier `m` with values 1, 10, 100, 1000, etc.

For each position, split the decimal representation into two parts, for example split n=3141592 into a=31415 and b=92 when we're at m=100 for analyzing the hundreds-digit. And then we know that the hundreds-digit of n is 1 for prefixes "" to "3141", i.e., 3142 times. Each of those times is a streak, though. Because it's the hundreds-digit, each streak is 100 long. So `(a / 10 + 1) * 100` times, the hundreds-digit is 1. 

Consider the thousands-digit, i.e., when m=1000. Then a=3141 and b=592. The thousands-digit is 1 for prefixes "" to "314", so 315 times. And each time is a streak of 1000 numbers. However, since the thousands-digit is a 1, the very last streak isn't 1000 numbers but only 593 numbers, for the suffixes "000" to "592". So `(a / 10 * 1000) + (b + 1)` times, the thousands-digit is 1.

The case distincton between the current digit/position being 0, 1 and >=2 can easily be done in one expression. With `(a + 8) / 10` you get the number of full streaks, and `a % 10 == 1` tells you whether to add a partial streak.

**Java version**

    public int countDigitOne(int n) {
        int ones = 0;
        for (long m = 1; m <= n; m *= 10)
            ones += (n/m + 8) / 10 * m + (n/m % 10 == 1 ? n%m + 1 : 0);
        return ones;
    }

**Python version**

    def countDigitOne(self, n):
        ones, m = 0, 1
        while m <= n:
            ones += (n/m + 8) / 10 * m + (n/m % 10 == 1) * (n%m + 1)
            m *= 10
        return ones

Using `sum` or recursion it can also be a [one-liner](https://leetcode.com/discuss/44302/1-liners-in-python).

---

Old solution
---

Go through the digit positions from back to front. I found it ugly to explain, so I made up that above new solution instead. The `n` here is the new solution's `a`, and the `r` here is the new solution's `b+1`.

**Python**

    def countDigitOne(self, n):
        ones = 0
        m = r = 1
        while n > 0:
            ones += (n + 8) / 10 * m + (n % 10 == 1) * r
            r += n % 10 * m
            m *= 10
            n /= 10
        return ones

**Java**

    public int countDigitOne(int n) {
        int ones = 0, m = 1, r = 1;
        while (n > 0) {
            ones += (n + 8) / 10 * m + (n % 10 == 1 ? r : 0);
            r += n % 10 * m;
            m *= 10;
            n /= 10;
        }
        return ones;
    }

**C++**

    int countDigitOne(int n) {
        int ones = 0, m = 1, r = 1;
        while (n > 0) {
            ones += (n + 8) / 10 * m + (n % 10 == 1) * r;
            r += n % 10 * m;
            m *= 10;
            n /= 10;
        }
        return ones;
    }