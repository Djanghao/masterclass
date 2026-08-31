# Simple PHP solution beats 100% runtime

**Author:** quanvip1999
**Votes:** 1
**Link:** [https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4734461/](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4734461/)

---

![image.png](./images/0.png)\r
# Complexity\r
- Time complexity: O(nlog(n))\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity: O(n)\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
class Solution {\r
\r
    /**\r
     * @param Integer[] $arr\r
     * @param Integer $k\r
     * @return Integer\r
     */\r
    function findLeastNumOfUniqueInts($arr, $k) {\r
        $count = array_count_values($arr);\r
        sort($count);\r
        $cur = $k;\r
        foreach ($count as $key => $item) {\r
            if ($cur >= $item) {\r
                $cur -= $item;\r
                $count[$key] = 0;\r
            } else {\r
                break;\r
            }\r
        }\r
\r
        $res = 0;\r
        foreach ($count as $item) {\r
            if ($item > 0) {\r
                $res++;\r
            }\r
        }\r
\r
        return $res;\r
    }\r
}\r
```