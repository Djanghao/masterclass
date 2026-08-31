# Sort

**Author:** system_f
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-empty/solutions/5875220/](https://leetcode.com/problems/make-array-empty/solutions/5875220/)

---


# Code
```rust []
impl Solution {
    pub fn count_operations_to_empty_array(nums: Vec<i32>) -> i64 {
        go(nums)
    }
}

// Insights:
// - the smallest element is always removed without sifting.
// - the basic cost is 1
// - the k-th large element needs to be sifted for at most /k/ times
// - it can avoid sifting once if a smaller element is placed before it.

fn go(nums: Vec<i32>) -> i64 {
  let mut ans = nums.len() as i64;
  let mut nmap = nums.into_iter().enumerate().collect::<Vec<_>>();
  nmap.sort_unstable_by_key(|it| it.1);

  let mut deduction = 0;
  for i in 1..nmap.len() {
    if nmap[i-1].0  < nmap[i].0 {
      deduction += 1;
    }
    ans += (i as i64) - deduction;
  }
  ans
}

```