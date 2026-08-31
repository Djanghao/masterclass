# solution with an explanation

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/4719929/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/4719929/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I explain the solution: we write the incoming string into an array ($cell), first determine the difference between the row positions ($deltaRow), then the difference between the indexes in the column alphabet ($deltaCol), then iterate "$deltaCol and $deltaRow"-the number of times, with the entry of the element into the array, which we will return.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $s
     * @return String[]
     */
    function cellsInRange($s) {
           $alph = ['A', 'B', "C", "D", 'E', 'F', "G", 'H', 'I', 'J', 'K', 'L', "M", 'N', "O", "P", 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    $cell = str_split($s);
    $arr = [];
    $deltaRow = intval($cell[4]) - intval($cell[1]) + 1;
    $deltaCol = array_search($cell[3], $alph) + 1 - array_search($cell[0], $alph);
    for ($j = 0; $j < $deltaCol; $j++) {
        for ($i = 0; $i < $deltaRow; $i++) {
            $arr[] = $alph[array_search($cell[0], $alph) + $j] . (string)(intval($cell[1]) + $i);
        }
    }
    return $arr; 
    }
}
```