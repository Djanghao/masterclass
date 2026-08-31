# Explained | Easy | gcd and intuition

**Author:** i_pranav
**Votes:** 65
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3445725/](https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3445725/)

---

# Intuition
Q1. When is gcd of 2 numbers =1 ? 
A1. when both the numbers have no common factor. The gcd of 1 and any other number is always 1 itself. 

Q2. How is the property stated above beneficial?
A2. I just need to find the number of operations required to make any element as 1 and then the remaining n-1 elements can be made 1 in just n-1 steps where n is the size of the array. 
Elaborated: if we have a 1 at index \u201Ci\u201D then we would make element at i-1 => gcd(nums[i-1],nums[i]) this would make the element at index i-1 as 1 too! Then we\u2019ll perform the same with i-2,i-3\u2026.1 . without loss of generality we would perform the similar operations to the right of I as well! 

Q3. How do you get the minimum number of operations required to make any of the elements as 1?
A3. given the constraints, for any element I we can traverse through all elements (say iterator j) from i+1 to n and take their gcd. As soon as the gcd becomes 1 we can conclude that taking gcd in the reverse fashion (from nums[j] to nums[i]) would make nums[i] equal to 1. 

Q4. what if some 1s are already present in the array?
A4. In that case we can say that we would use the operation mentioned in A2 and make the remaining elements equal to 1. 

The code is self-explanatory, let me know if you have any doubts! Thanks!


# Complexity
- Time complexity:
O(N^2)
- Space complexity:
O(1)

# Code
```
class Solution {
public:
    int minOperations(vector<int>& nums) {
        int n=nums.size();
        int c=count(nums.begin(),nums.end(),1);     // if there is at least 1. then it's easy!
        if(c!=0)    return n-c;
        int res=1e7;        // just a dummy value
        for(int i=0;i<n;i++){
            int g=nums[i];
            for(int j=i+1;j<n;j++){
                g=__gcd(g,nums[j]);
                if(g==1){
                    res=min(res,j-i+(n-1)); // number of operations to make this element 1+ number of non ones (i.e. n-1) .
                    break;
                } 
            }
        }
        return res==1e7?-1:res;
    }
};
```