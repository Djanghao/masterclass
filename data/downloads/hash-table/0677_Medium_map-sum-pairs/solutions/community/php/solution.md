# [PHP] Beats 100% time and space.

**Author:** ayukhatov
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-sum-pairs/solutions/6083259/](https://leetcode.com/problems/map-sum-pairs/solutions/6083259/)

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
```php []
class MapSum {
    /**
     */
    function __construct() {
        
    }

    private $map = [];
  
    /**
     * @param String $key
     * @param Integer $val
     * @return NULL
     */
    function insert($key, $val) {
        $this->map[$key] = $val;
    }
  
    /**
     * @param String $prefix
     * @return Integer
     */
    function sum($prefix) {
        $sum = 0;

        foreach ($this->map as $key => $val) {
            if (strpos($key, $prefix) === 0) {
                $sum += $val;
            }
        }

        return $sum;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * $obj = MapSum();
 * $obj->insert($key, $val);
 * $ret_2 = $obj->sum($prefix);
 */
```