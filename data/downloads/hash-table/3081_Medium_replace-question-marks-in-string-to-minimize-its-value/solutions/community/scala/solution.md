# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4948967/](https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/solutions/4948967/)

---

```
object Solution {
  import collection.immutable.TreeSet
  def minimizeStringValue(s: String): String = {
    lazy val freqs:Map[Char,Int] = ('a' to 'z').map(_ -> 0).to(Map) ++ s.groupMapReduce(identity)(_ => 1)(_ + _)
    lazy val ts = freqs.toSeq.filterNot(_._1 == '?').map{case (c,f) => f -> c}.to(TreeSet)
    lazy val repl:Seq[Char] = (0 until freqs.getOrElse('?',0)).foldLeft((ts,List.empty[Char])){case ((set,list),_) =>
      lazy val (hf,hv) = set.head
      (set.tail + ((hf+1,hv))) -> (hv +: list)
    }._2.sorted
    s.foldLeft((repl,List.empty[Char])){
      case ((seq:Seq[Char],acc:Seq[Char]),'?') => (seq.tail, (seq.head +: acc))
      case ((seq,acc),c) => seq -> (c +: acc)
    }._2.reverse.mkString
  }
}
```