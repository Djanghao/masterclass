# 0ms in PHP, beating 100% in runtime and memory

**Author:** fagner0
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/5953537/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/5953537/)

---

# Code
```php []
class Solution {

    /**
     * @param Integer[][] $mat
     * @param Integer[][] $target
     * @return Boolean
     */
    function findRotation($mat, $target) {
        for ($i = 0; $i < 4; $i++) {
            if ($target === $mat) {
                return true;
            }

            $mat = $this->rotate($mat);
        }

        return false;
    }

    private function rotate($matrix)
    {
        $n = count($matrix);
        $rotated = array();

        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $n; $j++) {
                $rotated[$i][$j] = $matrix[$n - $j - 1][$i];
            }
        }

        return $rotated;
    }
}
```