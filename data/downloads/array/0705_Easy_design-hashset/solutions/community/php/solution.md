# php bit array

**Author:** punkundead
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-hashset/solutions/3577985/](https://leetcode.com/problems/design-hashset/solutions/3577985/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class MyHashSet {
    private array $set;
    private const BASE= 64;
    /**
     */
    function __construct() {
        $this->set = array_fill(0, 1+intdiv(10**6, self::BASE), 0);
    }
  
    /**
     * @param Integer $key
     * @return NULL
     */
    function add($key) {
        $this->set[intdiv($key, self::BASE)]|= 1 << ($key% self::BASE);
    }
  
    /**
     * @param Integer $key
     * @return NULL
     */
    function remove($key) {
        $this->set[intdiv($key, self::BASE)]&= ~(1 << ($key% self::BASE));
    }
  
    /**
     * @param Integer $key
     * @return Boolean
     */
    function contains($key) {
        return !!($this->set[intdiv($key, self::BASE)]& (1 << ($key% self::BASE)));
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * $obj = MyHashSet();
 * $obj->add($key);
 * $obj->remove($key);
 * $ret_3 = $obj->contains($key);
 */
```