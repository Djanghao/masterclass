# ✅✅Faster || Easy To Understand || C++ Code

**Author:** __KR_SHANU_IITG
**Votes:** 17
**Link:** [https://leetcode.com/problems/split-array-with-same-average/solutions/2331042/](https://leetcode.com/problems/split-array-with-same-average/solutions/2331042/)

---

* ***Using Recursion && Memoization***

* ***Time Complexity :- O(N * N * Sum)***

* ***Space Complexity :- O(N * Sum)***

```
By Applying Math We Get,
Let we have,
s1 = sum of first set
s2 = sum of second set
n1 = size of first set
n2 = size of second set
s = s1 + s1 = sum of nums
n = n1 + n2 = size of nums
we are given that average of first set = average of second set
s1 / n1 = s2 / n2
replace s2 by s - s1 and n2 by n - n1
after solving the above equation
we get,
s1 = (s * n1) / n
```

```
class Solution {
public:
    
    // declare a map
    
    unordered_map<string, int> mp;
    
    bool helper(vector<int>& nums, int i, int n, int sum, int n1)
    {
        // base case
        
        if(n1 == 0)
            return sum == 0;
        
        if(i == n)
            return false;
        
        // create a key
        
        string key = to_string(i) + "#" + to_string(n1) + "#" + to_string(sum);
        
        // if already calculated
        
        if(mp.count(key))
            return mp[key];
        
        // if nums[i] <= sum, then we will either include or exclude
        
        // calculate the result and store in map
       
        if(nums[i] <= sum)
        {
            return mp[key] = helper(nums, i + 1, n, sum - nums[i], n1 - 1) || helper(nums, i + 1, n, sum, n1);
        }
        else
            return mp[key] = helper(nums, i + 1, n, sum, n1);
    }
    
    bool splitArraySameAverage(vector<int>& nums) {
        
        int n = nums.size();
        
        // find the total sum
        
        int sum = 0;
        
        for(int i = 0; i < n; i++)
        {
            sum += nums[i];
        }
        
        // check for every possible size of subset from 1 to n - 1
        
        for(int n1 = 1; n1 < n; n1++)
        {
            if((sum * n1) % n == 0)
            {
                int req_sum = (sum * n1) / n;
                
                // check if there is any subset of n1 that has sum of req_sum
            
                if(helper(nums, 0, n, req_sum, n1))
                    return true;
            }
        }
        
        return false;
    }
};
```