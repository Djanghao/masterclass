# C++ | | Easy | | Beginner Friendly

**Author:** hinata_19
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-methods-from-project/solutions/5881405/](https://leetcode.com/problems/remove-methods-from-project/solutions/5881405/)

---

```
class Solution {
public:
    vector<int> remainingMethods(int n, int k, vector<vector<int>>& nums) {
        vector<int> g[n];
		// Creating directed graph
        for (auto &it : nums) {
            g[it[0]].push_back(it[1]);
        }
		// Created unordered set to check for visited and to check the suspicious node
        unordered_set<int> st;
        queue<int> q;
        q.push(k);

        while (!q.empty()) {
            int node = q.front();
            q.pop();
			// If suspicious and not visited
            if (st.find(node) == st.end()) {
                st.insert(node);
                for (auto nbr : g[node]) {
                    q.push(nbr);
                }
            }
        }

        vector<int> allmethods;
        for (int i = 0; i < n; i++) allmethods.push_back(i);

        for (int node = 0; node < n; node++) {
            if (st.find(node) == st.end()) {
				// checking if node is suspicious and some another method is calling current then     unable to remove it so simply return all methods
                for (int invoked : g[node]) {
                    if (st.find(invoked) != st.end()) return allmethods;
                }
            }
        }

        vector<int> ans;
		// If there is no method which was called by unsuspicious method then simple remove the methods and return the remaning methods
        for (int node = 0; node < n; ++node) {
            if (st.find(node) == st.end()) {
                ans.push_back(node);
            }
        }
        return ans;
    }
};
```