# Python/Rust. Sorting with two pointers. Detailed explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/3651106/](https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/3651106/)

---

# Intuition
One of the very important observation in problems of such sort is that a very annoying `i < j` condition is not very important as it can be substituted with `i != j`.

Why is this the case? Lets assume that you found some suitable `i, j` but `i > j`. Then you can just select `j, i`.

Why is this important? Because now we do not care about the order and we can rearrange the elements.

-------

Lets look at condition: `A[i] + A[j] > B[i] + B[j]`. This can be rewritten as `A[i] - B[i] + A[j] - B[j] > 0` . But we can change it to just `C[i] - C[j] > 0` where `C` is the difference between A and B.

Now because we do not care about the order we can sort the array. Lets look at some array:

`-7, -5, -3, -3, 0, 0, 1, 2, 5, 7, 9`

Lets fix one index `i`, what will be the values which satisfy our condition? `C[i] > C[j]`. So for the value `-7` we need to find all values which are bigger than `7`. This can be easily done with binary search. Which will be additionalal $n \\log n$ operations.

But once the data is sorted, it can be done in linear time using **two pointers**. Here we start our pointers at the beginning and end of the array and move them to each other until they meet. If `C[j]] + C[i] > 0` then we need to decrease higher pointer, otherwise we increase lower pointer and increase result by all the values on the right from the higher index.

The only thing is that at the end when `i` meets `j`, we can have positive values at position `i`. So when we end up at position `6` in our original array (the value is `1`). Starting from this position, any pair will work and you can count all of them with using math `n * (n - 1) / 2`

# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(sort)$

# Code
```Rust []
impl Solution {
  pub fn count_pairs(mut A: Vec<i32>, B: Vec<i32>) -> i64 {
    for i in 0 .. A.len() {
      A[i] -= B[i];
    }
    A.sort_unstable();

    let (mut res, mut i, mut j) = (0, 0, A.len() - 1);
    while i < j {
      if A[j] + A[i] > 0 {
        j -= 1;
      } else {
        res += A.len() - 1 - j;
        i += 1;
      }
    }

    res += (A.len() - j) * (A.len() - j - 1) / 2;
    return res as i64;
  }
}
```
```python []
class Solution:
  def countPairs(self, A: List[int], B: List[int]) -> int:
    for i in range(len(A)):
      A[i] -= B[i]
    A.sort()

    res, i, j = 0, 0, len(A) - 1
    while i < j:
      if A[j] + A[i] > 0:
        j -= 1
      else:
        res += len(A) - 1 - j
        i += 1
    
    res += (len(A) - j) * (len(A) - j - 1) // 2
    return res
```