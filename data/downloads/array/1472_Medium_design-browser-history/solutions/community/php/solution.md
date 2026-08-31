# PHP Implementation of Browser History

**Author:** mwlc019283
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-browser-history/solutions/3309524/](https://leetcode.com/problems/design-browser-history/solutions/3309524/)

---

# Approach
Kept it simple.  Nothing fancy.  Open to feedback.

# Code
```
class BrowserHistory {
    private string $homepage;
    private array $hist;
    private int $curr;

    /**
     * @param String $homepage
     */
    function __construct(string $homepage) {
        $this->homepage = $homepage;

        $this->hist = [$this->homepage];
        $this->curr = 0;
    }
  
    /**
     * @param String $url
     * @return NULL
     */
    function visit($url) {
        $this->hist = array_slice($this->hist,0,$this->curr+1);
        $this->hist[] = $url;
        $this->curr = count($this->hist)-1;
    }
  
    /**
     * @param Integer $steps
     * @return String
     */
    function back($steps) {
        if($steps >= $this->curr+1){
            $this->curr = 0;
        } else {
            $this->curr -= $steps;
        }
        
        return $this->hist[$this->curr];
    }
  
    /**
     * @param Integer $steps
     * @return String
     */
    function forward($steps) {
        if(($steps+($this->curr+1)) >= count($this->hist)){
            $this->curr = count($this->hist)-1;
        } else {
            $this->curr += $steps;
        }
        
        return $this->hist[$this->curr];
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * $obj = BrowserHistory($homepage);
 * $obj->visit($url);
 * $ret_2 = $obj->back($steps);
 * $ret_3 = $obj->forward($steps);
 */
```