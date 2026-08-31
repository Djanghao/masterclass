# Recursive Scala Solution with For Comprehension

**Author:** wongphu
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/2435611/](https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/2435611/)

---

```
object Solution {
  def generateTrees(n: Int): List[TreeNode] = {
    
    def gen(start: Int, end: Int): List[TreeNode] = {
      val len = end - start + 1
      if (len == 0) {
        List(null)
      } else if (len == 1) {
        TreeNode(start, null, null) :: Nil
      } else {
        for {
          mid   <- (start to end).toList
          left  <- gen(start, mid-1)
          right <- gen(mid+1, end)
        } yield TreeNode(mid, left, right)
      }
    }
    
    gen(1, n)
  }
}
```