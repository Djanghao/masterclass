# Strange Printer - PHP

**Author:** JhenilCode
**Votes:** 0
**Link:** [https://leetcode.com/problems/strange-printer/solutions/5667657/](https://leetcode.com/problems/strange-printer/solutions/5667657/)

---

# Approach
- The approach efficiently computes the solution by breaking down the problem into smaller subproblems and solving them in a bottom-up manner.

# Complexity
- Time complexity:
O(n\xB3), where n is the length of the string s
- breakdown of TC: 
 -The outer loop iterates over i from n-1 down to 0, which gives us O(n) iterations.
 -The middle loop iterates over j from i+1 to n-1, which also gives us O(n) iterations for each i.
 -The innermost loop iterates over k from i to j-1, which results in O(n) iterations for each pair (i, j).

- Space complexity:
space complexity of this solution is O(n\xB2).


# Code
```php []
class Solution {
    function strangePrinter($s) {
    $n = strlen($s);
    
    if ($n == 0) {
        return 0;
    }

    // Initialize DP table
    $dp = array_fill(0, $n, array_fill(0, $n, 0));

    // Fill DP table
    for ($i = $n - 1; $i >= 0; $i--) {
        $dp[$i][$i] = 1; // A single character requires 1 turn to print
        for ($j = $i + 1; $j < $n; $j++) {
            $dp[$i][$j] = $dp[$i][$j - 1] + 1; // Start with printing the last character separately
            for ($k = $i; $k < $j; $k++) {
                if ($s[$k] == $s[$j]) {
                    $dp[$i][$j] = min($dp[$i][$j], $dp[$i][$k] + $dp[$k + 1][$j - 1]);
                }
            }
        }
    }
    
    return $dp[0][$n - 1];
}
}
```