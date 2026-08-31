# Solution Iterator for Combination

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/4913199/](https://leetcode.com/problems/iterator-for-combination/solutions/4913199/)

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
class CombinationIterator {
    private $combinations;
    private $currentIndex;
    
    /**
     * @param String $characters
     * @param Integer $combinationLength
     */
    function __construct($characters, $combinationLength) {
        $this->combinations = $this->generateCombinations($characters, $combinationLength);
        $this->currentIndex = 0;
    }
  
    /**
     * @return String
     */
    function next() {
        $combination = $this->combinations[$this->currentIndex];
        $this->currentIndex++;
        return $combination;
    }
  
    /**
     * @return Boolean
     */
    function hasNext() {
        return $this->currentIndex < count($this->combinations);
    }
    
    private function generateCombinations($characters, $length) {
        $result = [];
        $this->backtrack($characters, $length, 0, '', $result);
        return $result;
    }
    
    private function backtrack($characters, $length, $start, $current, &$result) {
        if (strlen($current) == $length) {
            $result[] = $current;
            return;
        }
        
        for ($i = $start; $i < strlen($characters); $i++) {
            $this->backtrack($characters, $length, $i + 1, $current . $characters[$i], $result);
        }
    }
}

```