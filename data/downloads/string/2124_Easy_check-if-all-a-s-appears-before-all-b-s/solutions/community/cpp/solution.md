# [C++] Simple Solution

**Author:** pankajgupta20
**Votes:** 27
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/1661052/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/1661052/)

---

	class Solution {
	public:
		bool checkString(string s) {
			for(int i = 1; i < s.size(); i++){
				if(s[i - 1] == 'b' && s[i] == 'a'){
					return false;
				}
			}
			return true;
		}
	};