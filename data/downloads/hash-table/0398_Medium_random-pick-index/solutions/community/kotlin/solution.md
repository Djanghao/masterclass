# Brute force

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/random-pick-index/solutions/890603/](https://leetcode.com/problems/random-pick-index/solutions/890603/)

---

```
class Solution(val nums: IntArray) {
    
    val map: HashMap<Int, ArrayList<Int>> = HashMap()
    val random = java.util.Random()
    init {
        for (i in nums.indices) {
            map.computeIfAbsent(nums[i]) { ArrayList<Int>() }.add(i)
        }
    }
    
    fun pick(target: Int): Int {
        val values = map[target]!!
        return values[random.nextInt(values.size)]
    }

}
/**

    KEY TERMS
    -----------
    Array of possible duplicates.
    Return idx's of picks
    The idx's should have equal probablity
    
    BRUTE FORCE
    -----------
    Store array in hashmap as <int, list of idx's>
    For every pick call
        - return random from the list values
            - find a random index in the list
            - return that idx's value
    1 : [0]
    2 : [1]
    3 : [2, 3, 4]

**/
```