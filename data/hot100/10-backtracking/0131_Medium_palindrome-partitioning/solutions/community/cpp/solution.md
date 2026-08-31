# Solution

**Author:** deleted_user
**Votes:** 218
**Link:** [https://leetcode.com/problems/palindrome-partitioning/solutions/3171259/](https://leetcode.com/problems/palindrome-partitioning/solutions/3171259/)

---

```C++ []
class Solution {
public:
    vector<vector<string>> partition(string s) {
        vector<vector<string>> pars;
        vector<string> par;
        partition(s, 0, par, pars);
        return pars;
    }
private: 
    void partition(string& s, int start, vector<string>& par, vector<vector<string>>& pars) {
        int n = s.length();
        if(start==n){
            pars.push_back(par);
        }else{
            for(int i = start ; i < n ;i ++){
               if(isPalindrome(s,start,i)){
                   par.push_back(s.substr(start,i-start+1));
                   partition(s,i+1,par,pars);
                   par.pop_back();
               }
            }
        }
    }
    
    bool isPalindrome(string& s, int l, int r) {
        while (l < r) {
            if (s[l++] != s[r--]) {
                return false;
            }
        }
        return true;
    }
};
```

```Python3 []
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        n = len(s)
        dp = [[] for _ in range(n + 1)]
        dp[n] = [[]]
        for begin in range(n - 1, -1, -1):
            for end in range(begin + 1, n + 1):
                candidate = s[begin:end]
                if candidate == candidate[::-1]:
                     for each in dp[end]:
                         new_each = [candidate]
                         new_each.extend(each)
                         dp[begin].append(new_each)
        return dp[0]  
```

```Java []
class Solution {
    int n;
    boolean[][] is_palindrome;
    String[][] substrings;

    List<List<String>> ans;

    void FindSubstrings(int ind, ArrayList<String> list) {
        if (ind == n) {
            ans.add(new ArrayList<String>(list));
            return;
        }

        for (int i = ind + 1; i <= n; i++) {
            if (!is_palindrome[ind][i]) continue;
            list.add(substrings[ind][i]);
            FindSubstrings(i, list);
            list.remove(list.size() - 1);
        }
    }

    public List<List<String>> partition(String s) {
        n = s.length();
        is_palindrome = new boolean[n + 1][n + 1];
        substrings = new String[n + 1][n + 1];
        for (int i = 0; i < n; i++) for (int j = i + 1; j <= n; j++) {
            substrings[i][j] = s.substring(i, j);
            is_palindrome[i][j] = IsPalindrome(substrings[i][j]);
        }

        ans = new ArrayList<List<String>>();
        FindSubstrings(0, new ArrayList<String>());
        return ans;
    }

    boolean IsPalindrome(String s) {
        int lower = 0;
        int higher = s.length() - 1;
        while (lower < higher) {
            if (s.charAt(lower) != s.charAt(higher)) return false;
            lower++;
            higher--;
        }
        return true;
    }
}
```
