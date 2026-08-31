# PHP DFS Solution

**Author:** TasneemWahdan
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-groups-of-farmland/solutions/3350829/](https://leetcode.com/problems/find-all-groups-of-farmland/solutions/3350829/)

---


# Code
```
class Solution {

    /**
     * @param Integer[][] $land
     * @return Integer[][]
     */
    function findFarmland($land) {
        $directions = [[0,1], [1,0], [-1,0], [0,-1]];
        $farmlands = [];
        for($i =0; $i < sizeof($land); $i++){
            for($j =0; $j < sizeof($land[0]); $j++){
                if($land[$i][$j] == 1){
                    $farmlands []= [$i, $j];
                    $endingIndex =$this->dfs($i, $j, $directions, $land, $farmlands);
                    $farmlands[sizeof($farmlands)-1] []= $endingIndex[0];
                    $farmlands[sizeof($farmlands)-1] []= $endingIndex[1];
                }
            }
        }
        return $farmlands;
    }

    function dfs($r, $c, $directions, &$land, &$farmlands){
        if($land[$r][$c] != 1 || ! isset($land[$r][$c])){
            return [0,0];
        }
        $land[$r][$c] = 2;
        $res = [$r,$c]; // bottom right 
        foreach($directions as $dir){
            $i = $r + $dir[0];
            $j = $c + $dir[1];
            $curr =$this->dfs($i, $j, $directions, $land, $farmlands);
            $res[0] = max($res[0], $curr[0]);
            $res[1] = max($res[1], $curr[1]);
        }
        return $res;
    }
}
```