# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/subdomain-visit-count/solutions/3189564/](https://leetcode.com/problems/subdomain-visit-count/solutions/3189564/)

---

# Code
```
object Solution {
  def subdomainVisits: Array[String] => List[String] = _.map(_.split(" "))
    .flatMap{l => l(1).split("\\\\.").tails.filterNot(_.isEmpty).map(_.mkString(".") -> l(0).toInt) }
    .groupMap(_._1)(_._2).mapValues(_.sum).map{case (k,v) => s"$v $k"}.toList
}
```