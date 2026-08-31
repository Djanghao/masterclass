# Range Module

**Author:** Asjad67
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-module/solutions/5158272/](https://leetcode.com/problems/range-module/solutions/5158272/)

---

# Intuition
The problem requires us to design a data structure to track ranges represented as half-open intervals and perform operations like adding, querying, and removing ranges efficiently.

# Approach
1. Data Structure: We'll use a sorted list to maintain the ranges. Each range will be represented as a tuple (left, right).
2. Add Range: To add a range, we'll iterate through the existing ranges and merge overlapping or adjacent ranges as needed.
3. Query Range: To query a range, we'll check if any existing range completely covers the queried range.
4. Remove Range: To remove a range, we'll split any overlapping ranges or remove completely covered ranges.

# Complexity
- Time complexity:
- Adding a range requires iterating through existing ranges, resulting in O(n) time complexity in the worst case.
- Querying and removing a range also require iterating through existing ranges, resulting in O(n) time complexity in the worst case.

- Space complexity:
The space complexity depends on the number of ranges stored in the data structure, resulting in O(n) space complexity.


# Code
```
class RangeModule {
  private $ranges;

    /**
     */
    function __construct() {
        $this->ranges = [];
    }
  
    /**
     * @param Integer $left
     * @param Integer $right
     * @return NULL
     */
    function addRange($left, $right) {
        $merged = [];
        $inserted = false;
        foreach ($this->ranges as $range) {
            list($curLeft, $curRight) = $range;
            if ($curRight < $left) {
                $merged[] = $range;
            } elseif ($curLeft > $right) { 
                if (!$inserted) {
                    $merged[] = [$left, $right];
                    $inserted = true;
                }
                $merged[] = $range;
            } else {
                $left = min($left, $curLeft);
                $right = max($right, $curRight);
            }
        }
        if (!$inserted) {
            $merged[] = [$left, $right];
        }
        $this->ranges = $merged;
    }
  
    /**
     * @param Integer $left
     * @param Integer $right
     * @return Boolean
     */
    function queryRange($left, $right) {
        foreach ($this->ranges as $range) {
            list($curLeft, $curRight) = $range;
            if ($curLeft <= $left && $curRight >= $right) {
                return true;
            }
            if ($curLeft > $right) {
                return false;
            }
        }
        return false;
    }
  
    /**
     * @param Integer $left
     * @param Integer $right
     * @return NULL
     */
    function removeRange($left, $right) {
        $merged = [];
        foreach ($this->ranges as $range) {
            list($curLeft, $curRight) = $range;
            if ($curRight <= $left || $curLeft >= $right) {
                $merged[] = $range;
            } else {
                if ($curLeft < $left) {
                    $merged[] = [$curLeft, $left];
                }
                if ($curRight > $right) {
                    $merged[] = [$right, $curRight];
                }
            }
        }
        $this->ranges = $merged;
    }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * $obj = RangeModule();
 * $obj->addRange($left, $right);
 * $ret_2 = $obj->queryRange($left, $right);
 * $obj->removeRange($left, $right);
 */
```