# Rust/Python. Logarithmic time. Terrible programming question, excellent math question

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/3915582/](https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/3915582/)

---

# Intuition
This is a very terrible programming/interview question. Why? Because it is hard to come up with mathematical proof (real math proof, not handwaving I am doing and every other answer pretends pass as a real proof).

And once the math is done (or easily guessed by trying a few test cases or after doing a brute force), the programming is just a few lines and can be done by anyone. Because of lenght of the string is small, you do not even need to perform power exponentiation and can do linear algorithm like many have done.

In my case, this is power-exponentiation and does it in `log(n)` time.

------------------
I will not be pretending like I saw it at the beginning. The only thing I saw right away is that if k = 1, the answer is `2^len(s)`. I have written a brute force, tried it on many small strings and saw two things:
 - content of string does not matter
 - answer always look like `2^x`

Then I saw that it is `2^(len(s) - k + 1)` which makes some sense as each `k` group creates 2x more answers and in total you have `len(s) - k + 1` such groups


# Complexity
- Time complexity: $O(\\log n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {

  fn pow(mut x: u64) -> u64 {
    let (mut res, mut mult) = (1u64, 2u64);
    let m = 1000000007;
    
    while x != 0 {
      if x % 2 == 1 {
        res = (res * mult) % m;
      }
      mult = (mult * mult) % m;
      x /= 2;
    }
    return res
  }

  pub fn count_distinct_strings(s: String, k: i32) -> i32 {
    return Self::pow((s.len() - (k as usize) + 1) as u64) as i32;
  }
}
```
```python []
class Solution:
  def countDistinctStrings(self, s: str, k: int) -> int:
    return pow(2, len(s) - k + 1, 10**9 + 7)
```
