# C++ | Kahn's Algorithm | Short and simple | Explained

**Author:** shield75_
**Votes:** 57
**Link:** [https://leetcode.com/problems/course-schedule-iv/solutions/1535210/](https://leetcode.com/problems/course-schedule-iv/solutions/1535210/)

---

This problem is a direct application of kahn's algorithm with addition to that, we need to maintain a table which represents if two courses are prerequisites of one another.

1. Push all the vertices with indegree 0 to the queue.
2. For all such vertices, decrease their adjacent vertex's indegree by 1 since we are removing current vertex from the queue.
3. for table[i][j] such that `i ` is prerequsite of ` j` , make it true for current vertex & it's adjacent, and also if current vertex had a prerequisite, that will apply to current vertex's neighbour also `for(int i=0;i<n;i++) if(table[i][cur]==true) table[i][it] = true;`
```
class Solution {
public:
    vector<bool> checkIfPrerequisite(int n, vector<vector<int>>& prerequisites, vector<vector<int>>& queries) {
    vector<bool> ans;
    vector<vector<int>> graph(n);   
    vector<vector<bool>> table(n,vector<bool>(n,false));
    vector<int> indegree(n,0);
    for(int i=0;i<prerequisites.size();i++)
    {
        graph[prerequisites[i][0]].push_back(prerequisites[i][1]);
        indegree[prerequisites[i][1]]++;
    }
    queue<int> q;
    for(int i=0;i<n;i++) if(indegree[i]==0) q.push(i);
    while(!q.empty())
    {
        int cur=q.front();
        q.pop();
        for(auto &it:graph[cur])
        {
            table[cur][it]=true;
            for(int i=0;i<n;i++) if(table[i][cur]==true) table[i][it] = true;
            indegree[it]--;
            if(indegree[it]==0) q.push(it);
        }
    }
    for(int i=0;i<queries.size();i++) ans.push_back(table[queries[i][0]][queries[i][1]]);
    return ans;
    }
};
```