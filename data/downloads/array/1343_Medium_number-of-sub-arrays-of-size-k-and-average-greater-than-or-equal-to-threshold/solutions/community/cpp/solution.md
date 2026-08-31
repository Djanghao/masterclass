# [C++] Clean, Easy to understand

**Author:** pankajgupta20
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/1006402/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/1006402/)

---

	class Solution {
	public:
		int numOfSubarrays(vector<int>& arr, int k, int threshold) {
			int t = k * threshold;
			int s = 0;
			int c = 0;
			for(int i = 0; i < k; i++){
				s += arr[i];
			}
			if(s >= t){
				c++;
			}
			for(int i = k; i < arr.size(); i++){
				s += arr[i] - arr[i - k];
				if(s >= t){
					c++;
				}
			}        
			return c;
		}
	};