# using dp memo, hashmap

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/6098538/](https://leetcode.com/problems/knight-dialer/solutions/6098538/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```scala []
object Solution {
  val moves = Map(0 -> List(4, 6), 1 -> List(6, 8), 2 -> List(7, 9), 3 -> List(4, 8), 4 -> List(0, 3, 9), 5 -> List(),
    6 -> List(0, 1, 7), 7 -> List(2, 6), 8 -> List(1, 3), 9 -> List(2, 4))

  val mod=Math.pow(10,9)+7
  def knightDialer(n: Int): Int = {
    val memo=Array.fill(10,n+1)(-1)
    ((0 to 9).map{i=>
      getCount(1,i,n,memo)
    }.sum % mod).toInt
  }

  private def getCount(idx: Int,prev:Int, n: Int,memo:Array[Array[Int]]): Long = {
    if (idx == n) 1
    else if(memo(prev)(idx)!= -1)memo(prev)(idx)
    else {
      memo(prev)(idx)=(moves(prev).map{next=> 
       getCount(idx + 1,next, n,memo)
      }.sum % mod).toInt
      memo(prev)(idx)
    }
  }
}
```