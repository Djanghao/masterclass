# PHP solution

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4813358/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4813358/)

---


# Code
```
class Solution {
    function gameResult($head) {
        $score = 0;
        $prev = $head;
        $head = $head->next;
        while($head){
            if($prev->val > $head->val){
                $score++;
            }elseif($prev->val < $head->val){
                $score--;
            }
            $prev = $prev->next->next;
            $head = $head->next->next;        
        }
        return $score == 0 ? "Tie" : ($score <0 ? "Odd" : "Even");
    }
}
```