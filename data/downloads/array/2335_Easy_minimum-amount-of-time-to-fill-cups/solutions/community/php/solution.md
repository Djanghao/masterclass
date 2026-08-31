# php solution

**Author:** nacoia
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/2595667/](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/2595667/)

---

class Solution {

    /**
     * @param Integer[] $amount
     * @return Integer
     */
    function fillCups($amount) {
        
        sort($amount);
        $count=0;
        while($amount[0]+$amount[1]>$amount[2])
        {
            $amount[0]--;
            $amount[1]--;
            $count++;
            
        }
        return $count+$amount[2];
          }
}