# O(log_5(N)) solution, java

**Author:** eugene2
**Votes:** 100
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/52506/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/52506/)

---

O(log_5(N)) (base 5!) is faster than any polynomial. You need no more than 14 iterations to get the result. You just need to count how many times 5 appears in n! during multiplication in different forms: 5, 25, 125, 625, ... . when any 5 is multiplied by 2 (we have many of them) then we get 0 at the end. That's it.

    public class Solution {
        public int trailingZeroes(int n) {
            int r = 0;
            while (n > 0) {
                n /= 5;
                r += n;
            }
            return r;
        }
    }