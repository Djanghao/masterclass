# C++ || Brute Force || Stack O(N^2) || Pre-Computation O(N)

**Author:** abhay5349singh
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4111925/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4111925/)

---

**Connect with me on LinkedIn**: https://www.linkedin.com/in/abhay5349singh/

**Approach1:**
```
class Solution {
public:
    long long maximumTripletValue(vector<int>& nums) {
        int n=nums.size();
        long ans=0;
        for(int i=0;i<n-2;i++){
            for(int j=i+1;j<n-1;j++){
                for(int k=j+1;k<n;k++){
                    long val = (long) (nums[i] - nums[j]) *(long)nums[k];
                    if(val > ans) ans=val;
                }
            }
        }
        
        return ans;
    }
};
```

**Approach2:**
* to maximize expression, for every "i", we need smaller values than nums[i] for [i+1,j] and max value possible from [j+1,n-1]
* to get smaller values: we can use "nearest smaller on right" and loop over subsequent smaller values
* pre computing max values for every index "i" from [i+1,n-1]
```
class Solution {
public:
    
    // get index to smaller elements on left
    vector<int> rightSmaller(vector<int> a){
        int n=a.size();
        
        stack<pair<int,int>> st;
        vector<int> smaller(n,n);
        for(int i=n-1;i>=0;i--){
            while(st.size()>0 && st.top().first >= a[i]) st.pop();
            
            if(st.size() > 0) smaller[i]=st.top().second;
            
            st.push({a[i],i});
        }
        
        return smaller;
    }
    
    long long maximumTripletValue(vector<int>& nums) {
        int n=nums.size();
        
        vector<int> right_smaller = rightSmaller(nums);
        
        // max value for [i,n-1]
        vector<int> right_max(n);
        right_max[n-1]=nums[n-1];
        for(int i=n-2;i>0;i--) right_max[i]=max(right_max[i+1],nums[i]);
        
        long ans=0;
        long maxe=nums[n-1];
        for(int i=0;i<n-2;i++){
            int idx=right_smaller[i];
            
            // subsequently taking min values to right of current index
            while(idx < n-1){
                int maxe=right_max[idx+1]; // max value to right of min value 
                long val = (long)(nums[i]-nums[idx])*(long)maxe;
                if(ans < val) ans=val;
                
                idx = right_smaller[idx];
            }
        }
        return ans;
    }
};
```

**Approach3:**
* for every index "i" precomputing left_max [0,i-1] and right_max [i+1,n-1]
* evaluating expresion for each "i"
```
class Solution {
public:
    
    long long maximumTripletValue(vector<int>& nums) {
        int n=nums.size();
        
        vector<int> left_max(n);
        left_max[0]=nums[0];
        for(int i=1;i<n;i++) left_max[i]=max(left_max[i-1],nums[i]);
        
        vector<int> right_max(n);
        right_max[n-1]=nums[n-1];
        for(int i=n-2;i>=0;i--) right_max[i]=max(right_max[i+1],nums[i]);
        
        long ans=0;
        
        for(int i=1;i<n-1;i++){
            long val = (long)(left_max[i-1]-nums[i])*(long)right_max[i+1];
            if(ans < val) ans=val;
        }
        
        return ans;
    }
};
```

**Do upvote if it helps :)**