# Double-XOR

**Author:** votrubac
**Votes:** 20
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5207565/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5207565/)

---

Since a number can appear no more than 2 times, we can XOR all elements in `nums` with all unique elements. 

**Python**
```python
class Solution:
    def duplicateNumbersXOR(self, nums: List[int]) -> int:
        return reduce(xor, chain(nums, set(nums)))
```

**Kotlin**
```kotlin
fun duplicateNumbersXOR(nums: IntArray): Int {
    return nums.fold(nums.toSet().reduce { acc, num -> acc xor num }) { acc, num -> acc xor num }
} 
```

**C++**
```cpp
int duplicateNumbersXOR(vector<int>& nums) {
    unordered_set<int> s(begin(nums), end(nums));
    return accumulate(begin(nums), end(nums), accumulate(begin(s), end(s), 0, bit_xor{}), bit_xor{});
}
```