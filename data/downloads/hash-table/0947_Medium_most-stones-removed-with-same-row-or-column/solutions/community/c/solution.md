# [C++] DFS Solution 18 Lines So Simple!! + Explanations

**Author:** n3r0nur12
**Votes:** 167
**Link:** [https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/787296/](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/787296/)

---

Steps:
	Consider indexes of each stone as an ID number.
	Visit each ID if it hasn't been visited.(Note that we can go from stone A to stone B if and only if A and B have common row or column)
	Number of visited stones is the answer.
```
class Solution {
public:
    int dfs(vector<vector<int>>&stones,int index,vector<bool>&visited,int&n){
        visited[index]=true;
        int result=0;
        for(int i=0;i<n;i++)
            if(!visited[i]&&(stones[i][0]==stones[index][0]||stones[i][1]==stones[index][1]))
                result +=(dfs(stones,i,visited,n) + 1);
        return result;
    }
    int removeStones(vector<vector<int>>&stones) {
        int n = stones.size();
        vector<bool>visited(n,0);
        int result=0;
        for(int i=0;i<n;i++){
            if(visited[i]){continue;}
            result+=dfs(stones,i,visited,n);
        }
        return result;
    }
};
```
Thank you, Please thumbs up.