# LeetCode HARD | CPP solution

**Author:** muditverma
**Votes:** 41
**Link:** [https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1141582/](https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1141582/)

---

Idea : 
We can't generate all subsequence as it will give TLE. 

So, 
since the Max Value possible is 2\\*10^5, this is the max gcd. Hence We can iterate over all possible gcd values and check whether they can be a gcd of a subsequence. 

So the question becomes, 
Given a number x, check whether there exists a subsequence s.t. x is a gcd of that subsequence. (If we do this for all x, we can count the unique gcd values).

Now, x can only be a gcd of numbers which are multiples of x. For example, if x = 5 then it can only be a gcd of a subsequence containting elements 5, 10, 15, 20, 25 .... 

Now not all of these 5, 10, 15, 20, 25... would be given in the inital array. So we can hash which ones are present in the given array to check if we can ever make that value be part of the subsequence. For example if the intial array is <5,15> then we can't use 10.

Now, For all the valid numbers we can pick from x to LIMIT are the ones : 
a) Which are multiples of x (Forced because of the way for loop is written)
b) must exist in array nums (Checked using a hash)

Now x can only be a gcd, if gcd of these valid values is same as x. 

If nums is <3,6,12> then 
for x = 2, we find two valid values <6,12> but gcd(6,12) is 6. Hence 2 can never be a gcd of any resulting subsequence. 
For = 6, 
valid values are <6,12> and gcd = 6. So 6 will be added to answer set. 

For x = 3, valid values are <3,6,12> gcd = 3. will be added to answer set.

for x = 5 valid values are <>. will NOT be added. 

for x = 12, valid values are <12> , gcd = 12. will be added.

(The confusing part maybe "why should gcd of all these valid numbers be same as x?" This is because the valid set can never have values less than x. So either the gcd > x or its equal to x. If we use up all the valid values and still can't get gcd x, then there exists no number that can help us get gcd = x, hence x can't be a unique gcd. If gcd = x, then we must have gotten a subsequence such that gcd of that subseq. is x.).

Another example, for x = 2, in the nums = <6,8,24>
valid values are <6,8,24> and gcd = 2. Note that gcd(6,8) = 2, now even if we take a gcd of <6,8> with any other valid number (multiple of 2) like 24 in this case, we won't get anything lower than 2 as gcd.

In the solution, the outer loop fixes our "x" and the inner loop goes over all the valid values.

```
class Solution {
public:
    
    int gcd(int a, int b)
    {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }
    
    
    int countDifferentSubsequenceGCDs(vector<int>& nums) {
        int n = nums.size();
        int LIMIT = 2e5 + 1;
        
        int ans = 0;
        
        vector<bool> hash(LIMIT, false);
        for(auto num:nums)
            hash[num]=true;
        
        for(int i=1;i<LIMIT; i++){
            // to check if i is a valid gcd of subsequence.
            
            int g = 0;
            
            for(int j=i;j<LIMIT;j+=i){
                if(hash[j]){
                    g = gcd(g, j);
                }    
            }
            
            if(g == i)
                ans++;
            
        }
        
        return ans;
    }
};
```