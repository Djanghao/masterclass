# PHP Solution Binary Search

**Author:** TasneemWahdan
**Votes:** 1
**Link:** [https://leetcode.com/problems/random-pick-with-weight/solutions/3232724/](https://leetcode.com/problems/random-pick-with-weight/solutions/3232724/)

---


# Code
```
class Solution {
    /**
     * @param Integer[] $w
     */
     public $w;
     public $accuSum;
    function __construct($w) {
        $this->w = $w;
        $this->accuSum[0] = $this->w[0];
        for($i =1; $i < sizeof($this->w); $i++){
            $this->accuSum[$i] = $this->accuSum[$i-1] + $this->w[$i];
        }  
    }
  
    /**
     * @return Integer
     */
    function pickIndex() {
        $size = sizeof($this->accuSum);
        $random = rand(0, $this->accuSum[$size-1]);
        $low = 0;
        $high = $size-1 ;
        while($low < $high){
            $mid =floor( $low + ($high - $low)/2);
            if($accuSum[$mid] == $random)
                return $mid;
           if($this->accuSum[$mid] < $random)
                $low = $mid + 1;
            else
                $high = $mid;    
        } 
        return $low;
    }
    
}

/**
 * Your Solution object will be instantiated and called as such:
 * $obj = Solution($w);
 * $ret_1 = $obj->pickIndex();
 */
```