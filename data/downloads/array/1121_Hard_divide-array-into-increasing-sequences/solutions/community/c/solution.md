# [C++] Find max repeated number; O(n) time, O(1) space

**Author:** mhelvens
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/334146/](https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/334146/)

---

`N` is the size of the input array. `K` is the minimum size of individual subsequences.

`maxRepeat` is the main number we're calculating: the number of instances of the most repeated number in the input. It determines our final answer, because each of those repetitions will need to go into a separate subsequence. To accommodate `maxRepeat` subsequences of length `K` or greater, we need `maxRepeat * K <= N`.

Because the array is already sorted, `maxRepeat` can be found in O(n) time and O(1) space.

```C++
class Solution {
public:
  bool canDivideIntoSubsequences(vector<int>& nums, int K) {
    int const N = nums.size();
    int maxRepeat = 0;
    int lastNum = 0;
    int repeat = 0;
    for (int num : nums) {
      if (num == lastNum) {
        ++repeat;
      } else {
        maxRepeat = max(maxRepeat, repeat);
        lastNum = num;
        repeat = 1;
      }
    }
    maxRepeat = max(maxRepeat, repeat);
    return maxRepeat * K <= N;
  }
};
```