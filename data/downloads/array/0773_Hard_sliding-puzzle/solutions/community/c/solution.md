# C++ solution Using BFS

**Author:** thanoschild
**Votes:** 7
**Link:** [https://leetcode.com/problems/sliding-puzzle/solutions/2032141/](https://leetcode.com/problems/sliding-puzzle/solutions/2032141/)

---

```
class Solution {
public:
    string makeswap(string s, int i, int j){
        swap(s[i], s[j]);
        return s;
    }
    
    int slidingPuzzle(vector<vector<int>>& board) {
       string initial;
       for(int i = 0; i<2; i++){
           for(int j = 0; j<3; j++){
               initial += to_string(board[i][j]);
           }
       } 
       string target = "123450";
       unordered_map<string, int> mp;
       queue<string> pq;
       pq.push(initial);
       mp[initial] = 1;
       int ans = 0;
       vector<vector<int>> dir = {{3, 1}, {0, 4, 2}, {1, 5}, {0, 4}, {3, 5, 1}, {4, 2}};
       while(!pq.empty()){
          int n = pq.size();
          while(n--){
             string t = pq.front();
             pq.pop();
             if(t == target) return ans;

             int idx = -1;
             for(int i = 0; i<6; i++){
                 if(t[i] == '0'){
                  idx = i;
                  break;
                }
             }

             for(int k = 0; k <dir[idx].size(); k++){
                string temp = t;
                string s = makeswap(temp, idx, dir[idx][k]);
                if(!mp[s]){
                 pq.push(s);
                 mp[s] = 1;
                }
             }
           }
           ans++; 
       }
       return -1;
    }
};
```