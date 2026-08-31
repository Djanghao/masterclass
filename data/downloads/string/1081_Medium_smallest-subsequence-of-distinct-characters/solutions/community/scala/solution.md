# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/3675384/](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/3675384/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def smallestSubsequence(s: String): String = {
    val stack = scala.collection.mutable.Stack[Char]()
    val lastInd = s.zipWithIndex.groupBy(_._1).mapValues(n => n.map(_._2).max)
    val seen = Array.ofDim[Int](256)
    for ((char, ind) <- s.zipWithIndex) {
      if (seen(char) == 0) {
        seen(char) = 1
        while (stack.nonEmpty && stack.top > char && lastInd(stack.top) > ind) {
          seen(stack.pop) = 0
        }
        stack.push(char)
      }
    }
    stack.mkString.reverse
  } 
}
```