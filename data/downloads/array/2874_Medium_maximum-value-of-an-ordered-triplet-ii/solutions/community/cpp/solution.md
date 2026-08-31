# Easy Prefix Sum || C++

**Author:** nischaygoyal1
**Votes:** 24
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4111996/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4111996/)

---



# Approach
<!-- Describe your approach to solving the problem. -->
1) It consists of three elements from the array.
2) The first element is the maximum value in the prefix of the current element.
3) The second element is the current element itself.
4) The third element is the maximum value in the suffix of the current element.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    o(N)

# Code
```
class Solution {
public:
    long long maximumTripletValue(vector<int>& nums) {
        int n=nums.size();
        vector<int>p(n,0),s(n,0);
        int m=nums[0];
        for(int i=1;i<n;i++){
            p[i]=m;
            m=max(m,nums[i]);
        }
        m=nums[n-1];
        for(int i=n-2;i>=0;i--){
            s[i]=m;
            m=max(m,nums[i]);
        }
        long long a=0;
        for(int i=0;i<n-1;i++){
            long long v= (p[i]-(1LL*nums[i]))*(1LL*s[i]);
            if(a<v)a=v;
        }
        return a;
        
    }
};
        
       

```