# Simple Explained Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/3175634/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/3175634/)

---


```
class Solution {
public:
    int maximumTop(vector<int>& A, int k) {
        int N = A.size();
        if (k == 0) return N >= 1 ? A[0] : -1; // if no moves allowed, return the topmost element if any
        if (k == 1) return N == 1 ? -1 : A[1]; // if only one move is allowed, we can only remove the topmost element
        if (N == 1) return k % 2 == 0 ? A[0] : -1; // if `N == 1`, we can return the topmost element if `k` is a even number (keep removing the topmost element and adding it back).
        int mx = *max_element(begin(A), begin(A) + min(k - 1, N)); // we can take `min(k-1, N)` elements and put back the largest one on the top
        if (k < N) mx = max(mx, A[k]); // If `k < N`, we can take all the topmost `k` elements and return the one left at the top
        return mx;
    }
};
```