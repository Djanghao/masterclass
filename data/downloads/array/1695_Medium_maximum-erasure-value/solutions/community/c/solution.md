# ✅ Maximum Erasure Value | Easy Solution using 2-Pointers and Hashset w/ Explanation

**Author:** archit91
**Votes:** 49
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/1235753/](https://leetcode.com/problems/maximum-erasure-value/solutions/1235753/)

---

\u2714\uFE0F ***Solution (using 2-Pointers and HashSet)***

We need to check every sub-array having unique elements and find the one having the maximum sum. Obviously, with the given constraints, we can't check every sub-array individually.

We need to realise that we can **choose the first element and keep extending the array till we find a duplicate**. We can insert all the chosen elements till now into a hashset and check if the element already exists before inserting the next one. We will simultaneously also keep track of the sum of all chosen elements - *`cursum`* and maintain the max sum till now - *`ans`*

When our next element ***`nums[r]`* is already present in currently chosen subarray** (hashset), then we must **delete all the elements from the start till the duplicate**. For this, we will need to maintain a left-pointer *`l`* denoting the left-most index of an element in currently chosen subarray. 

We will keep deleting *`nums[l]`* and simultaneously deducting it from *`cur_sum`* and incrementing *`l`* pointer till duplicate is deleted. Finally we add *`nums[r]`* to our hashset and `cur_sum`. We repeat till we reach the end.

**C++**
```
int maximumUniqueSubarray(vector<int>& nums) {        
	int n = size(nums), cur_sum = 0, ans = 0, l = 0, r = 0;
	unordered_set<int> s;
	while(r < n) {
		while(s.find(nums[r]) != end(s))          // delete from current sub-array till there's a duplicate of nums[r]
			cur_sum -= nums[l], s.erase(nums[l++]);
		cur_sum += nums[r], s.insert(nums[r++]);  // pick nums[r] and update cur_sum
		ans = max(ans, cur_sum);                  // finally update ans to hold the maximum of all subarray sums till now
	}
	return ans;
}
```

---

**Python**
```
def maximumUniqueSubarray(self, nums: List[int]) -> int:
	sub_arr, l, cur_sum, ans  = set(), 0, 0, 0
	for r in range(len(nums)):
		while nums[r] in sub_arr:     # deleting duplciate of nums[r], if already exists 
			sub_arr.remove(nums[l])
			cur_sum -= nums[l]
			l += 1
		sub_arr.add(nums[r])          # pick nums[r]
		cur_sum += nums[r]            # update current sub-array sum
		ans = max(ans, cur_sum)       # update ans to hold max of all sub-array sums till now
	return ans
```

***Time Complexity :*** **`O(N)`**, where *`N`* is the number of elements in *`nums`*
***Space Complexity :*** **`O(N)`**

---

\u2714\uFE0F ***Solution - II (using 2-Pointers and Frequency array)***

It's given that all the element in `nums` are in the range `[1, 10000]`. We can use a frequency-array with indices `[1,10000]` to denote if an element is already chosen. 

This method gave significant improvement in the runtime speed & memory of C++ (from ~360ms to <100ms). The improvement was negligible in case of python

**C++**
```
int maximumUniqueSubarray(vector<int>& nums) {        
	int n = size(nums), cur_sum = 0, ans = 0, l = 0, r = 0;
    bool freq[10001]{false};
	while(r < n) {
		while(freq[nums[r]])
			cur_sum -= nums[l], freq[nums[l++]] = false;
		cur_sum += nums[r], freq[nums[r++]] = true;  
		ans = max(ans, cur_sum);    
	}
	return ans;
}
```

---

**Python**
```
def maximumUniqueSubarray(self, nums: List[int]) -> int:
	freq, l, cur_sum, ans  = [False]*10001, 0, 0, 0
	for r in range(len(nums)):
		while freq[nums[r]]:
			freq[nums[l]] = False
			cur_sum -= nums[l]
			l += 1
		freq[nums[r]] = True
		cur_sum += nums[r]
		ans = max(ans, cur_sum)
	return ans
```

***Time Complexity :*** **`O(N)`**, where *`N`* is the number of elements in *`nums`*
***Space Complexity :*** **`O(1)`**, although we are using array of size 10000, it doesn't depend on the size of input and hence the extra space used is constant - `O(1)`

---

*Best Runtime -*

<table><tr><td><img src =https://assets.leetcode.com/users/images/e7193d6c-9e7e-4da3-a891-abb85294f4c7_1622191896.538263.png /></td></tr></table>




---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---