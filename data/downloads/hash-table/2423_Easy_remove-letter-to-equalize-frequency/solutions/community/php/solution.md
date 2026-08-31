# ✅ PHP Solution

**Author:** romartiny
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/3593574/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/3593574/)

---

# Code
```
class Solution {

    /**
     * @param String $word
     * @return Boolean
     */
    function equalFrequency($word) {
        $fr = array_count_values(str_split($word));
        $check = true;
        $maxEl = max($fr);
        $minEl = min($fr);
        $count = array_count_values($fr);

        foreach (array_unique($fr) as $letter) {
            if ($letter !== 1) {
                $check = false;
            }
        }

        if (count(array_unique($fr)) === 1 && $maxEl === strlen($word)) {
            return true;
        } elseif ($check) {
            return true;
        };

        if (($maxEl - $minEl === 1 
        && $count[$maxEl] === 1) 
        || ($minEl === 1 
        && $count[$minEl] === 1 
        && $count[$maxEl] === count($fr) - 1)) {
            return true;
        }
        
        return false;
    }
}
```