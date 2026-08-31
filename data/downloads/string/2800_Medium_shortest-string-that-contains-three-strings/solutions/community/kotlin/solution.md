# 100% solution in kotlin

**Author:** anonymous_now
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/6051831/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/6051831/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^3) => n = avg length of string
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    private fun allPermutaions(list:List<String>):String {
        val n = list.size
        var ans = ""
        for(i in 0..n-1) {
            for(j in 0..n-1){
                for(k in 0..n-1) {
                    if(i!=j && j!=k && i!= k){
                        val f = mergeTwoString(list[i],list[j])
                        val s = mergeTwoString(f, list[k])
                        if(ans == "" || s.length<ans.length || ((s.length == ans.length && s<ans))) {
                            ans = s
                        }
                    }
                }
            }
        }
        return ans
    }
    fun mergeTwoString(a:String, b:String):String{
        val str = StringBuilder("")
        val lenA = a.length
        val lenB = b.length
        var start = 0
        var i = 0
        if(a.contains(b)) { // O(n*m) // n = a.length , m = b.length
            return a
        }
        if(b.contains(a)){
            return b
        }
        while(i<a.length) { // O(n*m)
            if(lenA-i-1 < b.length) {
                val sub = a.substring(i)
                val j = lenA-i
                if(b.substring(0,j) == sub) {
                    str.append(a.substring(0,i))
                    str.append(sub)
                    if(j<lenB) {
                        str.append(b.substring(j,lenB))
                    }
                    break
                }
            }
            i++
        }
        if(str.length == 0) {
            return if(a+b < b+a) {
                a+b
            } else {
                b+a
            }
        }
        return str.toString()
    }
    fun minimumString(a: String, b: String, c: String): String {
        return allPermutaions(listOf(a,b,c))
    }
}


// abcsbca // bca
// abcd
//  cdabcd ==> ababcd
// cdabcd
// suffix + prefix

// dp X
// sliding window X
// 2 pointer
// binary search X

// How can we solve it for 2 string lets say

// [i.....j..k] [a.....b]
// max overlap length

// [a..c..b]
//    [c.b....d]
// [a..c..b....d]

//        [a..d..b]
//    [c...a..d]
//[c...a..d..b]

// [a................b]
//      [c.....d]
// [a....c.....d....b]
```