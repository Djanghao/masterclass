# Priority Queue || C++

**Author:** kbp12
**Votes:** 116
**Link:** [https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2457384/](https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2457384/)

---

**Intuition**:    First find the maximum sum possible. We will get maximum possible sum after adding all the elements greater than 0. Next, if we want to find  2nd maximum sum what we can do?
We can either subtract a smallest positive number from this sum or add largest (minimum(abs(num)) negative number in the sum to get 2nd maximum number.
Similarly, we have to add or subtract numbers from current sum to get next largest sum.
**Key**: We can convert all the negative numbers to positive and then simply can subtract them instead of adding.
So to get the maximum sum we will store the least values that needs to be subtracted from maxsum in priority queue (minheap).
Time O(nlogn + KlogK)
Space O(K)
```
class Solution {
public:
    long long kSum(vector<int>& nums, int k) {
        int n = nums.size();
        long long maxsum = 0;
	    //subtract stores the sum which needs to be subtracted from the maximum sum
        vector<long long> subtract;
        //find the maxsum and update nums so that all elements are positive
        for(int i=0;i<n;i++){
            if(nums[i]>=0){
                maxsum+=nums[i];
            }else{
                nums[i] = abs(nums[i]);
            }
        }
        //sorting nums as per absolute values
        sort(nums.begin(), nums.end());
        
        //Initialize priority queue (minheap) to store current least value which needs to be
        //subtracted from maxsum and the index of nums we are currently at.
        priority_queue<pair<long long,int>, vector<pair<long long,int>>, greater<pair<long long,int>>> pq;
        //start from index 0 with minimum value as nums[0]
        pq.push({nums[0], 0});
        while(!pq.empty() && subtract.size()<k-1){
            pair<long long,int> topp = pq.top(); 
            pq.pop();
            long long subt = topp.first;
            int idx = topp.second;
            //push this value to subtract array
            subtract.push_back(subt);
            //if we are not at last idx then we can add further values to pq
            if(idx<n-1){
                pq.push({subt+nums[idx+1] , idx+1});
                pq.push({nums[idx+1] + (subt-nums[idx]) , idx+1});
            }
        }
        
        //ans stores all the largest sum in decreasing order
        vector<long long>ans;
        ans.push_back(maxsum);
        for(long long subt:subtract) {
            ans.push_back(maxsum - subt);
        }
        //return Kth largest sum 
        return ans[k-1];
    }
};
```
**Similar Problem** which helps to implement priority queue : 373. Find K Pairs with Smallest Sums

Upvote if it helps!!!