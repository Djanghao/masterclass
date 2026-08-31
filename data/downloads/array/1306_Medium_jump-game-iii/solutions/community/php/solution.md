# ONE - LINER || 100% || 0ms || explained || simple || easy

**Author:** ManojKumarPatnaik
**Votes:** 1
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/1924058/](https://leetcode.com/problems/jump-game-iii/solutions/1924058/)

---

```
Explanation
    def canReach(self, A, i):
        if 0 <= i < len(A) and A[i] >= 0:
            A[i] = -A[i]
            return A[i] == 0 or self.canReach(A, i + A[i]) or self.canReach(A, i - A[i])
        return False
Check 0 <= i < A.length
flip the checked number to negative A[i] = -A[i]
If A[i] == 0, get it and return true
Continue to check canReach(A, i + A[i]) and canReach(A, i - A[i])

Complexity
Time O(N), as each number will be flipper at most once.
Space O(N) for recursion.


Java:

    public boolean canReach(int[] A, int i) {
        return 0 <= i && i < A.length && A[i] >= 0 && ((A[i] = -A[i]) == 0 || canReach(A, i + A[i]) || canReach(A, i - A[i]));
    }
C++:

    bool canReach(vector<int>& A, int i) {
        return 0 <= i && i < A.size() && A[i] >= 0 && (!(A[i] = -A[i]) || canReach(A, i + A[i]) || canReach(A, i - A[i]));
    }
```