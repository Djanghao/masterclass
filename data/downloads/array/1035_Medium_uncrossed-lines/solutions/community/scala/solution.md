# Scala - simple solution

**Author:** rajeshsantha
**Votes:** 1
**Link:** [https://leetcode.com/problems/uncrossed-lines/solutions/651722/](https://leetcode.com/problems/uncrossed-lines/solutions/651722/)

---

```
object UncrossedLines {
  
  /****
    * 74 / 74 test cases passed.
    * Status: Accepted
    * Runtime: 500 ms
    * Memory Usage: 50.5 MB
    *
    * Runtime: 500 ms, faster than 100.00% of Scala online submissions for Uncrossed Lines.
    * Memory Usage: 50.5 MB, less than 100.00% of Scala online submissions for Uncrossed Lines.
    *
    *
    */
  def maxUncrossedLines(A: Array[Int], B: Array[Int]): Int = {
    val (aLength, bLength) = (A.length, B.length)
    val maxLinesCountArray = Array.ofDim[Int](aLength + 1, bLength + 1)

    for (i <- 1 to aLength; j <- 1 to bLength)
      maxLinesCountArray(i)(j) =  if (A(i - 1) == B(j - 1)) maxLinesCountArray(i - 1)(j - 1) + 1  else  Math.max(maxLinesCountArray(i - 1)(j), maxLinesCountArray(i)(j - 1))


    maxLinesCountArray.last.last
  }
}
```