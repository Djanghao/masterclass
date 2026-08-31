# Brute Force with Comments

**Author:** khlie87
**Votes:** 0
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/5436210/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/5436210/)

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
     * @param String[] $username
     * @param Integer[] $timestamp
     * @param String[] $website
     * @return String[]
     */
    function mostVisitedPattern($username, $timestamp, $website) {
        $users = [];
        $patterns = [];

        for ($i = 0 ; $i < count($username) ; $i++) {
            if (!array_key_exists($username[$i], $users)) {
                $users[$username[$i]] = [];
            }

            $users[$username[$i]][$timestamp[$i]] = $website[$i];
        }

        foreach ($users as $name => $websites) {
            // Keep track of patterns already found for this user
            $pattern = [];
            // Sort by timestamp
            ksort($websites);
            // Re-index array starting at 0 (remove timestamps but keep sorted order)
            $websites = array_values($websites);
            for ($i = 0 ; $i < count($websites) ; $i++) {
                for ($j = $i + 1 ; $j < count($websites) ; $j++) {
                    for ($k = $j + 1 ; $k < count($websites) ; $k++) {
                        $key = "{$websites[$i]},{$websites[$j]},{$websites[$k]}";
                        // If this pattern is already found for this user, skip
                        if (array_key_exists($key, $pattern)) {
                            continue;
                        } else {
                            $pattern[$key] = 1;
                        }

                        // Add/increment pattern to frequency map
                        if (!array_key_exists($key, $patterns)) {
                            $patterns[$key] = 1;
                        } else {
                            $patterns[$key]++;
                        }
                    }
                }
            }
        }

        // Sort pattern map lexicographically
        ksort($patterns);

        $max = 0;
        $maxPattern = '';
        foreach ($patterns as $p => $count) {
            if ($count > $max) {
                $max = $count;
                $maxPattern = $p;
            }
        }

        return explode(',', $maxPattern);
    }
}
```