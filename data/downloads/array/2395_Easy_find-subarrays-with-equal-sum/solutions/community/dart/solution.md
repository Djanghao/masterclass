# Dart solution using Hash Set

**Author:** tinhhuynh
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/4676271/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/4676271/)

---

# Intuition
Initially, my thought process was driven by the need to identify any repeating sum of two consecutive elements within the array. It became clear that tracking these sums efficiently would be key to solving the problem. The use of a set to record each sum only once seemed like the most straightforward approach, as it naturally handles duplicates, which are the focus of this problem.

# Approach
To tackle this challenge, I decided on the following strategy:
1. **Initialize an empty set (`set`) to store the sums of consecutive elements.** Sets are ideal for this task because they automatically handle duplicate values, making it easy to check for repeats without additional logic.
2. **Iterate through the array (`nums`), considering each pair of consecutive elements.** For each pair, calculate their sum.
3. **Add each sum to the set.** The `add` method of a set returns `false` if the item already exists in the set, which indicates a duplicate sum has been found. If this happens, the function immediately returns `true`.
4. **If the iteration completes without finding any duplicate sums, return `false`.** This indicates that no two consecutive elements have the same sum.

This approach ensures that we efficiently identify any case where two consecutive numbers in the array sum to the same value as another pair.

# Complexity
- **Time complexity:** $$O(n)$$, where $$n$$ is the length of the input array `nums`. The algorithm iterates through the array once, performing a constant-time operation for each element.
- **Space complexity:** $$O(n)$$ in the worst case, which occurs when all sums of consecutive elements are unique. In this scenario, the set will store up to $$n-1$$ sums (where $$n$$ is the number of elements in `nums`).

```dart
class Solution {
  bool findSubarrays(List<int> nums) {
    final set = <int>{};
    for(int i = 0; i < nums.length - 1; i++){
        final sum = nums[i] + nums[i + 1];
        if(!set.add(sum)) return true;
    }
    return false;
  }
}
