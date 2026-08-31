# ✅ Short & Easy Solution w/ Explanation | O(N) Solution with comments using hashset

**Author:** archit91
**Votes:** 203
**Link:** [https://leetcode.com/problems/longest-consecutive-sequence/solutions/1254638/](https://leetcode.com/problems/longest-consecutive-sequence/solutions/1254638/)

---

\u2714\uFE0F ***Solution - I (Sorting)***

We can simply sort the given array and compare consecutive elements. Following cases exists:
1. **`nums[i] == nums[i-1] + 1`**: This means the current element is consecutive to previous, so increment current streak count.
2. **`nums[i] == nums[i-1]`**: We have found the same element as previous. Skip it, and see if we can still extend the sequence with next elements.
3. **None of above** : We can't extend the sequence any further. Update *`longest`* to store longest formed streak till now and reset *`curlongest`*.

**C++**
```
int longestConsecutive(vector<int>& nums) {
	if(!size(nums)) return 0;
	sort(begin(nums), end(nums));
	int longest = 0, cur_longest = 1;
	for(int i = 1; i < size(nums); i++) 
		if(nums[i] == nums[i - 1]) continue;
		else if(nums[i] == nums[i - 1] + 1) cur_longest++; // consecutive element - update current streak length
		else longest = max(longest, cur_longest), cur_longest = 1;  // reset current streak length
	return max(longest, cur_longest);
}
```

---

**Python**
```
def longestConsecutive(self, nums: List[int]) -> int:
	nums.sort()
	longest, cur_longest = 0, min(1, len(nums))
	for i in range(1,len(nums)):
		if nums[i] == nums[i - 1] : continue
		if nums[i] == nums[i - 1] + 1: cur_longest += 1
		else: longest, cur_longest = max(longest, cur_longest), 1
	return max(longest, cur_longest)
```

***Time Complexity :*** **`O(NlogN)`**, where *`N`* is the number of elements in nums
***Time Complexity :*** **`O(1)`**, ignoring the space required by sorting algorithm.

---

\u2714\uFE0F ***Solution - II (Using Hashset)***

We need to find the longest consecutive sequence in linear time. We can do this if we insert all the elements of *`nums`* into a hashset. Once we have inserted all the elements, we can just iterate over the hashset to find longest consecutive sequence involving  the current element(let's call it *`num`*) under iteration. This can simply be done by **iterating over elements that are consecutive to *`num`* till we keep finding them in the set**. Each time we will also delete those elements from set to ensure we only visit them once.

**C++**
```
int longestConsecutive(vector<int>& nums) {
	unordered_set<int> s(begin(nums), end(nums)); // inserting all elements into hashset
	int longest = 0;
	for(auto& num : s) {
		int cur_longest = 1;
		// find consecutive elements in the backward and forward direction from num
		for(int j = 1; s.count(num - j); j++) s.erase(num - j), cur_longest++;
		for(int j = 1; s.count(num + j); j++) s.erase(num + j), cur_longest++;
		longest = max(longest, cur_longest);  // update longest to hold longest consecutive sequence till now
	}
	return longest;
}
```

---

**Python**
```
def longestConsecutive(self, nums: List[int]) -> int:
	longest, s = 0, set(nums)
	for num in nums:
		cur_longest, j = 1, 1
		while num - j in s: 
			s.remove(num - j)
			cur_longest, j = cur_longest + 1, j + 1
		j = 1
		while num + j in s: 
			s.remove(num + j)
			cur_longest, j = cur_longest + 1, j + 1
		longest = max(longest, cur_longest)
	return longest
```

***Time Complexity :*** **`O(N)`**
***Space Complexity :*** **`O(N)`**

---

\u2714\uFE0F ***Solution - III (Using Hashset - w/ optimizations)***

We can form a solution without the need to spend time erasing elements from the hashset. 

Instead of taking the first element that we find in the hashset and iterating both forward and backward, we can just keep skipping till we find that hashset contains `num - 1`. Finally, we can just iterate in the forward direction till we find consecutive elements in hashset and update `longest` at the end

**C++**
```
int longestConsecutive(vector<int>& nums) {
	unordered_set<int> s(begin(nums), end(nums));
	int longest = 0;
	for(auto& num : s) {
        if(s.count(num - 1)) continue;
		int j = 1;
		while(s.count(num + j)) j++;
		longest = max(longest, j);
	}
	return longest;
}
```

---

**Python**
```
def longestConsecutive(self, nums):
	s, longest = set(nums), 0
	for num in s:
		if num - 1 in s: continue
		j = 1
		while num + j in s: j += 1
		longest = max(longest, j)
	return longest
```

***Time Complexity :*** **`O(N)`**
***Space Complexity :*** **`O(N)`**

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---