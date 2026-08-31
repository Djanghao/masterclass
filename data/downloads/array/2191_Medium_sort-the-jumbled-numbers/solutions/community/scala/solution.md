# Easy solution, beats 100% of submissions

**Author:** stefancomanita
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5530664/](https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5530664/)

---

# Intuition
This is an easy problem, we just need need a conversion method and some sorting.

# Approach
We need a method to convert from the value to the jambled value, then we create a list of touples containing the original value and the jumbled value.

Next we sort this list of touples nased on the jumbled values and return the original values in the sorted order.


# Code
```
object Solution {
    import scala.collection.mutable.ListBuffer
    
    def sortJumbled(mapping: Array[Int], nums: Array[Int]): Array[Int] = {

    val result = new ListBuffer[(Int, Int)]()
    
    for (n <- nums) {
      
      result += ((n, mapNumber(n, mapping)))
    }

    result.sortWith((f, s) => f._2 < s._2).map(e => e._1).toArray
  }

    private def mapNumber(target: Int, mapping: Array[Int]): Int = {

    if (target < 10) {
      return mapping(target)
    }

    val sb = new StringBuilder()

    for (c <- String.valueOf(target)) {

      val valueAsInt = c - '0'
      sb.append(mapping(valueAsInt))
    }

    sb.toString().toInt
  }
}
```