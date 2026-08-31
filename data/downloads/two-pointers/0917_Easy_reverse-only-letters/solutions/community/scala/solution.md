# Reverse Only Letters

**Author:** asifmohamed919
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/4231027/](https://leetcode.com/problems/reverse-only-letters/solutions/4231027/)

---


# Code
```
object Solution {
  def reverseOnlyLetters(s: String): String = {
    var start = 0;
    var end = s.length-1;
    var charArray = s.toCharArray;

    while(start < end) {
      if (checkPattern(charArray(start)) && checkPattern(charArray(end))) {
        swap(start, end)
        start += 1
        end -= 1
      }
      else if (!checkPattern(charArray(start))) start += 1
      else if (!checkPattern(charArray(end))) end -= 1
    }

    def checkPattern(char:Char):Boolean ={
      if (('a' <= char && char <= 'z') || ('A' <= char && char <= 'Z')) true
      else false
    }

    def swap(start:Int,end:Int): Unit = {
      var temp = charArray(start)
      charArray(start) = charArray(end)
      charArray(end) = temp
    }

    new String(charArray)
  }
}
```