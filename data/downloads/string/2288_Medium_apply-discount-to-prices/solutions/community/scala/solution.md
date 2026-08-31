# scala 3 lines and easy solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-discount-to-prices/solutions/3357683/](https://leetcode.com/problems/apply-discount-to-prices/solutions/3357683/)

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
    def discountPrices(sentence: String, discount: Int): String = {
        def isPrice(s: String) = s.startsWith("$") && s.substring(1).matches("\\\\d+")
        def calc(num:Double) = "$" + (num - (num * discount / 100.00)).formatted("%.2f")
        sentence.split(" ").map(n => if(isPrice(n)) calc(n.substring(1).toDouble) else n).mkString(" ")
    }
}
```