# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/4487385/](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/4487385/)

---

# Code
```
class Solution {
    fun maxValueAfterReverse(nums: IntArray): Int {
        var p = Pair(Int.MAX_VALUE, Int.MIN_VALUE)
        return nums.drop(1)
                     .foldIndexed(Pair(0,0)) { i, acc, n ->
                                  p = Pair( min(p.first, max(n, nums[i])),
                                            max(p.second, min(n, nums[i])) )
                                  val diff = abs(n - nums[i])
                                  Pair( acc.first + diff,
                                        max(max(acc.second, abs(nums[0]-n)-diff), abs(nums.last()-nums[i])-diff) )
                    }.let { it.first + max(it.second, 2*(p.second-p.first)) }
    }             
}
```