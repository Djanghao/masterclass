# Scala solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-divisible-subset/solutions/4703745/](https://leetcode.com/problems/largest-divisible-subset/solutions/4703745/)

---

# Code
```
object Solution {
    def largestDivisibleSubset(nums: Array[Int]): List[Int] = {
        val s1 = nums.sorted

        val s2 = s1.foldLeft(List.empty[(Int, Option[Int],Int)])((acc, i) =>  {
            val filt = acc.filter(i % _._1 == 0)
            if(filt.isEmpty) (i, None, 1) :: acc
            else {
                val target = filt.maxBy(_._3)
                (i, Some(target._1), target._3 + 1) :: acc
            }
        })

        val start = s2.maxBy(_._3)._1

        val dp = s2.map{case (i,o,_) => (i,o)}.toMap

        def run(current: Int): LazyList[Int] = dp.get(current) match {
            case None | Some(None) => current #:: LazyList.empty
            case Some(Some(x)) => current #:: run(x)
        }

        run(start).toList.reverse
    }
}
```