# Scala, functional, concise

**Author:** vertuli
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-permutation-ii/solutions/4576227/](https://leetcode.com/problems/palindrome-permutation-ii/solutions/4576227/)

---

```scala
object Solution {
    def generatePalindromes(s: String): List[String] = {
        var charCnts: Map[Char, Int] = s.groupMapReduce(identity)(_ => 1)(_ + _)
        var oddCharCntCnt = charCnts.count { case (c, cnt) => cnt % 2 == 1 }
        
        // palindrome length is either even with no odd charCnts or odd with exactly one odd charCnt
        if (!((s.length % 2 == 0) && (oddCharCntCnt == 0)) && !((s.length % 2 == 1) && (oddCharCntCnt == 1))) {
            List.empty[String]
        } else {
            // get the optional char with an odd count as the mid character
            val mid: Option[Char] = charCnts.collectFirst { case (char, cnt) if cnt % 2 == 1 => char }
            
            // get the charCnts used to construct the first half
            val firstHalfCharCnts = charCnts.collect { case (char, cnt) if cnt > 1 => (char, cnt / 2) } 
            
            // build all permutations of first half of palindrome using all chars (with evenCnts (reduced by one)
            permutate(List.empty[Char], firstHalfCharCnts).map(half => ((half ++ mid ++ half.reverse).mkString))
        }   
    }
    
    private def permutate(curr: List[Char], charCnts: Map[Char, Int]): List[List[Char]] = {
        if (charCnts.isEmpty) {
            List(curr)
        } else {
            charCnts.map {
                case (char, cnt) if cnt > 1 => permutate(char +: curr, charCnts.updated(char, cnt - 1))
                case (char, cnt) if cnt == 1 => permutate(char +: curr, charCnts - char)
            }.reduce(_ ++ _)
        }
    }
}
```