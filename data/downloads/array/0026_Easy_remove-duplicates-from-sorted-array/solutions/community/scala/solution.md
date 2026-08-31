# Scala | Functional | One Line

**Author:** vtiwari227
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/1913834/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/1913834/)

---

Code
```
      val resultingArray  = nums.distinct
      resultingArray.zipWithIndex.foreach { case(item, index) => nums(index) = item }
      resultingArray.length
```