# Tail Recursive with HashMap/Set

**Author:** ASRagab
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/5881123/](https://leetcode.com/problems/sentence-similarity/solutions/5881123/)

---


# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```scala []
import scala.annotation.tailrec

object Solution {
    @tailrec
    def helper(words: List[(String, String)], pairs: Map[String, Set[String]]): Boolean =
        words match
            case Nil => true
            case (w1, w2) :: rest if w1 != w2 && !pairs(w1).contains(w2) => false
            case _ :: rest => helper(rest, pairs)
    
    def areSentencesSimilar(sentence1: Array[String], sentence2: Array[String], similarPairs: List[List[String]]): Boolean = 
        if sentence1.length != sentence2.length then false
        else
            val pairs = similarPairs
                // support bidirectional similarity
                .flatMap(ls => List(ls.head -> ls.last, ls.last -> ls.head))
                .groupBy(_._1)
                .view
                .mapValues(_.map(_._2).toSet)
                .toMap
                .withDefaultValue(Set.empty)
            
            helper((sentence1 zip sentence2).toList, pairs)
}
```