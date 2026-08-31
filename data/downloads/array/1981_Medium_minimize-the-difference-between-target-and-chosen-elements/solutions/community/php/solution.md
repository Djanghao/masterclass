# Check all possible values, ignore rows/columns checked before

**Author:** J22qIDYZa7
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/5978234/](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/5978234/)

---



# Code
```php []
class Solution {

    public $result = PHP_INT_MAX;

    public $memory = [];
    

    function check($value, $level){

        foreach($this->mat[$level] as $num){            
            $test = $value + $num;
                
            if(isset($this->memory[$level][$test]))
                continue;  
            $this->memory[$level][$test] = true;    

            if($test > $this->target){
                if(abs($this->target - $test) >= $this->result){
                    continue;
                }
            }

            if($level+1 < count($this->mat)){
                $this->check($test, $level+1);
            }else{
                $this->result = min($this->result, abs($this->target - $test));
            }            
        }

    }


    function minimizeTheDifference($mat, $target) {
        $this->mat = $mat;
        $this->target = $target;

        $this->check(0, 0);
        
        return $this->result;
    }
}
```