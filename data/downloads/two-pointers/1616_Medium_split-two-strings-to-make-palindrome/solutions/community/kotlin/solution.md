# Simple Kotlin Solution

**Author:** treat
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/3571713/](https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/3571713/)

---

# Intuition
Take one string. Find a prefix or sufix in another string that makes it help to become a string. If can't do that, try with another string. Still can't then return false
# Approach
***Main String*** - The string where we are trying to find the palindrome. 
***Substitute string*** - The string that will provide the sufix or prefix to help it become a palindrome *(Like its better half, soul mate :D)*

Swithc and repeat the same steps with other string

# Complexity
- Time complexity:
Best case - First string and first substitution you find palindrome
Worst case - You don't find palindrome. Then we have iterated both the strings twice. That is 4 * N = O(N)

- Space complexity:
Its an inplace check with 2 pointers. O(1)

# Code
```
class Solution {
    fun checkPalindromeFormation(a: String, b: String): Boolean {
        return regularCheck(a,b) || regularCheck(b,a)
    }

    fun regularCheck(main: String, sub: String) : Boolean {
        var i = main.lastIndex/2
        var j = (main.lastIndex+1)/2

        while(i> -1 && j < main.length){
            if(main[i]== main[j]){
                i--
                j++
            } else {
                return replaceCheck(main, sub, i, j) || replaceCheck(sub, main, i, j)
            }
        }
        return true
    }

    fun replaceCheck(iString: String, jString: String, i: Int, j: Int): Boolean{
        var i = i
        var j = j
        while(i > -1 && j < jString.length){
            if(iString[i]==jString[j]){
                i--
                j++
            } else {
                return false
            }
        }
        return true
    }
}
```