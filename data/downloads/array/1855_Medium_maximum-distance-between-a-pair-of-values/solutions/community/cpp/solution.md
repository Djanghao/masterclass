# [C++] 2 pointers solution

**Author:** pankajgupta20
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/1198893/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/1198893/)

---

	class Solution {
	public:
		int maxDistance(vector<int>& nums1, vector<int>& nums2) {
			int ans = 0;
			int i = 0;
			int j = 0;
			while(i < nums1.size() and j < nums2.size()){
				if(nums1[i] <= nums2[j]){
					if(i <= j){
						ans = max(ans, j - i);
					}
					j++;
				}
				else{
					i++;
				}
			}
			return ans;
		}
	};