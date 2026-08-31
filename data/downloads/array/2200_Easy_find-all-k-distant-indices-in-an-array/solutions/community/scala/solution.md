# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/3214136/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/3214136/)

---

```
object Solution {
  def findKDistantIndices(nums: Array[Int], key: Int, k: Int): List[Int] =
    nums.iterator.zipWithIndex.filter(_._1 == key).map(_._2).to(Set)
      .flatMap{i:Int => (0.max(i-k) to (i+k).min(nums.size-1))}.toList.sorted
}
```