# Solution Circular Permutation in Binary Representation

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/4904517/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/4904517/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
class Solution {\r
    /**\r
     * @param Integer $n\r
     * @param Integer $start\r
     * @return Integer[]\r
     */\r
    function circularPermutation($n, $start) {\r
        $result = array();\r
        \r
        for ($i = 0; $i < 1 << $n; $i++) {\r
            $result[] = $i ^ ($i >> 1);\r
        }\r
        \r
        $startIndex = array_search($start, $result);\r
        $result = array_merge(array_slice($result, $startIndex), array_slice($result, 0, $startIndex));\r
        \r
        return $result;\r
    }\r
}\r
\r
```