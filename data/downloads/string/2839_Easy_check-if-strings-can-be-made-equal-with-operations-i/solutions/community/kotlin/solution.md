# Kotlin: O(n) solution using HashSet and index

**Author:** durve
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/5898554/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/5898554/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
if the distance between the current index and the swapable index is 2, we should check for a swapable character that is 2 away. If that does not match the char at the current index in s2 fail fast.

# Approach
<!-- Describe your approach to solving the problem. -->
Initial condition, s1 and s2 are the same length.

Using a string builder we construct a new string that we can compare the characters at the end to ensure we have a matching string. When appending characters to the string builder in the order that should match s2.
The index loops over the values of s1 and s2. when there is a mismatch, we check for the end of the string before using the s1[index+2] value for comparison. When an s1[index+2] char matches s2[index] we consider that a swap index and add it to the hashSet. 
For each iteration, when selecting the current char we check for the index in the hashset. If present we select the index - 2 char since it was swapped with that char. 
At the end we convert the string builder to a string and compare with the chars in s2 for the final result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```kotlin []
class Solution {
    fun canBeEqual(s1: String, s2: String): Boolean {
        if (s1.lastIndex != s2.lastIndex) {
            return false
        }

        var index = 0 
        val stringBuilder = StringBuilder()
        val swappedIndex = mutableSetOf<Int>()
        while (index <= s1.lastIndex) {
            var currentChar = if (swappedIndex.contains(index) && (index - 2 >= 0)) { s1[index-2] } else { s1[index] }            
            if (currentChar != s2[index]) {
                if(index + 2 <= s1.lastIndex && s1[index+2] == s2[index]) {
                    swappedIndex.add(index+2)
                    currentChar = s1[index+2]
                } else {
                    return false
                }
            }            

            stringBuilder.append(currentChar)    
            index = index.inc()            
        }              
        println(stringBuilder.toString())
        return stringBuilder.toString() == s2
    }
}
```