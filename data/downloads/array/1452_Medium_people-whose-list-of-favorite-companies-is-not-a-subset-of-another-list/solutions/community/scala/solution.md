# scala solution with sets

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/5152505/](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/solutions/5152505/)

---

```
object Solution {
  def peopleIndexes(favoriteCompanies: List[List[String]]): List[Int] = {
    lazy val x0 = favoriteCompanies.map(_.to(Set)).toVector
    x0.indices.filterNot(i => x0.indices.exists(j =>
        i != j && x0(i).forall(x0(j).contains)
    )).toList
  }
}
```