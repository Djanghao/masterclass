# Scala 2 one liner ways

**Author:** Sunayna-Ray
**Votes:** 4
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/1673259/](https://leetcode.com/problems/concatenation-of-array/solutions/1673259/)

---

```
object Solution {
    def getConcatenation(nums: Array[Int]): Array[Int] = {
	//Solution 1
        Array(nums, nums).flatten
	//Solution 2
        nums++nums
    }
}
```