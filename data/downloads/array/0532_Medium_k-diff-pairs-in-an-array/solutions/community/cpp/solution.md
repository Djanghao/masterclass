# C++ MULTIPLE APPROACHES : MAPS / TWO POINTER

**Author:** Krypto2_0
**Votes:** 214
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/1756874/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/1756874/)

---

Hi , This problem is pretty straightforward . Let me explain the problem first. 
##### EXPLANATION : 
The problem says that we are provided with an array of integers and we have to find out the ***Count of unique pairs*** in the array such that the ***absolute difference of elements of the pair is ==k.***
Mathematically , find the **count of unique pairs ( nums[i], nums[j] )** such that ,
* *0 <= i < j < nums.length*
* *|nums[i] - nums[j]| == k*

##### SOLUTION : 
It is pretty clear that in order to obtain the answer , we have to find all pairs the array which have an absolute difference of 'k' and then eliminate those which are not unique.

There are multiple ways to achieve that. 

#### 1. USING MAPS : 
We are aware of the fact that for a pair to be counted as an answer , **both the elements ( x and x+k ) , need to be in the array**. 
So we simply **create a map and store the frequency** of each element in the map. 
Now we traverse the map and for **each element 'x'** , we **check if 'x+k' exists in the map** . If it does , then it means **a unique pair can be formed** and hence, we **increment the answer**. 
##### EDGE CASE : 
The only edge case is the situation where**k=0**. If k=0 , instead of finding 'x+k' , we **check if the frequency of 'x'>1**. If it is , then we**increment the answer** . 
Else , we don't **increment the answer , as the frequency of x=1 and hence it can't form a pair with itself**.

##### CODE : 
```
class Solution {
public:
    int findPairs(vector<int>& nums, int k) {
        unordered_map<int,int> a;
        for(int i:nums)
            a[i]++;
        int ans=0;
        for(auto x:a)
        {
            if(k==0)
            {    
                if(x.second>1)
                ans++;
            }
             else if(a.find(x.first+k)!=a.end())
                ans++;
        }
        
        return ans;
    }
};
```
**TIME COMPLEXITY : O(N)**
**SPACE COMPLEXITY : O(N)**


#### 2. USING TWO POINTERS : 
We are aware of the fact that for a pair to be counted as an answer , **both the elements ( x and x+k ) , need to be in the array.** 
In this approach , **first we sort the array** and maintain 2 pointers. 
* *1st Pointer --> 1st Element of the Pair*
* *2nd Pointer --> 2nd Element of the Pair*

We set the 1st pointer at the 0th index and 2nd pointer at the 1st index. Then , 
1. Move the 2nd pointer until **2nd pointer - 1st pointer >=k** . 
2. If the **2nd pointer - 1st pointer ==k** , then **increment the answer and move the 2nd pointer to the next greater element.**   
3. Move the **1st pointer to the next greater element**. 

Follow the above procedure until **the 2nd pointer reaches the end of the array**.

##### CODE : 
```
class Solution {
public:
    int findPairs(vector<int>& nums, int k) {
        sort(nums.begin(),nums.end());
        int ans=0,i=0,j=1;
        for(i,j;i<nums.size() and j<nums.size();)
        {
            if(i==j or nums[j]-nums[i]<k)
                j++;
            else 
            {
                if(nums[j]-nums[i]==k)
                {
                    ans++;
                    j++;
                    for(;j<nums.size();j++)
                        if(nums[j]!=nums[j-1])
                            break;
                    if(j==nums.size())
                    return ans;
                    j--;                  
                }
                i++;
                while(i<j and nums[i]==nums[i-1])
                    i++;
            }
        }
        return ans;
    }
};
```
**TIME COMPLEXITY : O(NlogN)**
**SPACE COMPLEXITY : O(1)**

**NOTE : The 2nd approach doesn't need to deal with the EDGE CASE mentioned in the 1st approach as , in the 2nd approach after finding a pair , we immediately move to the next greater element.**

If you found this post helpful , do upvote. 
