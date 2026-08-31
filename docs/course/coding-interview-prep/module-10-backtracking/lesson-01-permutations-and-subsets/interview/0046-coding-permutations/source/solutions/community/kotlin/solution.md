# Elegant Kotlin solution

**Author:** rugpanov
**Votes:** 5
**Link:** [https://leetcode.com/problems/permutations/solutions/1076700/](https://leetcode.com/problems/permutations/solutions/1076700/)

---

```
fun permute(nums: IntArray): List<List<Int>> {
	val result = mutableListOf<List<Int>>()
	backtrack(result, ArrayList(), nums.toMutableList())
	return result
}

private fun backtrack(result: MutableList<List<Int>>, tmpList: List<Int>, nums: MutableList<Int>) {
	if (nums.isEmpty()) {
		result.add(tmpList)
		return
	}

	for (i in nums.indices) {
		val numsNew = ArrayList<Int>(nums).also {
			it.removeAt(i)
		}

		backtrack(result, tmpList + nums[i], numsNew) // "+" creates copy of tmpList with appended nums[i] 
	}
}
 ```