# PHP (math). T - O(10), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/4667478/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/4667478/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Each 10 has +5 to result (except 0)
# Approach
<!-- Describe your approach to solving the problem. -->
0--2--4--6--8
11-13-15-17-19
20-22-24-26-28
31-33-35-37-39
.....
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(10)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function countEven($num) {
        $res = -1;
        $t = $num % 10;
        if($num > 10){
            $res = ((($num-$t) / 10) * 5)-1;
        }
        $num -= $t;
        $cur = array_sum(str_split($num));
        while($t >= 0){
            if(($cur+$t) % 2 == 0) $res++;
            $t--;
        }
        return $res;
    }
}
```