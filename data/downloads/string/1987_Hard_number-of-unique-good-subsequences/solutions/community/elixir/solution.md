# [Rust / Elixir] bottom-up DP

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/5169783/](https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/5169783/)

---

# Approach
Iterate the string from right to left, and maintain 3 variables:
`ans`: Number of unique **good** subsequences so far, excluding `"0"`.
`suffix`: Number of unique subsequences starting with `"0"`, and also including the empty string `""`.
`has_0`: Records if there is any `"0"` found, so that we can add 1 to the final answer.

Case 1: When a `"1"` is encountered, increase `ans` by `suffix`.
Case 2: When a `"0"` is encountered, increase `suffix` by `ans + 1`, and also set the `has_0` flag.
# Why does it work
We can guarantee that in Case 1, we can find exactly (`suffix`) new unique **good** subsequences to add to `ans`. Let's say when for the 1st time we encounter a `"1"` after `str` is included to `suffix`, we can create `"1str"`, and the 2nd time we can create `"11str"`, 3rd time `"111str"` etc...

Same logic for Case 2, i.e. `"0str"`, `"00str"`, `"000str"` etc..., except that we need to add 1 more which is a new unique subsequence of just `"0"`s, i.e. `"0"`, `"00"`, `"000"` etc...
# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```Rust []
impl Solution {
    pub fn number_of_unique_good_subsequences(binary: String) -> i32 {
        let mut ans = 0;
        let mut suffix = 1;
        let mut has_0 = 0;
        let large = 1_000_000_007;
        for b in binary.bytes().rev() {
            if b == b'0' {
                suffix = (ans + suffix + 1) % large;
                has_0 = 1;
            }
            else {
                ans = (ans + suffix) % large;
            }
        }
        ans + has_0
    }
}
```
```Elixir []
defmodule Solution do
  @large 1_000_000_007

  @spec number_of_unique_good_subsequences(binary :: String.t) :: integer
  def number_of_unique_good_subsequences(binary) do
    String.to_charlist(binary)
    |> List.foldr({0, 1, 0}, fn
      ?0, {ans, head0, _} -> {ans, rem(head0 + ans + 1, @large), 1}
      ?1, {ans, head0, has_0} -> {rem(ans + head0, @large), head0, has_0}
    end)
    |> then(fn {ans, _, has_0} -> rem(ans + has_0, @large) end)
  end
end
```