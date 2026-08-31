# Sliding Window Solution Easy C++ O(1) in space and 100% beat in time complexity and space

**Author:** ayushchandra73
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5651279/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5651279/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The elements of array must be consecutive and in ascending order.
This means that in subarray of size k , if this condition is satified by i and i+1, this evaluates to true otherwise false.
# Approach
<!-- Describe your approach to solving the problem. -->
In this way we can use **Sliding Window** Approach and if the ith index element satisfied the condition we can decrease the count of true by 1 and increase by 1 if jth element satisfies condition too.

If the count of trues is equal to k-1 return the last element of window else return -1;

Count of trues must be k-1 and not k because between two elements we have 1 true, therfore for subarray of size k count of trues must be k-1
# Complexity
- Time complexity: **O(N)** for array traversal
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: **O(1)** if we ignore the explicit size that is needed to return the answer else O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<int> resultsArray(vector<int>& nums, int k)
    {
        int n=nums.size();
        int t=0;
        for(int i=1;i<k;i++) // k window size evaluated first
        {
            if(nums[i-1]+1==nums[i]) t++; //storing the count of trues
        }    
        vector<int>ans;
        int j=k,i=1;
        while(j<n)
        {
            if(t==k-1)
            {
                ans.push_back(nums[j-1]);
            }
            else ans.push_back(-1);

            if(nums[i-1]+1==nums[i]) t--;

            if(nums[j-1]+1==nums[j]) t++;
            j++;
            i++;
        }
        if(t==k-1) ans.push_back(nums[n-1]);
        else ans.push_back(-1);
        return ans;
    }
};
```