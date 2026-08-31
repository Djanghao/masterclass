# Solution in PHP

**Author:** mukhila
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5091788/](https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5091788/)

---

\r
# Code\r
```\r
class Solution {\r
\r
    /**\r
     * @param String $word\r
     * @return Integer\r
     */\r
    function wonderfulSubstrings($word) {\r
           $count = 0;\r
    $mask = 0;\r
    $freq = [1] + array_fill(0, 1023, 0); // 1023 represents the bitmask for all lowercase letters\r
\r
    // Iterate through each character in the word\r
    for ($i = 0; $i < strlen($word); $i++) {\r
        $mask ^= 1 << (ord($word[$i]) - ord('a')); // Toggle the bit corresponding to the current character\r
        \r
        // Increment the count by the frequency of substrings with the current mask\r
        $count += $freq[$mask];\r
\r
        // Increment the count by the frequency of substrings with any single bit toggled\r
        for ($j = 0; $j < 10; $j++) {\r
            $count += $freq[$mask ^ (1 << $j)];\r
        }\r
\r
        // Increment the frequency of substrings with the current mask\r
        $freq[$mask]++;\r
    }\r
\r
    return $count;\r
    }\r
}\r
```