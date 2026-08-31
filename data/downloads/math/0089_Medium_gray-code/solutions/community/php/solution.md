# Bitwise operations

**Author:** alfatroniks
**Votes:** 0
**Link:** [https://leetcode.com/problems/gray-code/solutions/5075706/](https://leetcode.com/problems/gray-code/solutions/5075706/)

---

# Intuition
I considered using bitwise operations, but simply shifting each step didn't work.

# Approach
Starting with the last element of the current sequence, we add it to each element in reverse order, applying a bitwise OR with 1 shifted by i bits to the left, where i is the current bit number.


for input: n = 2;

Step 0: [0] 00 //always have
Step 1: [0] + (1 << **0**) = [**0**, 1] => (00 | 01 = 01)
Step 2: [0, 1] + (1 << **1**) = [**0, 1**, 3, 2]  => ( 01 | 10 = 11, 00 | 10 = 10)

[00,01,11,10]
[0, 1, 3, 2]

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
     * @return Integer[]
     */
    function grayCode(int $n): array
    {
        $result = [0];

        for ($i = 0; $i < $n; $i++) {
            $last = count($result) - 1;
            for ($j = $last; $j >= 0; $j--) {
                $result[] = $result[$j] | (1 << $i);
            }
        }
        return $result;
    }
}
```