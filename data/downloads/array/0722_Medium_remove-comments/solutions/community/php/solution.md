# Solution Remove Comments

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-comments/solutions/4780229/](https://leetcode.com/problems/remove-comments/solutions/4780229/)

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
     * @param String[] $source
     * @return String[]
     */
    function removeComments($source) {
        $result = [];
        $inBlockComment = false;
        $newLine = "";
        
        foreach ($source as $line) {
            if (!$inBlockComment) {
                $newLine = "";
            }
            
            $i = 0;
            $lineLength = strlen($line);
            while ($i < $lineLength) {
                if (!$inBlockComment && $i + 1 < $lineLength && $line[$i] == '/' && $line[$i + 1] == '/') {
                    break;
                } elseif (!$inBlockComment && $i + 1 < $lineLength && $line[$i] == '/' && $line[$i + 1] == '*') {
                    $inBlockComment = true;
                    $i++;
                } elseif ($inBlockComment && $i + 1 < $lineLength && $line[$i] == '*' && $line[$i + 1] == '/') {
                    $inBlockComment = false;
                    $i++;
                } elseif (!$inBlockComment) {
                    $newLine .= $line[$i];
                }
                
                $i++;
            }
            
            if (!$inBlockComment && !empty($newLine)) {
                $result[] = $newLine;
            }
        }
        
        return $result;
    }
}

```