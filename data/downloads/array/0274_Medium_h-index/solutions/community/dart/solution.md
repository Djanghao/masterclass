# Dart solution with explanation

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/h-index/solutions/5896074/](https://leetcode.com/problems/h-index/solutions/5896074/)

---

# Intuition
The h-index is a metric that measures both the productivity and citation impact of a researcher's publications. Given a list of citations, we are tasked with finding the highest number `h` such that the researcher has at least `h` papers with `h` or more citations. A brute force approach would involve checking each possible value of `h`, but this can be optimized using binary search.

# Approach
1. **Binary Search**:
   - The h-index is between `0` and `n` (the number of papers). Using binary search, we check for each possible middle value (`mid`) if it can be an h-index. 
   - The helper function `_hasHIndexCitations` checks if the current `mid` value can be an h-index by counting how many papers have citations greater than or equal to `mid`.
   - If it satisfies the condition, we move the `left` pointer to search for a larger h-index, otherwise, we move `right` to search for a smaller one.
   - The process continues until the maximum h-index is found.

2. **Helper Function**:
   - The `_hasHIndexCitations` function checks whether at least `h` papers have `h` or more citations by iterating through the citation list.

# Complexity
- **Time Complexity**:
   - The binary search operates in \\(O(\\log n)\\), and for each binary search iteration, the helper function performs a linear scan over the list of citations, which takes \\(O(n)\\).
   - Thus, the total time complexity is \\(O(n \\log n)\\).

- **Space Complexity**:
   - The space complexity is \\(O(1)\\), since we only use a few variables for the binary search and the helper function.

# Code
```dart
class Solution {
  int hIndex(List<int> citations) {
    int left = 0;
    int right = citations.length;
    while(left <= right) {
        final mid = (left + right) >> 1;
        if(_hasHIndexCitations(mid, citations)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
  }

  bool _hasHIndexCitations(int h, List<int> citations) {
    int count = 0;
    for(int cit in citations) {
        if(cit >= h) {
            count++;
        }
    }
    return count >= h;
  }
}
