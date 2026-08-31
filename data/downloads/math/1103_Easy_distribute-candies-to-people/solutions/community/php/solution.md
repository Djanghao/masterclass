# Solution Distribute Candies to People

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-to-people/solutions/4886713/](https://leetcode.com/problems/distribute-candies-to-people/solutions/4886713/)

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
     * @param Integer $candies
     * @param Integer $num_people
     * @return Integer[]
     */
    function distributeCandies($candies, $num_people) {
        $result = array_fill(0, $num_people, 0);
        
        $candyToGive = 1;
        $index = 0;
        
        while ($candies > 0) {
            $result[$index % $num_people] += min($candies, $candyToGive);
            $candies -= $candyToGive;
            $candyToGive++;
            $index++;
        }
        
        return $result;
    }
}

```