# Runtime 0ms Beats 100.00%of users with PHP Memory 18.62MB Beats 100.00%

**Author:** akbarali1
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/4170511/](https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/4170511/)

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
     * @param String $s
     * @return Integer
     */
    public function secondHighest(string $s)
    {
        $res = [];
        foreach (str_split($s) as &$value) {
            if (is_numeric($value)) {
                $res[$value] = $value;
            }
        }
        rsort($res);

        return count($res) <= 1 ? -1 : $res[1];
    }
}
```