# ✅☑[C++/C/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4170607/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4170607/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. The function `findIndices` takes three parameters: `nums` (a vector of integers), `indexDifference` (an integer), and `valueDifference` (an integer). It aims to find a pair of indices in the vector nums such that the absolute difference between the values at these indices is less than or equal to `valueDifference`, and the indices themselves have a difference of at least `indexDifference`.

1. We initialize a set `S` to store pairs of (value, index). This set will help us efficiently search for valid pairs.

1. We iterate through the elements in the `nums` vector with a loop. For each element at index `i`, we check if we have a sufficient number of previous elements (at least `indexDifference`) to form a valid pair.

1. If we have enough previous elements, we calculate `x`, the index of the element to potentially remove from the set, and `y`, the value at index `x`. We insert the pair (y, x) into the set `S`.

1. Next, we search for two types of pairs:

    - Pairs where the absolute difference between `nums[i]` and the value in the set is less than or equal to `valueDifference`. We use `lower_bound` to find such pairs.
    - Pairs where the absolute difference between `nums[i]` and the value in the set is less than `valueDifference`. We adjust the lower bound to find these pairs.
1. If we find a valid pair in either of these searches, we return the indices of the pair.

1. If no valid pair is found throughout the loop, we return {-1, -1} to indicate that there's no such pair.



# Complexity
- *Time complexity:*
   $$O(n*logn)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    vector<int> findIndices(vector<int>& nums, int indexDifference, int valueDifference) {
        int n = nums.size();
        set<pair<int, int>> S; // Create a set to store pairs of (value, index).

        for (int i = 0; i < n; i++) {
            if (i >= indexDifference) {
                int x = i - indexDifference; // Calculate the index 'x' to check for removal.
                int y = nums[x]; // Get the value at index 'x'.
                S.insert({y, x}); // Insert the pair (value, index) into the set.
            }

            // Find the lower bound for the pair (nums[i] + valueDifference, 0).
            auto it = S.lower_bound({nums[i] + valueDifference, 0});

            if (it != S.end()) {
                // If a pair is found in the set, return its indices.
                return {it->second, i};
            }

            // Find the lower bound for the pair (nums[i] - valueDifference + 1, 0).
            it = S.lower_bound({nums[i] - valueDifference + 1, 0});

            if (it != S.begin()) {
                --it; // Move the iterator to the previous element.
                // Return the indices of the found pair.
                return {it->second, i};
            }
        }

        return {-1, -1}; // If no valid pair is found, return {-1, -1}.
    }
};


```

```C []
#include <stdio.h>
#include <stdlib.h>

struct Pair {
    int value;
    int index;
};

int* findIndices(int* nums, int numsSize, int indexDifference, int valueDifference, int* returnSize) {
    struct Pair* S = (struct Pair*)malloc(numsSize * sizeof(struct Pair));

    int* result = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;

    for (int i = 0; i < numsSize; i++) {
        if (i >= indexDifference) {
            int x = i - indexDifference;
            int y = nums[x];
            S[x].value = y;
            S[x].index = x;
        }

        int left = i - 1;
        int right = i;

        while (left >= 0 && S[left].value > nums[i] - valueDifference) {
            if (S[left].index >= i - indexDifference) {
                result[0] = S[left].index;
                result[1] = i;
                return result;
            }
            left--;
        }

        while (right >= 0 && S[right].value <= nums[i] + valueDifference) {
            if (S[right].index >= i - indexDifference) {
                result[0] = S[right].index;
                result[1] = i;
                return result;
            }
            right--;
        }
    }

    result[0] = -1;
    result[1] = -1;
    return result;
}


```


```Java []
import java.util.TreeSet;
import java.util.Arrays;

public class Solution {
    public int[] findIndices(int[] nums, int indexDifference, int valueDifference) {
        int n = nums.length;
        TreeSet<Pair> S = new TreeSet<>();
        int[] result = new int[2];
        
        for (int i = 0; i < n; i++) {
            if (i >= indexDifference) {
                int x = i - indexDifference;
                int y = nums[x];
                S.add(new Pair(y, x));
            }
            
            Pair upperBound = S.ceiling(new Pair(nums[i] + valueDifference, 0));
            if (upperBound != null) {
                result[0] = upperBound.index;
                result[1] = i;
                return result;
            }
            
            Pair lowerBound = S.floor(new Pair(nums[i] - valueDifference + 1, 0));
            if (lowerBound != null) {
                result[0] = lowerBound.index;
                result[1] = i;
                return result;
            }
        }
        
        result[0] = -1;
        result[1] = -1;
        return result;
    }

    class Pair implements Comparable<Pair> {
        int value;
        int index;
        
        public Pair(int value, int index) {
            this.value = value;
            this.index = index;
        }
        
        @Override
        public int compareTo(Pair other) {
            return Integer.compare(this.value, other.value);
        }
    }
}


```

```python3 []
from sortedcontainers import SortedList

class Solution:
    def findIndices(self, nums: List[int], indexDifference: int, valueDifference: int) -> List[int]:
        n = len(nums)
        S = SortedList()

        for i in range(n):
            if i >= indexDifference:
                x = i - indexDifference
                y = nums[x]
                S.add((y, x))

            upper_bound = S.bisect_left((nums[i] + valueDifference, 0))
            if upper_bound != len(S):
                return [S[upper_bound][1], i]

            lower_bound = S.bisect_left((nums[i] - valueDifference + 1, 0))
            if lower_bound > 0:
                return [S[lower_bound - 1][1], i]

        return [-1, -1]


```

```javascript []

class Solution {
    findIndices(nums, indexDifference, valueDifference) {
        const n = nums.length;
        const S = new SortedSet();
        const result = new Array(2);

        for (let i = 0; i < n; i++) {
            if (i >= indexDifference) {
                const x = i - indexDifference;
                const y = nums[x];
                S.add([y, x]);
            }

            const upperBound = S.bisect([nums[i] + valueDifference, 0]);
            if (upperBound < S.size) {
                result[0] = S.get(upperBound)[1];
                result[1] = i;
                return result;
            }

            const lowerBound = S.bisect([nums[i] - valueDifference + 1, 0]) - 1;
            if (lowerBound >= 0) {
                result[0] = S.get(lowerBound)[1];
                result[1] = i;
                return result;
            }
        }

        result[0] = -1;
        result[1] = -1;
        return result;
    }
}

class SortedSet {
    constructor() {
        this.data = [];
    }

    get size() {
        return this.data.length;
    }

    add(item) {
        this.data.push(item);
        this.data.sort((a, b) => a[0] - b[0]);
    }

    get(index) {
        return this.data[index];
    }

    bisect(item) {
        let left = 0;
        let right = this.data.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.data[mid][0] >= item[0]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}


```


---



# PLEASE UPVOTE IF IT HELPED

---
---


---