# ✅Beats 100.00% 🔥|| C++ || Java || C# || O(n) || O(1) || Easy Explanation || Beginner Friendly🔥🔥🔥

**Author:** Sayan98
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/4977934/](https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/4977934/)

---

![image.png](./images/0.png)
# Intuition
This code aims to find the minimum distance between a specific target value (target) and its first occurrence in a given array (nums) starting from a particular index (start). The idea is to iterate through the array and update a minimum distance variable if the target value is found.

# Approach
The solution iterates through the array and checks each element. Whenever it finds an element that matches the target value, it calculates the absolute difference between its index and the given start index. It keeps track of the minimum of these differences encountered so far.

# Complexity
- Time complexity: **O(n)**
The loop iterates through each element of the array once

- Space complexity: **O(1)**
Solution only uses a constant amount of extra space, regardless of the size of the input array.

```C++ []
class Solution {
public:
    int getMinDistance(vector<int>& nums, int target, int start) {
        auto m = INT_MAX;
        for (auto i = 0; i < nums.size(); i++)
            if (nums[i] == target)
                m = min(abs(i - start), m);
        return m;
    }
};
```
```Java []
class Solution {
    public int getMinDistance(int[] nums, int target, int start) {
        var min = Integer.MAX_VALUE;
        for (var i = 0; i < nums.length; i++)
            if (nums[i] == target)
                min = Math.min(Math.abs(i - start), min);
        return min;
    }
}
```
```C# []
public class Solution {
    public int GetMinDistance(int[] nums, int target, int start) {
        var min = int.MaxValue;
        for (var i = 0; i < nums.Length; i++)
            if (nums[i] == target)
                min = Math.Min(Math.Abs(i - start), min);
        return min;
    }
}
```

