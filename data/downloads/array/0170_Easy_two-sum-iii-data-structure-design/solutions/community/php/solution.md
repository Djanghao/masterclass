# index

**Author:** wbp
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/4660094/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/4660094/)

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
class TwoSum {

    public array $index = [];

    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param Integer $number
     * @return NULL
     */
    function add($number) {
        $this->index[$number] = isset($this->index[$number]) ? ($this->index[$number] + 1) : 1;
    }
  
    /**
     * @param Integer $value
     * @return Boolean
     */
    function find($value) {
        
        foreach($this->index as $sumPart => $countDigits){
            
            $a = $this->index[$value - $sumPart] ?? 0;

            if(($sumPart === ($value / 2)) && $a < 2){
                continue;
            }

            if ($a > 0) {
                return true;
            }
        }
  
        return false;
    }
}

```