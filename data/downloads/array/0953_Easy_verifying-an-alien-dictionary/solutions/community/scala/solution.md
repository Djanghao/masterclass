# Scala Solution using sortWith Method

**Author:** andersoncliffb
**Votes:** 2
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3129441/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3129441/)

---

This solution defines a custom sort function for the alien dictionary and then uses that sort order to sort (`sortWith`) the elements in the array. If the elements in the array remain in their original order, then the elements are correctly sorted and the function returns `true`. If not, the function returns `false`. 

# Code
```
object Solution {
    def isAlienSorted(words: Array[String], order: String): Boolean = {
       words.sameElements(words.sortWith((a, b) => sortByAlien(a,b,order)))
    }

    def sortByAlien(s1: String, s2: String, order: String): Boolean = { 
        val seq1 = s1.map(x => order.indexOf(x))
        val seq2 = s2.map(x => order.indexOf(x))
        if (seq1.isEmpty) return true
        else if (seq2.isEmpty) return false
        else if (seq1.head == seq2.head) sortByAlien(s1.drop(1), s2.drop(1), order)
        else seq1.head < seq2.head
    }
}
```