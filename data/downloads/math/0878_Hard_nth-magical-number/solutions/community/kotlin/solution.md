# Beats 100% Olog(N) complexity in Kotlin/Java for the cultured!

**Author:** sinha_i_prefer
**Votes:** 0
**Link:** [https://leetcode.com/problems/nth-magical-number/solutions/6066740/](https://leetcode.com/problems/nth-magical-number/solutions/6066740/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First thoughs after looking at Binary search in the tagged topics was about the scope of the Binary search, a.k.a left and right pointers, the Binary Search goes from 1 to the product of n to the minimum of a and b, as the other number must have multiples between it for most cases, reducing the actual answer.

# Approach
<!-- Describe your approach to solving the problem. -->
While the search goes from left to right, at mid, we calculate the number of *Distinct* factors of a and b until the number. This is tracked in the count variable, which adds the factors of a and b and subtracts it from the factors of the LCM of a and b (The multiples of LCM are usually the repeated factors). If a match for n is found with the count, or if count is higher than n, we eliminate the right half in the binary search (we don't do the mid-1 as one of the many numbers satisfying the equal to condition may be the answer we're looking for). And if the count is lesser than the n, we eliminate the left half. In the end, we're left with the left pointer as the result.
Then it's simple conversions to Mod and LCM functions.

# Complexity
- Time complexity:
- O(log(min(a,b) * n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity:
- O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun nthMagicalNumber(n: Int, a: Int, b: Int): Int {
        val MOD = 1_000_000_007
        var left: Long = 1
        var right: Long = 1L * minOf(a, b) * n

        while (left < right) {
            val mid = left + (right - left) / 2
            val count = mid / a + mid / b - mid / lcm(a, b)

            if (count >= n) {
                right = mid 
            } else {
                left = mid + 1 
            }
        }

        return (left % MOD).toInt()
    }

    fun lcm(a: Int, b: Int): Long {
        return 1L * a * b / gcd(a, b)
    }
    fun gcd(a: Int, b: Int): Int {
        return if (b == 0) a else gcd(b, a % b)
    }
}
```
```java []
class Solution {
    public int nthMagicalNumber(int n, int a, int b) {
        final int MOD = 1_000_000_007;
        long left = 1;
        long right = 1L * Math.min(a, b) * n;

        while (left < right) {
            long mid = left + (right - left) / 2;
            long count = mid / a + mid / b - mid / lcm(a, b);

            if (count >= n) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return (int) (left % MOD);
    }

    private long lcm(int a, int b) {
        return 1L * a * b / gcd(a, b);
    }

    private int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}

```



