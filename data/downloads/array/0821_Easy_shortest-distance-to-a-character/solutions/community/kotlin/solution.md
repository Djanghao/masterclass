# Kotlin Best Solution

**Author:** progp
**Votes:** 5
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/4385425/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/4385425/)

---


# Code
```
import kotlin.math.min

class Solution {
    fun shortestToChar(s: String, c: Char): IntArray {
	// tracks postitions of occurences of the character c in string s
        var positions = mutableListOf<Int>()
		
        var ans = mutableListOf<Int>()
        
        for(i in 0..s.length-1){
            if(s[i]==c)
                positions.add(i)
        }
		
	// cannot explain this xD
        positions.add(-1)
        
	// position of left occurence of c in s
        var left = -1
		
	// position of right occurence of c in s
        var right = positions.removeAt(0)
		
	// left distance
        var ld : Int
		
	// right distance
        var rd : Int
        
        for(i in 0..s.length-1){
            ld = Int.MAX_VALUE
            rd = Int.MAX_VALUE
            if(left!=-1)
                ld = i-left
            if(right!=-1)
                rd = right-i
            ans.add(min(ld, rd))
            
            if(i==right){
                left = right
                right = positions.removeAt(0)
            }
        }
        
        return ans.toIntArray()
    }
}
```