# [PHP] brute force

**Author:** stuu
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/1879553/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/1879553/)

---

```
class Solution
{

    /**
     * @param int[][] $matrix
     * @return Boolean
     */
    function checkValid($matrix)
    {
        $columns = [];
        $nc = count($matrix[0]);
        foreach ($matrix as $row_key => $row) {
            if (count(array_flip($row)) !== $nc) return false;


            foreach ($row as $rkey => $rval) {
                $columns[$rkey][$row_key] = $rval;
            }
        }

        foreach ($columns as $col) {
            if (count(array_flip($col)) !== $nc) return false;
        }
        return true;
    }
}