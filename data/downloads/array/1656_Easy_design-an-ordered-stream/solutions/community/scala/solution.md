# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/3637244/](https://leetcode.com/problems/design-an-ordered-stream/solutions/3637244/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class OrderedStream(_n: Int) {
      private val stream = Array.fill[String](_n)(null)
      private var ptr = 0

      def insert(idKey: Int, value: String): List[String] = {
        stream(idKey - 1) = value
        if (idKey != ptr + 1) return Nil
        val result = scala.collection.mutable.ListBuffer[String]()
        while (ptr < _n && stream(ptr) != null) {
          result += stream(ptr)
          ptr += 1
        }
        result.toList
      }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
```