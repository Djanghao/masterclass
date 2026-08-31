# Scala with Ordering

**Author:** jdsalchow
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/5755952/](https://leetcode.com/problems/rank-teams-by-votes/solutions/5755952/)

---

# Intuition
Create an ordering and use it :)

# Code
```scala []
object Solution {
  def rankTeams(votes: Array[String]): String = {
    val teams = votes(0).toCharArray.toSeq
    val teamOrdering = Ordering.fromLessThan[Char]((team1, team2) =>
      teams.indices.foldLeft[Option[Boolean]](None)((result, i) => {
          val votes1 = votes.map(_.charAt(i)).count(_ == team1)
          val votes2 = votes.map(_.charAt(i)).count(_ == team2)
          result.orElse(Option.when(votes1 != votes2)(votes1 < votes2))
        })
        .getOrElse(team1 >= team2)
    )
    teams.sorted(teamOrdering.reverse).mkString
  }
}
```