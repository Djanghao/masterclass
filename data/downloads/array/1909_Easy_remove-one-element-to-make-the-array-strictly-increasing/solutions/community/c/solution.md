# [C++] O(n), one pass, explained, multiple solutions

**Author:** dbolohan
**Votes:** 120
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/1298443/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/1298443/)

---

# O(n), one pass
When we find two consecutive elements which are not increasing, we have to analyze which one should be removed. If possible we should remove the bigger element.
Ex: [1, 7, 2, 3] - we should remove 7 when we analyze [7, 2]
[6, 7, 2, 3] - we can't remove 7 when we analyze [7, 2] because 2 <= 6
```
bool canBeIncreasing(vector<int>& nums) {
	int previous = nums[0];
	bool used = false;
	for (int i = 1; i < nums.size(); i++){
		if (nums[i] <= previous){ // it's not strictly increasing
            if (used)
                return false;
			// we haven't used the element removal yet.
            used = true;
            if (i == 1 || nums[i] > nums[i - 2]) // we remove the element from i - 1 position because it's bigger, so we update previous.
                previous = nums[i];
            // else we remove current element and leave previous to it's existing value.
		} else
			previous = nums[i];
	}
	return true;
}
```
# Other O(n) solution
When we find two consecutive elements that are not strictly increasing, we have to remove one of them.
We just try removing the first and see if the array is strictly increasing. If not, we try removing the second one.
Complexity is still O(n) although in the worst case scenario it passes through the array 5 times.
```
bool canBeIncreasing(vector<int>& nums) {
	for (int i = 1; i < nums.size(); i++)
		if (nums[i] <= nums[i - 1])
			return isIncreasing(removeElement(nums, i - 1)) ||
				isIncreasing(removeElement(nums, i));
	return true;
}
vector<int> removeElement(vector<int> &nums, int removedPoz){
	vector<int> ans;
	for (int i = 0; i < nums.size(); i++)
		if (i != removedPoz)
			ans.push_back(nums[i]);
	return ans;
}
bool isIncreasing(vector<int> nums){
	for (int i = 1; i < nums.size(); i++)
		if (nums[i] <= nums[i - 1])
			return false;
	return true;
}
```
# Brute Force, square complexity
For every element of the array we check whether the array without that element is strictly increasing.
```
bool canBeIncreasing(vector<int>& nums) {
	for (int i = 0; i < nums.size(); i++)
		if (isIncreasing(removeElement(nums, i)))
			return true;
	return false;
}
vector<int> removeElement(vector<int> &nums, int removedPoz){
	vector<int> ans;
	for (int i = 0; i < nums.size(); i++)
		if (i != removedPoz)
			ans.push_back(nums[i]);
	return ans;
}
bool isIncreasing(vector<int> nums){
	for (int i = 1; i < nums.size(); i++)
		if (nums[i] <= nums[i - 1])
			return false;
	return true;
}
```
This is also accepted although it uses a lot more time and memory. Running times can vary based on system load, but here are the values I encountered:
First solution uses 0 ms and 9.9 MB
Second solution uses 8 ms and 10.4 MB
Third solution uses 384 ms and 158.6 MB