# Scala Recursion solution

**Author:** r79815384
**Votes:** 1
**Link:** [https://leetcode.com/problems/strictly-palindromic-number/solutions/3107709/](https://leetcode.com/problems/strictly-palindromic-number/solutions/3107709/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Right away I know that it will be easiest to do this by converting the integer to a string.  This task also lends itself to recursion because you are doing the same thing over and over until a certain value is reduced to nothing, in this case, the quotient.

# Approach
<!-- Describe your approach to solving the problem. -->
First, we need to determine the max base, which is n-2.  Next, I created a function for readability and so that recursion could be applied. This also lets us use other bases if we need to.  

Anyways, the recursion algorithm, divides the standard value by the base to get the quotient and continues to recurse over the quotient while it is not 0 or 1.  Also, it appends the remainder to a string during each iteration which is building our base number.  Finally, once there is no quotient the whole string is returned where I just reverse the string and compare to the original string.  If the same return true otherwise false which proves if it is palindromic.  

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(log(n)) where n is the numbers 1 .. n reduced by a factor for each recursive call.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(log(n)) space grows with the number of required recursions.  Higher numbers require slightly more factoring thus more recursions. 

# Code
```
object Solution {
    def convertToBaseInt(standardValue: Int, base: Int): String = {
        if(standardValue == 0 || standardValue == 1) standardValue.toString
        else convertToBaseInt(standardValue / base, base) + (standardValue % base).toString
    }

    def isStrictlyPalindromic(n: Int): Boolean = {
        val maxBase = if(n - 2 > 2) n - 2  else 2
        // println(convertToBaseInt(n, maxBase))
        val baseValue = convertToBaseInt(n, maxBase)
        if(baseValue == baseValue.reverse){
            true
        } else false
    }
}
```