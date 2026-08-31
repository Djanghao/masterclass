# Simple 2 for loop solution (UZB & ENG)

**Author:** AsAdbEk_Sotiboldiyev
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/5176192/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/5176192/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
ENG:You need to use 2 **for loop**s to check each number in 2 groups
UZB: Har bir sonni 2tadan guruh qilib tekshirish uchun ichma-ich 2ta **for loop** dan foydalanish kerak
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function countPairs($nums, $k) {
        $cnt = 0;
        $l = count($nums);
        for($i = 0; $i < $l; $i++){
            for($j = $i + 1; $j < $l; $j++){
                $a = $nums[$i];
                $b = $nums[$j];
                if($a == $b)
                    if($i * $j % $k == 0)
                        $cnt++;
            }
        }
        return $cnt;
    }
}
```
