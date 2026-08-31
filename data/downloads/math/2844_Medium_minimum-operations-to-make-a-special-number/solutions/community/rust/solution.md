# Python/Rust linear solution, look for five and zero. With simple explanation

**Author:** SalvadorDali
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3995014/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3995014/)

---

# Intuition
For a number to be divisible by 25 it should end with either 25, 50, 75 or 00. 

Lets check for two conditions ():
 - number ends with 5. See `_look_five`
 - number ends with 0. See `_look_zero`

There is the same part for both of them: drop the digits from the right (and increase result) until you find the needed number. If you do not have anything left, this is the end.

```
    res, num = 0, list(num)
    while num and num[-1] != X:
      num.pop()
      res += 1

    if not num:
      return res
```


Now you found your needed number. And you need to behave differently.

------
If you searched for 5 and found it, we need to look for 2 or 7. Basically doing the same thing. If you have not found them, you can't use your original five and need to remove it as well

-----
If you searched for 0 and found it, we need to look for 5 or 0. Again do the same thing, but now if you have not found it, it is not an issue as you can just end up with 0 which is divisible by 25.

---------

So try to look for both number and return the minimum result. In rust I do it slightly more efficient by not poping elements, but just checking position. This also makes space constant

# Complexity
- Time complexity: $O(n)$
- Space complexity:$O(n)$ in python, $O(1)$ in rust

# Code
```Python []
class Solution:

  def _look_five(self, num):
    res, num = 0, list(num)
    while num and num[-1] != '5':
      num.pop()
      res += 1

    if not num:
      return res

    num.pop()
    while num and num[-1] not in ['2', '7']:
      num.pop()
      res += 1

    return res if num else res + 1

  def _look_zero(self, num):
    res, num = 0, list(num)
    while num and num[-1] != '0':
      num.pop()
      res += 1

    if not num:
      return res

    num.pop()
    while num and num[-1] not in ['5', '0']:
      num.pop()
      res += 1

    return res

  def minimumOperations(self, num: str) -> int:
    return min(self._look_five(num), self._look_zero(num))
```
```Rust []
impl Solution {

  fn find_zero(arr: &Vec<char>) -> i32 {
    let mut pos = arr.len() - 1;
    let mut res = 0;

    while pos < arr.len() && arr[pos] != '0' {
      pos -= 1;
      res += 1;
    }

    if pos > arr.len() {
      return res;
    }

    pos -= 1;
    while pos < arr.len() && arr[pos] != '5' && arr[pos] != '0' {
      pos -= 1;
      res += 1;
    }

    return res;
  }

  fn find_five(arr: &Vec<char>) -> i32 {
    let mut pos = arr.len() - 1;
    let mut res = 0;

    while pos < arr.len() && arr[pos] != '5' {
      pos -= 1;
      res += 1;
    }

    if pos > arr.len() {
      return res;
    }

    pos -= 1;
    while pos < arr.len() && arr[pos] != '2' && arr[pos] != '7' {
      pos -= 1;
      res += 1;
    }

    if pos > arr.len() {
      return res + 1;
    }
    return res;
  }

  pub fn minimum_operations(num: String) -> i32 {
    let num: Vec<char> = num.chars().collect();
    return Self::find_zero(&num).min(Self::find_five(&num));
  }
}
```
