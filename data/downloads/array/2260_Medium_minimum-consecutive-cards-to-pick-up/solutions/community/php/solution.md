# Short Solution 100%

**Author:** hrabardzmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/5575777/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/5575777/)

---

# Short Solution 100%
<!-- Describe your first thoughts on how to solve this problem. -->

# Code
```
class Solution {

    /**
     * @param Integer[] $cards
     * @return Integer
     */
    function minimumCardPickup($cards) {
        foreach($cards as $key=>$value){
            if(isset($hashCard[$value])){
                $min = ($min > $key - $hashCard[$value] + 1) || !$min ? $key - $hashCard[$value] + 1 : $min;
            }
            $hashCard[$value] = $key;
        }
        return $min ? : -1;
    }
}
```