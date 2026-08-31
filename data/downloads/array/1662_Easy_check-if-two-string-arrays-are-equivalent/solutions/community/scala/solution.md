# Simple Scala Solution

**Author:** PritiMishra
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/1320591/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/1320591/)

---

object Solution {
    def arrayStringsAreEqual(word1: Array[String], word2: Array[String]): Boolean = {
      val new_word1 = word1.mkString("") 
      val new_word2 = word2.mkString("") 
      if(new_word1 == new_word2)    
        return true
        else false
    }
}