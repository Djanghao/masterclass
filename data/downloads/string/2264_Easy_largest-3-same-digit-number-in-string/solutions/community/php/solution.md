# PHP Intuition via array (3 ms)

**Author:** antonchuche
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4361663/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4361663/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

![Screenshot 2023-12-04 at 16.01.39.png](./images/0.png)


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $num
     * @return String
     */
    function largestGoodInteger($num) {
        $arr = str_split($num, 1);
        $count = count($arr);
        if($count < 3)
            return '';

        $result = [];
        for($i = 0; $i < $count; $i++){
            if($arr[$i] == $arr[$i+1] && $arr[$i+1] == $arr[$i+2])
                $result[] = $arr[$i] . $arr[$i] . $arr[$i];
        }    

        return (!empty($result)) 
            ? max($result) : "";
    }
}
```