# PHP minHeap + HashMap

**Author:** lotysh_vm
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3452843/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3452843/)

---

# Complexity
- Time complexity:
O(log N), insert heap, but other operations O(1)

- Space complexity:
O(m + n), m - hash map, n - heap

# Code
```
class SmallestInfiniteSet {
    private $minHeap;
    private $hashMap = [];

    /**
     */
    function __construct() {
        $this->minHeap = new SplMinHeap();

        for ($i = 1; $i <= 1000;$i++) {
            $this->minHeap->insert($i);
            $this->hashMap[$i] = $i;
        }
    }
  
    /**
     * @return Integer
     */
    function popSmallest() {
        $num = $this->minHeap->extract();
        unset($this->hashMap[$num]);

        return $num;
    }
  
    /**
     * @param Integer $num
     * @return NULL
     */
    function addBack($num) {
        if (!isset($this->hashMap[$num])) {
            $this->minHeap->insert($num);
            $this->hashMap[$num] = $num; 
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * $obj = SmallestInfiniteSet();
 * $ret_1 = $obj->popSmallest();
 * $obj->addBack($num);
 */
```