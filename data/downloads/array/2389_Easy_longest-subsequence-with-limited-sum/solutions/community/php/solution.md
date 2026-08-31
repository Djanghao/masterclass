# Two loops for this case with PHP || Maybe better easy to understand

**Author:** Qiu-IT
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/3307185/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/3307185/)

---

### Intuition
Two Loops for this case. 
Using prefix Sum is the best solution.
### Code
```php []
class Solution {
    /**
     * @param Integer[] $nums
     * @param Integer[] $queries
     * @return Integer[]
     */
    function answerQueries($nums, $queries) {       
        sort($nums);
        $rs = array();
        for ($i=0;$i<count($queries);$i++) {
            $tmp = 0;
            for ($j=0;$j<count($nums);$j++) {
                $tmp += $nums[$j];
                if ($tmp>$queries[$i]){
                    array_push($rs,$j);
                    break;
                }
            }
            if ($tmp<=$queries[$i]){
                array_push($rs,count($nums));
            }
        }
        return $rs;
    }
}
```