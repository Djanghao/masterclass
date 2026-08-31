# C++ Simple (BFS+ PriorityQueue) Solution With Explanation

**Author:** harshseta003
**Votes:** 7
**Link:** [https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/2409906/](https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/2409906/)

---

Approach:
What we are being told is we want to cut trees in such a manner:
1. We want to cut the trees in increasing order of their heights
2. We can traverse through nodes with value > 1 

And we want to minimise the number of steps to cut all trees.
Min no. of steps to cut all trees = (min. no of steps from (0,0) to smallest tree + min. no of steps from smallest tree to second smallest tree+.... )

In order to find the next smallest tree, we use priority queue and
in order to find min. no. of steps from (i,j) to (u,v) we use BFS.
```
#define p pair<int,pair<int,int>>
class Solution {
public:
    int m,n;
    int bfs(int &i,int &j,int &u,int &v,vector<vector<int>>& nums){
        vector<vector<bool>>explored(m,vector<bool>(n,false));
        bool found=false;
        queue<pair<int,int>>q;
        q.push({i,j});
        explored[i][j]=true;
        int cnt=0;
        while(!q.empty()){
            int l=q.size();
            while(l--){
                pair<int,int>a=q.front();
                int x=a.first,y=a.second;
                q.pop();
                if(x==u && y==v){
                    found=true;
                    break;
                }
                if(x>0 && nums[x-1][y] && !explored[x-1][y]){
                    explored[x-1][y]=true;
                    q.push({x-1,y});
                }
                if(y>0 && nums[x][y-1] && !explored[x][y-1]){
                    explored[x][y-1]=true;
                    q.push({x,y-1});
                }
                if(x<m-1 && nums[x+1][y] && !explored[x+1][y]){
                    explored[x+1][y]=true;
                    q.push({x+1,y});
                }
                if(y<n-1 && nums[x][y+1] && !explored[x][y+1]){
                    explored[x][y+1]=true;
                    q.push({x,y+1});
                }
            }
            if(found)
                break;
            cnt++;
        }
        return found?cnt:-1;
    }
    int cutOffTree(vector<vector<int>>& nums) {
        m=nums.size(),n=nums[0].size();
        priority_queue<p,vector<p>,greater<p>>q;
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(nums[i][j]>1)
                    q.push({nums[i][j],{i,j}});
            }
        }
        int i=0,j=0,ans=0;
        while(!q.empty()){
            p a=q.top();
            int u=a.second.first,v=a.second.second;
            q.pop();
            int b=bfs(i,j,u,v,nums);
            if(b==-1)
                return -1;
            i=u,j=v;
            ans+=b;
        }
        return ans;
    }
};
```