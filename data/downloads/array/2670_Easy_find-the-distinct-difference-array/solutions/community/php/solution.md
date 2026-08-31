# loop through $nums and count the unique array using array_slice

**Author:** ccdsiu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/4860532/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/4860532/)

---

# Intuition
loop through $nums and count the unique array using array_slice

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function distinctDifferenceArray($nums) {
        $res = [];
        for ($i = 0; $i < count($nums); $i++) {
            $k = $i+1;
            $l_array = count(array_unique(array_slice($nums,0,$k)));
            $r_array = count(array_unique(array_slice($nums,$k,count($nums))));
            array_push($res,($l_array-$r_array));
        }
        return $res;
    }
}
```