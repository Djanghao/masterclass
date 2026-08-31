# [scala] - postfix sum

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/2588187/](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/2588187/)

---

```scala
def smallestSubarrays(nums: Array[Int]): Array[Int] = {
  val postfixSum = new Array[Int](nums.length)
  postfixSum(nums.length - 1) = nums.last
  nums.indices.reverse.tail.foreach { i =>
    postfixSum(i) = postfixSum(i + 1) | nums(i)
  }
  nums.indices.toArray.map { i =>
    var j = i
    var sum = 0
    while(j < nums.length && sum < postfixSum(i)) {
      sum |= nums(j)
      j += 1
    }
    math.max(j - i, 1)
  }
}
```