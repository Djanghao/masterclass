# C / C++. 0 ms, faster than 100.00%. cool, clear & easy solution.

**Author:** m-d-f
**Votes:** 42
**Link:** [https://leetcode.com/problems/remove-element/solutions/1048331/](https://leetcode.com/problems/remove-element/solutions/1048331/)

---

	class Solution {
	public:
		int removeElement(vector<int>& nums, int val) {
			int length = nums.size(), index = 0;
			while ( index < length )
			{
				 if ( nums[index] == val )
				 {
					 nums[index] = nums[length - 1];
					 -- length;
				 }
					
				else ++index;
			}
			 return length;  
		}
	};