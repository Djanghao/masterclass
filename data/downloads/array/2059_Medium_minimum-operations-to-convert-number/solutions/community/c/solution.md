# C++ | BFS | Clean code

**Author:** aman282571
**Votes:** 180
**Link:** [https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/1549960/](https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/1549960/)

---

1. **Just do simple BFS and maintain a visited array to keep track of numbers that we have seen already.**
2. Here keypoint is numbers can be from 0 to 1000 so make visited array and once we have seen that number we don't have to include that number again.

**Time Complexity**:-```O(n*m)``` where n is size of the array and m is the range.
```
    int minimumOperations(vector<int>& nums, int start, int goal) {
        vector<bool>visited(1001,false);
        int ans=0;
        queue<int>q;
        q.push(start);
        while(!q.empty()){
            int size=q.size();
            while(size--){
                int node=q.front();q.pop();
                if(node==goal)
                    return ans;
                if(node>1000 || node<0 || visited[node])
                    continue;
                visited[node]=true;
                for(int i=0;i<nums.size();i++){
                    int a=node+nums[i],b=node-nums[i],c=node^nums[i];
                    for(auto j :{a,b,c})
                            q.push(j);
                }
            }
            ans++;
        }
        return -1;
    }
```
Do **UPVOTE** if it helps :)