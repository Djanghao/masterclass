# Beats 100%🚀➡️Full Explained💯➡️[Java/C++/JavaScript/Python/Rust/Go]

**Author:** Shivansu_7
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4840411/](https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4840411/)

---

# Intuition
1. Find frequencies of all elements of the array. For this operation best Data Structure is HashMap.
2. Find the elements that have the maximum frequencies and count their total occurrences.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **HashMap to store frequencies:** First, a HashMap<Integer, Integer> named map is initialized. This map is used to store the frequency of each element in the nums array. The keys are the elements of the array, and the values are their corresponding frequencies.
2. **Calculate frequencies:** Iterate through the nums array. For each element val in nums, update its frequency in the map. If the element is already present in the map, increment its frequency by 1. If not, set its frequency to 1.
3. **Find the maximum frequency:** Iterate through the values of the map to find the maximum frequency (max). This is done by comparing each frequency with the current maximum and updating max accordingly.
4. **Count elements with maximum frequency:** Iterate through the values of the map again. For each frequency, if it equals the maximum frequency (max), increment the count variable by that frequency.
5. **Return the count:** Finally, return the value of count, which represents the total count of elements with the maximum frequency in the nums array.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int maxFrequencyElements(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for(int val : nums) {
            map.put(val, map.getOrDefault(val, 0)+1);
        }

        int count = 0;
        int max = -1;
        for(int freq : map.values()) {
            max = Math.max(max, freq);
        }

        for(int freq : map.values()) {
            if(freq==max) {
                count += max;
            }
        }
        return count;
    }
}
```
```C++ []
class Solution {
public:
    int maxFrequencyElements(vector<int>& nums) {
        unordered_map<int, int> map;

        for(int val : nums) {
            map[val]++;
        }

        int count = 0;
        int max = -1;
        for(auto& pair : map) {
            max = max(max, pair.second);
        }

        for(auto& pair : map) {
            if(pair.second == max) {
                count += max;
            }
        }
        return count;
    }
};
```
```Python3 []
class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        counter = Counter(nums)
        max_freq = max(counter.values())
        return sum(freq for freq in counter.values() if freq == max_freq)
```
```C# []
public class Solution {
    public int MaxFrequencyElements(int[] nums) {
        Dictionary<int, int> map = new Dictionary<int, int>();

        foreach (int val in nums) {
            if (!map.ContainsKey(val))
                map[val] = 0;
            map[val]++;
        }

        int count = 0;
        int max = -1;
        foreach (var pair in map) {
            max = System.Math.Max(max, pair.Value);
        }

        foreach (var pair in map) {
            if (pair.Value == max) {
                count += max;
            }
        }
        return count;
    }
}
```
```Rust []
impl Solution {
    pub fn max_frequency_elements(nums: Vec<i32>) -> i32 {
        let mut map = HashMap::new();

        for val in nums {
            let count = map.entry(val).or_insert(0);
            *count += 1;
        }

        let mut count = 0;
        let mut max = -1;
        for &freq in map.values() {
            max = max.max(freq);
        }

        for &freq in map.values() {
            if freq == max {
                count += max;
            }
        }
        count
    }
}
```
```Go []
func maxFrequencyElements(nums []int) int {
    mapCount := make(map[int]int)

    for _, val := range nums {
        mapCount[val]++
    }

    count := 0
    max := -1
    for _, freq := range mapCount {
        if freq > max {
            max = freq
        }
    }

    for _, freq := range mapCount {
        if freq == max {
            count += max
        }
    }
    return count
}
```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map = new Map();

    for (let val of nums) {
        map.set(val, (map.get(val) || 0) + 1);
    }

    let count = 0;
    let max = -1;
    for (let freq of map.values()) {
        max = Math.max(max, freq);
    }

    for (let freq of map.values()) {
        if (freq === max) {
            count += max;
        }
    }
    return count;
};
```

---


---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)

