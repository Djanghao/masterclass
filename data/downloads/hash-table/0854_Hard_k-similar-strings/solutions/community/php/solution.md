# Solution K-Similar Strings

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-similar-strings/solutions/4800233/](https://leetcode.com/problems/k-similar-strings/solutions/4800233/)

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
     * @param String $s1
     * @param String $s2
     * @return Integer
     */
    function kSimilarity($s1, $s2) {
        if ($s1 == $s2) return 0;
        
        $visited = [];
        $queue = new SplQueue();
        $queue->enqueue([$s1, 0]);
        $visited[$s1] = true;
        
        while (!$queue->isEmpty()) {
            [$current, $steps] = $queue->dequeue();
            
            if ($current == $s2) return $steps;
            
            $i = 0;
            while ($current[$i] == $s2[$i]) $i++;
            
            for ($j = $i + 1; $j < strlen($current); $j++) {
                if ($current[$j] == $s2[$j] || $current[$j] != $s2[$i]) continue;
                
                $next = $current;
                $next[$i] = $current[$j];
                $next[$j] = $current[$i];
                
                if (!isset($visited[$next])) {
                    $queue->enqueue([$next, $steps + 1]);
                    $visited[$next] = true;
                }
            }
        }
        
        return -1;
    }
}

```