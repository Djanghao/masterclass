# Easy 🔥 Video Explanation 🔥 Hindi || O( n log n) || C++ ||

**Author:** pkpawan
**Votes:** 25
**Link:** [https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3367285/](https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3367285/)

---

I would sugget you to watch the video and then read the code for better understanding 
Hindi Video Explanation :- [https://youtu.be/4fvwsGdBdok]()

# Complexity
- Time complexity:
- O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
 long long find(int val,vector<int>&arr){
     
     //findind the cost of making all values equal to val
     //in arr
     long long ans = 0;
     
     for(auto&x:arr){
         long long cur = abs(x-val);
         ans += cur;
     }
     
     return ans;
 }

class Solution {
public:
    long long makeSubKSumEqual(vector<int>& arr, int k) {
       
        int n = arr.size();
        long long ans = 1e18;
         
             ans = 0;
            vector<int>vis(n);
             
            for(int i = 0;i<n;++i){
                if(vis[i])continue;
                
                
                vector<int>temp;
                long long tot = 0;
                int idx = i;
                
                //we are starting from index 'i'
                //we will run while loop until we reach to some visited node
                
                while(!vis[idx]){
                    long long val = arr[idx];
                    vis[idx]++;
                    idx += k;
                    idx%=n;
                    tot += val;
                    //adding the values of cycle in temp array
                    temp.push_back(val);
                }
                
                long long cur = 0;
                
                //sorting the temp array because it is optimal to make 
                //all elements equal to middle element of sorted arry
                sort(temp.begin(),temp.end());
                int sz = temp.size();
                
                //if array if of odd size then we have just 1 middle element
                if(sz%2){
                    int mid = (sz/2);
                    cur = find(temp[mid],temp);
                }
                else{
                    //for even size we have two middle values
                    int mid = (sz/2);
                    cur = find(temp[mid],temp);
                    cur = min(cur,find(temp[mid-1],temp));
                }
                 
                ans += cur;
            }
         
        
        
        return ans;
    }
};
```