# C++ Topological Sort

**Author:** ritesh14
**Votes:** 14
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/344802/](https://leetcode.com/problems/parallel-courses/solutions/344802/)

---

	class Solution {
	public:
		int minimumSemesters(int N, vector<vector<int>>& relations) {
			vector<int> indegree(N+1,0);
			unordered_map<int,vector<int>> adjList;
			queue<int> q;

			//create adjaceny list and dependency
			for(vector<int> relation:relations) {
				adjList[relation[0]].push_back(relation[1]);
				indegree[relation[1]]++;
			}

			//push courses with 0 dependency in queue
			for(int i=1;i<=N;i++) if(indegree[i]==0)  q.push(i);

			int ans=0;
			while(!q.empty()) {
				int n=q.size();
				ans++;
				for(int i=0;i<n;i++) {
					int cur=q.front();
					q.pop();
					for(int v:adjList[cur]) {
						if(--indegree[v]==0) {
							q.push(v);
						}
					}
				}
			}

			//cycle present, not possible
			for(int in:indegree) if(in>0)  return -1;

			return ans;

		}
	};