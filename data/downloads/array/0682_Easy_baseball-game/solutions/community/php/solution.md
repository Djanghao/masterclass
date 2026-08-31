# PHP | Runtime 7 ms, faster than 100.00%

**Author:** zihadxomar
**Votes:** 2
**Link:** [https://leetcode.com/problems/baseball-game/solutions/2619277/](https://leetcode.com/problems/baseball-game/solutions/2619277/)

---

```
class Solution {

    /**
     * @param String[] $operations
     * @return Integer
     */
    function calPoints($operations) {
        $s = [];
        foreach($operations as $op){
            if($op=='C') 
                array_pop($s);
            else if($op=='D')
                array_push($s,end($s)*2);
            else if($op=="+")
                array_push($s,(end($s)+$s[count($s)-2]));
            else
                array_push($s,$op);
        }
        
        return array_sum($s);
        
    }
}
```