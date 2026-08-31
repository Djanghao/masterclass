# [Golang] Simple O(N) greedy solution

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/4511186/](https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/4511186/)

---

# Intuition
Since we have to find the next greatest number lexicographically, we have to greedily pick the number to swap with a highest number.

# Approach

We traverse from right to left and find the first position where we see an increase. We mark that position `i`. This is the position we have to swap. We now need to find the number to swap it with. We'll call this `j` and this position appears on the right. We traverse from right to left again and this time, we find the number that is largest but less than the `arr[i]`. One trick here is to find the number that is closest to `i` if we find multiple such numbers. Otherwise we wouldn't find the lexicographically greatest number.

# Complexity
- Time complexity: O(N)
- Space complexity: O(1)

# Code
```
func prevPermOpt1(arr []int) []int {
  n := len(arr)
  i := n-2
  for i >= 0 && arr[i] <= arr[i+1] {
    i--
  }
  if i >= 0 {
    // If i >= 0, it means we're seeing an increase when traversing from right to left.
    // We now have to pick a number that is less than arr[i] and the greatest of all 
    // on the right. We do that by traversing from right to left.
    j := n-1
    for j > i && arr[j] >= arr[i] {
      j--
    }
    // If we have multiple such number, we have to pick the one that is closest to i so
    // we can make the next lexicographically largest number.
    for j-1 > i && arr[j] == arr[j-1] {
      j--
    }
    arr[i], arr[j] = arr[j], arr[i]
  }
  return arr
}
```