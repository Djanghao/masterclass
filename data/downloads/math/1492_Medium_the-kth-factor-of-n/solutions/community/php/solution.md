# the kth factor of n

**Author:** oriann
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-kth-factor-of-n/solutions/5533164/](https://leetcode.com/problems/the-kth-factor-of-n/solutions/5533164/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Initialize an empty array to store the factors of n.
2. Loop through all numbers from 1 to n and check if they are factors of n
3. Append each factor to the array.
4. Check if the array has at least k factors. If it does, return the kth factor (remembering that array indices start at 0, so we use $k - 1). If not, return -1.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function kthFactor($n, $k) {
        
        $factors = array();

        for ($i = 1; $i <= $n; $i++) {
            if ($n % $i == 0)
                $factors[] = $i;
        }

        if (count($factors) >= $k) 
            return $factors[$k - 1];
        else 
            return -1;
        
    }
}
```