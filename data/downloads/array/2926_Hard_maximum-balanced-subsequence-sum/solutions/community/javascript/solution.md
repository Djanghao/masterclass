# ✅☑[C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4251813/](https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4251813/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. The function `maxBalancedSubsequenceSum` calculates the maximum balanced subsequence sum of a given vector `nums`.
1. It uses a map `mp` to store intermediate results, where the key represents the difference between an element and its index, and the value represents the maximum sum up to that element.
1. The code iterates through the elements of `nums`, updating the map for each element based on dynamic programming.
1. The map is used to efficiently find the maximum sum that can be achieved for each element.
1. The final result is the maximum value in the map, ignoring the entry with key `inf` (representing negative infinity).


# Complexity
- *Time complexity:*
   $$O(nlogn)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []

class Solution {
public:
    long long maxBalancedSubsequenceSum(vector<int>& nums) {
        int n = nums.size();
        map<long long, long long> mp;  // Create a map to store (key, value) pairs. Key represents the difference between an element and its index, value represents the maximum sum up to that element.

        int inf = -2e9;  // A constant value used to represent negative infinity.
        mp[inf] = -2e9;  // Initialize the map with an entry for negative infinity.

        for (int i = 0; i < n; i++) {
            // Find the element in the map with a key less than nums[i] - i.
            auto it = mp.upper_bound(nums[i] - i);
            it--;  // Decrement the iterator to get the closest key.

            long long newVal = std::max(nums[i] * 1ll, nums[i] + (*it).second);  // Calculate the new maximum value for the current element.

            vector<long long> erase;  // Create a vector to store keys to be removed from the map.

            // Iterate through the map to find elements with values less than or equal to the new value.
            for (it = mp.lower_bound(nums[i] - i); it != mp.end(); it++) {
                if ((*it).second <= newVal) {
                    erase.push_back(it->first);
                } else {
                    break;
                }
            }

            // Remove keys that are no longer needed.
            for (auto ele : erase) {
                mp.erase(ele);
            }

            // If the map doesn't contain the key nums[i] - i, add it with the new value.
            if (mp.find(nums[i] - i) == mp.end()) {
                mp[nums[i] - i] = newVal;
            }
        }

        long long ans = -1e9;  // Initialize the answer with a large negative value.

        // Iterate through the map to find the maximum value.
        for (auto &[key, value] : mp) {
            if (key != inf) {  // Ignore the entry with the key inf (negative infinity).
                ans = std::max(ans, value);
            }
        }

        return ans;  // Return the maximum balanced subsequence sum.
    }
};


