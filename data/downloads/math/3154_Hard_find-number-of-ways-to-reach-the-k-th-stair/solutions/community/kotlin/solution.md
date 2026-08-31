# :: Kotlin :: Dynamic Programming

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5221007/](https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5221007/)

---

# Code
```
class Solution {
    fun waysToReachStair(k: Int): Int {
        val visit = HashSet<String>()

        val cache = HashMap< Triple<Int, Int, Int>, Int >()
        
        fun helper(index: Int, jump: Int, back: Int, action: Int): Int {
            if (index > k + 1) return 0
            
            val key = Triple(jump, back, action)
            if (cache.containsKey(key)) return cache.get(key)!!
            
            var ret = 0

            if (index == k) {
                ret += 1
            }
            
            if (index > 0 && action != -1){
                ret += helper(index - 1, jump, back + 1, -1)
            }
            
            var next = index + (2.0).pow(jump).toInt()
            ret += helper(next, jump + 1, back, 1)

            cache.put(key, ret)
            return ret
        }
        
        return helper(1, 0, 0, 0)
    }
}
```