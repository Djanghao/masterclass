# Kotlin Lovers | Fixed Sliding Window and Rolling hash

**Author:** treat
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/4603393/](https://leetcode.com/problems/distinct-echo-substrings/solutions/4603393/)

---

# Intuition
Try all the slidding windows of size 1-> length/2. When you find a substring equal to window length add the hash to a set for unique values. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    val mod = 1000000007
    fun distinctEchoSubstrings(text: String): Int {
        var set = mutableSetOf<Int>()
        val pow = LongArray(1001){1L}
        for(i in 1..1000){
            pow[i] = (pow[i-1] * 31L) % mod
        }
        for(l in 1..text.length/2){
            var hash = 0L
            var i = 0
            var j = i + l
            var count = 0
            while(j < text.length){
                if(text[i] == text[j]){
                    hash = ((hash * 31L)%mod + (text[j] - 'a' + 1).toLong()) % mod
                    count++
                }else{
                    hash = 0L
                    count = 0
                }
                if(count == l){
                    set.add(hash.toInt())
                    count--
                    hash = (hash - ((text[i+1] - 'a' + 1).toLong() * pow[l-1])% mod )%mod
                    if(hash < 0) hash += mod
                }
                i++
                j++
            }
        }
        return set.size
    }
}
```