# Scala - 4 approaches (bitManipulation>sorted Cluster>>HashMap>oneLiner,)

**Author:** rajeshsantha
**Votes:** 1
**Link:** [https://leetcode.com/problems/single-number-ii/solutions/700286/](https://leetcode.com/problems/single-number-ii/solutions/700286/)

---

```
  /** *
    * Runtime: 824 ms, faster than 20.00% of Scala online submissions for Single Number II.
    * Memory Usage: 51.4 MB, less than 100.00% of Scala online submissions for Single Number II.
    *
    * 11 / 11 test cases passed.
    * Status: Accepted
    * Runtime: 824 ms
    * Memory Usage: 51.4 MB
    *
    */
  def singleNumberByLibrary (nums: Array[Int]): Int = nums.find(x => nums.count(_ == x) == 1).get

  /** *
    * Runtime: 504 ms, faster than 80.00% of Scala online submissions for Single Number II.
    * Memory Usage: 52.2 MB, less than 71.43% of Scala online submissions for Single Number II.
    *
    * 11 / 11 test cases passed.
    * Status: Accepted
    * Runtime: 504 ms
    * Memory Usage: 52.2 MB
    *
    *
    */
  def singleNumberByMap (nums: Array[Int]): Int = {
    val map = scala.collection.mutable.HashMap[Int, Int]()
    for (i <- nums) if (map contains i) map(i) += 1 else map.put(i, 1)
    map.filterKeys(map(_) == 1).keys.head
  }

  /**
    * Runtime: 480 ms, faster than 100.00% of Scala online submissions for Single Number II.
    * Memory Usage: 52.1 MB, less than 71.43% of Scala online submissions for Single Number II.
    *
    * 11 / 11 test cases passed.
    * Status: Accepted
    * Runtime: 480 ms
    * Memory Usage: 52.1 MB
    *
    */
  def singleNumberByBits (nums: Array[Int]): Int = {

    var oneCounter, twoCounter, threeCounter = 0

    for (i <- nums.indices) {
      twoCounter |= oneCounter & nums(i)
      oneCounter ^= nums(i)
      threeCounter = oneCounter & twoCounter

      oneCounter &= ~threeCounter
      twoCounter &= ~threeCounter

    }
    oneCounter
  }
    /** **
    * Runtime: 492 ms, faster than 90.91% of Scala online submissions for Single Number II.
    * Memory Usage: 52.3 MB, less than 71.43% of Scala online submissions for Single Number II.
    *
    * 11 / 11 test cases passed.
    * Status: Accepted
    * Runtime: 492 ms
    * Memory Usage: 52.3 MB
    *
    */
  def singleNumberBySortedCluster (nums: Array[Int]): Int = {
    val sortedNum = nums.sorted // extra memory

    if (sortedNum.length == 0) return 0
    var pointer = 1
    while (pointer + 1 <= sortedNum.length) if (sortedNum(pointer - 1) == sortedNum(pointer + 1)) pointer += 3 else return sortedNum(pointer - 1)
    sortedNum.last
  }
  
  
  /*
  intellij runtime:
  
         singleNumberByLibrary        total run time = 0.894 seconds OR 894.0  milliseonds
         singleNumberByMap            total run time = 0.074 seconds OR 74.0   milliseonds
         singleNumberByBits           total run time = 0.01  seconds OR 10.0   milliseonds
         singleNumberBySortedCluster  total run time = 0.006 seconds OR 6.0    milliseonds

  */
```