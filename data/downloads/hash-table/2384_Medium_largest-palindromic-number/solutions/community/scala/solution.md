# Easy Scala Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-palindromic-number/solutions/5256217/](https://leetcode.com/problems/largest-palindromic-number/solutions/5256217/)

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
    def largestPalindromic(num: String): String = {
        val freq = num.groupBy(identity).view.mapValues(_.length).toMap
        var half = List.empty[Char]
        var middle = Option.empty[Char]

        for ((digit, count) <- freq.toSeq.sortBy(-_._1.toInt)) {
            if (count % 2 == 1) {
                if (middle.isEmpty || digit > middle.get) {
                    middle = Some(digit)
                }
            }
            half = half ::: List.fill(count / 2)(digit)
        }
        val firstHalf = half.dropWhile(_ == '0').mkString
        val palindrome = if (firstHalf.nonEmpty) {
            firstHalf + middle.getOrElse("") + firstHalf.reverse
        } else {
            middle.getOrElse("0").toString
        }

        palindrome
    }
}
```