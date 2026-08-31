# Kotlin | Fluent and Readable

**Author:** pXkytUcPeX
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/5593401/](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/5593401/)

---

# Approach

Greedy strategy
1) Grab the first letter
2) Find the right-most index of that letter, and calculate how many swaps to put it at the end
2-a) If the index was 0, that means it's the center letter. We only have to move it to the middle, so half the remaining size.
2-b) Remove it, and recurse inwards on the smaller list

3) Remove the first and last letter, and recurse inwards on the smaller list
        

# Code
```
class Solution {
    fun minMovesToMakePalindrome(s: String): Int {
        
        // Convert the letters to a list in order to make changes
        val lettersList = s.toMutableList()


        // Strategy:
        // 1) Grab the first letter
        // 2) Find the right-most index of that letter, and calculate how many swaps to put it at the end
        //      2a) If the index was 0, that means it's the center letter. We only have to move it to the middle, so half the remaining size.
        //      2b) Remove it, and recurse inwards on the smaller list
        
        // 3) Remove the first and last letter, and recurse inwards on the smaller list
        
        
        fun findMinSwaps(letters: MutableList<Char>): Int {

            if (letters.size <= 1) {
                return 0
            }

            val firstLetter = letters.first()
            val indexOfLast = letters.indexOfLast { it == firstLetter }

            // Means that this one is the odd number
            if (indexOfLast == 0) {
                letters.removeAt(0)
                return (letters.size / 2) + findMinSwaps(letters)
            }

            // Number of swaps needed to get it to the end
            val swapsNeeded = letters.lastIndex - indexOfLast

            // Remove the last and first
            letters.removeAt(indexOfLast)
            letters.removeAt(0)
            
            // Recurse inwards
            return swapsNeeded + findMinSwaps(letters)
        }

        return findMinSwaps(lettersList)

    }
}

```