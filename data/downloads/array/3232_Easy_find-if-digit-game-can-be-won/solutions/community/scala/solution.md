# Scala Solution using partition just 2 lines/24 words

**Author:** hariprasath1436
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5546823/](https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5546823/)

---



# Solution1 
```
object Solution {
    def canAliceWin(nums: Array[Int]): Boolean = {
       val (sd,dd) = nums.partition(_ > 9)
       sd.sum != dd.sum
    }
}
```



# Solution2
```
object Solution {
  def canAliceWin(nums: Array[Int]): Boolean = {
    nums.partition(_ > 9) match {case (sd, dd) => sd.sum != dd.sum}
  }
}

```



