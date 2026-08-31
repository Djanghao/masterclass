# 100% time, 100% memory, O(√n).

**Author:** MakakArt
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-squares/solutions/4699457/](https://leetcode.com/problems/perfect-squares/solutions/4699457/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
I used Legendre's three-square theorem and Lagrange's four-square theorem. 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(\u221An)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function numSquares($n) {
        $sqares = [];

        for ($i = 1; $i <= (int)(sqrt($n)); $i++){
            $sqares[] = pow($i, 2);
        }

        if (in_array($n, $sqares))
            return 1;

        foreach ($sqares as $sqr){
            if (in_array(($n - $sqr), $sqares))
                return 2;
        }

        while(($n % 4) == 0){
            $n = $n/4;
        }

        if (($n %8 ) == 7){
            return 4;
        }

        return 3;
    }
}
```