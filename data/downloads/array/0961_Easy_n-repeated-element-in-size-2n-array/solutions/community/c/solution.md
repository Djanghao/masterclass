# [2 methods] [1st using hashmap] [2nd using sorting][c++]

**Author:** rajat_gupta_
**Votes:** 18
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/811397/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/811397/)

---

**1.Using hashmap TC:o(n)**

    class Solution {
    public:
        int repeatedNTimes(vector<int>& A) {
            unordered_map<int,int> map;
            for(int i=0;i<A.size();i++){
                if(map[A[i]]>0)
                    return A[i];
                map[A[i]]++;
            }   
            return 0;
        }
    };

**2.Using sorting TC:o(nlogn)**
    
	class Solution {
    public:
        int repeatedNTimes(vector<int>& A) {
             sort(A.begin(), A.end());
             for(size_t i = 0; i < A.size()-1; i++){
                  if(A[i] == A[i+1]) return A[i];
             }
             return 0;
        }
    };
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)

	