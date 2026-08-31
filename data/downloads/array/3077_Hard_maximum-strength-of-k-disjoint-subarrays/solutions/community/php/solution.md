# Beats 🚀 100.00% 🚀 of users with PHP

**Author:** ImAbuSayed
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4890155/](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4890155/)

---

# Intuition

The problem asks us to find the maximum strength of a group of soldiers when we can make at most k modifications to their strengths, where a modification can be either adding or subtracting one unit of strength from a soldier's strength. To solve this problem, we can think of it as a dynamic programming problem, where we can try to find the maximum strength that can be achieved by making different numbers of modifications to the soldiers' strengths.

# Approach

We can use a 3D array `f` to store the maximum strength that can be achieved by making different numbers of modifications to the soldiers' strengths. The first dimension `i` represents the index of the soldier we are considering, the second dimension `j` represents the number of modifications we have made so far, and the third dimension is a pair of values `[a, b]`, where `a` is the maximum strength we can achieve without modifying the current soldier's strength, and `b` is the maximum strength we can achieve by modifying the current soldier's strength.

We can initialize `f[0][0][0]` to 0, since if we have no soldiers and no modifications to make, the maximum strength is 0. Then, we can iterate over the soldiers and the number of modifications we can make, and update the values in `f` accordingly.

For each soldier `i` and number of modifications `j`, we can update `f[i][j][0]` by taking the maximum of `f[i-1][j][0]` and `f[i-1][j][1]`, since we can either choose to modify the current soldier's strength or not. We can update `f[i][j][1]` by taking the maximum of `f[i][j][1]` and `f[i-1][j][1] + sign * x * (k - j + 1)`, where `sign` is either 1 or -1 depending on whether `j` is odd or even, and `x` is the current soldier's strength. The term `(k - j + 1)` represents the maximum number of times we can modify the current soldier's strength, since we can only modify a soldier's strength at most once.

If `j > 0`, we can also update `f[i][j][1]` by taking the maximum of its current value and `max(f[i-1][j-1]) + sign * x * (k - j + 1)`, since we can choose to modify the current soldier's strength or not, and we have one fewer modification to make.

Finally, we can find the maximum strength by taking the maximum value in `f[n][k]`, where `n` is the number of soldiers.

# Complexity

- Time complexity: O(n * k)
  - We have three nested loops: one for the soldiers (n), one for the number of modifications (k), and one for the two cases (0 or 1) in the third dimension of `f`. The time complexity is therefore O(n * k * 2) = O(n * k).

- Space complexity: O(n * k)
  - We use a 3D array `f` of size (n+1) * (k+1) * 2 to store the maximum strengths for different numbers of soldiers and modifications. Therefore, the space complexity is O(n * k).

# Code
```
class Solution {
    /**
     * @param array $nums
     * @param int $k
     * @return int
     */
    function maximumStrength($nums, $k) {
        $n = count($nums);
        $f = array_fill(0, $n + 1, array_fill(0, $k + 1, [-INF, -INF]));
        $f[0][0][0] = 0;
        
        for ($i = 1; $i <= $n; $i++) {
            $x = $nums[$i - 1];
            for ($j = 0; $j <= $k; $j++) {
                $sign = ($j & 1) ? 1 : -1;
                $f[$i][$j][0] = max($f[$i - 1][$j][0], $f[$i - 1][$j][1]);
                $f[$i][$j][1] = max($f[$i][$j][1], $f[$i - 1][$j][1] + $sign * $x * ($k - $j + 1));
                if ($j > 0) {
                    $f[$i][$j][1] = max($f[$i][$j][1], max($f[$i - 1][$j - 1]) + $sign * $x * ($k - $j + 1));
                }
            }
        }
        
        $maxStrength = -INF;
        foreach ($f[$n][$k] as $val) {
            $maxStrength = max($maxStrength, $val);
        }
        
        return $maxStrength;
    }
}
```

# Explanation

The code implements the approach described above. It initializes the 3D array `f` with appropriate values and iterates over the soldiers and the number of modifications to update the values in `f` according to the recurrence relations described in the approach.

The outer loop iterates over the soldiers `i`, the middle loop iterates over the number of modifications `j`, and the innermost loop iterates over the two cases (0 or 1) in the third dimension of `f`. For each combination of `i`, `j`, and the case (0 or 1), the code updates the values in `f[i][j]` according to the recurrence relations described in the approach.

After filling in the values in `f`, the code finds the maximum strength by taking the maximum value in `f[n][k]`, which represents the maximum strength that can be achieved by making at most `k` modifications to the strengths of `n` soldiers.

The time complexity of this solution is O(n * k), and the space complexity is also O(n * k), which is efficient for reasonably large values of `n` and `k`.