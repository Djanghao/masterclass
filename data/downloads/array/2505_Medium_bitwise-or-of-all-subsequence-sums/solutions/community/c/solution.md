# [C++|Java|Python3] prefix sum

**Author:** ye15
**Votes:** 26
**Link:** [https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/2912919/](https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/2912919/)

---

**Intuition**
The set bit of the final result has two possible sources
1) set bit in one of an original number; 
2) set bit as a result of a subsequence sum. 

For the 2nd source where the set bit is carried over from lower bits, you can always get the it from a prefix sum. As a result, the solution is like below. 
**Implementation**
**C++**
```
class Solution {
public:
    long long subsequenceSumOr(vector<int>& nums) {
        long long ans = 0, prefix = 0; 
        for (auto& x : nums) {
            prefix += x; 
            ans |= x | prefix; 
        }
        return ans; 
    }
};
```
**Java**
```
class Solution {
    public long subsequenceSumOr(int[] nums) {
        long ans = 0, prefix = 0; 
        for (var x : nums) {
            prefix += x; 
            ans |= x | prefix; 
        }
        return ans; 
    }
}
```
**Python3**
```
class Solution:
    def subsequenceSumOr(self, nums: List[int]) -> int:
        ans = prefix = 0 
        for x in nums: 
            prefix += x
            ans |= x | prefix 
        return ans 
```
**Complexity**
Time `O(N)`
Space `O(1)`