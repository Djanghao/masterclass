# My Java SOlution Binary Search

**Author:** vRohith
**Votes:** 9
**Link:** [https://leetcode.com/problems/ugly-number-iii/solutions/843224/](https://leetcode.com/problems/ugly-number-iii/solutions/843224/)

---

The main note to remind in this problem is:
n(AUBUC) = n(A)+n(B)+n(C)-n(A\u2229B)-n(A\u2229C)-n(B\u2229C)+n(A\u2229B\u2229C)

number / lcm(a, b) is equivalent ot n(A\u2229B)........

I was stuck to get this equation and the template about binary search helped me with this idea.
https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems

```
class Solution {
    public int nthUglyNumber(int n, int a, int b, int c) {
        int left = 1;
        int right = Integer.MAX_VALUE;
        int count = 0;
        while (left < right) {
            int middle = left + (right - left) / 2;
            if (isUgly(middle, a, b, c, n)) {
                right = middle;
            }
            else
                left = middle + 1;
        }
        return left;
    }
    public boolean isUgly(long middle, long a, long b, long c, long n) {
        return (int) (middle/a + middle/b + middle/c - middle/lcm(a, b) - middle/lcm(b, c) - middle/lcm(c, a) + middle/lcm(a, lcm(b, c))) >= n;
    }
    public long gcd(long a, long b) {
        if (a == 0)
            return b;
        else return gcd(b%a, a);
    }
    public long lcm(long a, long b) {
        return a * b / (gcd(a, b)); 
    }
}
```