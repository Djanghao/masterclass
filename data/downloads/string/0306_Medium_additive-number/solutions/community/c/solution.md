# c++ backtracking clean code

**Author:** tt89
**Votes:** 8
**Link:** [https://leetcode.com/problems/additive-number/solutions/730189/](https://leetcode.com/problems/additive-number/solutions/730189/)

---

	class Solution {
	public:
		bool getFibo(string &s,int i,long long a,long long b,int n) {
			if(i==s.length()) return n>2;

			long long num=0;
			for(int x=i;x<s.length();x++) {

				if(num>pow(10,17)) break;  //the max length of string is 35, which cannot fit 2 strings of len 18
				num= num*10+s[x]-'0';                      // so we break the loop

				bool chk=false;    
				if(n<2) chk=getFibo(s,x+1,b,num,n+1);
				else if(a+b==num) chk= getFibo(s,x+1,b,num,n+1);
				if(chk) return true;

				if(num==0) break;
			}
			return false;
		}

		bool isAdditiveNumber(string num) {
			return getFibo(num,0,0,0,0);
		}
	};