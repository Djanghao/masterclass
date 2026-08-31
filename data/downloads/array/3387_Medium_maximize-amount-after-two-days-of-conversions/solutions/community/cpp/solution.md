# C++ || BFS Solution || Easy to Understand

**Author:** Saurav_1209
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/solutions/6151819/](https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/solutions/6151819/)

---

```
class Solution {
public:
    map<string, double> mp; // Stores the maximum amount reachable from the initial currency in Graph 1
    double ans; // Stores the global maximum amount after traversing Graph 2

    // BFS function to compute maximum amounts in Graph 1
    void bfs(string curr, unordered_map<string, vector<pair<string, double>>> adj1) {
        map<string, bool> vis; // To track visited nodes in Graph 1
        queue<pair<string, double>> q;
        q.push({curr, 1}); // Start with the initial currency and amount = 1
        vis[curr] = 1;

        while (!q.empty()) {
            int sz = q.size();
            for (int k = 0; k < sz; k++) {
                string currency = q.front().first; // Current currency
                double currAmt = q.front().second; // Current accumulated amount
                q.pop();

                // Update the maximum amount for this currency
                mp[currency] = max(mp[currency], currAmt);

                // Traverse neighbors in Graph 1
                for (auto node : adj1[currency]) {
                    if (vis[node.first] == 0) { // If the neighbor is not visited
                        vis[node.first] = 1;
                        q.push({node.first, currAmt * node.second});
                    }
                }
            }
        }
    }

    // BFS function to compute maximum amounts in Graph 2
    void bfs2(string curr, double currAmt, string init, unordered_map<string, vector<pair<string, double>>> adj2) {
        map<string, bool> vis; // To track visited nodes in Graph 2
        queue<pair<string, double>> q;
        q.push({curr, currAmt}); // Start with the current currency and its amount from Graph 1
        vis[curr] = 1;

        while (!q.empty()) {
            int sz = q.size();
            for (int k = 0; k < sz; k++) {
                string currency = q.front().first; // Current currency
                double currAmt = q.front().second; // Current accumulated amount
                q.pop();

                // Check if we return to the initial currency and update the global maximum
                if (currency == init) {
                    ans = max(ans, currAmt);
                }

                // Traverse neighbors in Graph 2
                for (auto node : adj2[currency]) {
                    if (vis[node.first] == 0) { // If the neighbor is not visited
                        vis[node.first] = 1;
                        q.push({node.first, currAmt * node.second});
                    }
                }
            }
        }
    }

    
    double maxAmount(string iCurr, vector<vector<string>>& pairs1, vector<double>& rates1, vector<vector<string>>& pairs2, vector<double>& rates2) {
        int n = pairs1.size(); // Number of edges in Graph 1
        int m = pairs2.size(); // Number of edges in Graph 2

        ans = 1; // Initialize the global maximum amount
        unordered_map<string, vector<pair<string, double>>> adj1; // Adjacency list for Graph 1
        unordered_map<string, vector<pair<string, double>>> adj2; // Adjacency list for Graph 2

        // Build Graph 1 with bidirectional edges and rates
        for (int i = 0; i < n; i++) {
            adj1[pairs1[i][0]].push_back({pairs1[i][1], rates1[i]});
            adj1[pairs1[i][1]].push_back({pairs1[i][0], 1/rates1[i]});
        }

        // Build Graph 2 with bidirectional edges and rates
        for (int i = 0; i < m; i++) {
            adj2[pairs2[i][0]].push_back({pairs2[i][1], rates2[i]});
            adj2[pairs2[i][1]].push_back({pairs2[i][0], 1 / rates2[i]});
        }

        // Perform BFS on Graph 1 to compute maximum amounts reachable from the initial currency
        bfs(iCurr, adj1);

        // For each reachable currency in Graph 1, perform BFS on Graph 2
        for (auto it : mp) {
            bfs2(it.first, it.second, iCurr, adj2);
        }

        return ans; // Return the global maximum amount
    }
};