````
```C []

#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Define the map as a linked list (key-value pair)
typedef struct Map {
    long long key;
    long long value;
    struct Map* next;
} Map;

// Function to insert a key-value pair into the map
Map* insert(Map* map, long long key, long long value) {
    Map* newPair = (Map*)malloc(sizeof(Map));
    newPair->key = key;
    newPair->value = value;
    newPair->next = map;
    return newPair;
}

// Function to search for a key in the map and return the corresponding value
long long search(Map* map, long long key) {
    while (map != NULL) {
        if (map->key == key) {
            return map->value;
        }
        map = map->next;
    }
    return LLONG_MIN;  // Return negative infinity
}

// Function to remove keys that are no longer needed
Map* removeKeys(Map* map, long long maxVal) {
    Map* current = map;
    Map* prev = NULL;
    while (current != NULL) {
        if (current->value <= maxVal) {
            if (prev == NULL) {
                map = current->next;
            } else {
                prev->next = current->next;
            }
            free(current);
            current = prev == NULL ? map : prev->next;
        } else {
            prev = current;
            current = current->next;
        }
    }
    return map;
}

long long maxBalancedSubsequenceSum(int* nums, int n) {
    Map* map = NULL;  // Initialize the map
    long long inf = -2e9;  // A constant value representing negative infinity

    map = insert(map, inf, -2e9);  // Initialize the map with an entry for negative infinity

    long long ans = -1e9;  // Initialize the answer with a large negative value

    for (int i = 0; i < n; i++) {
        // Find the element in the map with a key less than nums[i] - i
        Map* current = map;
        Map* prev = NULL;
        while (current != NULL && current->key <= nums[i] - i) {
            prev = current;
            current = current->next;
        }

        long long newVal = nums[i] > nums[i] + search(map, nums[i] - i) ? nums[i] : nums[i] + search(map, nums[i] - i);

        map = removeKeys(map, newVal);

        // If the map doesn't contain the key nums[i] - i, add it with the new value
        if (search(map, nums[i] - i) == LLONG_MIN) {
            map = insert(map, nums[i] - i, newVal);
        }

        // Update the answer if the new value is greater
        if (newVal > ans) {
            ans = newVal;
        }
    }

    // Iterate through the map to find the maximum value
    Map* current = map;
    while (current != NULL) {
        if (current->key != inf) {  // Ignore the entry with key inf (negative infinity)
            if (current->value > ans) {
                ans = current->value;
            }
        }
        current = current->next;
    }

    return ans;  // Return the maximum balanced subsequence sum
}




```
```Java []
import java.util.TreeMap;
import java.util.Map.Entry;

class Solution {
    public long maxBalancedSubsequenceSum(int[] nums) {
        int n = nums.length;
        TreeMap<Long, Long> mp = new TreeMap<>();
        long inf = -2e9;
        mp.put(inf, -2e9L);

        for (int i = 0; i < n; i++) {
            Entry<Long, Long> entry = mp.lowerEntry((long) nums[i] - i);
            long newVal = Math.max(nums[i], nums[i] + entry.getValue());
            long[] erase = new long[mp.size()];

            int j = 0;
            for (Entry<Long, Long> it : mp.tailMap(nums[i] - i).entrySet()) {
                if (it.getValue() <= newVal) {
                    erase[j] = it.getKey();
                    j++;
                } else {
                    break;
                }
            }

            for (int k = 0; k < j; k++) {
                mp.remove(erase[k]);
            }

            if (!mp.containsKey((long) nums[i] - i)) {
                mp.put((long) nums[i] - i, newVal);
            }
        }

        long ans = -1e9L;
        for (Entry<Long, Long> entry : mp.entrySet()) {
            if (!entry.getKey().equals(inf)) {
                ans = Math.max(ans, entry.getValue());
            }
        }

        return ans;
    }
}


```

```python3 []
class Solution:
    def maxBalancedSubsequenceSum(self, nums: List[int]) -> int:
        n = len(nums)
        mp = { -2e9: -2e9 }
        inf = -2e9

        for i in range(n):
            it = mp.upper_bound(nums[i] - i)
            it -= 1

            newVal = max(nums[i], nums[i] + mp[it])
            erase = []

            for key, value in mp.items():
                if value <= newVal:
                    erase.append(key)
                else:
                    break

            for key in erase:
                mp.pop(key)

            if (nums[i] - i) not in mp:
                mp[nums[i] - i] = newVal

        ans = -1e9
        for key, value in mp.items():
            if key != inf:
                ans = max(ans, value)

        return ans



```

```javascript []

var Solution = function(nums) {
    this.maxBalancedSubsequenceSum = function(nums) {
        let n = nums.length;
        let mp = new Map();
        let inf = -2e9;
        mp.set(inf, -2e9);

        for (let i = 0; i < n; i++) {
            let it = mp.upper_bound(nums[i] - i);
            it--;
            let newVal = Math.max(nums[i], nums[i] + it[1]);
            let erase = [];

            for (let entry of mp.entries()) {
                if (entry[1] <= newVal) {
                    erase.push(entry[0]);
                } else {
                    break;
                }
            }

            for (let key of erase) {
                mp.delete(key);
            }

            if (!mp.has(nums[i] - i)) {
                mp.set(nums[i] - i, newVal);
            }
        }

        let ans = -1e9;
        for (let entry of mp.entries()) {
            if (entry[0] !== inf) {
                ans = Math.max(ans, entry[1]);
            }
        }

        return ans;
    }
}

// Example usage:
// var solution = new Solution();
// console.log(solution.maxBalancedSubsequenceSum([1, 2, 3, 4, 5]));


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---