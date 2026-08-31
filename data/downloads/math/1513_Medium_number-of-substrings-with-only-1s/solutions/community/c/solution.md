# [C++] Easy math solution

**Author:** pankajgupta20
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/1206806/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/1206806/)

---

	class Solution {
	public:
		int numSub(string s) {
			long count = 0;
			long ans = 0;
			for(int i  = 0; i < s.size(); i++){
				if(s[i] == '1'){
					count++;
				}
				else{
					ans += (count * (count + 1)) / 2;
					count = 0;
				}
			}
			return (ans + (count * (count + 1)) / 2) % 1000000007;
		}
	};