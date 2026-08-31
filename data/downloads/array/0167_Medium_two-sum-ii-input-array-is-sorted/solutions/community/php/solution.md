# php beat 99.13 %  simple solution

**Author:** hjoru
**Votes:** 3
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/1658270/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/1658270/)

---

```
class Solution {

    /**
     * @param Integer[] $numbers
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($numbers, $target) {
        $numbersLen = count($numbers);
        $index1 = 0;
        $index2 = $numbersLen - 1;
        while (true) {
            $sum = $numbers[$index1] + $numbers[$index2];
            if ($sum === $target) {
                return [$index1 + 1, $index2 + 1];
            }
            if ($sum > $target) {
                $index2--;
            }
            if ($sum < $target) {
                $index1++;
            }
        }
    }
}
```