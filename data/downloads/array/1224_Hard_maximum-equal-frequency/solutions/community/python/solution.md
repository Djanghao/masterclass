# [Java/C++/Python] Easy to understand (compare counts)

**Author:** tylertay
**Votes:** 37
**Link:** [https://leetcode.com/problems/maximum-equal-frequency/solutions/403931/](https://leetcode.com/problems/maximum-equal-frequency/solutions/403931/)

---

# Intuition
Count frequency of the elements
We also need to count the number of elements with that frequency

# Explanation
There are 2 cases where we need to update the result:

Case 1:
frequency * (number of elements with that frequency) == length AND `i` != nums.length - 1
E.g. `[1,1,2,2,3]`
When the iteration is at index 3, the count will be equal to the length. It should update the result with (length + 1) as it should take an extra element in order to fulfil the condition.

Case 2:
frequency * (number of elements with that frequency) == length - 1
E.g. `[1,1,1,2,2,3]`
When the iteration is at index 4, the count will be equal to (length - 1). It should update the result with length as it fulfil the condition.

# Complexity
Time: `O(N)` where N is the number of elements
Space: `O(N)`

# Java
``` Java
public int maxEqualFreq(int[] nums) {
	Map<Integer, Integer> countMap = new HashMap<>();
	Map<Integer, Integer> freqMap = new HashMap<>();
	int res = 0;
	for (int i = 0; i < nums.length; i++) {
		// update counts
		countMap.put(nums[i], countMap.getOrDefault(nums[i], 0) + 1);
		int freq = countMap.get(nums[i]);
		// update counts with that frequency
		freqMap.put(freq, freqMap.getOrDefault(freq, 0) + 1);

		int count = freqMap.get(freq) * freq;
		if (count == i + 1 && i != nums.length - 1) { // case 1
			res = Math.max(res, i + 2);
		} else if (count == i) { // case 2
			res = Math.max(res, i + 1);
		}
	}
	return res;
}
```

# C++
``` C++
int maxEqualFreq(vector<int>& nums) {
	unordered_map<int, int> countMap;
	unordered_map<int, int> freqMap;
	int res = 0;
	for (int i = 0; i < nums.size(); i++) {
		// update counts
		countMap[nums[i]]++;
		int freq = countMap[nums[i]];
		// update counts with that frequency
		freqMap[freq]++;

		int count = freqMap[freq] * freq;
		if (count == i + 1 && i != nums.size() - 1) { // case 1
			res = max(res, i + 2);
		} else if (count == i) { // case 2
			res = max(res, i + 1);
		}
	}
	return res;
}
```

# Python
```Python
def maxEqualFreq(self, nums):
	counts, freq = collections.Counter(), collections.Counter()
	res = 0
	for i, num in enumerate(nums):
		# update counts
		counts[num] += 1
		# update counts with that frequency
		freq[counts[num]] += 1

		count = freq[counts[num]] * counts[num]
		if count == i + 1 and i != len(nums) - 1: # case 1
			res = max(res, i + 2)
		elif count == i: # case 2
			res = max(res, i + 1)
	return res
```

# Missing Test Cases
`[1,1,1,2,2,2,3,3,3]`

Thanks @fan42 for pointing out a corner case.