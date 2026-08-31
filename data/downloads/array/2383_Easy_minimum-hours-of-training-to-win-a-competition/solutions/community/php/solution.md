# Easy PHP Solution

**Author:** Leon888
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/2467263/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/2467263/)

---

```
class Solution {
    /**
     * @param Integer $initialEnergy
     * @param Integer $initialExperience
     * @param Integer[] $energy
     * @param Integer[] $experience
     * @return Integer
     */
    function minNumberOfHours($initialEnergy, $initialExperience, $energy, $experience) {
        $hours = array_sum($energy) - $initialEnergy + 1;
        $hours = $hours > 0 ? $hours : 0;

        foreach ($experience as $exp) {
            if (($train = $exp - $initialExperience) >= 0) {
                $hours += $train + 1;
                $initialExperience += $train + 1;
            }
            $initialExperience += $exp;
        }
        return $hours;
    }
}
```