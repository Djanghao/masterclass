# ✅ Scala: using HashMap for nums2 (beats 100%/100%) (with comments!)

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/3448558/](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/3448558/)

---

# Intuition
- Note that `nums1.length` will be much more smaller that `nums2.length` as per constraints:
  ```
  1 <= nums1.length <= 1000
  1 <= nums2.length <= 10^5
  ```
- This means that we can store `nums2` in the HashMap and iterate only over `nums1`

# Approach
- Initialize a HashMap for `nums2` (since it will be bigger in the worst case)
- We will use number occurences as a value
- Regarding `add` function:
    - We need to maintain `_nums2` elements in order to get the number (HashMap key)
    - We will decrement occurences of the updated number
    - We will increment occurences of the number after adding to it

# Complexity
- Time complexity:
    - `add`: $$O(1)$$
    - `count` $$O(len(nums1))$$
- Space complexity: $$O(distinct(nums2))$$

# Code
```scala
class FindSumPairs(_nums1: Array[Int], _nums2: Array[Int]) {
  import scala.collection.mutable

  private val nums2 = new mutable.HashMap[Int, Int](10_000, mutable.HashMap.defaultLoadFactor)

  {
    _nums2.foreach(n => patch(n, 1))
  }

  private def patch(num: Int, count: Int): Unit =
    nums2.updateWith(num) {
      case Some(prev) => Some(prev + count)
      case None       => if (count < 0) None else Some(count)
    }

  def add(index: Int, `val`: Int): Unit = {
    val prevNum = _nums2(index)
    val newNum = prevNum + `val`
    
    _nums2(index) = newNum

    patch(prevNum, -1)
    patch(newNum, 1)
  }

  def count(tot: Int): Int =
    _nums1.foldLeft(0){ case (acc, n) =>
      acc + nums2.getOrElse(tot - n, 0)
    }

}
```