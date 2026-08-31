# Swift DP fastest solution

**Author:** sivykh
**Votes:** 3
**Link:** [https://leetcode.com/problems/restore-the-array/solutions/3447565/](https://leetcode.com/problems/restore-the-array/solutions/3447565/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve the problem, it is necessary to go through all possible ways and count them. The condition can be reformulated as follows: find the maximum number of the possible arrays that can be printed as `s`. Then we are faced with an optimization problem that can be solved by dynamic programming.

# Approach
<!-- Describe your approach to solving the problem. -->
Consider the example
```
s = "1037450"
k = 50
```
The maximum length of number in the possible arrays is 2. Initiate the dynamic programming vector as follows:

$$\\begin{matrix}\	ext{nums}\\\\\	ext{dp}\\end{matrix}\\begin{bmatrix}1&0&3&7&4&5&0&\\\\0&0&0&0&0&0&0&1\\end{bmatrix}$$

Start at the last digit `0`. We can't start with zero, so don't change associated value of the dp:

$$\\begin{matrix}\	ext{nums}\\\\\	ext{dp}\\end{matrix}\\begin{bmatrix}1&0&3&7&4&5&0&\\\\0&0&0&0&0&0&\	extcolor{red}{0}&1\\end{bmatrix}$$

Go to the next-to-last digit `5`. We know that the maximum length is two, so we need to check both variants `5` and `50`:
* Number `5` is good (`1 <= 5 <= 50`) so we get possible ways count for `"0"` that have been already computed and equals 0 (`dp[6]`)
* Number `50` is good so we get possible ways for `""`. It equals 1 and is stored in `dp[7]`

$$\\begin{matrix}\	ext{nums}\\\\\	ext{dp}\\end{matrix}\\begin{bmatrix}1&0&3&7&4&5&0&\\\\0&0&0&0&0&\	extcolor{red}{1}&0&1\\end{bmatrix}$$

Next steps for digit `4`:
* Number `4` is good, get 1 from `dp[5]`
* Number `45` is good, get 0 from `dp[6]` 

$$\\begin{matrix}\	ext{nums}\\\\\	ext{dp}\\end{matrix}\\begin{bmatrix}1&0&3&7&4&5&0&\\\\0&0&0&0&\	extcolor{red}{1}&1&0&1\\end{bmatrix}$$

Next steps for digit `7`:
* Number `7` is good, get 1 from `dp[4]`
* Number `74` is **not** good

$$\\begin{matrix}\	ext{nums}\\\\\	ext{dp}\\end{matrix}\\begin{bmatrix}1&0&3&7&4&5&0&\\\\0&0&0&\	extcolor{red}{1}&1&1&0&1\\end{bmatrix}$$

Complete remaining steps
$$\\begin{matrix}\	ext{nums}\\\\\	ext{dp}\\end{matrix}\\begin{bmatrix}1&0&3&7&4&5&0&\\\\0&0&\	extcolor{red}{2}&1&1&1&0&1\\end{bmatrix}$$

$$\\begin{matrix}\	ext{nums}\\\\\	ext{dp}\\end{matrix}\\begin{bmatrix}1&0&3&7&4&5&0&\\\\0&\	extcolor{red}{0}&2&1&1&1&0&1\\end{bmatrix}$$

$$\\begin{matrix}\	ext{nums}\\\\\	ext{dp}\\end{matrix}\\begin{bmatrix}1&0&3&7&4&5&0&\\\\\	extcolor{red}{2}&0&2&1&1&1&0&1\\end{bmatrix}$$


# Complexity
- Time complexity: $$O(n * logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
final class Solution {
    func numberOfArrays(_ s: String, _ k: Int) -> Int {
        let n = s.count
        let length = min(n, "\\(k)".count)
        let nums = s.map({ Int(String($0))! })

        var d = Array(repeating: 0, count: n + 1)
        d[n] = 1

        for i in (0..<n).reversed() where nums[i] > 0 {
            var num = 0
            for len in 0..<min(length, n - i) {
                num = 10 * num + nums[i + len]
                if 1...k ~= num { // check whether [1, k] contains num
                    d[i] = (d[i] + d[i + len + 1]) % 1_000_000_007
                }
            }
        }
        return d[0]
    }
}
```