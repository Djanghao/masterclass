# Solution with PHP

**Author:** atakde
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotating-the-box/solutions/6074231/](https://leetcode.com/problems/rotating-the-box/solutions/6074231/)

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
```php []
class Solution {

    /**
     * @param String[][] $box
     * @return String[][]
     */
    function rotateTheBox($box) {
        $rows = count($box);
        $cols = count($box[0]);

        for ($i = 0; $i < $cols; $i++) {
            for ($j = 0; $j < $rows; $j++) {
                $newArr[$i][] = $box[$j][$i];
            }

            $newArr[$i] = array_reverse($newArr[$i]);
        }

        for ($i = $cols - 1; $i >= 0; $i--) {
            for ($j = 0; $j < $rows; $j++) {
                if ($newArr[$i][$j] === '#') {
                    $k = $i;
                    while (isset($newArr[$k + 1][$j]) && $newArr[$k + 1][$j] === '.') {
                        $newArr[$k + 1][$j] = '#';
                        $newArr[$k][$j] = '.';
                        $k++;
                    }
                }
            }
        }

        return $newArr;
    }
}
```