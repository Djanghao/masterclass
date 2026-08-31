# Simple C++ Solution [Runtime: 15 ms, faster than 61.54% . Memory Usage: 9.1 MB, less than 100.00%].

**Author:** Aaditya1978
**Votes:** 72
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1623447/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1623447/)

---

As in the Problem itself we are give an array and we have to return the sub-array of size k whose sum is maximum.
We can do this in a very simple way and without using any extra space or sorting it.
* Step -1 -> Create an ans vector to return and store first k elements in that
* Step -2 -> Loop through the remaining array
* Step -3 -> At each step calculate the index of minimum element in the ans array and compare it with the current element.
* Step -4 -> if element is greater then minimum element then remove minimum from ans and add the greater element.
* Step -5 -> Repeat step 3 and 4 till last element.
* Finally we have required sub sequence.

### Below is the code Given [c++]
```
vector<int> maxSubsequence(vector<int>& nums, int k) {
		// Declare variables
        int n = nums.size(), i = 0, t = k;
		// Answer Array
        vector<int> ans;
		
		// Put first k elements
        while(t>0){
            ans.push_back(nums[i]);
            i++;
            t--;
        }
		
		//Loop Through Remaining Array
        for(int j=i;j<n;j++)
        {
			// Calcualate minimum from ans array 
            int mini = min_element(ans.begin(), ans.end()) - ans.begin();
			// Comapre it with the current element
            if(ans[mini] < nums[j]){
                ans.erase(ans.begin()+mini);
                ans.push_back(nums[j]);
            }
            
        }
        return ans;
    }
```
Time Complexity - O(n*k)
Space Complexity - O(1)

##### if You like my solution please Upvote it.[This is my first post \uD83D\uDE00]
