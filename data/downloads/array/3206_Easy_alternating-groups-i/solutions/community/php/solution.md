# PHP Solution

**Author:** JimWei89
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-i/solutions/5657963/](https://leetcode.com/problems/alternating-groups-i/solutions/5657963/)

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
     * @param Integer[] $colors
     * @return Integer
     */
    function numberOfAlternatingGroups($colors) {
        $count=count($colors);
        $out=0;
        foreach($colors as $i=>$color){
            $i2 = ($i+1<$count)?$i+1:$i+1-$count;
            $i3 = ($i+2<$count)?$i+2:$i+2-$count;
            if($color==$colors[$i3] && $colors[$i2]!=$color){
                $out++;
            }
        }
        return $out;
    }
}
```