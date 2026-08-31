# PHP | Faster than 100% Solution

**Author:** Shawn4me
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/1584755/](https://leetcode.com/problems/combination-sum-iii/solutions/1584755/)

---

```php
  class Solution {

        /**
         * @param Integer $k
         * @param Integer $n
         * @return Integer[][]
         */
        public $res = array();
        function combinationSum3($k, $n) {
            $trace = array();
            $this->backTracking(1, $trace, 0, $k, $n);
            return $this->res;

        }

        function backTracking($begin, $trace, $sum, $k, $n ){
            if(count($trace) > $k || $sum > $n )
                return;

            if( count($trace) == $k && $sum == $n){
                $this->res[] = $trace;
                return;
            }

            for($i = $begin; $i <= 9; $i++){
                $trace[] = $i;
                $sum = $sum + $i;
                $this->backTracking($i+1, $trace, $sum, $k, $n);
                array_pop($trace);
                $sum = $sum - $i;
            }


        }

    }