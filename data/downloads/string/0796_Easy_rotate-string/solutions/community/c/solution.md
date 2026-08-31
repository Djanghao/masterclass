# Easy and 3 lines C++ solution, using queue approach.

**Author:** astha77
**Votes:** 73
**Link:** [https://leetcode.com/problems/rotate-string/solutions/991955/](https://leetcode.com/problems/rotate-string/solutions/991955/)

---

```
class Solution {
public:
    bool rotateString(string A, string B) {
   queue<int>q,q1;
   int n=A.size(); 
    for(int i=0;A[i]!='\\0';i++){
        q.push(A[i]);
		 q1.push(B[i]);
       }
	   
    //if the string A and B are equal
        if(A==B){
            return true;
        }  
		
      int i=0;
     while(i<n){
        q.push(q.front());
            q.pop();
            if(q==q1)
                return true;
            i++;
        }
      return false; 
    }
};
//if you like this approach please upvote and if their is any doubt please free to ask


