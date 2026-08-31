# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-champion-ii/solutions/6086793/](https://leetcode.com/problems/find-champion-ii/solutions/6086793/)

---

```php []
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @return Integer
     */
    function findChampion($n, $edges) {
        // 1. Create a graph.
        // 2. Iterate over all nodes. For each node, remove all the weaker teams (DFS).
        // 3. At the end, at least one team will remain in the graph:
        //      Case A) One team only: it's the winner.
        //      Case B) Several teams: winner undefined.

        // Corner case: one single team. It's the winner.
        if ($n === 1) {
            return 0;
        }

        // Corner case: less edges than teams-1. Means that some teams are not connected.
        if (count($edges) < $n-1) {
            return -1;
        }

        $this->strongerThan = array_fill(0, $n, []);
        foreach ($edges as [$strong , $weak]) {
            $this->strongerThan[$strong][] = $weak;
        }

        foreach (range(0, $n-1) as $team) {
            $this->dfs($team);
        }

        return count($this->strongerThan) === 1
            ? array_key_first($this->strongerThan)
            : -1;
    }

    function dfs($team) {
        if (!isset($this->strongerThan[$team])) {
            // Already defeated
            return;
        }

        if ($this->strongerThan[$team] === []) {
            // Not stronger than any other outstanding team
            return;
        }

        // Remove weaker teams
        foreach ($this->strongerThan[$team] as $weakerTeam) {
            $this->dfs($weakerTeam);
            unset($this->strongerThan[$weakerTeam]);
        }

        // Now, this team has no weaker rivals
        $this->strongerThan[$team] = [];
    }
}
```