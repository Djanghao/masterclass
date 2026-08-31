# [Kotlin] Simple Set

**Author:** HiMyNameIs
**Votes:** 0
**Link:** [https://leetcode.com/problems/relocate-marbles/solutions/5338134/](https://leetcode.com/problems/relocate-marbles/solutions/5338134/)

---

```
fun relocateMarbles(nums: IntArray, moveFrom: IntArray, moveTo: IntArray): List<Int> {
	val occupied = nums.toMutableSet()
    for (i in moveFrom.indices) {
		occupied -= moveFrom[i]
        occupied += moveTo[i]
	}
        
    return occupied.sorted()
}