# Kotlin Beat 80% Runtime and 100% Memory

**Author:** vongochieu115
**Votes:** 0
**Link:** [https://leetcode.com/problems/exam-room/solutions/4931324/](https://leetcode.com/problems/exam-room/solutions/4931324/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We are using the LinkedList to store the occupied seat.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class ExamRoom(n: Int) {
  val length = n
  val list = mutableListOf<Int>()
  fun seat(): Int {
    if (list.isEmpty()) {
      list.add(0)
      return 0
    }

    // Get max distance of (left edge <-> 1st element) and (last element <-> right edge)
    var distance = Math.max(list[0] - 0, length - 1 - list[list.size - 1])
    for (i in 0 until list.size - 1) {
      // find the biggest distance in the middle
      distance = Math.max(distance, (list[i + 1] - list[i]) / 2)
    }

    if (list[0] == distance) { // For example, list = [9]
      list.add(0, 0)
      return 0
    }

    // Find the range that contribute the largest distance and add the index
    for (i in 0 until list.size - 1) {
      if ((list[i + 1] - list[i]) / 2 == distance) {
        list.add(i + 1, (list[i + 1] + list[i]) / 2)
        return list[i + 1]
      }
    }
    
    // If we cannot find it, then add last.
    list.add(length - 1)
    return length - 1
  }

  fun leave(p: Int) {
    list.remove(p) // remove element not index
  }
}
/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
```