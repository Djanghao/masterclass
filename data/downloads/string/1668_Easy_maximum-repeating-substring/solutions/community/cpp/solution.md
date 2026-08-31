# C++ ~ 100% faster solution | easy code

**Author:** Pranjalmittal21
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/954256/](https://leetcode.com/problems/maximum-repeating-substring/solutions/954256/)

---

	class Solution {
	public:
		int maxRepeating(string sequence, string word) {
			int k = 0;
			string temp = word;

			while(sequence.find(temp) != string::npos){
				temp += word;
				k++;
			}

			return k;
		}
	};

to know about **string::npos** [click here.](https://www.cplusplus.com/reference/string/string/npos/)

**Like it? please Upvote!**