# PHP Solution Find c2

**Author:** Somesh93
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/4223520/](https://leetcode.com/problems/count-square-sum-triples/solutions/4223520/)

---

# Intuition
Initially i thought to use brute force approach right away, but it wasn't so optimized solution, since you can index out of bound states, if not propoerly handled, 
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

The code you provided uses a technique known as the Two-Pointer Approach to find and count Pythagorean triples. The two-pointer technique is commonly used to solve problems involving searching, finding, or counting pairs of elements that meet certain conditions. In this case, it's used to find Pythagorean triples (a, b, c) where a^2 + b^2 = c^2.

Here's how the technique works in your code:

Three variables, $a, $b, $c  are initialized with values and represent the potential Pythagorean triple (a, b, c)

The while loop checks whether $a^2 + $b^2 equals $c^2. If this condition is met, it means that a valid Pythagorean triple is found, and $count is incremented by 2 (to count both (a, b, c) and (b, a, c)).

If $a^2 + $b^2 is less than $c^2, it means that we need to increase the value of $b to move closer to the target sum.

If $a^2 + $b^2 is greater than $c^2, it means that we need to increase the value of $a and decrease the value of $b to move closer to the target sum.

The two-pointer approach is used to efficiently search for Pythagorean triples by incrementing or decrementing the values of $a and $b based on their sum relative to the target sum ($c^2). This approach reduces the time complexity compared to a brute-force nested loop approach.
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
     * @param Integer $n
     * @return Integer
     */
    function countTriples($n) {
        
        $count = 0;
        for ($i = 3; $i <= $n; $i++) {
             $a = 1;
             $b = 2;
             $c = $i;

            while($a != $c && $b != $c && $a != $b){
                if($a * $a + $b * $b == $c * $c){
                    $count += 2;
                    $a++; $b++;
                }
                if ($a * $a + $b * $b < $c * $c) {
                    $b++;
                 }

                if ($a * $a + $b * $b > $c * $c) {
                    $a++;
                    $b--;
                }
            }
        }

        return $count;
    }
}

```