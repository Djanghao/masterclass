# PHP solution beats 100% in time and space complixity

**Author:** mahmoudghareeb11111
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/2985424/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/2985424/)

---

# Intuition
find a mathematical equation to solve every itration.

# Approach
1- find the horizontal range to loop in using equation : 
    $r_h = $total / $cost1;
2- for every iteration calculate the number of ways
    using equation : $r_v = ($total - ($i * $cost1)) / $cost2; 
     // $i is the iteration index.
3- return the total number of ways.

# Complexity
- Time complexity:
$$o(n)$$

- Space complexity:
$$o(1)$$

# Code
```
class Solution {

    /**
     * @param Integer $total
     * @param Integer $cost1
     * @param Integer $cost2
     * @return Integer
     */
    public function waysToBuyPensPencils($total, $cost1, $cost2) {
        $r_h = (int)$total / (int)$cost1;
        $number_of_ways = 0;
        for($i=0; $i <= (int)$r_h;$i++) {
            $r_v = (int)($total - ($i * $cost1)) / (int)$cost2;
            $number_of_ways += ((int)$r_v + 1); 
        }

        return $number_of_ways;
    }
}
```