# Backtracking + str_starts_with() + substr()

**Author:** yieldtoben
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-break-ii/solutions/5222965/](https://leetcode.com/problems/word-break-ii/solutions/5222965/)

---

# Approach
Backtracking

# Complexity
- Time complexity:
$$O(n \\cdot m^2)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution 
{
    /**
     * @param String $s
     * @param String[] $wordDict
     * @return String[]
     */
    function wordBreak($s, $wordDict)
    {
        $result = [];
        $this->calcSubsets($s, $result, $wordDict);
        return $result;
    }

    function calcSubsets($s, &$R, &$D, $ss = "")
    {
        if ($ss && !$s) return $R[] = trim($ss);
        for ($i = 0; $i < count($D); $i++)
            if (str_starts_with($s, $D[$i]))
                $this->calcSubsets(substr($s, strlen($D[$i])), $R, $D, "{$ss} {$D[$i]}");
    }
}
```