# Scala: tailrec Bottom-Up DP

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solutions/5562608/](https://leetcode.com/problems/filling-bookcase-shelves/solutions/5562608/)

---

# Code
```
object Solution {
  def minHeightShelves(books: Array[Array[Int]], shelfWidth: Int): Int = {
    val len = books.length
    val dp = Array.ofDim[Int](len + 1)

    @annotation.tailrec
    def minCombinedHeight(b: Int, width: Int = 0, height: Int = 0, minTotalHeight: Int = Int.MaxValue): Int = {
      lazy val newWidth = width + books(b - 1)(0)
      lazy val newHeight = height max books(b - 1)(1)
      if (b == 0 || newWidth > shelfWidth) minTotalHeight
      else minCombinedHeight(b - 1, newWidth, newHeight, minTotalHeight min (dp(b - 1) + newHeight))
    }
    
    (1 to len).foreach(i => dp(i) = minCombinedHeight(i))

    dp(len)
  }
}
```