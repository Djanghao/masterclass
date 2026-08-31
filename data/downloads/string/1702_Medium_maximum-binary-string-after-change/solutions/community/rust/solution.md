# Rust Solution using Greedy

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-string-after-change/solutions/2941709/](https://leetcode.com/problems/maximum-binary-string-after-change/solutions/2941709/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
  pub fn maximum_binary_string(binary: String) -> String {
    let s = binary.chars().collect::<Vec<char>>();
    let n = s.len();
    let mut stack = vec![];
    let mut temp = vec![];

    let mut i = 0;
    while i < n {
      let c = s[i];
      if temp.is_empty() {
        if c == '1' {
          stack.push(c);
        } else {
          temp.push(c);
        }
      } else {
        if c == '1' {
          temp.push('1');
        } else {
          stack.push('1');
        }
      }
      i += 1;
    }
    
    for c in temp {
      stack.push(c);
    }
    stack.into_iter().map(|v| v.to_string()).collect::<_>()
  }
}
```