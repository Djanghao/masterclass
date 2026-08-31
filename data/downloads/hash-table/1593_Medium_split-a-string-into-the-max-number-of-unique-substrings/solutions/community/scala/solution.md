# SCALA daily solution, BEATS 100%

**Author:** egssor
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5945262/](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5945262/)

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
```scala []
object Solution {
  def maxUniqueSplit(s: String): Int = {
    
    // \u0412\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u0434\u043B\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F backtracking
    def backtrack(start: Int, seen: Set[String]): Int = {
      // \u0415\u0441\u043B\u0438 \u0434\u043E\u0448\u043B\u0438 \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0441\u0442\u0440\u043E\u043A\u0438, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u043E\u0434\u0441\u0442\u0440\u043E\u043A
      if (start == s.length) {
        return seen.size
      }

      var maxSplits = 0

      // \u041F\u044B\u0442\u0430\u0435\u043C\u0441\u044F \u0440\u0430\u0437\u0440\u0435\u0437\u0430\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u043E\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 start \u0434\u043E \u0432\u0441\u0435\u0445 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u0442\u043E\u0447\u0435\u043A
      for (i <- (start + 1) to s.length) {
        val substring = s.substring(start, i)

        // \u0415\u0441\u043B\u0438 \u043F\u043E\u0434\u0441\u0442\u0440\u043E\u043A\u0430 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u0430, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0435\u0451 \u0432 Set
        if (!seen.contains(substring)) {
          maxSplits = Math.max(maxSplits, backtrack(i, seen + substring))
        }
      }

      maxSplits
    }

    // \u0417\u0430\u043F\u0443\u0441\u043A backtracking \u0441 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0438 \u043F\u0443\u0441\u0442\u044B\u043C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E\u043C
    backtrack(0, Set())
  }
}

```