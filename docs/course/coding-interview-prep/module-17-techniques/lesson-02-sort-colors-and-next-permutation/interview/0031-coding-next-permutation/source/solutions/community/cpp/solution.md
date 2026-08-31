# C++ from Wikipedia

**Author:** jianchao-li
**Votes:** 1243
**Link:** [https://leetcode.com/problems/next-permutation/solutions/13867/](https://leetcode.com/problems/next-permutation/solutions/13867/)

---

According to [Wikipedia](https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order), a man named Narayana Pandita presented the following simple algorithm to solve this problem in the 14th century.

1. Find the largest index `k` such that `nums[k] < nums[k + 1]`. If no such index exists, just reverse `nums` and done.
2. Find the largest index `l > k` such that `nums[k] < nums[l]`.
3. Swap `nums[k]` and `nums[l]`.
4. Reverse the sub-array `nums[k + 1:]`.

```cpp
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
    	int n = nums.size(), k, l;
    	for (k = n - 2; k >= 0; k--) {
            if (nums[k] < nums[k + 1]) {
                break;
            }
        }
    	if (k < 0) {
    	    reverse(nums.begin(), nums.end());
    	} else {
    	    for (l = n - 1; l > k; l--) {
                if (nums[l] > nums[k]) {
                    break;
                }
            } 
    	    swap(nums[k], nums[l]);
    	    reverse(nums.begin() + k + 1, nums.end());
        }
    }
}; 
```

The above algorithm can also handle duplicates and thus can be further used to solve [Permutations](https://leetcode.com/problems/permutations/) and [Permutations II](https://leetcode.com/problems/permutations-ii/).