# Explaination with comments | CPP

**Author:** kaushik8511
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/901613/](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/901613/)

---

```
class Solution {
public:
    
    // Idea is to count frequency of each number (1 to 6) in A and B.
    int minDominoRotations(vector<int>& A, vector<int>& B) {
        int n = A.size();
        int hA[7] = {0};            //stores frequency of numbers in A.
        int hB[7] = {0};            //stores frequency of numbers in B.
        int same[7] = {0};          //stores frequency of numbers which are same in both at same position.
        
        //count frequency
        for(int i=0; i<n; i++){
            int t1 = A[i], t2 = B[i];
            hA[t1]++;hB[t2]++;
            if(t1==t2)same[t1]++;
        }
        
        int res = n;
        for(int i=1; i<=6; i++){
            //checking is it possible to either A or B have this number at all positions.
            if(hA[i]+hB[i]-same[i] == n){
                res = min(res, min(hA[i], hB[i]) - same[i]);
            }
        }
        return res == n ? -1:res;
        //please appreciate
    }
};