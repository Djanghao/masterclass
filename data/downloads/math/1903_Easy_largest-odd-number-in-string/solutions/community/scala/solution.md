# scala one line solution

**Author:** lyk4411
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-odd-number-in-string/solutions/2036357/](https://leetcode.com/problems/largest-odd-number-in-string/solutions/2036357/)

---

```
 
 def largestOddNumber(num: String): String = {
    num.reverse.dropWhile(n => n.toInt % 2 == 0).reverse
  }
```