# Simple PHP

**Author:** robertgouveia1981
**Votes:** 0
**Link:** [https://leetcode.com/problems/custom-sort-string/solutions/4862027/](https://leetcode.com/problems/custom-sort-string/solutions/4862027/)

---

# Intuition


# Approach


# Complexity
- Time complexity:


- Space complexity:


# Code
```
class Solution {

    /**
     * @param String $order
     * @param String $s
     * @return String
     */
    function customSortString($order, $s) {
        $order = str_split($order);
        $s = str_split($s);

        $output = [];
        
        foreach($order as $ord){
            if(array_search($ord, $s) !== false){
                $totalLeft = $this->checkStillLeft($s, $ord);

                for($i=1;$i<=$totalLeft;$i++){
                    $key = array_search($ord, $s);

                    array_push($output, $s[$key]);
                    unset($s[$key]);
                }
            }
        }

        return implode('', $output).implode('', $s);
    }

    function checkStillLeft($s, $val)
    {
        $total = 0;

        foreach($s as $ss){
            if($ss === (string)$val){
                $total++;
            }
        }

        return $total;
    }
}
```