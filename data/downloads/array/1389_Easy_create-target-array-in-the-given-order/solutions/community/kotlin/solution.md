# Kotlin simple faster than 100%

**Author:** albertoastroc
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/2485356/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/2485356/)

---

	val ans = mutableListOf<Int>()

    for (i in 0..nums.indices) {

        ans.add(index[i], nums[i])

    }
    
    return ans.toIntArray()