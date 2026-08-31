# ✅ Set | Easy and Clean Code (C++ / Java / C#) Beats 100% ✅✅✅

**Author:** Sayan98
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6123202/](https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6123202/)

---

# Intuition
Check whether the smallest element in the array is already smaller than k and how many distinct elements are in the array to make the necessary adjustments.
 
# Approach
- First convert the input array into a sorted set of distinct elements using a Set. This automatically removes duplicates and arranges the elements in increasing order.
- Find the Smallest Element: The smallest element in the sorted set is at the beginning (or first position). If this smallest element is already smaller than k, it is impossible to achieve the desired condition, and should return -1 immediately.
- Check the Conditions:
    - If the smallest element is greater than or equal to k, then we proceed.
    - If the smallest element equals k, the result should be size of the set - 1, as we don't need to make any changes for the smallest element, but we still count the number of distinct elements.
- If the smallest element is greater than k, we return the total number of distinct elements in the set, as the whole array can already be adjusted to meet the condition.

# Complexity
- Time complexity: **O(Nlogn)**
- Space complexity: **O(n)**

```java []
class Solution {
    public int minOperations(int[] nums, int k) {

        Set<Integer> set = new TreeSet<>();
        for (int num : nums) set.add(num);

        int min = set.iterator().next();
        if (min < k) return -1;
        return set.size() + (min == k ? -1 : 0);  
    }
}
```
```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        unordered_set<int> set;
        int m = 101;

        for (int i = 0; i < nums.size(); i++) {
            m = min(m, nums[i]);
            set.insert(nums[i]);
        }
        
        if(m < k) return -1;
        return set.size() + (m == k ? -1 : 0);
    }
};
```
```C# []
public class Solution {
    public int MinOperations(int[] nums, int k) {
        var set = new SortedSet<int>(nums);
        var min = set.First();
        if(min < k) return -1;
        return set.Count + (min == k ? -1 : 0);
    }
}
```

