# ✅🚀 c++ very easy two pointer approach✅🚀

**Author:** suraj_jha989
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-the-array-concatenation-value/solutions/3174060/](https://leetcode.com/problems/find-the-array-concatenation-value/solutions/3174060/)

---


# Code
```
class Solution {
public:
/* simple two pointer approach --> T.C : O(N)

algo:

1. Take first and last element from array.
2. convert them into string and concatenate them.
3. add result to answer
4. do this until all elements are traversed.
*/
    long long findTheArrayConcVal(vector<int>& nums) {
        long long n=nums.size();
        long long ans=0;
        
        if(n==1) return nums[0];
        
        long long i=0,j=n-1;
        while(i<j){
            string s=to_string(nums[i]) + to_string(nums[j]);
            //cout<<s<<endl;
            ans += stoi(s);
            i++;
            j--;
        }
        
        if(i==j) ans += nums[i];
        return ans;
        
    }
};
```
# Please do upvote if you find this helpful\u2764\uFE0F! :)