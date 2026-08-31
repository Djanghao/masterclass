# PHP solution

**Author:** akolobnevstudio
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/4638582/](https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/4638582/)

---


```
class Solution {


    function searchMatrix($matrix, $target) {
       $m = 0;
       $n = count($matrix[0]) - 1;
       $i = 0;
       
       while($m <= count($matrix) - 1 && $n >= 0)
       {
           if($matrix[$m][$n] === $target) return true;
           elseif($matrix[$m][$n] > $target) $n -= 1;
           elseif($matrix[$m][$n] < $target) $m += 1;
       }

       return false;
    }
}
```