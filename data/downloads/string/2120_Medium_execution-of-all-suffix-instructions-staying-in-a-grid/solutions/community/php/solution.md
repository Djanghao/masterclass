# PHP simple solution

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/4245793/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/4245793/)

---



# Code
```
class Solution {
    function executeInstructions($n, $startPos, $s) {
        $moves = ["U"=>[-1,0],"D"=>[1,0],"R"=>[0,1],"L"=>[0,-1]];
        $output = [];
        $s = str_split($s);
        while (count($s)>0){
            $pos = $startPos;
            $flg = true;
            for($k=0;$k<count($s);$k++){
                list($i,$j) = $moves[$s[$k]];
                if (0 <= $pos[0]+$i && $pos[0]+$i < $n && 0 <= $pos[1]+$j && $pos[1]+$j < $n){
                    $pos[0]+=$i;
                    $pos[1]+=$j;
                }
                else{
                    $flg = false;
                    $output[] = $k;
                    break;
                }
            }
            if ($flg){$output[] = $k;}
            array_shift($s);
        }
        return $output;
    }
}
```