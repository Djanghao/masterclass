# [Python/Java/C++] O(n) time O(1) space Simple and Clean solution

**Author:** Twohu
**Votes:** 100
**Link:** [https://leetcode.com/problems/longest-turbulent-subarray/solutions/222146/](https://leetcode.com/problems/longest-turbulent-subarray/solutions/222146/)

---

A subarray is turbulent if the comparison sign alternates between consecutive elements (ex. ```nums[0] < nums[1] > nums[2] < nums[3] > ...``` ). Looking at the structure of the array, this means every element of a turbulent subarray must belong to either a peak ```(A[i-2] < A[i-1] > A[i])``` or a valley ```(A[i-2] > A[i-1] < A[i])``` structure.

The algorithm works as follows. Keep track of the length of the longest run ending at index ```i```. This is tracked in a variable named ```clen```. If the last three elements form a peak or a valley, we can extend the previous run length by 1 (meaning ```clen += 1```). Otherwise, we can no longer extend this run and need to reset ```clen``` to the length of the longest run ending at index ```i```. This run length will be ```1``` if the previous and current elements are the same (Ex: ```[2,2,2]```), or ```2``` if the previous and current elements differ (Ex: ```[2,4,6]```). The answer is the length of the best run found.

## Python
```
def maxTurbulenceSize(self, A):
    best = clen = 0

    for i in range(len(A)):
        if i >= 2 and (A[i-2] > A[i-1] < A[i] or A[i-2] < A[i-1] > A[i]):
            clen += 1
        elif i >= 1 and A[i-1] != A[i]:
            clen = 2
        else:
            clen = 1
        best = max(best, clen)
    return best
```
## Java
```
public int maxTurbulenceSize(int[] A) {
    int best = 0, clen = 0;

    for(int i = 0; i < A.length; i++) {
        if(i >= 2 && ((A[i-2] > A[i-1] && A[i-1] < A[i]) ||
                      (A[i-2] < A[i-1] && A[i-1] > A[i])) ) {
            // If the last three elements are turbulent, increment run length by 1.
            clen++;
        } else if(i >= 1 && A[i-1] != A[i]) {
            // The last three elements are not turbulent, so we'll reset the run length.
            // If the previous and current elements are not equal, the new run length is 2.
            clen = 2;
        } else {
            // Otherwise, the new run length is 1.
            clen = 1;
        }
        best = Math.max(best, clen);
    }
    return best;    
}
```

## C++
```
int maxTurbulenceSize(vector<int>& A) {
    int best = 0, clen = 0;

    for(int i = 0; i < A.size(); ++i) {
        if (i >= 2 && ((A[i-2] > A[i-1] && A[i-1] < A[i]) ||
                       (A[i-2] < A[i-1] && A[i-1] > A[i])) ) {
            clen++;
        } else if (i >= 1 && A[i-1] != A[i]) {
            clen = 2;
        } else {
            clen = 1;
        }
        best = max(best, clen);
    }
    return best;
}
```
