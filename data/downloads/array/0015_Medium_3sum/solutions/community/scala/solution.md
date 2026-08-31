# Scala solution

**Author:** paulymorph
**Votes:** 5
**Link:** [https://leetcode.com/problems/3sum/solutions/298498/](https://leetcode.com/problems/3sum/solutions/298498/)

---

Found no discussions for Scala solutions. Want to show you mine, that seems to be pretty idiomatic, though not as fast as imperative ones. 
Firstly we count the count for each distinct number in the incoming array.
Then we start iterating `a` and `b` throgh the numbers in ascending order.
We also should skip the case when `a` == `b` and the amount of `a`s in the initial array is `== 1`.
After that we know that `c` should be `-a - c`. Try to find it in our numbersCount and check that the amount of `c`s in the initial array fits the need (`c` can be equal to `a` or `b` or both).

If you have any enhancements, will be pleased to find them out:)
```
object Solution {
  def threeSum(nums: Array[Int]): List[List[Int]] = {
    val numbersCount = nums.foldLeft(Map.empty[Int, Int].withDefaultValue(0)) { (count, nextNumber) =>
        count + (nextNumber -> (count(nextNumber) + 1))
    }

    val uniqueNumbers = numbersCount.keys.toList.sorted

    for {
      a <- uniqueNumbers
      b <- uniqueNumbers
      if a <= b
      if a != b || numbersCount(a) > 1
      c = -a - b
      if b <= c
      candidate = List(a, b, c)
      if numbersCount(c) >= candidate.count(_ == c)
    } yield candidate
  }
}
```