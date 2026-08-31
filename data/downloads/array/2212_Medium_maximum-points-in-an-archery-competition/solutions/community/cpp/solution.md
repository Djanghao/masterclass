# ✅C++ faster than 99% || Simple recursive solution || must watch

**Author:** underground_coder
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/2961687/](https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/2961687/)

---


# Code
```
class Solution {
public:

    vector<int> finalVector;
    int overallMax = 0;

    void solve(vector<int>& aliceArrows, vector<int> &bobArrows, int curMax, int numArrows, int ind){
            
        if(numArrows == 0 || ind < 0){
            if(overallMax<curMax){
                overallMax = curMax;
                finalVector = bobArrows;
            }
            return;
        }
        if(ind == 0){
            bobArrows[ind] = numArrows;
            solve(aliceArrows, bobArrows, curMax+ind, 0, ind-1);
            bobArrows[ind] = 0;
            return;
        }
        else if(numArrows>= (aliceArrows[ind]+1)){
            bobArrows[ind] = aliceArrows[ind]+1;
            solve(aliceArrows, bobArrows, curMax+ind,numArrows-(aliceArrows[ind]+1),ind-1);
            bobArrows[ind] = 0;
        }
        solve(aliceArrows, bobArrows, curMax, numArrows, ind-1);

    }

    vector<int> maximumBobPoints(int numArrows, vector<int>& aliceArrows) {
        vector<int> bobArrows;
        for(int i=0;i<12;i++)
            bobArrows.push_back(0);
        solve(aliceArrows, bobArrows, 0, numArrows, 11);
        return finalVector;
    }
};
```