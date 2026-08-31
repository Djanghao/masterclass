# Beats 100% 3 Line Solution ||  Fully MOST Optimised Code

**Author:** 7mm
**Votes:** 530
**Link:** [https://leetcode.com/problems/rotate-array/solutions/3506340/](https://leetcode.com/problems/rotate-array/solutions/3506340/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Start!!

# Approach
<!-- Describe your approach to solving the problem. -->
Example:-1234567 ,k=3
1.first reverse the numbers form index 0 to n-k;
->4321 567
2.reverse the k elements from the last 
->4321 765
3.now reverse the whole nums;
->5671234 Done Answer is here !!!!
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        // vector<int>temp;
        // int len=nums.size();
        // int j=0;
        // k=k%len;
        // for(int i=0;i<abs(len-k);i++)
        // {
        //     //1,2,3,4
        //     cout<<nums[i]<<" ";
        //     temp.push_back(nums[i]);
        // }
        // cout<<endl;
        // for(int i=abs(len-k);i<len;i++)
        // {
        //     //5,6,7

        //     cout<<nums[i]<<endl;
        //     nums[abs(i-abs(len-k))]=nums[i];
        // }
        // for(int i=k;i<len;i++)
        // {
        //     nums[i]=temp[j];
        //     j++;
        // }
        
        k=k%nums.size();
        reverse(nums.begin(),nums.begin()+(nums.size()-k));

        reverse(nums.begin()+(nums.size()-k),nums.end());
    
        reverse(nums.begin(),nums.end());
            

        
        

        
        
    }
};
```
**Important -> Search *yashsiwach* in solutions of any question to get my image Solution thanks!\uD83D\uDCAF**
# Connect on LinkedIn ,link in Leetcode Profile !
**Upvote if it Helped !\uD83D\uDD25**

