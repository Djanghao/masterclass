# PHP |

**Author:** zihadxomar
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/2655813/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/2655813/)

---

```class LUPrefix {
    /**
     * @param Integer $n
     */
    
   
    public $max;
    public $arr;
    function __construct($n) {
       $this->max = 0;
         $this->arr = [];
    }
      
    /**
     * @param Integer $video
     * @return NULL
     */
    function upload($video) {
        
        $this->arr[$video] = 1;
        while(isset($this->arr[$this->max+1])){
            $this->max++;
        }
    }
  
    /**
     * @return Integer
     */
    function longest() {
        return $this->max;
    }
}

/**
 * Your LUPrefix object will be instantiated and called as such:
 * $obj = LUPrefix($n);
 * $obj->upload($video);
 * $ret_2 = $obj->longest();
 */
 ```