# Detail explained solution

**Author:** kieubaduong
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5546661/](https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5546661/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to count non-special numbers in an array. This seems more like a math problem rather than an algorithm problem.

# Approach
<!-- Describe your approach to solving the problem. -->
To determine whether an integer`x`is special or non-special, we need to understand the properties of special numbers. A special number has exactly two proper divisors. 

What scenarious`x`has exactly`2`proper divisors.
> All integer has 1 is the first proper divisor

So the another proper divisor must be`sqrt(x)`, why?
If`x`has another proper $divisor \
eq 1$, call that number is`a`then we have $x = a * b$. If $a \
eq b$ then`x`has `3`proper divisors (`a`,`b`,`1`). So in this case $a = b = sqrt(x)$, and x don't have any other proper divisor.
> Another proper divisor is `sqrt(x)`, no more

How we make sure that`x`has no other proper divisor except`sqrt(x)`and`1`? The answer is`sqrt(x)`is a prime number.
> special number = prime number * prime number

So we just check all prime number from 1 to `sqrt(r)`, if any $prime\\ number * prime\\ number$ in $[l,r]$ then we have a special number.

# Complexity
- Time complexity: $$O(sqrt(n))*log(log(n)))$$

- Space complexity: $$O(1)$$

# Code
```C++ []
class Solution {
public:
    bool isPrime(int x) {
        if (x == 2) return true;
        if (x % 2 == 0) return false;

        for (int i = 3; i <= sqrt(x); i += 2) {
            if (x % i == 0) return false;
        }

        return true;
    }

    int nonSpecialCount(int l, int r) {
        int specialNumbers = 0;
        int total = r - l + 1;

        for (int i = 2; i <= sqrt(r); i++) {
            if (i * i < l) continue;
            if (isPrime(i)) specialNumbers++;
        }

        return total - specialNumbers;
    }
};
```
```Java []
class Solution {
    public boolean isPrime(int x) {
        if (x == 2) return true;
        if (x % 2 == 0) return false;

        for (int i = 3; i <= Math.sqrt(x); i += 2) {
            if (x % i == 0) return false;
        }

        return true;
    }

    public int nonSpecialCount(int l, int r) {
        int specialNumbers = 0;
        int total = r - l + 1;

        for (int i = 2; i <= Math.sqrt(r); i++) {
            if (i * i < l) continue;
            if (isPrime(i)) specialNumbers++;
        }

        return total - specialNumbers;
    }
}
```
```Kotlin []
class Solution {
    fun isPrime(x: Int): Boolean {
        if (x == 2) return true
        if (x % 2 == 0) return false

        for (i in 3..sqrt(x.toDouble()).toInt() step 2) {
            if (x % i == 0) return false
        }

        return true
    }

    fun nonSpecialCount(l: Int, r: Int): Int {
        var specialNumbers = 0
        val total = r - l + 1

        for (i in 2..sqrt(r.toDouble()).toInt()) {
            if (i * i < l) continue
            if (isPrime(i)) specialNumbers++
        }

        return total - specialNumbers
    }
}
```
