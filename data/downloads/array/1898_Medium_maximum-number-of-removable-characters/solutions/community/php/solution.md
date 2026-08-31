# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/6095547/](https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/6095547/)

---

```php []
class Solution {

    /**
     * @param String $s
     * @param String $p
     * @param Integer[] $removable
     * @return Integer
     */
    function maximumRemovals($s, $p, $removable) {
        // https://www.youtube.com/watch?v=NMP3nRPyX5g

        $res = 0;

        $left = 0;
        $right = count($removable)-1;

        while ($left <= $right) {
            $middle = (int)(($left+$right)/2);

            // Create a hashmap which keys are the positions to remove.
            $removed = array_flip(array_slice($removable, 0, $middle+1));

            if ($this->isSubseq($s, $p, $removed)) {
                $res = max($res, $middle+1);
                $left = $middle+1;
            } else {
                $right = $middle-1;
            }
        }
        return $res;
    }

    function isSubseq($s, $p, $removed) {
        $iS = $iP = 0;
        $lenS = strlen($s);
        $lenP = strlen($p);

        while ($iS < $lenS && $iP < $lenP) {
            if (isset($removed[$iS])    // Either removed position
                || $s[$iS] !== $p[$iP]  // o didn't match
            ) {
                $iS++;
                continue;
            }
            
            $iS++;
            $iP++;
        }
        return $iP === $lenP;
    }
}
```