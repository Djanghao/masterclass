# Scala pattern matching and replaceFirst solusions

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/3324900/](https://leetcode.com/problems/maximum-69-number/solutions/3324900/)

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
    def maximum69Number (num: Int): Int = {
        num.toString.zipWithIndex.find(_._1 == '6') match {
            case None => num
            case x => num.toString.updated(x.get._2, '9').toInt
        }
    }
}
```

OR

# Code
```
num.toString.replaceFirst("6", "9").toInt
```