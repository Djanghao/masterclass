# php simple solution

**Author:** effigiesss
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-distance-traveled/solutions/4031125/](https://leetcode.com/problems/total-distance-traveled/solutions/4031125/)

---



# Code
```
class Solution {

    /**
     * @param Integer $mainTank
     * @param Integer $additionalTank
     * @return Integer
     */
    function distanceTraveled($mainTank, $additionalTank) {
        if ($mainTank < 5) {
            return $mainTank * 10;
        }

        $distance = 0;
        $consumption = 0;

        while($mainTank > 0) {
            $distance += 10;

            $consumption++;
            $mainTank--;

            if ($consumption === 5) {
                $consumption = 0;

                if ($additionalTank > 0) {
                    $mainTank++;
                    $additionalTank--;
                }
            }
        }

        return $distance;
    }
}
```