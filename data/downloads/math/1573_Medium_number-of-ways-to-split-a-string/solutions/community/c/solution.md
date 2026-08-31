# [C++] Basic Mathematics and Arrangement Logic

**Author:** rahulanandyadav2000
**Votes:** 40
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/830565/](https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/830565/)

---

Approach to the solution

Following three cases arise
1. If the number of 1's is not divisible by 3
2. If the number of 1's is zero
3. If the number of 1's is divisble by 3

Case 1:
	Since 1's cannot be dividede into three parts return 0;

Case 2: 
	Min length of array should be one, therfore number of places to cut the string is N-1, 
	where n is the length of the string.
	Now the problem is reduced to arrangements.
	Number of ways to keep two identical balls from N-1 different places= (N-1)*(N-2)/2;
	Choose for first from n-1 and then for second we have n-2 choices. Since objects are identical divide it by 2!. (2= number of identical objects).
	Also don't forget to mod at every step to keep it to int.
			
Case3: 
Let number of 1's be 6;
then we divide them into 3 parts of two 1's.
Example 1 1 0 0 1 0 1 0 0 0 1 1
first part can end (and second part start) from i=1 to i=3 (Why? think yourself).....section 1
similarly second part can end from (and third part start) from i=5 to i=8.....section 2
so in section 1 we have three places to partition and in second section we have four place to partition therefore the answer is 3*4;
			
			

```
class Solution {
public:
    int numWays(string s) {
        long long int i,n=s.size();
        int one=0;
        long long mod=1000000007;
        long long ans;
        for(i=0;i<n;i++)
            if(s[i]=='1')
                one++;
        if(one%3!=0)
            return 0;
        else if(one==0)
        {
           ans =((n-1)*(n-2)/2)%mod;
        }
        else
        {
            long long countOfone=one/3;
            long long index1=-1,index1end=-1;
            long long  index2=-1,index2end=-1;
            long long count=0;
            for(i=0;i<n;i++)
            {   
                if(s[i]=='1')
                    count++;
                if(count==countOfone&&index1==-1)
                    index1=i;
                if(count==countOfone+1&&index2==-1)
                    index2=i;
                if(count==countOfone*2&&index1end==-1)
                    index1end=i;
                if(count==countOfone*2+1&&index2end==-1)
                    index2end=i;
            
            }
            ans=((index2-index1)%mod)*((index2end-index1end)%mod)%mod;
        }
        return (int)ans;
    }
};

```
Feel free to raise doubts.
Time Complexity O(n)

PS: This is my first blog :)