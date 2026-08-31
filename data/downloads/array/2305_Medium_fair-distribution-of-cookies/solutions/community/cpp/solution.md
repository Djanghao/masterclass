# Easy C++ | Backtracking

**Author:** venkatasaitanish
**Votes:** 205
**Link:** [https://leetcode.com/problems/fair-distribution-of-cookies/solutions/2140918/](https://leetcode.com/problems/fair-distribution-of-cookies/solutions/2140918/)

---

We use a k length vector, to store the sum of cookies for each child.
It is like placing each element in k different subsets.
So we assign each and every bag of cookies to different subsets using backtracking and if all are distributed, we check for the maximum element in that case, and update our ans according to it.
let n = size of given array
As for each element we have k subset choices and there are total of n elements, so **Time complexity : O(k^n)**

```
class Solution {
public:
    int ans = INT_MAX;
    void solve(int start, vector<int>& nums, vector<int>& v, int k){
        if(start==nums.size()){
            int maxm = INT_MIN;
            for(int i=0;i<k;i++){
                maxm = max(maxm,v[i]);
            }
            ans = min(ans,maxm);
            return;
        }
        for(int i=0;i<k;i++){
            v[i] += nums[start];
            solve(start+1,nums,v,k);
            v[i] -= nums[start];
        }
    }
    
    int distributeCookies(vector<int>& nums, int k) { // nums is the cookies vector
        int n = nums.size();
        vector<int> v(k,0); // v is to store each sum of the k subsets
        solve(0,nums,v,k);
        return ans;
    }
};
```

**Update: Optimization**
Let cookies = [8,15,10] and k=2.
Then the subsets we calculate are [33,0] , [23,10], [18,15], [8,25], [25,8], [15,18], [10,23], [0,33].
Here we observe [33,0] and [0,33] refers to same subset and similary other.
So we can reduce the duplicates by breaking the loop if v[i] is equal to 0, as it will be covered in the other subset.
In the for loop of above code, we break the loop if v[i] is equal to 0, because without this line we are just calculating the same subset with different combinations which is unnecessary.
So now the subsets we calculate will only be: [33,0] , [23,10], [18,15], [8,25].
```
for(int i=0;i<k;i++){
	v[i] += nums[start];
	solve(start+1,nums,v,k);
	v[i] -= nums[start];
	if(v[i]==0) break;
}
```
Thanks to @zyj5353

**Upvote if it helps!**