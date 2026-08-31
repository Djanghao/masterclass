# PHP | Just jumping around.

**Author:** billy_homeless
**Votes:** 3
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/3160417/](https://leetcode.com/problems/jump-game-ii/solutions/3160417/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Pretty straightforward. 
We iterate to **size - 1** because we don't actually need to jump anywhere from there ;)

In *while* loop we:
    1. We compare **maxJumpDst** (that contains previous maximum jump distance value) with **possibleJumpDst** (as it said in the decription ***you can jump to any nums[i + j]***).
    2. If current index **i** is equal to our **pos**ition, we have to make a jump, and we do so by jumping maximum possible distance. Afterwards we increase the jump counter (**res**).

When loop is finished we return jump counter.  



# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function jump($nums) {
        $res = $i = $maxJumpDst = $pos = 0;
        $size = count($nums);

        while($i < $size - 1) {
            $currentNum = $nums[$i];
            $possibleJumpDst = $currentNum + $i;
            $maxJumpDst = max($maxJumpDst, $possibleJumpDst);

            if ($i === $pos) {
                $pos = $maxJumpDst;
                $res++;
            }

            $i++;
        }

        return $res;
    }
}
```