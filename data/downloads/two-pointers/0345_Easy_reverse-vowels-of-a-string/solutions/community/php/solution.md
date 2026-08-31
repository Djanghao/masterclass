# Easy to understand Solution (~80-100% speed, ~75-100% memory)

**Author:** Darkness7193
**Votes:** 3
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/4051916/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/4051916/)

---

# Approach
With two cursors on both ends of the string, we looking for the leftost (first inner while) and the rightost vowels (second inner while) and just swap them. Repeat while cursors dont meet (\\$left < \\$right).

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
function swap(&$arr, $i, $j) {
    $tmp = $arr[$i];
    $arr[$i] = $arr[$j];
    $arr[$j] = $tmp;
}

function is_consonant($letter) {
    $vowels = 'aeiouAEIOU';
    return !str_contains($vowels, $letter);
}

class Solution {

    function reverseVowels($str) {
        $left = 0;
        $right = strlen($str)-1;

        while ($left < $right){
            while (is_consonant($str[$left]) and ($left < $right)){
                $left += 1;
            }
            
            while (is_consonant($str[$right]) and ($left < $right)){
                $right -= 1;
            }

            swap($str, $left, $right);

            $left += 1;
            $right -= 1;
        }
        return $str;
    }
}
```