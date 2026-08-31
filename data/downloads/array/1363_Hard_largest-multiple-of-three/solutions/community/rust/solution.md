# Straightforward $$O(1)$$ space solution

**Author:** _jak
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-multiple-of-three/solutions/4311212/](https://leetcode.com/problems/largest-multiple-of-three/solutions/4311212/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For any number divisible by 3, the sum of its digits is also divisible by 3. So at every step we calculate the sum of the digits mod 3 and remove the smallest number that gets that sum closer to zero.
# Approach
<!-- Describe your approach to solving the problem. -->
partition the digits into zero and nonzero. Sort the nonzero, Do the following in a loop:

  - if there are no more nonzero digits, return `"0"` or `""` depending on the presence of zeros. 
  - calculate $$ sum(digits) \\mod 3$$. If that sum is 0, exit the loop. If there is an element $$i$$ with $$ i\\mod3  = sum$$, remove it. If not, remove the first digit that isn't divisible by 3.

If we haven't returned by now, $$nonzero$$ is nonempty and full of digits that are divisible by 3. We now reverse-sort $$nonzero$$ (this guarantees that we make the largest number possible with the given digits), convert each digit into a string, and append the zeros at the end.

# Complexity
- Time complexity: $$O(n\\log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::cmp::Reverse;
use std::convert::Into;

impl Solution {
    pub fn largest_multiple_of_three(mut digits: Vec<i32>) -> String {
        let (mut nonzeros,zeros):(Vec<i32>,Vec<i32>) = digits.iter().partition(|&&d| d != 0);
        if nonzeros.is_empty() {
            String::from("0")
        } else {
            nonzeros.sort_unstable();
            loop {
                if nonzeros.is_empty() {
                    if !zeros.is_empty() {
                        return String::from("0");
                    } else {
                        return String::from("");
                    }
                } else {
                    let sum:i32 = nonzeros.iter().sum();
                    match sum % 3 {
                        0 => break,
                        x => {
                            if let Some(pos) = nonzeros.iter().position(|&d| d % 3 == x) {
                                nonzeros.remove(pos);
                            } else {
                                let pos = nonzeros.iter().position(|&d| d % 3 != 0).unwrap();
                                nonzeros.remove(pos);
                            }
                        },
                    }
                }
            }
            nonzeros.sort_by_key(|k| Reverse(*k));
                nonzeros.into_iter().map(|x| char::from_digit(x as u32,10).unwrap()).chain(
                    zeros.into_iter().map(|x| char::from_digit(x as u32,10).unwrap()))
                    .collect()
        }
        
    }
}

```