# c++ , 0ms , easy solution

**Author:** Pranjalmittal21
**Votes:** 23
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/862065/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/862065/)

---

'''

	class Solution {
	public:
		int xorOperation(int n, int start) {
			int ans =0;
			for(int i=0;i<n;i++){
				ans ^= start + 2*i;
			}
			return ans;
		}
	};

if you understand the solution, then do Upvote 
'''
