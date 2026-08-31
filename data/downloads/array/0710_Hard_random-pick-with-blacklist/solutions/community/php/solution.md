# Solution Random Pick with Blacklist

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/4752023/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/4752023/)

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
    private $mapping = [];
    private $newsize;

    function __construct($n, $blacklist) {
        $m = count($blacklist);
        $this->newsize = $n - $m;
        $last = $n - 1;
        $black = array_flip($blacklist);
        
        for ($i = 0; $i < $m; $i++) {
            $num = $blacklist[$i];
            if ($num >= $this->newsize) {
                continue;
            }
            while (isset($black[$last])) {
                $last--;
            }
            $this->mapping[$num] = $last;
            $last--;
        }
    }

    function pick() {
        $rand = rand(0, $this->newsize - 1);
        return isset($this->mapping[$rand]) ? $this->mapping[$rand] : $rand;
    }
}

```