# One Pass [C++/Java/Python3]

**Author:** Rowque
**Votes:** 41
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/2783107/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/2783107/)

---

Just do `Operation` and `Swapping of non-zeroes at front` of array simultaneously.
# C++
    vector<int> applyOperations(vector<int>& A) {
        for (int i = 0, j = 0; i < size(A); ++i){
            if (i + 1 < size(A) and A[i] == A[i + 1]){
                A[i] *= 2;
                A[i + 1] = 0;
            }
            if (A[i]) swap(A[j++], A[i]);
        }   
        return A;
    }
# Java
    void swap(int[] A, int i, int j){
        int temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }
    
    public int[] applyOperations(int[] A) {
        for (int i = 0, j = 0; i < A.length; ++i){
            if (i + 1 < A.length && A[i] == A[i + 1]){
                A[i] *= 2;
                A[i + 1] = 0;
            }
            if (A[i] != 0){
                swap(A,i,j);
                j++;
            }
        }   
        return A;
    }
# Python3
    def applyOperations(self, A: List[int]) -> List[int]:
        j = 0
        for i in range(len(A)):
            if i + 1 < len(A) and A[i] == A[i + 1]:
                A[i] *= 2
                A[i + 1] = 0 
            if A[i]:
                A[j], A[i] = A[i], A[j]
                j += 1 
        return A