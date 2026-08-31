# C#. Binary Search. O(log(n)). Cool & Easy-understanding solution.

**Author:** m-d-f
**Votes:** 20
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/1059376/](https://leetcode.com/problems/search-insert-position/solutions/1059376/)

---

	public class Solution {
		public int SearchInsert(int[] nums, int target) {
			int left = 0, right = nums.Length - 1, mid;
			while ( left <= right ){
				mid = (right + left) / 2;
				if ( nums[mid] < target ) left = mid + 1;
				else if ( nums[mid] > target ) right = mid - 1;
				else return mid;
			}   
		return left;
		}
	}