# PHP Solution

**Author:** punkundead
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3397837/](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3397837/)

---

# Code\r
```PHP\r
class Solution {\r
    private $cache = [];\r
    /**\r
     * @param String $colors\r
     * @param Integer[][] $edges\r
     * @return Integer\r
     */\r
    function largestPathValue($colors, $edges) {\r
        $map = [];\r
        foreach($edges as [$a, $b]){\r
           $map[$a][] = $b;\r
        }\r
        $max = 0;\r
        $visited = array_fill(0, strlen($colors), false);\r
        for($i = 0; $i<strlen($colors); $i++){\r
            [$err, $c] = $this->getMaxC($map, $colors, $i, $visited);\r
            if(!$err){\r
                $max = max($max, max($c));\r
            }\r
            else return -1;\r
        }\r
\r
        return $max;\r
    }\r
\r
    function getMaxC($map, $colors, $i, &$visited) {\r
        if($visited[$i]) return [true, []];\r
        if(isset($this->cache[$i]))\r
            return [false, $this->cache[$i]];\r
        $res = $this->def();\r
\r
        $visited[$i] = true;\r
        \r
        foreach($map[$i] as $next) {\r
            [$err, $subres] = $this->getMaxC($map, $colors, $next, $visited);\r
            if($err) return [true, []];\r
            foreach($subres as $c=>$v) {\r
                $res[$c] = max($res[$c], $v);\r
            }\r
        }\r
\r
        $visited[$i] = false;\r
        $res[$colors[$i]]++;\r
\r
        return [false, $this->cache[$i] = $res];\r
    }\r
\r
    function def() {\r
        static $def = null;\r
        if($def === null) {\r
            $def = array_combine(range('a', 'z'), array_fill(0, 26, 0));\r
        }\r
\r
        return $def;\r
    }\r
}\r
```