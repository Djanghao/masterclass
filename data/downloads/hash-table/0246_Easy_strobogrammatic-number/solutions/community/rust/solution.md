# Rust. Linear with explanation. Hardest part is to guess which digits are fine

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/3638938/](https://leetcode.com/problems/strobogrammatic-number/solutions/3638938/)

---

# Intuition
The hardest part of the problem is to guess which digits look the same (I thought that `1` is not the same, but problem thinks otherwise). 

The digits which are the same and can be transformed to another are:
 - 6 -> 9
 - 9 -> 6
 - 8 -> 8
 - 0 -> 0
 - 1 -> 1

So you just check whether `nums[i]` is tranformed correctly into nums`[len(nums) - i - 1]`. You do not even need to do this for all i only for half + 1 to make sure you also check the middle which does not really have a pair and should be paird with itself.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```
impl Solution {
  pub fn is_strobogrammatic(num: String) -> bool {
    let l = num.len();
    let num: Vec<char> = num.chars().collect();
    for i in 0 .. l / 2 + 1 {
      if (
        num[i] == '6' && num[l - i - 1] == '9' 
      ) || (
        num[i] == '9' && num[l - i - 1] == '6' 
      ) || (
        num[i] == '8' && num[l - i - 1] == '8' 
      ) || (
        num[i] == '0' && num[l - i - 1] == '0' 
      ) || (
        num[i] == '1' && num[l - i - 1] == '1' 
      ) {
        continue;
      } else {
        return false
      }
    }
    return true;

  }
}
```