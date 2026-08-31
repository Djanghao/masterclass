# Python/Rust linear solution with explanation. Z-function

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4765213/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4765213/)

---

# Intuition

Problem consists of two steps:
 1. find the locations of `s1` in `s` and `s2` in `s`. This will return us two arrays. Those array will be constantly increasing.
 2. now having those arrays find whether for each value in `arr_1` you can find a value in `arr_2` such that `|v1 - v2| <= k`

The hardest part was to find position of a string in a string. There are many approaches to do this (KMP, hashing) but the approach I like is z-function. It allows to do this calculation efficiently in $O(n)$ time. See very [detailed explanation in cp-algorithms](https://cp-algorithms.com/string/z-function.html) and how to use it to find positions. In my code it is `z_function` and `find_pos`.

Now once we have arrays, we can solve problem two. To do this we use two pointer approach where you move the pointer in first array and then move the pointer in second until we either find a value which suits the needs or we move too far away and we see that we can't find them.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Python []
class Solution:

  def z_function(self, s):
    z, l, r, n = [0] * len(s), 0, 0, len(s)
    for i in range(1, n):
      if i < r:
        z[i] = min(r - i, z[i - l])

      while i + z[i] < n and s[i + z[i]] == s[z[i]]:
        z[i] += 1

      if i + z[i] > r:
        l, r = i, i + z[i]

    return z

  def find_pos(self, s1, s2):
    z = self.z_function(s2 + "|" + s1)
    res = []
    for i in range(len(s2) + 1, len(z)):
      if z[i] == len(s2):
        res.append(i - len(s2) - 1)
    
    return res

  def beautifulIndices(self, s: str, a: str, b: str, k: int) -> List[int]:
    p1 = self.find_pos(s, a)
    p2 = self.find_pos(s, b)
    
    res, j = [], 0
    for i in p1:
      while j < len(p2) and p2[j] < i - k:
        j += 1
      
      if j < len(p2) and p2[j] <= i + k:
        res.append(i)
    return res
```
```Rust []
impl Solution {

  fn z_function(s: Vec<u8>) -> Vec<usize> {
    let mut z = vec![0; s.len()];
    let (mut l, mut r, mut n) = (0, 0, s.len());
    
    for i in 1 .. n {
      if i < r {
        z[i] = (r - i).min(z[i - l]);
      }
      
      while i + z[i] < n && s[i + z[i]] == s[z[i]] {
        z[i] += 1;
      }
      
      if i + z[i] > r {
        l = i;
        r = i + z[i];
      }
    }
    
    return z;
  }

  fn find_pos(s: &Vec<u8>, s1: &Vec<u8>) -> Vec<usize> {
    let mut tmp = vec![0; s1.len() + s.len() + 1];
    for i in 0 .. s1.len() {
      tmp[i] = s1[i]
    }

    for i in 0 .. s.len() {
      tmp[i + s1.len() + 1] = s[i];
    }


    let mut res = Vec::new();
    let z = Self::z_function(tmp);
    for i in s1.len() .. z.len() {
      if z[i] == s1.len() {
        res.push(i - s1.len() - 1);
      }
    }

    return res;
  }

  pub fn beautiful_indices(s: String, s1: String, s2: String, k: i32) -> Vec<i32> {
    let s = s.into_bytes();
    let s1 = s1.into_bytes();
    let s2 = s2.into_bytes();

    let p1 = Self::find_pos(&s, &s1);
    let p2 = Self::find_pos(&s, &s2);

    let mut res = Vec::new();
    let mut j = 0;

    for i in p1 {
      while j < p2.len() && (p2[j] as i32) < (i as i32) - k {
        j += 1;
      }
      if j < p2.len() && p2[j] <= i + k as usize {
        res.push(i as i32);
      }
    }
    return res;
  }
}
```
