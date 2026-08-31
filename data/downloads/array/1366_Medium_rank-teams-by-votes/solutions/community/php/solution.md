# Basic solution on PHP using uksort

**Author:** rafmjr
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/4201024/](https://leetcode.com/problems/rank-teams-by-votes/solutions/4201024/)

---

# Code
```
class Solution 
{
    /**
     * @param String[] $votes
     * @return String
     */
    function rankTeams($votes) {
        $rank = [];
        foreach ($votes as $vote) {
            foreach (str_split($vote) as $i => $team) {
                if (!array_key_exists($team, $rank)) {
                    $rank[$team] = array_fill(0, strlen($vote), 0);
                } 
                
                $rank[$team][$i]++;
            }
        }
        
        uksort($rank, function ($a, $b) use ($rank) {
            foreach ($rank[$a] as $i => $votes) {
                if ($rank[$a][$i] === $rank[$b][$i]) {
                    continue;
                }

                return $rank[$a][$i] > $rank[$b][$i] ? -1 : 1;
            }

            if ($a === $b) {
                return 0;
            }

            return $a < $b ? -1 : 1;
        });
        
        return implode('', array_keys($rank));
    }
}
```