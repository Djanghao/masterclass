# C++ || Priority Queue || Explained

**Author:** anis23
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2462897/](https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2462897/)

---

**Approach:**

* we need to find the kth largest subsequence sum
* the array consist of both +ve and -ve numbers
* the subsequence with maxsum will be the one with all the non-neg values
* now, the 2nd maxsum subsequence will either be
	* ``` maxsum- min_pos_value```
	* ```maxsum + max_neg_value``` (remember that -2>-10) or we can say ```maxsum- min_abs_neg_value```
* so we find the maxsum first
* then update all the neg values to their abs values and sort the array
* now, we make a maxheap to store the {current max sum, index}
* we run the loop till the size of our ans array is <k
* now let's say we have the currSum as curr and the index as i
* now the next maxSum can be
	* subtract the next min element from the sorted_nums
		* ```pq.push({curr - nums[i + 1], i + 1});```
	* get back to the previous maxSum and instead of subtracting the ith element subtract the (i+1)th element
		* ```pq.push({curr - nums[i + 1] + nums[i], i + 1});```
* example:
		* sorted nums = {1,2,3,4,10,12}
		* maxsum = 12+4+3+1 = 20
		* push {20-1,0}
		* now,
			* curr=19, i=0
			* store 19 in the ans
			* next possible max sum can be:
				* 19-2 i.e ```curr-nums[i+1]```
				* or 
				* 20-2 i.e ```curr+nums[i]-nums[i+1]```
* return the kth subsequence sum i.e ans[k-1]

**Code:**

```
class Solution
{
public:
    typedef pair<long long, long long> pi;
    long long kSum(vector<int> &nums, int k)
    {
        int n = nums.size();
        priority_queue<pi> pq; //{sum,index}
        long long maxsum = 0;
        for (auto &x : nums)
            (x >= 0) ? maxsum += x : x *= -1;

        sort(nums.begin(), nums.end());
        pq.push({maxsum - nums[0], 0});
        vector<long long> ans;
        ans.push_back(maxsum);

        while (ans.size() < k)
        {
            auto [curr, i] = pq.top();
            pq.pop();
            ans.push_back(curr);
            if (i + 1 < n)
            {
                pq.push({curr - nums[i + 1], i + 1});
                pq.push({curr - nums[i + 1] + nums[i], i + 1});
            }
        }
        return ans[k - 1];
    }
};
```