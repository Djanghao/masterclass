# [c++] fast and easy solution using two pointer algorithm

**Author:** Sanjeev1709912
**Votes:** 77
**Link:** [https://leetcode.com/problems/sort-array-by-parity/solutions/797046/](https://leetcode.com/problems/sort-array-by-parity/solutions/797046/)

---

**Two pointer approch **
please upvote my solution if you like it
'''
class Solution {
public:

    vector<int> sortArrayByParity(vector<int>& A) {
        int j=0;
        for(int i=0;i<A.size();i++)
		{
            if(A[i]%2==0)
			{
                swap(A[i],A[j]);
                j++;
			}
		}
        return A;
    }
};
'''