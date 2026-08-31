# Simple and clever KOTLIN and JAVA solution using 5 divisors - beats 100%

**Author:** anlk
**Votes:** 2
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/6045929/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/6045929/)

---

# Intuition
Trailing zeroes in a number result from multiplying factors of 10. Since  10=2\xD75, the number of trailing zeroes is determined by the number of pairs of factors of 2 and 5 in n!. 

In factorials, there are always more factors of 2 than 5, so the number of trailing zeroes is determined by the count of 5s in the prime factorization of n!.

To count the factors of 5, we count how many multiples of 5, 25, 125, etc., are less than or equal to n. Each contributes additional 5s to the factorization.

# Approach
- Initialize a counter count to store the number of trailing zeroes.
- Start with divisor=5 and repeatedly divide n by divisor, adding the quotient to count.
- Continue until divisor>n.

# Complexity
- Time complexity:  $$O(log5(n))$$ as the divisor grows exponentially.

- Space complexity: $$O(1)$$ as we use only a few variables.

# Code
```Kotlin []
class Solution {
    fun trailingZeroes(n: Int): Int {
        var count = 0
        var divisor = 5
        var current = n
        while (current / divisor > 0) {
            count += current / divisor
            divisor *= 5
        }
        return count
    }
}
```

```Java []
class Solution {
    public int trailingZeroes(int n) {
        int count = 0;
        int divisor = 5;
        while (n / divisor > 0) {
            count += n / divisor;
            divisor *= 5;
        }
        return count;
    }
}
```