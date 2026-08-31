# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4242173/](https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4242173/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def buildArray(target: Array[Int], n: Int): List[String] = {
      def loop(i: Int, j: Int, res: List[String]): List[String] = 
        if (i > n || j >= target.length) res
        else if (target(j) == i) loop(i+1, j+1, res :+ "Push")
        else loop(i+1, j, res :+ "Push" :+ "Pop")
        
      loop(1, 0, List.empty)
    }
}
```