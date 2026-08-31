# 7 lines scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/5265923/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/5265923/)

---

```scala
object Solution {
  import collection.immutable.SortedMap
  def robotWithString(s: String): String =
    def f(seq: Seq[Char], stack: Seq[Char], aMap:Map[Char,Int], acc: Seq[Char]):Seq[Char] =
      lazy val aMap1 = aMap.updatedWith(seq.head)(_.flatMap(v=>Option.when(v>1){v-1}))
      lazy val addToStack = !stack.headOption.exists(aMap.head._1 >= _) && (stack.isEmpty || aMap.head._1 < seq.head || aMap.head._1 < stack.head)
      if(seq.isEmpty) acc.reverse ++ stack
      else if(addToStack) f(seq.tail, seq.head +: stack, aMap1, acc)
      else f(seq, stack.tail, aMap, stack.head +: acc)
    f(s.toList, Nil, s.toList.groupMapReduce(identity)(_ => 1)(_ + _).to(SortedMap), Nil).mkString
}
```