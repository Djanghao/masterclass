# count and interate

**Author:** pegasus_1
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/5011285/](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/5011285/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    var map = mutableMapOf<Char, Int>()

    val K = 1000000007

    var cache = mutableMapOf<String, Int>()

    fun countKSubsequencesWithMaxBeauty(s: String, k: Int): Int {
      for(i in s) {
        map[i] = map.getOrDefault(i, 0) + 1
      }
      return calculateMax(s, k)
    }

    fun calculateMax(s: String, k: Int) : Int {
        var list = mutableListOf<Char>()
        for(i in 'a'..'z') {
            if(map.containsKey(i)) {
                list.add(i)
            }
        }
        list.sortWith(compareBy {map[it]})
         var r = list.size-1
         var k1 = k
         var sum = 0
         while(r >=0 && k1 > 0) {
           sum += map[list[r]]!!
           r--
           k1--
         }
         return calculateCountMax(list, 0, sum,k, 1)
    }

    fun calculateCountMax(list: List<Char>, idx: Int, sum: Int, k: Int, mul: Int) : Int {
         if(idx >= list.size) {
            if(sum == 0 && k == 0) {
                return mul%K
                }
            else return 0
         }
         if(sum < 0 || k < 0) {
            return 0
         }
         val key = getKey(idx, sum, k)
         if(cache.containsKey(key))return cache[key]!!

         val tempMul = ((mul%K).toLong() * (map[list[idx]]!!%K).toLong())%K

         cache[key] = (calculateCountMax(list, idx+1, sum, k, mul%K)%K + 
   
         calculateCountMax(list, idx+1, sum - map[list[idx]]!!, k-1, tempMul.toInt()%K)%K)%K
        // println(cache[key]!!)

         return cache[key]!!
    }

    fun getKey(idx: Int, sum: Int, k: Int) :String {
      return "${idx}|${sum}|${k}"
    }
}
```