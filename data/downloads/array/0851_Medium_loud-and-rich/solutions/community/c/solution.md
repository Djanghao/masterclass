# C++ | Easy BFS topological sort

**Author:** 18je0001
**Votes:** 16
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/2502004/](https://leetcode.com/problems/loud-and-rich/solutions/2502004/)

---

Read the last paragraph of the question: answer[x] = y if y is the least quiet person among all people who definitely have equal to or more money than the person x
**EXPLANATION**:
For any person, we look for all the person who is equally rich or richer than them and then we select the quietest among these set of richer people.
**Example**: Richness order: x>y, z>y, w>v. Then we can't decide who is the richest among x,z & w b/c we don't have proper information regarding their comparison. So we assume that all of them are richest.
For any 'a' who is richest we don't have any 'b' who is richer or equally rich, so we have only 'a' himself the only candidate to be checked for quietest so ans[a] = a.
Thus we use topological sort here in such a way that richest are the least dependent (no indegree)

Then the lesser rich will see if the ans of richer one is quieter than his ans(no comparison of richness b/c richness order: ans[richer] >= richer & richer >= lesser rich so obviously ans[richer] >= lesser rich). If yes then he will replace his answer with the ans[richer].

**If it helps please UPVOTE! and let others also know**
```
class Solution {
public:
    vector<int> loudAndRich(vector<vector<int>>& richer, vector<int>& quiet) //topological sort
    {
        int n = quiet.size();
        vector<int> ans(n), adj[n], indegree(n,0);
        queue<int> q;
        int v;
        
        for(auto r: richer)
        {
            adj[r[0]].push_back(r[1]);
            indegree[r[1]]++;
        }
        for(int i=0; i<n; i++)
        {
            ans[i] = i;
            if(indegree[i] == 0)
                q.push(i);
        }
        
        while(!q.empty())   //BFS topo sort
        {
            v = q.front(), q.pop();
            
            for(auto u: adj[v])
            {
                if(quiet[ans[v]] < quiet[ans[u]])  //v is richer than u and b/c ans[v] can also be some other value than v which is more rich and is quietest and quieter than ans[u] then ans[u] will be ans[v]
                    ans[u] = ans[v];
                if(--indegree[u] == 0)
                    q.push(u);
            }
        }
        return ans;
    }
};
```