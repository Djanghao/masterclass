# Minimal Kotlin solution using HashSet

**Author:** mexler
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1895454/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1895454/)

---

````
    fun divideArray(nums: IntArray): Boolean {
        
        val set = HashSet<Int>() 
        
        nums.forEach{
            if(!set.add(it)) set.remove(it)
        }
        
        return set.isEmpty()
    }
````
