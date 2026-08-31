# Simple SOlution PHP

**Author:** rukasufigueiredo
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/6002727/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/6002727/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n * m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[][] $nums
     * @return Integer[]
     */
    function intersection($nums) {
        $countArr = [];
        $result = [];
        $numRows = count($nums);    
        foreach($nums as $row) {
            foreach($row as $num) {
                    if (!isset($countArr[$num])) {
                    $countArr[$num] = 0;
                }
                $countArr[$num]++;
            }            
        }    

        foreach($countArr as $key => $counts) {
            if ($counts === $numRows) {                
                $result[$key] = $key;
            }
        }

        sort($result);
        return $result;
    }
}
```