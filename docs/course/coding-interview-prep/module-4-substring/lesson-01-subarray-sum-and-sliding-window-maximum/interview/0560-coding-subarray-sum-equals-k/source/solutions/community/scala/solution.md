# Scala solutions with immutable values

**Author:** TheAmazingLizard
**Votes:** 3
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/355455/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/355455/)

---

Before looking at the solution, my first implementation was equivalent to **Approach #3**

**Approach #3 (mutable vals)**

```scala
def subarraySum(nums: Array[Int], k: Int): Int = {
    var totals = 0
    for(i <- nums.indices) {
      var sum: Int = 0
      for(j <- i until nums.length) {
        sum = sum + nums(j)
        if(sum == k) {
          totals += 1
        }
      }
    }
    totals
  }
```
This has a time complexity of *O(n2)* and space complexity of *O(1)*, and it finished all the tests in ~500ms.

**Custom approach using slices and foldLeft (immutable vals)**

Then I wonder how to do it without mutable variables, and I ended up with the following inefficient solution.

```scala
  def subarraySum(nums: Array[Int], k: Int): Int = {
    val countFunc = countK(k)_
    val acc: Seq[Int] = (0 to nums.length).map { i =>
      nums.slice(i, nums.length).foldLeft(0 -> 0)(countFunc)._2
    }
    acc.sum
  }

  def countK(k: Int)(carry: (Int, Int), next: Int): (Int, Int) = {
    val (sum, count) = carry
    val newCount = if(sum + next == k) count + 1 else count
    sum + next -> newCount
  }
```
This method creates all possible slices/windows from size 1 to size N and for each window it folds and keeps track of the sums and a counter that will be incremented only if it matches K.
This has a time complexity of *O(n2)*, space complexity *O(n)* and a total run time of over **7 SECONDS**.
> **NOTE**:
> We can save a few seconds by making the range a parallel collection!
>  `(0 to nums.length).par.map ...`

**Approach #4 Using Map (immutable vals)**

Last I decided to implement approach #4 but avoiding mutable variables

```scala
  case class Carry(count: Int, sum: Int, map: Map[Int, Int])
    
  def subarraySum(nums: Array[Int], k: Int): Int = {
    val carryFunc = addToCarry(k)_
    val first = Carry(0, 0, Map(0 -> 1).withDefaultValue(0))
    nums.foldLeft(first)(carryFunc).count
  }
    
  def addToCarry(k: Int)(carry: Carry, value: Int): Carry = {
    val acc = carry.sum + value
    val newMap = carry.map + (acc -> (carry.map(acc) + 1))
    if(carry.map.contains(acc - k)) {
      Carry(carry.count + carry.map(acc - k), acc, newMap)
    } else {
      Carry(carry.count, acc, newMap)
    }
  }
```

In this instance, I created a `case class Carry` to keep track of the values `count`, `sum` and `map`, and these are updated on every step of the `foldLeft` just like they would in the java solution, except these are not mutated.
The run time complexity is *O(n)*, and space complexity *O(n)*. The running time of this is under 400 ms, but doesn't beat the best time.
