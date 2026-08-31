# [Kotlin] IntArray Solution

**Author:** lbrown26
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-subsets/solutions/2362231/](https://leetcode.com/problems/word-subsets/solutions/2362231/)

---

~~~
class Solution {
    fun wordSubsets(words1: Array<String>, words2: Array<String>): List<String> {
        var array1 = IntArray(26)
        var ans = mutableListOf<String>()
        for (word in words2){
            var temp = IntArray(26)
            for (char in word){
                val curr = char - 'a'
                array1[curr] = if(array1[curr]> ++temp[curr]) array1[curr] else temp[curr]
            }
        }
        for( word in words1){
            var word1Arr = IntArray(26)
            for(chr in word){
                word1Arr[chr - 'a']++
            }
            var i =0
            var add = true
            for(i in (0..25)){
                if(word1Arr[i]< array1[i]){
                    add = false
                    break
                }
            }
            if(add)ans.add(word)
        }
        return ans 
    }
}