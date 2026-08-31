# Scala

**Author:** kamikumakun
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindromic-substrings/solutions/3060946/](https://leetcode.com/problems/palindromic-substrings/solutions/3060946/)

---

# Complexity
- Time complexity: O(N^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N) because of counts
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countSubstrings(s: String): Int = {

        def isPalindrome(left: Int, right: Int, count: Int): Int = {
            if(left < 0 || right >= s.length || s.charAt(left) != s.charAt(right)) count
            else isPalindrome(left - 1, right + 1, count + 1)
        }

        val counts = s.indices.map{ case i => 
            isPalindrome(i, i, 0) + isPalindrome(i, i + 1, 0)
        }

        counts.sum
    }
}
```