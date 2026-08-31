# Simple Counting

**Author:** votrubac
**Votes:** 43
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/4949503/](https://leetcode.com/problems/count-alternating-subarrays/solutions/4949503/)

---

If we we have an alternating sequence of size `n` that ends at `i`, it adds `n` alternating subarrays:
```
[1, 0, 1, 0, 1]
   [0, 1, 0, 1]
      [1, 0, 1]
	     [0, 1]
	        [1]
```
For `i + 1`, we extend our sequence, and add its size to the result.

Each time we find a repeated value, we have to start a new sequence (with size `1`).

**C++**
```cpp
long long countAlternatingSubarrays(vector<int>& nums) {
    long long res = 1, size = 1;
    for (int i = 1; i < nums.size(); ++i) {
        size = nums[i - 1] == nums[i] ? 1 : size + 1;
        res += size;
    }
    return res;
}
```