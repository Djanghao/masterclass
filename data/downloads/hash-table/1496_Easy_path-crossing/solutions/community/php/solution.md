# dont think it is EASY one :)

**Author:** xutso
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-crossing/solutions/5118130/](https://leetcode.com/problems/path-crossing/solutions/5118130/)

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
     * @param String $path
     * @return Boolean
     */
    function isPathCrossing($path) { 
$rez = boolval(false);
$pattern = ['E' => [1,0], 'S' => [0,-1],
          'W' => [-1,0], 'N' => [0,1] ];
//$moves = [[0,0]];
$coord = [[0,0]];
$arr1 = str_split($path);

// function sum($arr1, $arr2){
//     $arr = array($arr1[0]+$arr2[0], $arr1[1]+$arr2[1]);
//     return $arr;
// }
foreach($arr1 as $p) {
    //$moves[] = $pattern[$p];
    $arr1 = end($coord);
    $arr2 = $pattern[$p];
    $last_move = array($arr1[0]+$arr2[0], $arr1[1]+$arr2[1]);
    if (in_array($last_move,$coord)){
        //return true;
        $rez = true;
    } else{
        $coord[] = $last_move;
    }
    //print_r($coord);
}
return $rez;  
}

}
```