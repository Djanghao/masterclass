# O(n) + O(1)

**Author:** Ladgertha
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1084014/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1084014/)

---

```
fun findDisappearedNumbers(nums: IntArray): List<Int> {
    val answer = mutableListOf<Int>()
    for (number in nums) {
        val newIndex = Math.abs(number) - 1
        if (nums[newIndex] > 0) {
            nums[newIndex] *= -1
        }
    }
    for (index in 1 .. nums.size) {
        if (nums[index-1] > 0) {
            answer.add(index)
        }
    }
    return answer
    }
	