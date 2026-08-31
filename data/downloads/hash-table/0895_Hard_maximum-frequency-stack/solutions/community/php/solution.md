# PHP solution

**Author:** greyslim
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-frequency-stack/solutions/3113865/](https://leetcode.com/problems/maximum-frequency-stack/solutions/3113865/)

---


# Code
```
class FreqStack {
    private array $counter = array();
    private mixed $arr = null;
    private int $max = 0;
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param Integer $val
     * @return NULL
     */
    public function push($val) {
        if(!array_key_exists($val, $this->counter)){
            $count = $this->counter[$val] = 1;
        } else {
            $count = ++$this->counter[$val];
        }
        if($count > $this->max)
            $this->max = $count;

        $this->arr[$count][] = $val;
    }
  
    /**
     * @return Integer
     */
    function pop() {
        if($this->max == 0 || count($this->arr[$this->max]) == 0){
            return -1;
        }
        
        $this->counter[end($this->arr[$this->max])]--;

        $last = array_pop($this->arr[$this->max]);
        if(count($this->arr[$this->max]) == 0)
            $this->max--;    
        return $last;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * $obj = FreqStack();
 * $obj->push($val);
 * $ret_2 = $obj->pop();
 */
```