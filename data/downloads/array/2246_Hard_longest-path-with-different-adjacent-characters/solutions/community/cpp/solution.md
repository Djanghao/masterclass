# ✅[C++]Easy solution with Explanation||DFS✅

**Author:** vishnoi29
**Votes:** 318
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043055/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043055/)

---

\uD83C\uDFA5\uD83D\uDD25 Exciting News! Join my Coding Journey! Subscribe Now! \uD83D\uDD25\uD83C\uDFA5

\uD83D\uDD17 Link in the leetcode profile 

New coding channel alert! \uD83D\uDE80\uD83D\uDCBB Subscribe to unlock amazing coding content and tutorials. Help me reach 1K subs to start posting more videos! Join now! \uD83C\uDF1F\uD83D\uDCAA

Thanks for your support! \uD83D\uDE4F
# Intuition
**This problem is similar to Diameter of tree problem**
# Approach
1. In every recursion cycle we find 2 largest branches of node(mx1 and mx2). Sum of these branches and node can be longest path. We return maximum path from current node so previous node can append with this path.
2. **Steps for solve this problem**
   - Start from the source node
   - Iterate over all it's children
   - If the character value of the child and parent is same leave it
   - If the character value of the child and parent is different update the best(mx1) and second_best(mx2) possible values
   - update the answer with the best from the 
      ans=max(1+mx1+mx2,ans)


# Code
```
class Solution {
public:
    vector<int> child[100001];
    int ans;
    int dfs(string &s, int curr_node)
    {
        if(child[curr_node].empty())return 1;
        int mx1 = 0, mx2 =0;
    // traversing over all the child nodes of the curr_node
        for(auto &child_node : child[curr_node])
        {
        // recursively trying for child nodes
            int len = dfs(s, child_node);
            ans = max(ans , len);
     // rejecting the current node if it's of same character
            if(s[curr_node] == s[child_node])continue;
     // updating the mx1 and mx2 paths that we can take from all the children of the given node
            if(len > mx1)
            {
                mx2 = mx1;
                mx1 = len;
            }
    //seecond max will be updated
            else mx2 = max(mx2 , len);
        }
    // Update the result.
    //Again, max1+mx2+1 means the length of the longest valid path 
    //going through this node in the sub-tree rooted at this node
        ans = max(ans, 1 + mx1 + mx2);
    //Adding 1 for the current node
        return 1 + mx1;
    }
    int longestPath(vector<int>& parent, string s){
        int n = parent.size();
        for(int i=1;i<n;i++)child[parent[i]].push_back(i);
        ans = 1;
        dfs(s,0);
        return ans;
    }
};
```
If you really found my solution helpful **please upvote it**, as it motivates me to post such kind of codes.
Let me know in comment if i can do better.
Lets connect on **[LINKDIN](https://www.linkedin.com/in/mahesh-vishnoi-a4a47a193/)**
![upvote.jfif](./images/0.jpeg)

