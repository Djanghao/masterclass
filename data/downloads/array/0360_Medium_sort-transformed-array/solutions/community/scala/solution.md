# Scala Solution

**Author:** unknown_500
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-transformed-array/solutions/2096354/](https://leetcode.com/problems/sort-transformed-array/solutions/2096354/)

---

```
object Solution {
    def sortTransformedArray(nums: Array[Int], a: Int, b: Int, c: Int): Array[Int] = {
        
        nums.map(x=>a*x*x+b*x+c).sorted
        
    }
}
```