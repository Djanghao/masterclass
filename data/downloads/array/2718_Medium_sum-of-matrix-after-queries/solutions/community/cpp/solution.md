# Explained  || reverse iteration - O(N) || Very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 104
**Link:** [https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3594967/](https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3594967/)

---

<b> Up vote if you like the solution </b>
## Approach 
1. Here iterate from the end & Keep track number of rows and number of cols that can be assigned a value
3. Add to answer val * remaining row when col operation is performed &
    add to answer val * remaining col when row operation is performed.
4. Decreament remaining row when row operation is performed &
    reamining col when col operation is performed

Note : The trick is to when ever we perform a row operation then number of column remaining for next col operation 1 less and same is the case for col operation.

FAQ : Why we are considering only once every index, even there is duplicate possible ?
Ans: Even if there is duplicate, the last one will overwrite the effect of the previous query excution on the same index. So as we iterate from last, we need to only consider the last one and not any other occurance of it.

## Complexity 
Time : O(N) where N = q.size()
Space : O(N) where N = n

## Code

```
long long matrixSumQueries(int n, vector<vector<int>>& q) {
    vector<bool> rowFlag(n, 1), colFlag(n, 1);
    long long ans = 0, rowRemain = n, colRemain = n;
    for(int i = q.size()-1; i >= 0; --i){
        if(q[i][0] == 0 && rowFlag[q[i][1]]) { ans += colRemain * q[i][2];    rowFlag[q[i][1]] = 0; rowRemain--; }
        if(q[i][0] == 1 && colFlag[q[i][1]]) { ans += rowRemain * q[i][2];    colFlag[q[i][1]] = 0; colRemain--; }
    }
    return ans;
}

```

<b>Here is an article of my recent interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted
