# 7 lines immuatble recursion (also beats 100%)

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/pancake-sorting/solutions/3115233/](https://leetcode.com/problems/pancake-sorting/solutions/3115233/)

---

# Code
```
object Solution {
  def pancakeSort(arr: Array[Int]): List[Int] = {
    def impl(seq:List[Int], n: Int, acc: List[Int]):List[Int] = {
      lazy val (d,t) = seq.splitAt(n)
      lazy val (d1,t1) = d.splitAt(d.zipWithIndex.maxBy(_._1)._2+1)
      if(n==1) acc.reverse
      else impl((d1.reverse ++ t1).reverse ++ t, n-1, (d1.size + t1.size) +: d1.size +: acc)
    }
    impl(arr.toList,arr.size,List())
  }
}

```