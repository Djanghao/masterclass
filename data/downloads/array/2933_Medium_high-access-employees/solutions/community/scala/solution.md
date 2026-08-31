# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/high-access-employees/solutions/5990461/](https://leetcode.com/problems/high-access-employees/solutions/5990461/)

---

```scala []
object Solution {
  def findHighAccessEmployees(access_times: List[List[String]]): List[String] = {
    access_times.toList.sortBy(_.last)
        .groupMap(_.head)(_.last.filter(_.isDigit)).collect{
            case (k,v) if v.map(_.toInt).sliding(3,1)
                .exists(l => l.length==3 && (l.last-l.head<100)) 
            => k 
    }.toList
  }
}
```