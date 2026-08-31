# scala solution

**Author:** tanel3203
**Votes:** 3
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/2541215/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/2541215/)

---

```
    def subtractProductAndSum(n: Int): Int = {
        val list = n.toString.split("").map(_.toInt)
        list.product - list.sum
    }