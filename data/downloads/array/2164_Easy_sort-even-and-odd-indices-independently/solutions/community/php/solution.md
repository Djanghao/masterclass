# readable solution php:

**Author:** menniablaise
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/3336757/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/3336757/)

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
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortEvenOdd($nums) {
        $even = [];
        $odd = [];
        foreach($nums as $key => $int){
            if($key%2 == 0){
                array_push($even, $int);
            }else{
                array_push($odd, $int);
            }
        }

        sort($even);
        rsort($odd);
        $ans = [];

        for($i = 0; $i < count($nums); $i++){
            if($i%2 == 0){
                array_push($ans, reset($even));
                array_shift($even);
            }else{
                array_push($ans, reset($odd));
                array_shift($odd);
            }

        }

        return $ans;
    }
}
```