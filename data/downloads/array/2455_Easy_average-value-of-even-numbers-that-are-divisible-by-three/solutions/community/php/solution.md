# 2455. Average Value of Even Numbers That Are Divisible by Three

**Author:** shaban4ik96
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/5959461/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/5959461/)

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

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function averageValue($nums) {
        $sums = [];
        foreach ($nums as $current_num){
            if($current_num % 2 != 0){
                continue;
            }
            if($current_num % 3 != 0){
                continue;
            }
            $sums[] = $current_num;
        }

        if(empty($sums)){
            return 0;
        }

        $result = 0;

        foreach ($sums as $current_sum){
            $result += $current_sum;
        }

        return floor($result/count($sums));
    }
}
```