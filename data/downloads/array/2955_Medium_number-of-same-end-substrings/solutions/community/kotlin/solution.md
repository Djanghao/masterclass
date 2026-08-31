# 100% fast solution || Frequency map

**Author:** anonymous_now
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-same-end-substrings/solutions/5930479/](https://leetcode.com/problems/number-of-same-end-substrings/solutions/5930479/)

---

# Intuition
Create a freq map at every position how many occurrence of that char occurred. And use prefix sum.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N) 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N*26) = O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun sameEndSubstringCount(s: String, queris: Array<IntArray>): IntArray {
        val freqMap = arrayListOf(IntArray(26){0})
        for(i in 0..s.length-1) {
            val prevFreq = freqMap[i].copyOf()
            prevFreq[s[i]-'a'] = prevFreq[s[i]-'a']+1
            freqMap.add(prevFreq)
        }
        var ans = IntArray(queris.size){0}
        queris.forEachIndexed{i,v->
            var sameEndCount = 0
            for(i in 0..25) {
                var a =  (freqMap[v[1]+1][i] - freqMap[v[0]][i])
                sameEndCount = sameEndCount + (a*(1+a))/2
            }
            ans[i] =sameEndCount
        }
        return ans
    }
}
// [[0,0.....0]] =>  0
// [[1,0,0.....0] => 1  a
// [1,1,......0]. => 2  b 
// [1,1,1......0]].=> 3 c
// [2,1,1......0]].=> 4 a 
// [3,1,1......0]].=> 5 a
// [3,2,1......0]].=> 6 b
```