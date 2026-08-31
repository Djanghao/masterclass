# Solution Dinner Plate Stacks

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/dinner-plate-stacks/solutions/4895034/](https://leetcode.com/problems/dinner-plate-stacks/solutions/4895034/)

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
class DinnerPlates {
    private $capacity;
    private $stacks;
    private $openings;

    /**
     * @param Integer $capacity
     */
    function __construct($capacity) {
        $this->capacity = $capacity;
        $this->stacks = [];
        $this->openings = [];
    }
  
    /**
     * @param Integer $val
     * @return NULL
     */
    function push($val) {
        if (!empty($this->openings)) {
            $index = array_shift($this->openings);
            $this->stacks[$index] = $val;
        } else {
            $this->stacks[] = $val;
        }
    }
  
    /**
     * @return Integer
     */
    function pop() {
        $value = array_pop($this->stacks);

        while (!empty($this->stacks) && end($this->stacks) === NULL) {
            array_pop($this->stacks);
        }

        return $value === NULL ? -1 : $value;
    }
  
    /**
     * @param Integer $index
     * @return Integer
     */
    function popAtStack($index) {
        $index *= $this->capacity;

        if (isset($this->stacks[$index])) {
            $stackLastIndex = $index + ($this->capacity - 1);
            $lastStackIndex = count($this->stacks) - 1;

            if ($stackLastIndex >= $lastStackIndex) {
                $value = array_pop($this->stacks);
                
                while (!empty($this->stacks) && end($this->stacks) === NULL) {
                    array_pop($this->stacks);
                }

                return $value === NULL ? -1 : $value;
            } else {
                while (!isset($this->stacks[$stackLastIndex]) && $stackLastIndex > $index) {
                    $stackLastIndex--;
                }

                $value = $this->stacks[$stackLastIndex];
                $this->stacks[$stackLastIndex] = NULL;
                $this->recordOpening($stackLastIndex);

                return $value === NULL ? -1 : $value;
            }
        } else {
            return -1;
        }
    }

    private function recordOpening($index) {
        $this->openings[] = $index;
    }
}

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * $obj = new DinnerPlates($capacity);
 * $obj->push($val);
 * $ret_2 = $obj->pop();
 * $ret_3 = $obj->popAtStack($index);
 */

```