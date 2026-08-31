# [PHP] Beats 100.00%

**Author:** amiddio_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/5336974/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/5336974/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function sumOfEncryptedInt($nums) {
        $output = 0;
        for ($i = 0; $i < count($nums); $i++) {
            $tmp = str_split((string)$nums[$i]);
            $cnt = count($tmp);
            $output += (int)str_repeat(max($tmp), $cnt);
        }
        return $output;
    }
}
```