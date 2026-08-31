# C++ | Greedy | Using Map | trying all a-z

**Author:** Rishabhsinghal12
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4481855/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4481855/)

---

```
int maximumLength(string s) {
        int res = -1, n = s.size();
		
        for(char ch = 'a'; ch <= 'z'; ch++) {
            int count = 0;
            unordered_map<int,int> map;
            for(int i = 0; i < n; i++) {
                if(s[i] == ch)count++;
                else {
                    map[count]++;
                    count = 0;
                    while(i < n and s[i] != ch)i++;
                    i--;
                }
            }
            if(count) {
                map[count]++;
            }
            for(auto &x: map) {
                if(x.second >= 3)res = max(res,x.first);
                else if(x.second == 2) {
                    res = max(res,x.first-1);
                }
                else {
                    if(map.find(x.first-1) != map.end())res = max(res,x.first-1);
                    else res = max(res,x.first-2);
                }
            }
            
        }
        return res == 0 ? -1 : res;
    }
```