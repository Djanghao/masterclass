# [C++] Simple Solution

**Author:** pankajgupta20
**Votes:** 6
**Link:** [https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/1204990/](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/1204990/)

---

	class Solution {
	public:
		bool checkOnesSegment(string s) {
			for(int i = 1; i < s.size(); i++){
				if(s[i - 1] == '0' and s[i] == '1'){
					return false;
				}
			}
			return true;
		}
	};