# Scala shortest one line solution

**Author:** tarasbabii18
**Votes:** 8
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/1129441/](https://leetcode.com/problems/richest-customer-wealth/solutions/1129441/)

---

```
object Solution {
    def maximumWealth(accounts: Array[Array[Int]]): Int = {
        accounts.map(_.sum).max
    }
}
```