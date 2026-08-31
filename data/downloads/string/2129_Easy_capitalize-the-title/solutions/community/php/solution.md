# PHP

**Author:** utahir10
**Votes:** 0
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/6036990/](https://leetcode.com/problems/capitalize-the-title/solutions/6036990/)

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
     * @param String $title
     * @return String
     */
    function capitalizeTitle($title) {
        $title = strtolower($title);
        $arr = explode(' ', $title);
        foreach ($arr as $key => $value) {
            if(strlen($value) > 2) {
                $arr[$key] = ucfirst($value);
            }
        }
        $string = implode(' ', $arr);
        return $string;
    }
}
```