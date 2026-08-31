# PHP solution

**Author:** xmadaminov6635
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/4575579/](https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/4575579/)

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
class RandomizedSet {
    /**
     */
     private $set;
    function __construct() {
        $this->set = [];
    }
  
    /**
     * @param Integer $val
     * @return Boolean
     */
    function insert($val) {
        if(!array_key_exists($val, $this->set)){
            $this->set[$val] = true;
            return true;
        }
        return false;
    }
  
    /**
     * @param Integer $val
     * @return Boolean
     */
    function remove($val) {
        if(array_key_exists($val, $this->set)){
            unset($this->set[$val]);
            return true;
        }
        return false;
    }
  
    /**
     * @return Integer
     */
    function getRandom() {
        return array_rand($this->set);
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * $obj = RandomizedSet();
 * $ret_1 = $obj->insert($val);
 * $ret_2 = $obj->remove($val);
 * $ret_3 = $obj->getRandom();
 */
```