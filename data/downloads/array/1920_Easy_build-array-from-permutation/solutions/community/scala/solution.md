# Scala 3 word solution

**Author:** Sunayna-Ray
**Votes:** 3
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/1673221/](https://leetcode.com/problems/build-array-from-permutation/solutions/1673221/)

---

```
object Solution {
    def buildArray(nums: Array[Int]): Array[Int] = {
        nums.map(i=>nums(i))
    }
}
```