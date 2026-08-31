# 6 lines scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/5428385/](https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/5428385/)

---

```
object Solution {
  def decodeCiphertext(encodedText: String, rows: Int): String =
    def f(i: Int, aMap:Map[Int,Seq[Char]] ,acc:Seq[Char]):Seq[Char] =
      if(aMap(i).isEmpty) acc else f((i+1)%rows, aMap + (i -> aMap(i).tail),aMap(i).head +: acc) 
    lazy val x0 = encodedText.toList
      .grouped((encodedText.size + rows-1) / rows).toList.zipWithIndex
      .map{case (l,i) => i -> l.drop(i)}.toMap
    if(encodedText == "") "" else f(0, x0, Nil).dropWhile(_ == ' ').reverse.mkString
}
```