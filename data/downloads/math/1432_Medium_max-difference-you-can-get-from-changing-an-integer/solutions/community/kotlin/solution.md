# Simple O(N) & O(N)

**Author:** user0122E
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/5838708/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/5838708/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Greedy + CharArray + StringBuilder + loop
- start from the highest digit

# Complexity
- Time complexity: $$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun maxDiff(num: Int): Int {
        // Time: O(N), Space: O(N)
        val base = num.toString().toCharArray()
        val sb = StringBuilder()
        var max = 0
        var curChar = ' '
        var index = 0
        // calculate max
        while(index <= base.lastIndex && base[index] == '9') {
            sb.append('9')
            index++
        }
        curChar = base.getOrNull(index) ?: ' '
        while(index <= base.lastIndex) {
            sb.append(if(base[index] == curChar) '9' else base[index])
            index++
        }
        max = sb.toString().toInt()

        sb.clear()
        index = 0
        // calculate min
        while(index <= base.lastIndex && (base[index] == '1' || base[index] == '0')) {
            sb.append(base[index])
            index++
        }
        // means the index 0 is 1
        if(index == 0) {
            curChar = base[index]
            while(index <= base.lastIndex) {
                sb.append(if(base[index] == curChar) '1' else base[index])
                index++
            }
        } 
        // means the index 0 isn't 1
        else {
            curChar = base.getOrNull(index) ?: ' '
            while(index <= base.lastIndex) {
                sb.append(if(base[index] == curChar) '0' else base[index])
                index++
            }
        }

        return max - sb.toString().toInt()
    }
}
```