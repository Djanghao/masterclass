# Scala one Line

**Author:** samadpls
**Votes:** 3
**Link:** [https://leetcode.com/problems/add-binary/solutions/3329978/](https://leetcode.com/problems/add-binary/solutions/3329978/)

---

```
object Solution {
    def addBinary(a: String, b: String): String = {
       return (BigInt(a,2)+BigInt(b,2)).toString(2)
    }
}
```