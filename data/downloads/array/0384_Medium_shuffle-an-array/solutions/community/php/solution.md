# Solution in PHP without shuffle function

**Author:** kovolev
**Votes:** 0
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/5885699/](https://leetcode.com/problems/shuffle-an-array/solutions/5885699/)

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
class Solution {

    protected $nums = [];

    /**
     * @param Integer[] $nums
     */
    function __construct($nums) {
        $this->nums = $nums;
    }
  
    /**
     * @return Integer[]
     */
    function reset() {
        return $this->nums;   
    }
  
    /**
     * @return Integer[]
     */
    function shuffle() {
        $shuffle = $this->nums;
        $lenght = count($shuffle) - 1;

        for ($i = $lenght; $i >= 0; $i--) {
            $rand = rand(0, $lenght);

            $temp = $shuffle[$i];
            $shuffle[$i] = $shuffle[$rand];
            $shuffle[$rand] = $temp;
        }

        return $shuffle;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * $obj = Solution($nums);
 * $ret_1 = $obj->reset();
 * $ret_2 = $obj->shuffle();
 */
```