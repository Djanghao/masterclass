# Scala 20 liner solution

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/alien-dictionary/solutions/5290993/](https://leetcode.com/problems/alien-dictionary/solutions/5290993/)

---


# Code
```
@annotation.nowarn object Solution {
    def alienOrder(words: Array[String]): String = {
        val edges = collection.mutable.Map.empty[Char, Set[Char]]
        words.flatMap(_.toSeq).distinct.foreach(u => edges(u) = Set.empty)        
        for {
            (a, b) <- words.zip(words.tail)
            l = a.length min b.length
            mismatch = (0 until l).find(i => a(i) != b(i))
        } mismatch match {
            case None => if a.length > b.length then return ""
            case Some(i) => edges(a(i)) += b(i)
        }        
        val inDegree = edges.map((u, _) => u -> edges.values.count(_.contains(u)))

        def topologicalSort(q: List[List[Char]]): Option[String] = q match {            
            case Nil :: rest => Option(rest.flatten.mkString.reverse).filter(_.size == edges.size)
            case Nil         => topologicalSort(edges.keys.toList.filter(inDegree(_) == 0) :: Nil)
            case curr :: _   => topologicalSort(curr.flatMap(edges).filter(u => {inDegree(u) -= 1; inDegree(u) == 0}) :: q)
        }

        topologicalSort(Nil).getOrElse("")
    }
}
```