# C++ O(N^2) || O(N) Stack

**Author:** abhay5349singh
**Votes:** 24
**Link:** [https://leetcode.com/problems/beautiful-towers-i/solutions/4082818/](https://leetcode.com/problems/beautiful-towers-i/solutions/4082818/)

---

**Connect with me on LinkedIn**: https://www.linkedin.com/in/abhay5349singh/

**Approach 1:**
* consider each index as max height and build mountain array around it

```
class Solution {
public:
    
    #define ll long long
    
    long long maximumSumOfHeights(vector<int>& a) {
        int n=a.size();
        
       ll int ans=0;
        for(int i=0;i<n;i++){
            ll int sum = a[i];
            int prev=a[i];
            for(int j=i-1;j>=0;j--){
                prev = min(a[j],prev);
                sum += prev;
            }
            prev=a[i];
            for(int j=i+1;j<n;j++){
                prev = min(a[j],prev);
                sum += prev;
            }
            
            if(sum > ans) ans=sum;
        }
        
        return ans;
    }
};
```

**Approach 2:**
* compute nearest smaller heights on left and right for each index
* pre-compute possible sum for left and right segment considering each index as *maxHeight*

```
class Solution {
public:
    
    #define ll long long
    
	// get index to nearest smaller value on left [0,i-1]
    vector<int> leftSmaller(vector<int> a){
        int n=a.size();
        
        stack<pair<int,int>> st;
        vector<int> smaller(n,-1);
        for(int i=0;i<n;i++){
            while(st.size()>0 && st.top().first >= a[i]) st.pop();
            
            if(st.size() > 0) smaller[i]=st.top().second;
            
            st.push({a[i],i});
        }
        
        return smaller;
    }
    
	// get index to nearest smaller value on right [i+1,n-1]
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
    
    long long maximumSumOfHeights(vector<int>& a) {
        int n=a.size();
        
        vector<int> left = leftSmaller(a);
        
        vector<ll int> leftSum(n,0);
        for(int i=0;i<n;i++){
            int prevSmaller = left[i];
            
			 // indexes from [prevSmaller+1] to [i] will have height = maxHeights[i]
            leftSum[i] = (i-prevSmaller)*(ll)a[i];
            if(prevSmaller != -1) leftSum[i] += leftSum[prevSmaller];
        }
        
        vector<int> right = rightSmaller(a);
        vector<ll int> rightSum(n,0);
        for(int i=n-1;i>=0;i--){
            int nextSmaller = right[i];
            
			// indexes from [i] to [nextSmaller -1]  will have height = maxHeights[i]
            rightSum[i] = (nextSmaller-i)*(ll)a[i];
            if(nextSmaller != n) rightSum[i] += rightSum[nextSmaller];
        }
        
        ll int ans=0;
        for(int i=0;i<n;i++){
            ll int sum = leftSum[i]+rightSum[i]-a[i];
            if(sum > ans) ans=sum;
        }
        
        return ans;
    }
};
```

**Do upvote if it helps :)**