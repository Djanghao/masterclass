# ✅☑[C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4195251/](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4195251/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. The function `minGroupsForValidAssignment` takes a vector of integers as input and calculates the minimum number of groups needed for a valid assignment of values.

1. It uses a map `m` to count the frequency of each element in the input vector `nums`.

1. It then extracts the frequencies of all unique elements and stores them in the vector `all`. These frequencies are sorted in ascending order.

1. The algorithm iterates through possible group sizes, starting from 1 up to the frequency of the element with the maximum frequency (`all[0]`).

1. For each group size, it calculates the minimum number of groups needed for each unique element in the input.

1. The algorithm keeps track of the minimum number of groups needed to assign values for all elements while iterating.

1. If it encounters a case where a valid assignment is not possible, it sets a flag `bad` to `true`, indicating an invalid configuration.

1. The answer is updated with the minimum number of groups if a valid configuration is found.

1. Finally, the function returns the minimum number of groups for a valid assignment.


# Complexity
- *Time complexity:*
   $$O(nlogn)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
#define f first
#define s second

class Solution 
{
public:
    map<int, int> m;  // A map to store the frequency of each element in the input vector.
    vector<int> all;  // A vector to store the frequencies of all unique elements.

    int minGroupsForValidAssignment(vector<int>& nums) 
    {
        for(auto it : nums)
            m[it] ++;  // Count the frequency of each element in the input vector.

        for(auto it : m)
        {
            all.push_back(it.s);  // Store the frequencies of all unique elements.
        }

        sort(all.begin(), all.end());  // Sort the frequencies in ascending order.

        int ans = 2e9;  // Initialize the answer with a large value.

        // First element is the maximum it can be.
        for(int gr = 1; gr <= all[0]; gr++)
        {
            int a = gr, b = gr + 1;
            int num = 0;
            bool bad = false;

            for(int i = 0; i < all.size(); i ++)
            {
                int cur = all[i];
                int mn = 2e9, cnt = 0;

                // Calculate the minimum number of groups needed for the current element.
                while(cur >= 0)
                {
                    if(cur % a == 0) mn = cnt + cur / a;
                    cur -= b;
                    cnt ++;
                }

                if(mn == 2e9)
                {
                    bad = true;
                    break;
                }

                num += mn;  // Update the total number of groups.

            }

            if(!bad)
                ans = min(ans, num);  // Update the answer with the minimum number of groups.

        }

        return ans;  // Return the minimum number of groups for a valid assignment.
    }
};


```

```C []

#include <stdio.h>
#include <stdlib.h>

// Structure to store the frequency of elements.
struct ElementFrequency {
    int element;
    int frequency;
};

// Function to compare two frequencies for sorting.
int compareFrequencies(const void *a, const void *b) {
    return ((struct ElementFrequency*)a)->frequency - ((struct ElementFrequency*)b)->frequency;
}

int minGroupsForValidAssignment(int* nums, int numsSize) {
    // Initialize an array to store the frequency of each element.
    struct ElementFrequency frequencyArray[numsSize];
    int frequencyMap[100001] = {0}; // Assuming the elements are in the range [0, 100000].

    // Count the frequency of each element.
    for (int i = 0; i < numsSize; i++) {
        int element = nums[i];
        frequencyMap[element]++;
    }

    // Initialize a counter for unique elements.
    int uniqueCount = 0;

    // Store unique elements and their frequencies in a structure array.
    for (int i = 0; i <= 100000; i++) {
        if (frequencyMap[i] > 0) {
            frequencyArray[uniqueCount].element = i;
            frequencyArray[uniqueCount].frequency = frequencyMap[i];
            uniqueCount++;
        }
    }

    // Sort the structure array in ascending order of frequencies.
    qsort(frequencyArray, uniqueCount, sizeof(struct ElementFrequency), compareFrequencies);

    int ans = 2e9; // Initialize the answer with a large value.

    // Iterate through possible group sizes, starting from 1 up to the frequency of the element with the maximum frequency.
    for (int gr = 1; gr <= frequencyArray[uniqueCount - 1].frequency; gr++) {
        int a = gr, b = gr + 1;
        int num = 0;
        int bad = 0;

        for (int i = 0; i < uniqueCount; i++) {
            int cur = frequencyArray[i].frequency;
            int mn = 2e9;
            int cnt = 0;

            // Calculate the minimum number of groups needed for the current element.
            while (cur >= 0) {
                if (cur % a == 0) {
                    mn = cnt + cur / a;
                }
                cur -= b;
                cnt++;
            }

            if (mn == 2e9) {
                bad = 1;
                break;
            }

            num += mn; // Update the total number of groups.
        }

        if (!bad) {
            ans = ans < num ? ans : num; // Update the answer with the minimum number of groups.
        }
    }

    return ans; // Return the minimum number of groups for a valid assignment.
}


```

```Java []
import java.util.*;

class Solution {
    public int minGroupsForValidAssignment(int[] nums) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        List<Integer> frequencies = new ArrayList<>();

        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        for (int freq : frequencyMap.values()) {
            frequencies.add(freq);
        }

        Collections.sort(frequencies);

        int ans = Integer.MAX_VALUE;

        for (int gr = 1; gr <= frequencies.get(frequencies.size() - 1); gr++) {
            int a = gr, b = gr + 1;
            int num = 0;
            boolean bad = false;

            for (int i = 0; i < frequencies.size(); i++) {
                int cur = frequencies.get(i);
                int mn = Integer.MAX_VALUE;
                int cnt = 0;

                while (cur >= 0) {
                    if (cur % a == 0) {
                        mn = cnt + cur / a;
                    }
                    cur -= b;
                    cnt++;
                }

                if (mn == Integer.MAX_VALUE) {
                    bad = true;
                    break;
                }

                num += mn;
            }

            if (!bad) {
                ans = Math.min(ans, num);
            }
        }

        return ans;
    }
}

```


```python3 []
from collections import Counter

class Solution:
    def minGroupsForValidAssignment(self, nums: List[int]) -> int:
        frequency_map = Counter(nums)
        frequencies = list(frequency_map.values())
        frequencies.sort()

        ans = float('inf')

        for gr in range(1, frequencies[-1] + 1):
            a, b = gr, gr + 1
            num = 0
            bad = False

            for i in range(len(frequencies)):
                cur = frequencies[i]
                mn = float('inf')
                cnt = 0

                while cur >= 0:
                    if cur % a == 0:
                        mn = cnt + cur // a
                    cur -= b
                    cnt += 1

                if mn == float('inf'):
                    bad = True
                    break

                num += mn

            if not bad:
                ans = min(ans, num)

        return ans


```

```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minGroupsForValidAssignment = function(nums) {
    const frequencyMap = new Map();

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const frequencies = [...frequencyMap.values()].sort((a, b) => a - b);

    let ans = Infinity;

    for (let gr = 1; gr <= frequencies[frequencies.length - 1]; gr++) {
        let a = gr, b = gr + 1;
        let num = 0;
        let bad = false;

        for (let i = 0; i < frequencies.length; i++) {
            let cur = frequencies[i];
            let mn = Infinity;
            let cnt = 0;

            while (cur >= 0) {
                if (cur % a === 0) {
                    mn = cnt + cur / a;
                }
                cur -= b;
                cnt++;
            }

            if (mn === Infinity) {
                bad = true;
                break;
            }

            num += mn;
        }

        if (!bad) {
            ans = Math.min(ans, num);
        }
    }

    return ans;
};


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---