# dart solution

**Author:** KyleRiggen
**Votes:** 1
**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solutions/5208693/](https://leetcode.com/problems/student-attendance-record-ii/solutions/5208693/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int checkRecord(int n) {
    const int m = 1000000007;
    List<int> A = List.filled(n, 0);
    List<int> P = List.filled(n, 0);
    List<int> L = List.filled(n, 0);
    
    P[0] = 1;
    L[0] = 1;
    if (n > 1) {
      L[1] = 3;
    }
    A[0] = 1;
    if (n > 1) {
      A[1] = 2;
    }
    if (n > 2) {
      A[2] = 4;
    }
    
    if (n == 1) return 3;
    
    for (int i = 1; i < n; i++) {
      A[i - 1] %= m;
      P[i - 1] %= m;
      L[i - 1] %= m;
      
      P[i] = ((A[i - 1] + P[i - 1]) % m + L[i - 1]) % m;
      
      if (i > 1) {
        L[i] = ((A[i - 1] + P[i - 1]) % m + (A[i - 2] + P[i - 2]) % m) % m;
      }
      
      if (i > 2) {
        A[i] = ((A[i - 1] + A[i - 2]) % m + A[i - 3]) % m;
      }
    }
    
    return ((A[n - 1] % m + P[n - 1] % m) % m + L[n - 1] % m) % m;
  }
}

```