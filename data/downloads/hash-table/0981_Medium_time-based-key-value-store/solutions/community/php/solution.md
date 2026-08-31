# Use Binary Search

**Author:** dylanoops
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/5719846/](https://leetcode.com/problems/time-based-key-value-store/solutions/5719846/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Use Binary Search

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(Log(N))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class TimeMap {

    public $data;

    /**
     */
    function __construct() {
        $this->data = [];
    }
  
    /**
     * @param String $key
     * @param String $value
     * @param Integer $timestamp
     * @return NULL
     */
    function set($key, $value, $timestamp) {
        $this->data[$key][$timestamp] = $value;
    }
  
    /**
     * @param String $key
     * @param Integer $timestamp
     * @return String
     */
    function get($key, $timestamp) {
        $timestamps = $this->data[$key] ?? [];

        if ($timestamps[$timestamp]) {
            return $timestamps[$timestamp];
        }

        $low = 0;
        $high = count($timestamps) - 1;

        $timestampArr = array_keys($timestamps);
        $max = -1;

        while ($low <= $high) {
            $mid = ($high + $low) >> 1;

            if ($timestampArr[$mid] <= $timestamp) {
                if ($timestampArr[$mid] >= $max) {
                    $max = $timestampArr[$mid];
                }
            }

            if ($timestampsArr[$mid] > $timestamp) {
                $high = $mid - 1;
            } else {
                $low = $mid + 1;
            }
        }

        return $this->data[$key][$max] ?? "";
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * $obj = TimeMap();
 * $obj->set($key, $value, $timestamp);
 * $ret_2 = $obj->get($key, $timestamp);
 */
```