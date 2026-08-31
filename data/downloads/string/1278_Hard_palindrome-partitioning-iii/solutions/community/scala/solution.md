# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/2106531/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/2106531/)

---

```

def palindromePartition(s: String, k: Int): Int = {
    def getChange(s:String, start:Int, end:Int): Int ={
      val t = s.substring(start, end + 1)
      t.substring(0, (end - start + 1) / 2).indices.foldLeft(0)((acc, i)=>{
        if(t.charAt(i) != t.charAt(t.length - 1 - i)) acc + 1
        else acc
      })
    }

    val toPal: Array[Array[Int]] = Array.ofDim[Int](s.length, s.length)
    val dp:Array[Array[Int]] = Array.ofDim[Int](k + 1, s.length)
    for{
      i <- s.length - 1 to 0 by -1
      j <- i + 1 until s.length
    } {
      toPal(i)(j) = getChange(s, i, j)
    }
    for(i <- 0 until s.length){
      dp(1)(i) = toPal(0)(i)
    }
    for{
      i <- 2 to k
      end <- i - 1 until s.length
    }{
      dp(i)(end) = (end - 1 to i - 2 by -1).foldLeft(s.length)((acc, cur)=>{
        acc min dp(i-1)(cur) + toPal(cur+1)(end)
      })
    }
    dp(k)(s.length - 1)
  }
```