# [Scala, Elixir] Solutions

**Author:** Pai-Mei
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/2138663/](https://leetcode.com/problems/maximum-subarray/solutions/2138663/)

---

Scala, tail recursion:

```
def maxSubArray(nums: Array[Int]): Int = {
      @tailrec
      def _maxSubArray(nums: List[Int], max: Int, sum: Int): Int =
        nums.headOption match {
          case Some(value) =>
            _maxSubArray(
              nums.tail,
              Math.max(max, sum),
              Math.max(value, sum + value)
            )
          case None => Math.max(max, sum)
        } 
      
      val list = nums.toList
      
      _maxSubArray(list.tail, list.head, list.head)
}
```

Elixir:

```
@spec max_sub_array(nums :: [integer]) :: integer
def max_sub_array(nums) do
  Enum.scan(nums, -1 * abs(hd(nums)), &max(&1 + &2, &1))
  |> Enum.max()
end
```