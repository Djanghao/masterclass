# C++ Two Pointers Easy to Understand Solution

**Author:** hem_ajet
**Votes:** 46
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/347164/](https://leetcode.com/problems/sum-of-square-numbers/solutions/347164/)

---

```
class Solution {
public:
    bool judgeSquareSum(int c) 
    {
    	if(c<0)
    		return false;
    	long int left=0,right=sqrt(c);
    	while(left<=right)
    	{
    		long int cur=left*left+right*right;
    		if(cur<c)
    			left++;
    		else if(cur>c)
    			right--;
    		else 
    			return true;
    	}    
    	return false;
    }
};
```