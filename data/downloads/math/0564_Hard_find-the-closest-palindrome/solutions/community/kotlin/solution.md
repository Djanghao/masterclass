# Generate 5 different solutions and for each calculate the palindrome by inverting string

**Author:** user9680ru
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-closest-palindrome/solutions/4320629/](https://leetcode.com/problems/find-the-closest-palindrome/solutions/4320629/)

---

# Intuition
Palindromes happen in a few different cases. Basically 6:
1.  Single digit 9 -> 8
2.  Trivial case: invert the first half and append to the first half: 123 -> 121
3.  Increase the center-character by 1 and do the inversion: 121 -> 131
4.  Decrease the center-character by 1 and do the inversion: 121 -> 111
5.  Palindrome needs to grow by 1 digit: 11 -> 101
6.  Palindrome needs to shorten by 1 digit: 111 -> 99

# Approach
Calculate the solution to all the cases and take the one with the closest value and then if there is a tie, the smallest value. 

# Complexity
- Time complexity:
We traverse the string a constant amount of times, therefore $$O(n)$$

- Space complexity:
We store copies of the string a constant amount of times, therefore $$O(n)$$

# Code
```
 class Solution {
        fun nearestPalindromic(n: String): String {

            val number = n.toLong()
            val len: Int = n.length
            if (len == 1) return n.toLong().dec().toString()

            val center = if (len % 2 == 0) len / 2 - 1 else len / 2
            val firstHalf = n.substring(0, center + 1)

            return listOf(
                getPalindrome(firstHalf) { len % 2 == 0 } // 12321
                , getPalindrome(firstHalf.toLong().inc().toString()) { len % 2 == 0 } // 12421
                , getPalindrome(firstHalf.toLong().dec().toString()) { len % 2 == 0 } // 12221
                , 10.0.pow(len - 1).toLong().dec().toString() // 9999
                , 10.0.pow(len).toLong().inc().toString() // 100001
            )
                .map { it.toLong() }
                .filter { it != number }
                .minWith(compareBy<Long> { it.minus(number).absoluteValue }.thenBy { it })
                .toString()
        }
        
        private fun getPalindrome(firstHalf: String, even: () -> Boolean): String = when {
            even() -> firstHalf + firstHalf.reversed()
            else -> firstHalf + firstHalf.dropLast(1).reversed()
        }
        
    }
```