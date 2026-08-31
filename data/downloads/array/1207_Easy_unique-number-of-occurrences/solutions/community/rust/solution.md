# ✅Beats 99% || Brute➡️Optimal Both full explained 🚀 || [Java/C++/JavaScript/Python/Rust]

**Author:** Shivansu_7
**Votes:** 10
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/4578565/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/4578565/)

---

# Approach Brute Force
1. **Sort the Array:**
    - The input array arr is sorted in ascending order. Sorting the array is the first step to identify and group identical values.
2. **Iterate Through the Sorted Array:**
    - Iterate through the sorted array. For each element, check if it is equal to the previous element. If yes, increment the count. If not, process the count.
3. **Check Unique Occurrences and Update Set:**
    - If the set of unique occurrences (set) already contains the current count, return false because the occurrences are not unique. Otherwise, add the count to the set and reset the count to 1.
4. **Final Check and Return:**
    - After the loop, perform a final check for the last count. If the set contains this last count, return false. Otherwise, return true, indicating that all occurrences are unique.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n*logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# 
```Java []
class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        
        Arrays.sort(arr);
        HashSet<Integer> set = new HashSet<>();

        int count = 1;
        for(int i = 1; i < arr.length; i++){
            if(arr[i] == arr[i-1]) c++;
            else{
                if(set.contains(c)) return false;

                set.add(c);
                c = 1;
            }
        }

        if(set.contains(c)) return false;

        return true;

    }
}
```
```C++ []
class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        sort(arr.begin(), arr.end());
        unordered_set<int> set;

        int count = 1;
        for (int i = 1; i < arr.size(); i++) {
            if (arr[i] == arr[i - 1])
                count++;
            else {
                if (set.count(count))
                    return false;

                set.insert(count);
                count = 1;
            }
        }

        if (set.count(count))
            return false;

        return true;
    }
};
```
```Python []
class Solution:
    def uniqueOccurrences(self, arr):
        arr.sort()
        unique_set = set()

        count = 1
        for i in range(1, len(arr)):
            if arr[i] == arr[i - 1]:
                count += 1
            else:
                if count in unique_set:
                    return False

                unique_set.add(count)
                count = 1

        if count in unique_set:
            return False

        return True
```
```JavaScript []
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    arr.sort((a, b) => a - b);
    const uniqueSet = new Set();

    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        } else {
            if (uniqueSet.has(count)) {
                return false;
            }

            uniqueSet.add(count);
            count = 1;
        }
    }

    return !uniqueSet.has(count);
};
```
```Rust []
use std::collections::HashSet;

impl Solution {
    pub fn unique_occurrences(arr: Vec<i32>) -> bool {
        let mut arr = arr;
        arr.sort();

        let mut unique_set = HashSet::new();

        let mut count = 1;
        for i in 1..arr.len() {
            if arr[i] == arr[i - 1] {
                count += 1;
            } else {
                if unique_set.contains(&count) {
                    return false;
                }

                unique_set.insert(count);
                count = 1;
            }
        }

        !unique_set.contains(&count)
    }
}
```

# Intuition for Optimal soultion
1. We have to find frequency of each element, for that HashMap is best data Structure.
2. Now we have to check if duplicate frequency is present or not, for that Set is the best data structure.

# Approach Optimal
1. **HashMap for Counting Occurrences:**
    - A HashMap named map is created to store the count of occurrences for each unique value in the input array.
2. **Count Occurrences:**
    - The code iterates through each element (val) in the input array arr. For each element, it updates the count in the map using put, and getOrDefault is used to handle the case where the value is not already present in the map.
3. **HashSet for Checking Uniqueness:**
    - A HashSet named set is created using the values from the map. This is done to check for uniqueness, as a HashSet only allows unique values.
4. **Check if Occurrences are Unique:**
    - The method returns true if the size of the map (number of unique values in the array) is equal to the size of the set (number of unique counts of occurrences). This indicates that each unique value in the array has a unique count of occurrences.


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```Java []
class Solution {
    public boolean uniqueOccurrences(int[] arr) {

        HashMap<Integer, Integer> map = new HashMap<>();
        for(int val : arr) {
            map.put(val, map.getOrDefault(val, 0) + 1);
        }

        HashSet<Integer> set = new HashSet<>(map.values());
        return map.size() == set.size();
    }
}
```
```C++ []
class Solution {
public:
    bool uniqueOccurrences(std::vector<int>& arr) {
        std::unordered_map<int, int> map;
        for (int val : arr) {
            map[val] = map[val] + 1;
        }

        std::unordered_set<int> set;
        for (const auto& entry : map) {
            set.insert(entry.second);
        }

        return map.size() == set.size();
    }
};
```
```Python []
class Solution:
    def uniqueOccurrences(self, arr):
        counter = Counter(arr)
        occurrences_set = set(counter.values())
        return len(counter) == len(occurrences_set)
```
```JavaScript []
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();

    for (const val of arr) {
        map.set(val, (map.get(val) || 0) + 1);
    }

    const set = new Set(map.values());

    return map.size === set.size;
};
```
```Rust []
use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn unique_occurrences(arr: Vec<i32>) -> bool {
        let mut map = HashMap::new();

        for val in arr {
            *map.entry(val).or_insert(0) += 1;
        }

        let set: HashSet<_> = map.values().cloned().collect();

        map.len() == set.len()
    }
}
```

---


---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)

