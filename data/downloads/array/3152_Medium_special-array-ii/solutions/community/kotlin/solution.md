# Prefix Sum

**Author:** votrubac
**Votes:** 44
**Link:** [https://leetcode.com/problems/special-array-ii/solutions/5177194/](https://leetcode.com/problems/special-array-ii/solutions/5177194/)

---

We generate the prefix sum array `ps`, where the sum increments when the special array breaks.

Then, for each query, the subarray `[from, to]` is special if there are no breaks in between (`ps[from] == ps[to]`).

**Python**
```python
class Solution:
    def isArraySpecial(self, nums: List[int], queries: List[List[int]]) -> List[bool]:
        ps = list(accumulate([(a ^ b) & 1 == 0 for a, b in zip(nums, nums[1:])], initial=0))
        return [ps[f] == ps[t] for f, t in queries]
```

**Kotlin**
```kotlin
class Solution {
    fun isArraySpecial(nums: IntArray, queries: Array<IntArray>): BooleanArray {
	    val ps = nums.toList().zipWithNext { a, b -> (a xor b) and 1 == 0 }.scan(0) { acc, x -> acc + if (x) 1 else 0 }
		"""
		// or
		val ps = nums.drop(1).toList().scanIndexed(0) { i, acc, x -> acc + if (x % 2 == nums[i] % 2) 1 else 0 }
		"""
        return queries.map { (f, t) -> ps[f] == ps[t] }.toBooleanArray()
    }
}
```

**C++**
```cpp
vector<bool> isArraySpecial(vector<int>& nums, vector<vector<int>>& queries) {
    vector<int> ps{0};
    for (int i = 1; i < nums.size(); ++i)
        ps.push_back(ps.back() + (nums[i - 1] % 2 == nums[i] % 2));
    vector<bool> res;
    for (const auto &q : queries)
        res.push_back(ps[q[0]] == ps[q[1]]);
    return res;
}
``