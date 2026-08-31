# C++ || JavaScript || Easy Solution

**Author:** Imran32
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/3922592/](https://leetcode.com/problems/number-of-subarrays-with-lcm-equal-to-k/solutions/3922592/)

---

# Approach
Just check how many subarrays have an LCM equal to a specific value k in a list of numbers. It does this by checking each element with the ones that come after it and counting the valid cases

# Complexity
- Time complexity: O(n^2 * log(max(nums)))
- Space complexity: O(1)

# Code
# C++
```
class Solution {
public:
    int GCD(int A, int B) {
        if(B==0) return A;
        return GCD(B, A%B);
    }
    long long LCM(int A, int B) {
        long long ans=(A*B);
        long long res=GCD(A,B);
        return ans/res;
    }
    int subarrayLCM(vector<int>& nums, int k) {
        int ans=0;
        for(int i=0;i<nums.size();i++){
            if(nums[i]==k) ans++;
            long long lcm=nums[i];
            for(int j=i+1;j<nums.size();j++){
                long long res=LCM(lcm,nums[j]);
                if(res==k) ans++;
                lcm=res;
                if(res>k) break;
            }
        }
        return ans;
    }
};
```

---

# JavaScript
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function(nums, k) {
    const GCD=(A, B)=> {
        if(B==0) return A;
        return GCD(B, A%B);
    }
    
    const LCM=(A, B)=> {
        return (A*B)/GCD(A,B);
    }

    let ans=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===k) ans++;
        let lcm=nums[i];
        for(let j=i+1;j<nums.length;j++){
            let res=LCM(lcm,nums[j]);
            if(res==k) ans++;
            lcm=res;
            if(res>k) break;
        }
    }
    return ans;
};
```