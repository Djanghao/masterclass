# PHP solution

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game/solutions/4657375/](https://leetcode.com/problems/flip-game/solutions/4657375/)

---

# Code
```
class Solution {
    function generatePossibleNextMoves($currentState) {
        $r=[];
        $ln = strlen($currentState);
        for($i=1;$i<$ln;$i++){
            if($currentState[$i-1] == '+' && $currentState[$i] == '+'){
                $tmp = $currentState;
                $tmp[$i] = '-';
                $tmp[$i-1] = '-';
                $r[] = $tmp;
            }
        }
        return $r;
    }
}
```