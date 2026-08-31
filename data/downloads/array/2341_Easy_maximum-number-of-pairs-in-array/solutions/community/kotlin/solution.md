# Simple Kotlin Solution EXPLAINED || HashMap || Divide & Mod

**Author:** PoeticIvy302543
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/2296345/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/2296345/)

---

```
    fun numberOfPairs(nums: IntArray): IntArray {
		// get count of each number
        val hashMap = HashMap<Int, Int>()
        for (i in nums) {
            if (hashMap.containsKey(i)) hashMap[i] = hashMap[i]!!+1
            else hashMap[i] = 1
        }
		
        val array = IntArray(2)
        for (i in hashMap.keys) {
			// get num of pairs you can make
            array[0]+=hashMap[i]!!/2
			// if count is odd, then add one to the leftover
            array[1]+=hashMap[i]!!%2
        }
        return array
    }
```