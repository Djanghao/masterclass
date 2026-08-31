# scala sliding window

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/6035010/](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/6035010/)

---

```scala []
object Solution {
  def takeCharacters(s: String, k: Int): Int = {
    lazy val initMap = "abc".iterator.map { c0 =>
      c0 -> s.zipWithIndex.foldLeft(0){case (acc,(c,i)) => acc+(c==c0).compare(false)}
    }.to(Map)
    def f(i:Int=0,j:Int=0,aMap:Map[Char,Int]=initMap, acc:Int = -1): Int = {
      lazy val incMap = aMap.updatedWith(s(i)) {case Some(v) => Some(v+1); case None => Some(1)}
      lazy val decMap = aMap.updatedWith(s(j)) {case Some(v) if v>1 => Some(v-1); case _ => Some(0)}
      if(aMap.values.min<k) f(i+1,j,incMap, acc)
      else if(j<s.length) f(i,j+1,decMap, (j-i) max acc)
      else (j-i) max acc
    }
    if(initMap.values.minOption.getOrElse(0)<k) -1
    else if(k==0) 0
    else s.length - f()
  }
}
```