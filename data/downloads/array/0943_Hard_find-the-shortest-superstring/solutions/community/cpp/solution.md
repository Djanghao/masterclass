# [C++] TSP - Hamiltonian Path (Not tour) - Simple code

**Author:** vismit2000
**Votes:** 20
**Link:** [https://leetcode.com/problems/find-the-shortest-superstring/solutions/1021089/](https://leetcode.com/problems/find-the-shortest-superstring/solutions/1021089/)

---

```
#define INF 0x3f3f3f3f

class Solution {
    int VISITED_ALL, n;
    vector < vector < int > > dist, path, dp;
public:
    int calcDist(string a, string b){
        for(int i = 0; i < a.length(); i++)
            if(b.rfind(a.substr(i), 0) == 0)
                return b.length() - (a.length() - i);
        return b.length();
    }
    
    int tsp(int mask, int pos){
        if(mask == VISITED_ALL)
            return 0;
        if(dp[mask][pos] != -1)
            return dp[mask][pos];
        
        int ans = INF, best;
        
        for(int city = 0; city < n; city++){
            if((mask & (1 << city)) == 0){
                int result = dist[pos][city] + tsp(mask | (1 << city), city);
                if(result < ans){
                    ans = result;
                    best = city;
                }
            }
        }
        path[mask][pos] = best;
        return dp[mask][pos] = ans;
    }
    
    string constructPath(vector < string > &A, int k){
        int curr = k;
        string result = A[k];
        int mask = (1 << k);
        int parent = path[mask][k];
        while(parent != -1){
            result += A[parent].substr(A[parent].length() - dist[curr][parent]);
            mask |= (1 << parent);
            curr = parent;
            parent = path[mask][parent];
        }
        return result;
    }
    
    string shortestSuperstring(vector<string>& A) {
        n = A.size();
        VISITED_ALL = (1 << n) - 1;
        
        dist.assign(n, vector < int > (n, 0));
        
        for(int i = 0; i < n; i++)
            for(int j = 0; j < n; j++)
                dist[i][j] = calcDist(A[i], A[j]);
        
        int ansLen = INF;
        string ans;
        
        // for different starting nodes
        for(int k = 0; k < n; k++){
            path.assign((1 << n), vector < int > (n, -1));
            dp.assign((1 << n), vector < int > (n, -1));

            tsp((1 << k), k);
            
            string result = constructPath(A, k);
            // cout << result << endl;
            if(result.length() < ansLen){
                ans = result;
                ansLen = result.length();
            }
        }
        return ans;
    }
};
```