# scala code with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/4489152/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/4489152/)

---


# Approach
This Scala code defines an object Solution with a method reverseWords that takes an array of characters s (representing a string) and reverses the words in place. It first reverses the entire array to bring the words into their correct order relative to each other. Then, it iteratively finds each word (delimited by spaces) and reverses the characters within each word, so that the individual words are oriented correctly. The use of tail recursion ensures efficient and safe recursive calls without growing the call stack, a common technique in functional programming languages like Scala.

# Code
```
object Solution {
  import scala.annotation.tailrec

  def reverseWords(s: Array[Char]): Unit = {
    // 'reverseString' is a tail-recursive function that reverses the characters
    // in the array 's' between indices 'i' and 'j'.
    @tailrec
    def reverseString(i: Int, j: Int): Unit =
      if (i < j) {
        val temp = s(i)  // Temporarily store the character at index 'i'
        s(i) = s(j)      // Swap the character at 'i' with the one at 'j'
        s(j) = temp      // Place the original character at 'i' into position 'j'
        reverseString(i + 1, j - 1)  // Recursively call the function moving towards the center
      }

    // 'reverseSpace' is a tail-recursive function that finds each word in the array 's'
    // and reverses the characters within that word.
    @tailrec
    def reverseSpace(last: Int): Unit = {
      val current = s.indexOf(' ', last)  // Find the next space character after 'last'
      // Reverse the characters from 'last' to the character before 'current'
      // If 'current' is -1 (no space found), reverse until the end of the array
      reverseString(last, if (current == -1) s.length - 1 else current - 1)
      // If there is another space, recursively call 'reverseSpace' for the next word
      if (current != -1) reverseSpace(current + 1)
    }

    reverseString(0, s.length - 1)  // First, reverse the entire array
    reverseSpace(0)                 // Then, reverse each word within the array
  }
}

```