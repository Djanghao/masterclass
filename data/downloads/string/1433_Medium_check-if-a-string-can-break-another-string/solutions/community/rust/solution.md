# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/4035381/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/4035381/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
fn helper(s1:String, s2:String) -> bool {
  let mut arr = vec![0;26];
  for c in s2.chars() {
    arr[c as usize - 'a' as usize] += 1;
  }

  for c in s1.chars() {
    let i = c as usize - 'a' as usize;
    let mut success = false;
    for j in i..26 {
      if 0 < arr[j] {
        arr[j] -= 1;
        success = true;
        break
      }
    }
    if !success {
      return false
    }
  }

  true
}

impl Solution {
  pub fn check_if_can_break(s1: String, s2: String) -> bool {
    helper(s1.clone(), s2.clone()) || helper(s2, s1)
  }
}
```