# Evolve from brute force to optimal

**Author:** yu6
**Votes:** 70
**Link:** [https://leetcode.com/problems/wildcard-matching/solutions/17859/](https://leetcode.com/problems/wildcard-matching/solutions/17859/)

---

This is similar to [regular expression matching ](https://discuss.leetcode.com/topic/54908/evolve-from-brute-force-to-dp) but more tricky.
1. Recursion O(2^n), * matches 0 or more chars.
```
    bool isMatch(string s, string p) {
        return isMatch(0,0,s,p);    
    }
    bool isMatch(int i, int j, string& s, string& p) {
        int sn = s.size();
        if(j==p.size()) return i==sn;
        if(p[j]=='*') {
            for(int k=i;k<=sn;k++) if(isMatch(k,j+1,s,p)) return 1;
            return 0;
        }
        if(i<sn && (p[j]=='?'||s[i]==p[j])) return isMatch(i+1,j+1,s,p);
        return 0;
    }
```
2. Use recursion instead of iteration when * matches non empty string, O(2^n)
* c++
```
    bool isMatch(string s, string p) {
        return isMatch(0,0,s,p);    
    }
    bool isMatch(int i, int j, string& s, string& p) {
        int sn = s.size();
        if(j==p.size()) return i==sn;
        if(p[j]=='*') return isMatch(i,j+1,s,p) || (i<sn && isMatch(i+1,j,s,p));
        if(i<sn && (p[j]=='?'|| s[i]==p[j])) return isMatch(i+1,j+1,s,p);
        return 0;
    }
```
* java
```
	public boolean isMatch(String s, String p) {
        return isMatch(0, s, 0, p);
    }
    private boolean isMatch(int i, String s, int j, String p) {
        int sn = s.length(), pn = p.length();
        if(j==pn) {
            return i==sn;
        }
        char pj = p.charAt(j);
        if(i<sn && pj == '?') {
            return isMatch(i+1, s, j+1, p);
        } else if(pj == '*') {
            return isMatch(i,s,j+1,p) || i<sn && isMatch(i+1,s,j,p);   
        } else if(i<sn && pj == s.charAt(i)) {
            return isMatch(i+1, s, j+1, p);
        }
        return false;
    }
```
3. Memorization O(n^2), memorization turns out to be faster than dp. I think it is because dfs terminates as soon as a match is found but dp is always n^2.  
* c++
```
    bool isMatch(string s, string p) {
        vector<vector<char>> mem(s.size()+1,vector<char>(p.size(),-1));
        return isMatch(0,0,s,p,mem);    
    }
    bool isMatch(int i, int j, string& s, string& p,vector<vector<char>> &mem) {
        int sn = s.size();
        if(j==p.size()) return i==sn;
        if(mem[i][j]!=-1) return mem[i][j];
        if(p[j]=='*') return mem[i][j]= isMatch(i,j+1,s,p,mem) || (i<sn && isMatch(i+1,j,s,p,mem));
        if(i<sn && (p[j]=='?'|| s[i]==p[j])) return mem[i][j]=isMatch(i+1,j+1,s,p,mem);
        return mem[i][j]=0;
    }
```
* java
```
	Boolean[][] mem;
    public boolean isMatch(String s, String p) {
        mem = new Boolean[s.length()+1][p.length()+1];
        return isMatch(0, s, 0, p);
    }
    private boolean isMatch(int i, String s, int j, String p) {
        int sn = s.length(), pn = p.length();
        if(j==pn) {
            return i==sn;
        }
        if(mem[i][j] != null) {
            return mem[i][j];
        }
        char pj = p.charAt(j);
        if(i<sn && pj == '?') {
            return mem[i][j] = isMatch(i+1, s, j+1, p);
        } else if(pj == '*') {
            return mem[i][j] = isMatch(i,s,j+1,p) || i<sn && isMatch(i+1,s,j,p);   
        } else if(i<sn && pj == s.charAt(i)) {
            return mem[i][j] = isMatch(i+1, s, j+1, p);
        }
        return mem[i][j] = false;
    }
```
4. dp O(n^2)
```
    bool isMatch(string s, string p) {
        int sn = s.size(), pn = p.size();
        vector<vector<bool>> dp(sn+1,vector<bool>(pn+1));
        dp[sn][pn]=1;
        for(int i=sn;i>=0;i--)
            for(int j=pn-1;j>=0;j--)
                if(p[j]=='*') dp[i][j] = dp[i][j+1]||(i<sn && dp[i+1][j]);
                else dp[i][j] = i<sn && (p[j]=='?'|| s[i]==p[j]) && dp[i+1][j+1]; 
        return dp[0][0];    
    }
```
5. For most recursion to dp problems, we are done. However, we can still do better in this problem. For each star, we match it incrementally with 0, 1, 2 ... chars. If a path fails, we only need to backtrack from the last star. Backtracking from earlier stars eats more chars in s and leaves a shorter string for the last star. This does not create any more choices for the last star. More formally, 

	*Say we use #1 and have 2 stars in p separated by characters. When we reach the 2nd star for the first time, there is a match right before it between s(0...i) and p(0......j). s(0...i) is the first/shortest substring that matches p(0...j) because we match  to chars incrementally. Matching the 2nd star starts from s[i+1]. If we backtrack the 1st star and match it with more characters then the next time when s(0...k) matche s p(0...j), k must be larger than i. At this point, matching the 2nd star starts from s[k+1]. Since k>i, so it is covered by just backtracking the 2nd star. Therefore backtracking the 1st star does not create more opportunities and we can ignore it.*

* c++ Code is based on #1.
```
    bool isMatch(string s, string p) {
        bool star = 0;
        return isMatch(star,0,0,s,p);    
    }
    bool isMatch(bool& star, int i, int j, string& s, string& p) {
        int sn = s.size();
        if(j==p.size()) return i==sn;
        if(p[j]=='*') {
            for(int k=i;k<=sn;k++) {
                if(isMatch(star,k,j+1,s,p)) return 1;
                if(star) return 0;
            }
            star = 1;
            return 0;
        }
        if(i<sn && (p[j]=='?'||s[i]==p[j])) return isMatch(star,i+1,j+1,s,p);
        return 0;
    }
```
* java
```
	 int lastStar;
    public boolean isMatch(String s, String p) {
        lastStar = -1;
        return isMatch(0, s, 0, p);
    }
    private boolean isMatch(int i, String s, int j, String p) {
        int sn = s.length(), pn = p.length();
        if(j==pn) {
            return i==sn;
        }
        char pj = p.charAt(j);
        if(i<sn && pj == '?') {
            return isMatch(i+1, s, j+1, p);
        } else if(pj == '*') {
            lastStar = j;
            return isMatch(i,s,j+1,p) || i<sn && j==lastStar && isMatch(i+1,s,j,p);   
        } else if(i<sn && pj == s.charAt(i)) {
            return isMatch(i+1, s, j+1, p);
        }
        return false;
    }
```
6. Iterative backtracking O(n^2), same as #4. [Idea is from the top solution](https://discuss.leetcode.com/topic/3040/linear-runtime-and-constant-space-solution)
```
    bool isMatch(string s, string p) {
        int i=0,j=0,star=-1,si=0;
        while(i<s.size()) {
            if(p[j]=='?'||s[i]==p[j]) {
                i++;
                j++;
            } else if (p[j]=='*') {
                star = j++;
                si = i;
            } else if (star >=0 ) {
                i = ++si;
                j = star+1;
            } else return 0;
        }
        while(j<p.size()) if(p[j++]!='*') return 0;
        return 1;
    }
```