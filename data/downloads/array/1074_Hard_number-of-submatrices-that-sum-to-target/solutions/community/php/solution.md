# 1074. Number of Submatrices That Sum to Target

**Author:** monishvadhwani
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/4638397/](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/4638397/)

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
     * @param Integer[][] $matrix
     * @param Integer $target
     * @return Integer
     */
    function numSubmatrixSumTarget($matrix, $target) {
        $rowCount = count($matrix);
        $colCount = count($matrix[0]);

        for ($row = 0; $row < $rowCount; $row++) {
            for ($col = 1; $col < $colCount; $col++) {
                $matrix[$row][$col] += $matrix[$row][$col - 1];
            }
        }

        // echo json_encode($matrix);

        $count = 0;

        for ($col1 = 0; $col1 < $colCount; $col1++) {
            for ($col2 = $col1; $col2 < $colCount; $col2++) {

                $map = [0 => 1];
                $sum = 0;

                for ($row = 0; $row < $rowCount; $row++) {
                    $sum += $matrix[$row][$col2] - ($col1 > 0 ? $matrix[$row][$col1 - 1] : 0);
                    $count += isset($map[$sum - $target]) ? $map[$sum - $target] : 0;
                    $map[$sum] = isset($map[$sum]) ? $map[$sum] + 1 : 1;
                }
            }
        }

        return $count;
    }
}
```