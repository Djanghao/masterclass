# Remove Outermost Parentheses

**Author:** GigaGray01
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/5636918/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/5636918/)

---

# Intuition
I Got 100% beats with runtime:2ms, memory:20.03 MB

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(N)
- Space complexity:
O(N)
# Code
```
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function removeOuterParentheses($s) 
    {
        $stack = array();
        $str_len = strlen($s);
        $str = "";
        $open_counter = 0;
        $close_counter = 0;

        for ($i=0; $i < $str_len; $i++) 
        {
            $bracket = $s[$i];
            $temp_str = "";
            if($bracket == ")")
            {
                $close_counter++;
                array_push($stack,$bracket);
                if($open_counter == $close_counter)
                {
                    array_pop($stack);
                    while (count($stack) > 1) 
                    {
                        $temp_str = array_pop($stack).$temp_str;
                    }
                    $str = $str . $temp_str;
                    array_pop($stack);
                }
            }else{
                $open_counter++;
                array_push($stack,$bracket); 
            }
        }
        return $str;    
    }
}
```