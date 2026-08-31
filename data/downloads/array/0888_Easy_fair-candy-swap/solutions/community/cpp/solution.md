# [C++] Set Solution with Explanation

**Author:** pankajgupta20
**Votes:** 9
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/1229888/](https://leetcode.com/problems/fair-candy-swap/solutions/1229888/)

---

	class Solution {
	public:
		vector<int> fairCandySwap(vector<int>& aliceSizes, vector<int>& bobSizes) {
			int sA = 0; // sA is the sum of the sizes of Alice's candy bars
			int sB = 0; // sB is the sum of the sizes of Bob's candy bars
			for(int i = 0; i < aliceSizes.size(); i++){
				sA += aliceSizes[i];
			}
			for(int i = 0; i < bobSizes.size(); i++){
				sB += bobSizes[i];
			}
			// Let x =  Size of a candy bar exchanged by Alice
			// Let y = Size of a candy bar exchanged by Bob
			// sA - x + y = sB - y + x 
			// (sA - sB) / 2 = x - y;

			// So, our target is to find a candy bar pair whose whose difference is (sA - sB) / 2 
			int d = (sA - sB) / 2;

			// We want to find if any aliceSizes[i] = bobSizes[j] + d
			set<int> bob;
			for(int i = 0; i < bobSizes.size(); i++){
				bob.insert(bobSizes[i] + d);
			}
			for(int i = 0; i < aliceSizes.size(); i++){
				if(bob.find(aliceSizes[i]) != bob.end()){    
					return {aliceSizes[i], aliceSizes[i] - d};
				}
			}
			return {};
		}
	};



