# Simple way, no arrays, just recursion

**Author:** J22qIDYZa7
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5929160/](https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5929160/)

---


# Code
```php []
class Solution {

    public $nums;
    public $max;
    public $count = 0;

    function combine($i, $testing){
        
        $nums = $this->nums;
        
        if($i >= count($nums)) return;

        // Ignore number try next
        $this->combine($i+1, $testing);

        // Try index
        $num = $nums[$i];
        $testing = $testing | $num;
        if($testing == $this->max){
            $this->count++;
        }

        // Try next
        $this->combine($i+1, $testing);
    }

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function countMaxOrSubsets($nums) {

        $max = 0;
        $test = 0;
        // Find max
        foreach($nums as $num){
            $test = $test | $num;
            $max = max($test, $max);
        }

        $this->nums =  $nums;
        $this->max = $max;

        $this->combine(0, 0);

        return $this->count;
    }
}
```