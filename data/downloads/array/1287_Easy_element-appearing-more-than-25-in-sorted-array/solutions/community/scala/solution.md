# ✅ Very simple recursive solution, follow best practices of Scala

**Author:** user6828v
**Votes:** 2
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4389767/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4389767/)

---

# Approach
**Recursive solution:**

+ No loop
+ No vars declaration
+ Functional style


# Complexity
**Time complexity:** O(n)

**Space complexity:** O(1)

# Code
```
object Solution {
  def findSpecialInteger(arr: Array[Int]): Int = {
    val dist = (arr.length * 0.25).toInt
    def findFrom(i: Int): Int = {
       if (arr(i) == arr(i + dist)) arr(i) else findFrom(i + 1)
    }

    findFrom(0)
  }
}
```