# Cycle Sort | O(1) Space

**Author:** Rowque
**Votes:** 19
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/3803739/](https://leetcode.com/problems/check-if-array-is-good/solutions/3803739/)

---

**Cycle Sort**

# Intuition
> Numbers have to be in range [1, n - 1] & distinct.

> O(n) Time & O(1) Space

# C++
    bool isGood(vector<int>& A) {
        int sz = size(A);
        for(int i = 0;i < sz;) {
            if(A[i] >= sz) return false;
            int pos = A[i] - 1;
            if(A[pos] == A[i]) 
                ++i;
            else 
                swap(A[pos], A[i]);
        }
        
        for(int i = 0;i < sz; ++i)
            if(A[i] != i + 1 && i != sz - 1) 
                return false;
        
        return sz >= 2 && A.back() == sz - 1 && A[sz - 2] == sz - 1;
    }