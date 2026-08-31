# Rust/Python. Linear with full math proof (no handwaving, only math)

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-or/solutions/3528482/](https://leetcode.com/problems/maximum-or/solutions/3528482/)

---

# Math proof

Here by the size of number I mean a lengh of its binary representation. For example `1011101` has size of `7`.

Lets assume that we have an array of numbers where one number has the size of `n` and all other numbers have the size of at most `n - 1`. And now we have `k` operations. Here I will prove that the best way to use them is to apply them all to the number of size `n`.

To prove this let's see 
 1. What is the minimum number we can achieve by applying k operations to max size number.
 2. What is the maximum or of numbers we can achive by applying k to other numbers
 3. Show that 1 > 2

**1)** It will be $2^{n + k}$ (if we assume that our max-size number is one with all zeroes).
**2)** We can see that the maximum will be achived if all other numbers consist of only ones. So `111..1` where the number of ones is `n-1` which is $2^{n} - 1$. No matter what we do, with our `k` operations we can't achieve the or of all numbers higher than $2^{n + k} - 1$
**3)** So it is clear that 1 > 2 and therefore we proved that in this case we need to apply all operations to max-size value.

Now lets assume that there are `x` elements of max-size and `y`  elements of of smaller size. It is easy to see that you should not use any operations on smaller size elements. This is because if you used even only one operation on smaller size element, you end up with `x+1` max-size elements and `y-1` smaller size elements but have left `k-1` operations.

So we end up with a situation where we have `k` operations and all number of the same size $n$ and need to decided how we should use those operations. And similar to beginning proof we can show that the minimum number that we can achieve by applying all operations to one number is $2^{n + k}$ and the maximum number in all other cases are $2^{n + k} - 1$



# Solution

So we showed that we need to find which number we need to multiply by $2^k$ to get the maximum or. How can we efficiently do this? For example if we want to efficintly multiply k-th number.

$A_0, ... A_{k-1}, A_k, A_{k+1}, ... A_n$

The answer will be `prefix_or[A[0..k-1]] | (A[k] * 2^k) | suffix_or[A[k+1..n]]`

So this can be done in $O(1)$ for every element, by precomputing `prefix_or` and `suffix_or`.

# Complexity

We iterate over an array 3 times and use 2 additional arrays.

- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code

```Rust []
impl Solution {
  pub fn maximum_or(nums: Vec<i32>, k: i32) -> i64 {
    let (mult, n) = (1 << k as u64, nums.len());
    let mut prefix_or = vec![0; n + 1];
    for i in 0 .. n {
      prefix_or[i + 1] = prefix_or[i] | nums[i] as u64;
    }

    let mut suffix_or = vec![0; n + 1];
    for i in (0 .. n).rev() {
      suffix_or[i] = suffix_or[i + 1] | nums[i] as u64;
    }

    let mut res = 0;
    for i in 0 .. n {
      res = res.max(prefix_or[i] | suffix_or[i + 1] | (nums[i] as u64 * mult));
    }
    return res as i64;
  }
}
```
```python []
class Solution:
  def maximumOr(self, nums: List[int], k: int) -> int:
    mult, n = 1 << k, len(nums)

    prefix_or = [0] * (n + 1)
    for i in range(n):
      prefix_or[i + 1] = prefix_or[i] | nums[i]
    
    suffix_or = [0] * (n + 1)
    for i in range(n - 1, -1, -1):
      suffix_or[i] = suffix_or[i + 1] | nums[i]

    res = 0
    for i in range(n):
      res = max(res, prefix_or[i] | suffix_or[i + 1] | (nums[i] * mult))
    return res
```
