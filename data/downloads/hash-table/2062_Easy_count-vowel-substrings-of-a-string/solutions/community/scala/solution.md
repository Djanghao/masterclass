# scala easy solution

**Author:** lyk4411
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/3238244/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/3238244/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countVowelSubstrings(word: String): Int = 
        (for {a <- 0 to word.length - 1
              b <- a + 1 to word.length
            if (word.substring(a, b).toSet == "aeiou".toSet)
        } yield 1).sum
}
```