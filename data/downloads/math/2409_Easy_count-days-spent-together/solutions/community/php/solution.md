# Count Days Spent Together (100% / 100%)

**Author:** LuisFelipe1
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/5151181/](https://leetcode.com/problems/count-days-spent-together/solutions/5151181/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $arriveAlice
     * @param String $leaveAlice
     * @param String $arriveBob
     * @param String $leaveBob
     * @return Integer
     */
    function countDaysTogether($arriveAlice, $leaveAlice, $arriveBob, $leaveBob) {
        
        $arriveAlice = new DateTime("2022-".$arriveAlice);
        $leaveAlice = new DateTime("2022-".$leaveAlice);
        $arriveBob = new DateTime("2022-".$arriveBob);
        $leaveBob = new DateTime("2022-".$leaveBob);

        $mayorArrive = ($arriveAlice > $arriveBob) ? $arriveAlice : $arriveBob;
        $menorLeave = ($leaveAlice > $leaveBob) ? $leaveBob : $leaveAlice;

        $intervalo = $mayorArrive->diff($menorLeave);
        
        return ($mayorArrive <= $menorLeave) ? ($intervalo->days + 1) : 0;

    }
}
```