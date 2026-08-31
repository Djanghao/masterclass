# scala recursions

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5467779/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5467779/)

---

```scala
object Solution {
  def validStrings(n: Int): List[String] =
    def g(n: Int): List[String] =
      if(n==1) "0" :: "1" :: Nil
      else g(n-1).flatMap{x => 
        if(x.last=='0') List(x+'1') else List(x+'0', x+'1')
      }
    g(n)

  def validStringsBits(n: Int): List[String] =
    def f(n: Int): List[Int] = 
      if(n==1) 0 :: 1 :: Nil
      else f(n-1).flatMap{x =>if(x%2==0) List((x<<1)+1) else List(x<<1, (x<<1)+1)}
    f(n).map{x =>(n-1 to 0 by -1).foldLeft(""){case (b,a) =>
        b + (((x>>a)&1)+'0').toChar
    }}
}
```