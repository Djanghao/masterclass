# ✅✅ Simplify to classic DP|| 2-D Recursive Solution || C++

**Author:** BrehamPie
**Votes:** 28
**Link:** [https://leetcode.com/problems/count-palindromic-subsequences/solutions/2850667/](https://leetcode.com/problems/count-palindromic-subsequences/solutions/2850667/)

---

<h2>Approach</h2>
Instead of solving the actual problem, let us solve another one.

<b>Given  two string S and  T. We want to count the number of times that string T occurs in string S as a subsequence.<b>

A straight forward dp question. How do we solve it?
We can create a recursive function with two state (i,j) where i indicates current position in string S and j is the length of prefix of T we matched so far. So if we find j==T.size() we found a subsequence that is equal to T.
Then the transitions are:<b>
	<p>(i,j) to (i+1,j) [ ignoring the ith character of S] </p> and (i,j) to (i+1,j+1) if(S[i]==T[j])
	</b>
We will avoid overlapping calculation using memoization . You can find plenty of resource for this problem. I added a good resource in the comment section.

Now let us come back to the original problem. How many palindromes are there that is of length 5.
We can place 10 numbers in first,second and third digit. Fourth and fifth digit will be equal to second and first digit. So we can generate all these palindromic strings and check how many times they occur as a substring in S.

Another optimization is we don't actually need to check third digit as it can be anything so we can just take any digit and match it with the third digit of our palindrome digit.

<h3>Code</h3>

	class Solution {
	public:
		int dp[10001][5];
		string digit;
		string s;
		int mod = 1e9+7;
		//Get a palindrome string when first two digit equals to x
		string getDigit(int x){
			string s = to_string(x);
			if(s.size()==1)s = '0'+s; // if x<10 we add a 0 in front of it.
			string t = s;
			s+='.';
			reverse(t.begin(),t.end());
			s+=t;
			return s;
		}
		int call(int pos,int id){
			if(id==5) return 1;
			if(pos==s.size()) return 0;
			if(dp[pos][id]+1) return dp[pos][id];
			int ret = 0;
			ret = call(pos+1,id);
			//if id==2 we can take any digit.
			if(id==2 || s[pos] == digit[id] ) ret = (ret+call(pos+1,id+1))%mod;
			return dp[pos][id] = ret;
		}
		int countPalindromes(string t) {
			s = t;
			long long ans = 0;
			for(int i=0;i<100;i++){
				memset(dp,-1,sizeof dp);
				digit = getDigit(i);
				ans = ans+call(0,0);
				ans = (ans%mod);
			}
			return ans;
		}
	};
