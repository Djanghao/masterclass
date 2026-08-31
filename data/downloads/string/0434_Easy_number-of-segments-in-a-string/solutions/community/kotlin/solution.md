# Beats 100%

**Author:** sylthiel
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/3273606/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/3273606/)

---

# Intuition
I decided to count the segments like a neanderthal

# Approach
I go through the string increasing the currentSegment variable if I encounter a non-space character, and increasing the segment count otherwise. The only thing you need to realize is that '  ' (two spaces) is 0 segments.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)


I have no idea why this caveman solution beats 100%

# Code
```
class Solution {
    fun countSegments(s: String): Int {
        var currentSegment = ""
        var count = 0
        for(c in s) {
            if(c != ' ') currentSegment += c
            else{
                if(currentSegment != "") {
                    println(currentSegment)
                    count += 1
                    currentSegment = ""
                }
            }
        }
        if(currentSegment.length > 0) count++
        return count
    }
}
```