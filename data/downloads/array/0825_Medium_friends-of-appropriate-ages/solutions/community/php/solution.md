# Solution Friends Of Appropriate Ages

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/friends-of-appropriate-ages/solutions/4794878/](https://leetcode.com/problems/friends-of-appropriate-ages/solutions/4794878/)

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

    function numFriendRequests($ages) {
        $requests = 0;
        $count = array_fill(0, 121, 0);
        
        foreach ($ages as $age) {
            $count[$age]++;
        }
        
        for ($ageA = 0; $ageA <= 120; $ageA++) {
            for ($ageB = 0; $ageB <= 120; $ageB++) {
                if ($ageB > $ageA || $ageB <= 0.5 * $ageA + 7 || ($ageB > 100 && $ageA < 100)) {
                    continue;
                }
                $requests += $count[$ageA] * $count[$ageB];
                
                if ($ageA == $ageB) {
                    $requests -= $count[$ageA];
                }
            }
        }
        
        return $requests;
    }
}

```