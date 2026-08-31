# Evolve from recursion to dp

**Author:** yu6
**Votes:** 1781
**Link:** [https://leetcode.com/problems/decode-ways/solutions/30451/](https://leetcode.com/problems/decode-ways/solutions/30451/)

---

1. Recursion O(2^n). A char may be decoded alone or by pairing with the next char.
* c++
```
    int numDecodings(string s) {
        return s.empty() ? 0: numDecodings(0,s);    
    }
    int numDecodings(int p, string& s) {
        int n = s.size();
        if(p == n) return 1;
        if(s[p] == '0') return 0; // sub string starting with 0 is not a valid encoding
        int res = numDecodings(p+1,s);
        if( p < n-1 && (s[p]=='1'|| (s[p]=='2'&& s[p+1]<'7'))) res += numDecodings(p+2,s);
        return res;
    }
```
* java
```
	public int numDecodings(String s) {
        return s.length()==0?0:numDecodings(0,s);      
    }
    private int numDecodings(int p, String s) {
        int n=s.length();
        if(p==n) return 1;
        if(s.charAt(p)=='0') return 0;
        int res=numDecodings(p+1,s);
        if(p<n-1&&(s.charAt(p)=='1'||s.charAt(p)=='2'&&s.charAt(p+1)<'7')) 
			res+=numDecodings(p+2,s);
        return res;
    }
```
2. Memoization O(n)
* c++
```
    int numDecodings(string s) {
        int n = s.size();
        vector<int> mem(n+1,-1);
        mem[n]=1;
        return s.empty()? 0 : num(0,s,mem);   
    }
    int num(int i, string &s, vector<int> &mem) {
        if(mem[i]>-1) return mem[i];
        if(s[i]=='0') return mem[i] = 0;
        int res = num(i+1,s,mem);
        if(i<s.size()-1 && (s[i]=='1'||s[i]=='2'&&s[i+1]<'7')) res+=num(i+2,s,mem);
        return mem[i] = res;
    }
``` 
* java
```
	public int numDecodings(String s) {
        int n=s.length();
        Integer[] mem=new Integer[n];
        return s.length()==0?0:numDecodings(0,s,mem);      
    }
    private int numDecodings(int p, String s, Integer[] mem) {
        int n=s.length();
        if(p==n) return 1;
        if(s.charAt(p)=='0') return 0;
        if(mem[p]!=null) return mem[p];
        int res=numDecodings(p+1,s,mem);
        if(p<n-1&&(s.charAt(p)=='1'||s.charAt(p)=='2'&&s.charAt(p+1)<'7')) 
			res+=numDecodings(p+2,s,mem);
        return mem[p]=res;
    }
```
3. dp O(n) time and space, this can be converted from #2 with copy and paste.
* c++
```
    int numDecodings(string s) {
        int n = s.size();
        vector<int> dp(n+1);
        dp[n] = 1;
        for(int i=n-1;i>=0;i--) {
            if(s[i]=='0') dp[i]=0;
            else {
                dp[i] = dp[i+1];
                if(i<n-1 && (s[i]=='1'||s[i]=='2'&&s[i+1]<'7')) dp[i]+=dp[i+2];
            }
        }
        return s.empty()? 0 : dp[0];   
    }
```
* java
```
	public int numDecodings(String s) {
        int n=s.length();
        int[] dp=new int[n+1];
        dp[n]=1;
        for(int i=n-1;i>=0;i--)
            if(s.charAt(i)!='0') {
                dp[i]=dp[i+1];
                if(i<n-1&&(s.charAt(i)=='1'||s.charAt(i)=='2'&&s.charAt(i+1)<'7')) 
					dp[i]+=dp[i+2];
            }
        return dp[0];   
    }
```
4. dp constant space
* c++
```
    int numDecodings(string s) {
        int p = 1, pp, n = s.size();
        for(int i=n-1;i>=0;i--) {
            int cur = s[i]=='0' ? 0 : p;
            if(i<n-1 && (s[i]=='1'||s[i]=='2'&&s[i+1]<'7')) cur+=pp;
            pp = p;
            p = cur;
        }
        return s.empty()? 0 : p;   
    }
```
* java
```
	public int numDecodings(String s) {
        int dp1=1, dp2=0, n=s.length();
        for(int i=n-1;i>=0;i--) {
            int dp=s.charAt(i)=='0'?0:dp1;
            if(i<n-1&&(s.charAt(i)=='1'||s.charAt(i)=='2'&&s.charAt(i+1)<'7'))
                dp+=dp2;
            dp2=dp1;
            dp1=dp;
        }
        return dp1;
    }
```
A follow up of the problem is[ 639. Decode Ways II](https://leetcode.com/problems/decode-ways-ii/discuss/686044/Evolve-from-recursion-to-dp).