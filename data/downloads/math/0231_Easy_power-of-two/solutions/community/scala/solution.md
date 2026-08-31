# Simple Scala solution

**Author:** muthiendia
**Votes:** 3
**Link:** [https://leetcode.com/problems/power-of-two/solutions/1264144/](https://leetcode.com/problems/power-of-two/solutions/1264144/)

---

```object Solution {
    def isPowerOfTwo(n: Int): Boolean = {
         if(n<=0) false else return (n & (n-1))==0
    }
}