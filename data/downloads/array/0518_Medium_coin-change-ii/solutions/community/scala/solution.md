# Scala - DP

**Author:** rajeshsantha
**Votes:** 1
**Link:** [https://leetcode.com/problems/coin-change-ii/solutions/675602/](https://leetcode.com/problems/coin-change-ii/solutions/675602/)

---

```
object Solution {

  /** *
    * Runtime: 452 ms, faster than 81.82% of Scala online submissions for Coin Change 2.
    * Memory Usage: 50 MB, less than 90.91% of Scala online submissions for Coin Change 2.
    *
    *
    * 27 / 27 test cases passed.
    * Status: Accepted
    * Runtime: 452 ms
    * Memory Usage: 50 MB
    *
    */

def change(amount: Int, coins: Array[Int]): Int = {
    val arr = Array.fill(amount + 1)(0)
    arr(0) = 1
    for (coin <- coins;i <- coin to amount)  arr(i) += arr(i - coin)
     
    arr(amount)
 
    }
}

  /*
  output log:
  
change(5, Array(1, 2, 5)) :

            coin = 1 and i = 1 ==>   0 + 1  => arr(1) += arr(1 - 1)}	 after  => 1 + 1 	 1 1 0 0 0 0
            coin = 1 and i = 2 ==>   0 + 1  => arr(2) += arr(2 - 1)}	 after  => 1 + 1 	 1 1 1 0 0 0
            coin = 1 and i = 3 ==>   0 + 1  => arr(3) += arr(3 - 1)}	 after  => 1 + 1 	 1 1 1 1 0 0
            coin = 1 and i = 4 ==>   0 + 1  => arr(4) += arr(4 - 1)}	 after  => 1 + 1 	 1 1 1 1 1 0
            coin = 1 and i = 5 ==>   0 + 1  => arr(5) += arr(5 - 1)}	 after  => 1 + 1 	 1 1 1 1 1 1

            coin = 2 and i = 2 ==>   1 + 1  => arr(2) += arr(2 - 2)}	 after  => 2 + 1 	 1 1 2 1 1 1
            coin = 2 and i = 3 ==>   1 + 1  => arr(3) += arr(3 - 2)}	 after  => 2 + 1 	 1 1 2 2 1 1
            coin = 2 and i = 4 ==>   1 + 2  => arr(4) += arr(4 - 2)}	 after  => 3 + 2 	 1 1 2 2 3 1
            coin = 2 and i = 5 ==>   1 + 2  => arr(5) += arr(5 - 2)}	 after  => 3 + 2 	 1 1 2 2 3 3

            coin = 5 and i = 5 ==>   3 + 1  => arr(5) += arr(5 - 5)}	 after  => 4 + 1 	 1 1 2 2 3 4

            final output = 4


change(3, Array(2)):

            coin = 2 and i = 2 ==>   0 + 1  => arr(2) += arr(2 - 2)}	 after  => 1 + 1 	 1 0 1 0
            coin = 2 and i = 3 ==>   0 + 0  => arr(3) += arr(3 - 2)}	 after  => 0 + 0 	 1 0 1 0

            final output = 0


change(5, Array(2, 5)):

            coin = 2 and i = 2 ==>   0 + 1  => arr(2) += arr(2 - 2)}	 after  => 1 + 1 	 1 0 1 0 0 0
            coin = 2 and i = 3 ==>   0 + 0  => arr(3) += arr(3 - 2)}	 after  => 0 + 0 	 1 0 1 0 0 0
            coin = 2 and i = 4 ==>   0 + 1  => arr(4) += arr(4 - 2)}	 after  => 1 + 1 	 1 0 1 0 1 0
            coin = 2 and i = 5 ==>   0 + 0  => arr(5) += arr(5 - 2)}	 after  => 0 + 0 	 1 0 1 0 1 0

            coin = 5 and i = 5 ==>   0 + 1  => arr(5) += arr(5 - 5)}	 after  => 1 + 1 	 1 0 1 0 1 1

            final output = 1

   */

```