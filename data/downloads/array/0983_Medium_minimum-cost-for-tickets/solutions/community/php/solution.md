# PHP solution faster than 100% @8ms

**Author:** MSHDST
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/1392314/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/1392314/)

---

Derived from https://leetcode.com/problems/minimum-cost-for-tickets/discuss/227130/Java-DP-Solution-with-detailed-comment-and-explanation
```
class Solution {

    /**
     * @param Integer[] $days
     * @param Integer[] $costs
     * @return Integer
     */
    function mincostTickets($days, $costs) {
        
        $costTillDate = [];
        
        for($i=1; $i<=end($days); $i++){
            if(!in_array($i, $days))
            {
                $costTillDate[$i] = $costTillDate[$i-1];
                continue;
            }
            
            $costTillDate[$i] = $costs[0] + $costTillDate[$i-1];
            $costTillDate[$i] = min($costs[1] + $costTillDate[max($i-7, 0)], $costTillDate[$i]);
            $costTillDate[$i] = min($costs[2] + $costTillDate[max($i-30, 0)], $costTillDate[$i]);
        }
        
        return end($costTillDate);
    }
}
```