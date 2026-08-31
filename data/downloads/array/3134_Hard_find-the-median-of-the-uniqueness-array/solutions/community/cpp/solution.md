# O(N*LOG N) || Binary Search || Sliding window

**Author:** vebzb
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/solutions/5082786/](https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/solutions/5082786/)

---

# Explanation:

Clearly,
- The first occuring index *i* of a number *n* in the uniqueness array tells that there are i subarrays with distinct count less than n.
- The last occuring index tells the count of subarrays with distinct count less than or equal to n.
---


For example,
nums = [3,4,3,4,5]

The uniqueness array is,
[1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3]

Consider first occurence of 3 in uniqueness array. There are 12 subarrays with distinct count less than 3.
And there are 15 subarrays with distinct count less than Or equal to 3.

---


The size of the uniqueness array is *size* = (n*(n+1))/2
so the medium index is *size*/2.

let f(m) denotes number of subarrays of nums with distinct count less than or equal to *m*

If *m* is the resultant median, it means:
*m* is the least number to have  
    f(m)>=(*size*+1)/2 

Note that (*size*+1)/2 is the position of median.

So we find such a number through binary search.



# Code
```
class Solution {
public:
    //  Function to count subarrays with more than k distinct elements
    // sliding window
    long long numsub(vector<int>& nums,int k)
    {
        unordered_map<int,int> mp;
        long long cnt=0;
        long long i=0,j=0;
        long long res=0;
        for(long long i=0;i<nums.size();i++)
        {
            while(j<nums.size()&&cnt<k)
            {
                mp[nums[j]]++;
                if(mp[nums[j]]==1)
                cnt++;
                j++;
            }
            if(cnt==k)
            {
                res+=(nums.size()-j+1);
            }
            mp[nums[i]]--;
            if(mp[nums[i]]==0)
                cnt--;
        }
        return res;
    }
    int medianOfUniquenessArray(vector<int>& nums) {
        long long size=((long long)nums.size()*(long long)(nums.size()+1))/(long long)2;
        long long a=1,b=nums.size();

        //Binary search
        while(1)
        {
            if(a==b)
                return a;
            if(abs(a-b)==1)
            {
                long long x1=size-numsub(nums,a+1);
                if(x1>=(size+1)/2)
                return a;
                return b;
            }
            long long mid=(a+b)/2;
            long long x=size-numsub(nums,mid+1);
            if(x==(size+1)/2)
                return mid;
            if(x>((size+1)/2))
            {
                b=mid;
            }
            if(x<((size+1)/2))
            {
                a=mid+1;
            }
        }
        return 0;
    }
};
```

# Complexity
- Time complexity:
O(N * LOG N)

- Space complexity:
O(N)

Please share your thoughts or queries in comments



Upvote\uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE4F