# Kotlin || Hashmap || O(Nˆ2)

**Author:** gisbert
**Votes:** 1
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/1741638/](https://leetcode.com/problems/4sum-ii/solutions/1741638/)

---

Yet again, Kotlin to the rescue, very few lines of code:

```
fun fourSumCount(nums1: IntArray, nums2: IntArray, nums3: IntArray, nums4: IntArray): Int {
	// All of the arrays are the same size
    val n = nums1.size
    // sum + howmanytimes is found
    val leftList = mutableMapOf<Int, Int>()
    val rightList = mutableMapOf<Int, Int>()
    for(i in 0 until n) {
        for(j in 0 until n) {
            leftList[nums1[i]+nums2[j]] = leftList[nums1[i]+nums2[j]]?.let {it+1} ?: 1
            rightList[nums3[i]+nums4[j]] = rightList[nums3[i]+nums4[j]]?.let {it+1} ?: 1
        }
    }
	var many = 0
    for(i in leftList) {
        rightList[0-i.key]?.let { many+=it*i.value }
    }
    return many
}
```