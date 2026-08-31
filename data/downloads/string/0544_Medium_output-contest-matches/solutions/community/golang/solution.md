# Simple recursive code in golang

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/output-contest-matches/solutions/2117091/](https://leetcode.com/problems/output-contest-matches/solutions/2117091/)

---

```go
func findContestMatch(n int) string {
  teams := make([]string, n)
  for i := 0; i < n; i++ {
    teams[i] = fmt.Sprintf("%d", i+1)
  }
  return pairUp(teams)[0]
}

func pairUp(teams []string) []string {
  if len(teams) == 1 {
    return teams
  }
  newTeams := make([]string, 0, len(teams)/2)
  i, j := 0, len(teams)-1
  for i < j {
    newTeams = append(newTeams, fmt.Sprintf("(%s,%s)", teams[i], teams[j]))
    i++
    j--
  }
  return pairUp(newTeams)
}
```