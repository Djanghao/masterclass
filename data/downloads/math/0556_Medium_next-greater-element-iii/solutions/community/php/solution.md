# Solution with just string manipulation, easy to understand explanation

**Author:** fajarwz
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/4933346/](https://leetcode.com/problems/next-greater-element-iii/solutions/4933346/)

---

# Approach
1. Starting from the far right (example input: 2147483476)
2. Loop to the left
3. Look for a number that is lower than the current number
4. If found (call it the smallest, in this case 4, this one: 2147483[4]76), do a loop to the right and look for a number that is smaller or equal to the smallest
5. If the number is found then go back to the previous number (i.e. the next number that is exactly greater than the smallest, namely 6, this one: 214748347[6])
6. Swap the smallest number (4) with the next number that is greater than the smallest number (6)
7. Result: 2147483[674]
8. Next we have to exchange 7 for 4, because 674 is still greater than 647
9. Split the numbers in the current `$n`. Left from 2 to 6 (21474836), and right from 7 to 4 (74)
10. Make 74 into an array and sort it in ascending order
11. Put the left and right numbers together
12. Don't forget that the function should return -1 if the sum exceeds (2^31) - 1
13. Return the results (2147483647)

# Complexity
- Time complexity:
O(n) because in the worst case we have to iterate over the integers

- Space complexity:
O(n) because we have to have extra space to separate the numbers (left and right)

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function nextGreaterElement($n) {
        // easier with string
        $n = (string) $n;
        $len = strlen($n);

        // ex: 2147483476
        for ($i = $len - 1; $i > 0; $i--) {
            // look for number that lower than the current number
            if ($n[$i] > $n[$i - 1]) {
                // found it, 4
                $toswap = $i - 1;
                $j = $i;
                while ($j <= $len) {
                    // look for number that lower or equal to 4
                    if (isset($n[$j]) && $n[$toswap] < $n[$j]) {
                        $j++;
                    }
                    // if the number found then back to the number before it
                    else {
                        // swap the least (4) with the next greater than the least
                        // result: 2147483[674]
                        // this is not final. we have to swap 7 with 4 (most right nums)
                        [$n[$toswap], $n[$j - 1]] = [$n[$j - 1], $n[$toswap]];
                        break;
                    }
                }

                $left = substr($n, 0, $toswap + 1);
                $right = substr($n, $toswap + 1);
                $right = str_split($right);
                // result: 21474836[47]
                sort($right);

                $ans = (int) ($left . implode($right));
                // dont exceed 2147483647
                return $ans > (pow(2, 31) - 1) ? -1 : $ans;
            }
        }
        
        return -1;
    }
}
```