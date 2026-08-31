# scala list pattern match

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-comments/solutions/6016203/](https://leetcode.com/problems/remove-comments/solutions/6016203/)

---

```scala []
object Solution {
  def removeComments(source: Array[String]): List[String] = {
    def parse(seq:List[Char], acc:List[Char]=Nil): (List[Char],Boolean) = seq match {
      case Nil => (acc.reverse,false)
      case '/' :: '/' :: t => parseInLine(t,acc)
      case '/' :: '*' :: t => parseInBlk(t,acc)
      case h :: t => parse(t,h+:acc)
    }
    def parseInBlk(seq:List[Char], acc:List[Char]=Nil): (List[Char],Boolean) = seq match {
      case Nil => (acc.reverse,true)
      case '*' :: '/' :: t => parse(t,acc)
      case _ :: t => parseInBlk(t,acc)
    }
    def parseInLine(seq:List[Char], acc:List[Char]=Nil): (List[Char],Boolean) = seq match {
      case Nil => (acc.reverse,true)
      case (nl@'\
') :: t => parse(t, nl::acc)
      case _ :: t => parseInLine(t,acc)
    }
    parse(source.mkString("\
").toList)._1.mkString.split("\
").toList.filter(_.nonEmpty)
  }
}
```