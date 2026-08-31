# Evolve from brute force to optimal, a review of all solutions

**Author:** yu6
**Votes:** 296
**Link:** [https://leetcode.com/problems/word-break/solutions/43886/](https://leetcode.com/problems/word-break/solutions/43886/)

---

1. Recursion, Average O(2^n)
T(n) = T(n-1)+T(n-2)+...+T(1) 
=> T(n+1) = T(n)+T(n-1)+T(n-2)+...+T(1)
=>T(n+1) = 2T(n)
* c++
```
    bool wordBreak(string s, unordered_set<string>& wordDict) {
        return canBrk(0,s,wordDict);    
    }
    bool canBrk(int start, string& s, unordered_set<string>& wordDict) {
        int n = s.size();
        if(start == n) return 1;
        string sub;
        for(int i = start; i<n; i++) if(wordDict.count(sub+=s[i]) && canBrk(i+1,s,wordDict)) return 1;
        return 0;
    }
```
* java is more expensive due to use of substring
```
	public boolean wordBreak(String s, List<String> wordDict) {    
        return wordBreak(0,s,new HashSet(wordDict));   
    }
    private boolean wordBreak(int p, String s, Set<String> dict){
        int n=s.length();
        if(p==n) {
            return true;
        }
        for(int i=p+1;i<=n;i++) {
            if(dict.contains(s.substring(p,i)) && wordBreak(i,s,dict)) {
                return true;
            }
        }
        return false;
    }
```
2.  DFS with Memoization. There is redundancy in #1. A substr may be checked multiple times. We can cache the result by memoization. This is the optimal solution.
* c++  Average O(n^2) Time, O(n+d) space. wordDict.count(string) could be O(1) or O(n) depending on the hash function implementation, see [reference]().
```
    bool wordBreak(string s, unordered_set<string>& wordDict) {
        vector<char> mem(s.size(),-1);
        return canBrk(0,s,wordDict,mem);    
    }
    bool canBrk(int start, string& s, unordered_set<string>& wordDict,vector<char>& mem) {
        int n = s.size();
        if(start == n) return 1;
        if(mem[start]!= -1) return mem[start];
        string sub;
        for(int i = start; i<n; i++) if(wordDict.count(sub+=s[i]) && canBrk(i+1,s,wordDict,mem)) return mem[start] = 1; 
        return mem[start] = 0;
    }
```
* java O(n^3)
```
	Boolean[] mem;
    public boolean wordBreak(String s, List<String> wordDict) {
        mem=new Boolean[s.length()];
        return wordBreak(0,s,new HashSet<String>(wordDict));   
    }
    private boolean wordBreak(int p, String s, Set<String> dict){
        int n=s.length();
        if(p==n) {
            return true;
        }
        if(mem[p]!=null) {
            return mem[p];
        }
        for(int i=p+1;i<=n;i++) {
            if(dict.contains(s.substring(p,i))&&wordBreak(i,s,dict)) { 
                return mem[p]=true;
            }
        }
        return mem[p]=false;
    }
```
3. dp. For dp problems, many times we go into iterative dp directly without even thinking about dfs. This is a great example showing that dfs is better than dp. DFS returns as soon as it finds one way to break the word while dp computes if each substring starting/ending at i is breakable. The test cases of this problem do not show it but it is shown in a similar problem [Concatenated Words](https://discuss.leetcode.com/topic/78569/a-review-of-top-solutions).
* c++ Average O(n^2) 
```
    bool wordBreak(string s, unordered_set<string>& wordDict) {
        int n = s.size();
        vector<bool> dp(n+1);
        dp[n]=1;
        for(int i=n-1;i>=0;i--) {
            string sub;
            for(int j=i;j<n;j++) if (dp[i] = wordDict.count(sub+=s[j]) && dp[j+1]) break;
        }
        return dp[0];    
    }
```
* java O(n^3)
```
	public boolean wordBreak(String s, List<String> wordDict) {
        int n=s.length();
        boolean[] dp=new boolean[n+1];
        dp[n]=true;
        Set<String> dict=new HashSet(wordDict);
        for(int i=n-1;i>=0;i--) {
            for(int j=i+1;!dp[i] && j<=n;j++) { 
                dp[i] = dp[j] & dict.contains(s.substring(i,j));
            }
        }
        return dp[0];   
    }
```
4. BFS, Average O(n^2) BFS may be better than dp. In dp, for each index i, it checks if the substr starting at i can break. However, if the substr ending before i cannot break, then we do not have to check i. But this is the nature of dp, we visit all the states and derive the next state according to previous states and I don't find a way to improve the dp solution. BFS always starts from a valid index and may visit fewer states. This is similar to [Perfect Squares](https://discuss.leetcode.com/topic/57631/evolve-from-brute-force). But BFS is not guaranteed to be better than dp. If every index is a valid state, then BFS visits the same number of states as dp. The inner for loop of BFS looks more expensive than the inner for loop of dp. So I think which is better is case by case. In general, both BFS and dp visit all the states and are less efficient than dfs.
```
    bool wordBreak(string s, unordered_set<string>& wordDict) {
        queue<int> q({0});
        unordered_set<int> vstd;
        int n = s.size();
        while(!q.empty()) {
            int start = q.front();
            q.pop();
            if(vstd.count(start)) continue;
            vstd.insert(start);
            string sub;
            for(int i=start;i<n;i++) 
                if(wordDict.count(sub+=s[i])) {
                    q.push(i+1);
                    if(i+1 == n) return 1;    
                }
        }
        return 0;    
    }
```