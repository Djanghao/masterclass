# [C++, Java, Python] Simple HashMap | Store Frequency | Time: O(n)

**Author:** shivamaggarwal513
**Votes:** 24
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3495054/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3495054/)

---

# Intuition
Since we want number of distinct elements in a window, we can use hash map to store the frequency of each number in current window.
For an index `i`,
- `prefix` maintains frequency table of `nums[0...i]`
- `suffix` maintains frequency table of `nums[i + 1...n - 1]`

# Approach
1. Initially, `prefix` is empty, and `suffix` contains frequency of complete array. 
2. Now, for each index `i`, remove `nums[i]` from `suffix` and add to `prefix`. Calculate `size(prefix) - size(suffix)`.
3. While removing an element from `suffix`, frequency might become 0. To make sure this `{key, value} = {x, 0}` pair is not counted, remove it from the hashmap.

# Code

```C++ []
class Solution {
public:
    vector<int> distinctDifferenceArray(vector<int>& nums) {
        unordered_map<int, int> prefix, suffix;
        vector<int> result;
        for (int& x: nums) {
            suffix[x]++;
        }
        for (int& x: nums) {
            prefix[x]++;
            if (--suffix[x] == 0) {
                suffix.erase(x);
            }
            result.push_back(prefix.size() - suffix.size());
        }
        return result;
    }
};
```
```Java []
class Solution {
    public int[] distinctDifferenceArray(int[] nums) {
        HashMap<Integer, Integer> prefix = new HashMap<>();
        HashMap<Integer, Integer> suffix = new HashMap<>();
        int[] result = new int[nums.length];
        for (int x: nums) {
            suffix.put(x, suffix.getOrDefault(x, 0) + 1);
        }
        for (int i = 0; i < nums.length; i++) {
            Integer x = nums[i];
            prefix.put(x, prefix.getOrDefault(x, 0) + 1);
            suffix.put(x, suffix.get(x) - 1);
            if (suffix.get(x) == 0) {
                suffix.remove(x);
            }
            result[i] = prefix.size() - suffix.size();
        }
        return result;
    }
}
```
```Python []
class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
        # One liner
        # return [len(Counter(nums[:i + 1])) - len(Counter(nums[i + 1:])) for i in range(len(nums))]
        prefix = defaultdict(int)
        suffix = Counter(nums)
        result = []
        for x in nums:
            prefix[x] += 1
            suffix[x] -= 1
            if suffix[x] == 0:
                del suffix[x]
            result.append(len(prefix) - len(suffix))
        return result
```

# Complexity
- Time complexity: $$\\Theta(n)$$
- Space complexity: $$\\Theta(n)$$