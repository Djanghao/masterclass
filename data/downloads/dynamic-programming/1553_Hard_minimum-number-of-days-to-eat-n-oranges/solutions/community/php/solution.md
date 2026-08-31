# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/6086787/](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/6086787/)

---

```php []
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function minDays($n) {
        // First idea: Brute force approach is O(3^n), as we have 3 choices and n oranges.
        //             Didn't even try.
        //
        // Second idea: We can reduce the Big-O applying memoization.
        // Dynamic Programming (bottom-up):
        //  - We start from 4 oranges (first non-base case), and keep growing up to we reach n.
        //  - In every step, we check which are our options, grab those options from memo and
        //    keep the lowest value + 1.
        // Most test pass, but some fail due to time constraints....
        /*
        // Base cases
        $memo = [
            1 => 1, // Op1
            2 => 2, // Op1/Op2 + Op1
            3 => 2, // Op3 + Op1
        ];
        for ($orangesLeft = 4; $orangesLeft<=$n; $orangesLeft++) {
            // Op1. Eat 1 orange
            $choices = [$memo[$orangesLeft-1]];
            
            // Op2. Eat half oranges
            if ($orangesLeft%2 === 0) {
                $choices[] = $memo[$orangesLeft/2];
            }
            
            // Op3. Eat half oranges
            if ($orangesLeft%3 === 0) {
                $choices[] = $memo[$orangesLeft/3];
            }

            // Store min value + 1
            $memo[$orangesLeft] = min($choices) + 1;
        }
        return $memo[$n];
        */

        // Third idea: eating 1 orange only is very slow. We should aim to eat either 1/2 or 2/3.
        // Hence, let's only eat 1 orange as few times as strictily required to reach next %2 and %3.
        // Explanation: https://www.youtube.com/watch?v=LziQ6Qx9sks
        $this->memo = [0 => 0, 1 => 1];
        return $this->dfs($n);
    }

    function dfs($n) {
        if (isset($this->memo[$n])) return $this->memo[$n];

        $div2 = 1                       // Current day
            + ($n%2)                    // Days of 1 orange, until becoming %2 (either 0 or 1)
            + $this->dfs((int)($n/2));  // Recursive call

        $div3 = 1                       // Current day
            + ($n%3)                    // Days of 1 orange, until becoming %3 (either 0, 1 or 2)
            + $this->dfs((int)($n/3));  // Recursive call

        $this->memo[$n] = min($div2, $div3);
        return $this->memo[$n];
    }

}
```