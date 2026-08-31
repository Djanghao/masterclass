# php simple solution of stack

**Author:** xmas30828
**Votes:** 1
**Link:** [https://leetcode.com/problems/implement-queue-using-stacks/solutions/2918499/](https://leetcode.com/problems/implement-queue-using-stacks/solutions/2918499/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class MyQueue {
    private $statckIn;
    private $stackOut;
    /**
     */
    function __construct() {
        $this->stackIn = [];
        $this->stackOut = [];
    }
  
    /**
     * @param Integer $x
     * @return NULL
     */
    function push($x) {
        return array_push($this->stackIn, $x);
    }
  
    /**
     * @return Integer
     */
    function pop() {
        if(!empty($this->stackOut)){
            return array_pop($this->stackOut);
        }

        while(!empty($this->stackIn)){
            array_push($this->stackOut, array_pop($this->stackIn));
        }

        return array_pop($this->stackOut);
    }
  
    /**
     * @return Integer
     */
    function peek() {
        if(empty($this->stackOut)){
            return $this->stackIn[0];
        }
        // peek the last element of stackOut
        return $this->stackOut[count($this->stackOut)-1];
    }
  
    /**
     * @return Boolean
     */
    function empty() {
        return empty($this->stackIn) && empty($this->stackOut);
    }
}
```