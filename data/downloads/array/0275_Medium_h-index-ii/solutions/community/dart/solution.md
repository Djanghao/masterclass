# Dart solution with explanation

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/5896301/](https://leetcode.com/problems/h-index-ii/solutions/5896301/)

---

# Intuition
The h-index is a measure of a researcher's impact, defined as the maximum number `h` such that the researcher has at least `h` papers with `h` or more citations. If the citations are sorted in ascending order, we can use binary search to efficiently find this value. The problem can be viewed as finding the largest `h` where there are exactly `h` papers with at least `h` citations, which makes binary search a natural fit.

# Approach
1. **Binary Search**:
   - We apply binary search on the possible values of the h-index (`mid`), ranging from `0` to `n` (number of papers). 
   - The condition we check for each `mid` is whether the `n - mid`th paper has at least `mid` citations (`citations[n - mid] >= mid`). If true, it means we can try for a higher h-index (`left = mid`); otherwise, we reduce the search space (`right = mid - 1`).
   - The search terminates when `left` equals `right`, and this value represents the maximum h-index.

2. **Key Insight**:
   - The list of citations is sorted in non-decreasing order, so the `n - mid`th citation should have at least `mid` citations for `mid` to be a valid h-index.

# Complexity
- **Time Complexity**:
   - The binary search runs in \\(O(\\log n)\\), where \\(n\\) is the number of papers. Checking whether the current `mid` value satisfies the h-index condition takes constant time.
   - Therefore, the total time complexity is \\(O(\\log n)\\).

- **Space Complexity**:
   - The space complexity is \\(O(1)\\) since only a few variables are used for storing indices and performing the search.

# Code
```dart
class Solution {
  int hIndex(List<int> citations) {
    final n = citations.length;
    int left = 0;
    int right = n;
    while(left < right) {
        final mid = left + (right - left + 1) ~/ 2;
        if(citations[n - mid] >= mid) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
  }
}
