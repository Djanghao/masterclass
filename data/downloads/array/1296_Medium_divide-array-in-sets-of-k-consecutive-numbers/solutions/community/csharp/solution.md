# ✅Hash Map || Simple Solution || Easy Explanation || Beginner Friendly🔥🔥🔥

**Author:** Sayan98
**Votes:** 3
**Link:** [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/5270397/](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/5270397/)

---

# Intuition
The intuition here is to use a sorted data structure to maintain the frequency of each number, ensuring that we can always start forming groups with the smallest available number. By forming groups starting from the smallest number and ensuring each group contains consecutive numbers, we can verify if the array can be divided as required.

# Approach
- Check if the length of the array is divisible by k. If not, it's impossible to divide the array into groups of size k, so return false.
- Use a **Map** to store the frequency of each number in sorted order. This allows efficient access and updating of the count of each number.
- Iterate through the TreeMap:
    - Always start forming a group from the smallest available number.
    - For each group, ensure that all consecutive numbers are present and update their counts.
    - If a number's count drops to zero, remove it from the **map**.
    - If any number needed to complete a group is missing, return **false**.
- If all numbers are successfully grouped, return **true**.

# Complexity
- Time complexity: **O(n log n)**


- Space complexity: **O(n)**


```Java []
class Solution {
    public boolean isPossibleDivide(int[] nums, int k) {
        if (nums.length % k != 0) return false;
        TreeMap<Integer, Integer> map = new TreeMap<>();
        for (int num : nums)
            map.put(num, map.getOrDefault(num, 0) + 1);

        while (!map.isEmpty()) {
            int key = map.firstKey();
            for (int i = key; i < key + k; i++) {
                if (!map.containsKey(i)) return false;
                int value = map.get(i);
                if (value == 1)  map.remove(i);
                else map.put(i, value - 1);
            }
        }
        return true;
    }
}
```
```C++ []
class Solution {
public:
    bool isPossibleDivide(vector<int>& nums, int k) {
        // Check if the total number of elements is divisible by k
        if (nums.size() % k != 0) return false;
        // Create a Map to store the frequency of each number in sorted order
        std::map<int, int> map;
        for (const auto& num : nums)
            map[num]++;
        
        // Iterate through the map to form consecutive groups of size k
        while (!map.empty()) {
            int firstKey = map.begin()->first;
            // Try to form a group starting from the smallest number
            for (int i = firstKey; i < firstKey + k; ++i) {
                if (map.find(i) == map.end()) return false;
                map[i]--;
                if (map[i] == 0) map.erase(i);
            }
        }
        return true;
    }
};
```
```C# []
public class Solution {
    public bool IsPossibleDivide(int[] nums, int k) {
        if(nums.Length % k != 0) return false;
        var map = new SortedDictionary<int, int>();
        foreach (var num in nums)
            if(!map.TryAdd(num, 1)) map[num]++;

        while (map.Count > 0) {
            var key = map.First().Key;
            if (map[key] == 0) continue;
            for (var i = key; i < key + k; i++) {
                if (!map.TryGetValue(i, out var value)) return false;
                map[i] = --value;
                if (value == 0) map.Remove(i);
            }
        }
        return true;
    }
}
```
![image.png](./images/0.png)
