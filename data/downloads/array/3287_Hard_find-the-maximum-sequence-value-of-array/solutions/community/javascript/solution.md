# 🔥BEATS 💯 % 🎯 | SUPER EASY AND SIMPLE🔥|

**Author:** CodeWithSparsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5789303/](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5789303/)

---



### Intuition
To solve the problem of finding the maximum XOR of two disjoint subsets of size `k` from an integer array, we need to break down the problem into manageable steps. We can use dynamic programming to compute the possible OR values for subsets of size `k` up to a certain index and from a certain index to the end. The goal is to maximize the XOR between any two such subsets.

### Approach
1. **Initialization**: 
   - Create two lists, `leftMaxOrList` and `rightMaxOrList`, each of size `n`, where `n` is the length of the input array. These lists will store sets of possible OR values for subsets of size `k` up to and from each index, respectively.
   - Create `leftPossible` and `rightPossible` lists to keep track of possible OR values for subsets of size `0` to `k`.

2. **Populate Left Possible ORs**:
   - Iterate through the array from left to right.
   - For each element, update possible OR values for subsets of size `1` to `k` using previously computed values.
   - Store the possible OR values for subsets of size `k` up to the current index in `leftMaxOrList`.

3. **Populate Right Possible ORs**:
   - Iterate through the array from right to left.
   - For each element, update possible OR values for subsets of size `1` to `k` using previously computed values.
   - Store the possible OR values for subsets of size `k` from the current index to the end in `rightMaxOrList`.

4. **Compute Maximum XOR**:
   - Iterate through all possible split points.
   - For each split point, calculate the maximum XOR value between subsets from the left and right sides.
   - Use the smaller set to minimize the number of operations in calculating the XOR.

### Complexity
- **Time Complexity**: \\(O(n \\cdot k^2)\\)
  - Building the possible OR values lists takes \\(O(n \\cdot k^2)\\) time. Each element update involves iterating through the previous possible OR values, which can be up to \\(k\\).
  - Finding the maximum XOR involves iterating through subsets from the left and right side, which is efficient given the constraints.

- **Space Complexity**: \\(O(n \\cdot k)\\)
  - Space is required for storing possible OR values in `leftPossible`, `rightPossible`, `leftMaxOrList`, and `rightMaxOrList`, each of which can grow up to \\(O(n \\cdot k)\\) in size.

This approach efficiently manages the subsets and their OR values, making it feasible to compute the required maximum XOR value within acceptable time limits for typical problem constraints.
```dart []
import 'dart:collection';

class Solution {
  int maxValue(List<int> nums, int k) {
    int n = nums.length;
    if (2 * k > n) return 0;

    List<Set<int>> leftPossible = List.generate(k + 1, (_) => <int>{});
    leftPossible[0].add(0);
    List<Set<int>> leftMaxOrList = List.generate(n, (_) => <int>{});

    for (int i = 0; i < n; i++) {
      int num = nums[i];
      for (int j = k; j > 0; j--) {
        for (int orVal in leftPossible[j - 1]) {
          leftPossible[j].add(orVal | num);
        }
      }
      if (k <= i + 1) {
        leftMaxOrList[i] = Set.from(leftPossible[k]);
      }
    }

    List<Set<int>> rightPossible = List.generate(k + 1, (_) => <int>{});
    rightPossible[0].add(0);
    List<Set<int>> rightMaxOrList = List.generate(n, (_) => <int>{});

    for (int i = n - 1; i >= 0; i--) {
      int num = nums[i];
      for (int j = k; j > 0; j--) {
        for (int orVal in rightPossible[j - 1]) {
          rightPossible[j].add(orVal | num);
        }
      }
      if (k <= n - i) {
        rightMaxOrList[i] = Set.from(rightPossible[k]);
      }
    }

    int maxVal = 0;
    for (int i = 0; i < n - 1; i++) {
      if (i < k - 1 || (n - (i + 1)) < k) continue;
      Set<int> leftSet = leftMaxOrList[i];
      Set<int> rightSet = rightMaxOrList[i + 1];
      if (leftSet.isEmpty || rightSet.isEmpty) continue;

      if (leftSet.length < rightSet.length) {
        for (int or1 in leftSet) {
          for (int or2 in rightSet) {
            maxVal = max(maxVal, or1 ^ or2);
          }
        }
      } else {
        for (int or2 in rightSet) {
          for (int or1 in leftSet) {
            maxVal = max(maxVal, or1 ^ or2);
          }
        }
      }
    }

    return maxVal;
  }
}
```

```java []
import java.util.*;

public class Solution {
    public int maxValue(int[] nums, int k) {
        int n = nums.length;
        if (2 * k > n) return 0;

        Set<Integer>[] leftPossible = new HashSet[k + 1];
        for (int i = 0; i <= k; i++) leftPossible[i] = new HashSet<>();
        leftPossible[0].add(0);
        Set<Integer>[] leftMaxOrList = new HashSet[n];
        for (int i = 0; i < n; i++) leftMaxOrList[i] = new HashSet<>();

        for (int i = 0; i < n; i++) {
            int num = nums[i];
            for (int j = k; j > 0; j--) {
                for (int orVal : leftPossible[j - 1]) {
                    leftPossible[j].add(orVal | num);
                }
            }
            if (k <= i + 1) {
                leftMaxOrList[i] = new HashSet<>(leftPossible[k]);
            }
        }

        Set<Integer>[] rightPossible = new HashSet[k + 1];
        for (int i = 0; i <= k; i++) rightPossible[i] = new HashSet<>();
        rightPossible[0].add(0);
        Set<Integer>[] rightMaxOrList = new HashSet[n];
        for (int i = 0; i < n; i++) rightMaxOrList[i] = new HashSet<>();

        for (int i = n - 1; i >= 0; i--) {
            int num = nums[i];
            for (int j = k; j > 0; j--) {
                for (int orVal : rightPossible[j - 1]) {
                    rightPossible[j].add(orVal | num);
                }
            }
            if (k <= n - i) {
                rightMaxOrList[i] = new HashSet<>(rightPossible[k]);
            }
        }

        int maxVal = 0;
        for (int i = 0; i < n - 1; i++) {
            if (i < k - 1 || (n - (i + 1)) < k) continue;
            Set<Integer> leftSet = leftMaxOrList[i];
            Set<Integer> rightSet = rightMaxOrList[i + 1];
            if (leftSet.isEmpty() || rightSet.isEmpty()) continue;

            if (leftSet.size() < rightSet.size()) {
                for (int or1 : leftSet) {
                    for (int or2 : rightSet) {
                        maxVal = Math.max(maxVal, or1 ^ or2);
                    }
                }
            } else {
                for (int or2 : rightSet) {
                    for (int or1 : leftSet) {
                        maxVal = Math.max(maxVal, or1 ^ or2);
                    }
                }
            }
        }

        return maxVal;
    }
}
```

```javascript []
function maxValue(nums, k) {
    const n = nums.length;
    if (2 * k > n) return 0;

    const leftPossible = Array.from({ length: k + 1 }, () => new Set());
    leftPossible[0].add(0);
    const leftMaxOrList = Array.from({ length: n }, () => new Set());

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        for (let j = k; j > 0; j--) {
            for (const orVal of leftPossible[j - 1]) {
                leftPossible[j].add(orVal | num);
            }
        }
        if (k <= i + 1) {
            leftMaxOrList[i] = new Set(leftPossible[k]);
        }
    }

    const rightPossible = Array.from({ length: k + 1 }, () => new Set());
    rightPossible[0].add(0);
    const rightMaxOrList = Array.from({ length: n }, () => new Set());

    for (let i = n - 1; i >= 0; i--) {
        const num = nums[i];
        for (let j = k; j > 0; j--) {
            for (const orVal of rightPossible[j - 1]) {
                rightPossible[j].add(orVal | num);
            }
        }
        if (k <= n - i) {
            rightMaxOrList[i] = new Set(rightPossible[k]);
        }
    }

    let maxVal = 0;
    for (let i = 0; i < n - 1; i++) {
        if (i < k - 1 || (n - (i + 1)) < k) continue;
        const leftSet = leftMaxOrList[i];
        const rightSet = rightMaxOrList[i + 1];
        if (leftSet.size === 0 || rightSet.size === 0) continue;

        if (leftSet.size < rightSet.size) {
            for (const or1 of leftSet) {
                for (const or2 of rightSet) {
                    maxVal = Math.max(maxVal, or1 ^ or2);
                }
            }
        } else {
            for (const or2 of rightSet) {
                for (const or1 of leftSet) {
                    maxVal = Math.max(maxVal, or1 ^ or2);
                }
            }
        }
    }

    return maxVal;
}
```

```cpp []
#include <vector>
#include <unordered_set>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxValue(vector<int>& nums, int k) {
        int n = nums.size();
        if (2 * k > n) return 0;

        vector<unordered_set<int>> leftPossible(k + 1);
        leftPossible[0].insert(0);
        vector<unordered_set<int>> leftMaxOrList(n);

        for (int i = 0; i < n; i++) {
            int num = nums[i];
            for (int j = k; j > 0; j--) {
                for (int orVal : leftPossible[j - 1]) {
                    leftPossible[j].insert(orVal | num);
                }
            }
            if (k <= i + 1) {
                leftMaxOrList[i] = leftPossible[k];
            }
        }

        vector<unordered_set<int>> rightPossible(k + 1);
        rightPossible[0].insert(0);
        vector<unordered_set<int>> rightMaxOrList(n);

        for (int i = n - 1; i >= 0; i--) {
            int num = nums[i];
            for (int j = k; j > 0; j--) {
                for (int orVal : rightPossible[j - 1]) {
                    rightPossible[j].insert(orVal | num);
                }
            }
            if (

k <= n - i) {
                rightMaxOrList[i] = rightPossible[k];
            }
        }

        int maxVal = 0;
        for (int i = 0; i < n - 1; i++) {
            if (i < k - 1 || (n - (i + 1)) < k) continue;
            const unordered_set<int>& leftSet = leftMaxOrList[i];
            const unordered_set<int>& rightSet = rightMaxOrList[i + 1];
            if (leftSet.empty() || rightSet.empty()) continue;

            if (leftSet.size() < rightSet.size()) {
                for (int or1 : leftSet) {
                    for (int or2 : rightSet) {
                        maxVal = max(maxVal, or1 ^ or2);
                    }
                }
            } else {
                for (int or2 : rightSet) {
                    for (int or1 : leftSet) {
                        maxVal = max(maxVal, or1 ^ or2);
                    }
                }
            }
        }

        return maxVal;
    }
};
```

```c []
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 10000

typedef struct {
    int size;
    int data[MAX_SIZE];
} Set;

void initSet(Set *set) {
    set->size = 0;
}

int contains(Set *set, int value) {
    for (int i = 0; i < set->size; i++) {
        if (set->data[i] == value) return 1;
    }
    return 0;
}

void add(Set *set, int value) {
    if (!contains(set, value)) {
        set->data[set->size++] = value;
    }
}

int maxValue(int* nums, int numsSize, int k) {
    if (2 * k > numsSize) return 0;

    Set leftPossible[k + 1];
    for (int i = 0; i <= k; i++) initSet(&leftPossible[i]);
    add(&leftPossible[0], 0);

    Set leftMaxOrList[numsSize];
    for (int i = 0; i < numsSize; i++) initSet(&leftMaxOrList[i]);

    for (int i = 0; i < numsSize; i++) {
        int num = nums[i];
        for (int j = k; j > 0; j--) {
            for (int l = 0; l < leftPossible[j - 1].size; l++) {
                add(&leftPossible[j], leftPossible[j - 1].data[l] | num);
            }
        }
        if (k <= i + 1) {
            for (int l = 0; l < leftPossible[k].size; l++) {
                add(&leftMaxOrList[i], leftPossible[k].data[l]);
            }
        }
    }

    Set rightPossible[k + 1];
    for (int i = 0; i <= k; i++) initSet(&rightPossible[i]);
    add(&rightPossible[0], 0);

    Set rightMaxOrList[numsSize];
    for (int i = 0; i < numsSize; i++) initSet(&rightMaxOrList[i]);

    for (int i = numsSize - 1; i >= 0; i--) {
        int num = nums[i];
        for (int j = k; j > 0; j--) {
            for (int l = 0; l < rightPossible[j - 1].size; l++) {
                add(&rightPossible[j], rightPossible[j - 1].data[l] | num);
            }
        }
        if (k <= numsSize - i) {
            for (int l = 0; l < rightPossible[k].size; l++) {
                add(&rightMaxOrList[i], rightPossible[k].data[l]);
            }
        }
    }

    int maxVal = 0;
    for (int i = 0; i < numsSize - 1; i++) {
        if (i < k - 1 || (numsSize - (i + 1)) < k) continue;
        Set* leftSet = &leftMaxOrList[i];
        Set* rightSet = &rightMaxOrList[i + 1];
        if (leftSet->size == 0 || rightSet->size == 0) continue;

        if (leftSet->size < rightSet->size) {
            for (int l = 0; l < leftSet->size; l++) {
                for (int m = 0; m < rightSet->size; m++) {
                    int or1 = leftSet->data[l];
                    int or2 = rightSet->data[m];
                    maxVal = max(maxVal, or1 ^ or2);
                }
            }
        } else {
            for (int m = 0; m < rightSet->size; m++) {
                for (int l = 0; l < leftSet->size; l++) {
                    int or1 = leftSet->data[l];
                    int or2 = rightSet->data[m];
                    maxVal = max(maxVal, or1 ^ or2);
                }
            }
        }
    }

    return maxVal;
}
```

```python []
from typing import List

class Solution:
    def maxValue(self, nums: List[int], k: int) -> int:
        n = len(nums)
        if 2 * k > n:
            return 0

        left_possible = [set() for _ in range(k + 1)]
        left_possible[0].add(0)
        left_max_or_list = [set() for _ in range(n)]

        for i in range(n):
            num = nums[i]
            for j in range(k, 0, -1):
                for or_val in left_possible[j - 1]:
                    left_possible[j].add(or_val | num)
            if k <= i + 1:
                left_max_or_list[i] = set(left_possible[k])

        right_possible = [set() for _ in range(k + 1)]
        right_possible[0].add(0)
        right_max_or_list = [set() for _ in range(n)]

        for i in range(n - 1, -1, -1):
            num = nums[i]
            for j in range(k, 0, -1):
                for or_val in right_possible[j - 1]:
                    right_possible[j].add(or_val | num)
            if k <= n - i:
                right_max_or_list[i] = set(right_possible[k])

        max_val = 0
        for i in range(n - 1):
            if i < k - 1 or (n - (i + 1)) < k:
                continue
            left_set = left_max_or_list[i]
            right_set = right_max_or_list[i + 1]
            if not left_set or not right_set:
                continue

            if len(left_set) < len(right_set):
                for or1 in left_set:
                    for or2 in right_set:
                        max_val = max(max_val, or1 ^ or2)
            else:
                for or2 in right_set:
                    for or1 in left_set:
                        max_val = max(max_val, or1 ^ or2)

        return max_val
```

```go []
package main

import "math"

func maxValue(nums []int, k int) int {
    n := len(nums)
    if 2*k > n {
        return 0
    }

    leftPossible := make([]map[int]struct{}, k+1)
    for i := range leftPossible {
        leftPossible[i] = make(map[int]struct{})
    }
    leftPossible[0][0] = struct{}{}
    leftMaxOrList := make([]map[int]struct{}, n)
    for i := range leftMaxOrList {
        leftMaxOrList[i] = make(map[int]struct{})
    }

    for i := 0; i < n; i++ {
        num := nums[i]
        for j := k; j > 0; j-- {
            for orVal := range leftPossible[j-1] {
                leftPossible[j][orVal|num] = struct{}{}
            }
        }
        if k <= i+1 {
            for orVal := range leftPossible[k] {
                leftMaxOrList[i][orVal] = struct{}{}
            }
        }
    }

    rightPossible := make([]map[int]struct{}, k+1)
    for i := range rightPossible {
        rightPossible[i] = make(map[int]struct{})
    }
    rightPossible[0][0] = struct{}{}
    rightMaxOrList := make([]map[int]struct{}, n)
    for i := range rightMaxOrList {
        rightMaxOrList[i] = make(map[int]struct{})
    }

    for i := n - 1; i >= 0; i-- {
        num := nums[i]
        for j := k; j > 0; j-- {
            for orVal := range rightPossible[j-1] {
                rightPossible[j][orVal|num] = struct{}{}
            }
        }
        if k <= n-i {
            for orVal := range rightPossible[k] {
                rightMaxOrList[i][orVal] = struct{}{}
            }
        }
    }

    maxVal := 0
    for i := 0; i < n-1; i++ {
        if i < k-1 || (n-(i+1)) < k {
           

 continue
        }
        leftSet := leftMaxOrList[i]
        rightSet := rightMaxOrList[i+1]
        if len(leftSet) == 0 || len(rightSet) == 0 {
            continue
        }

        if len(leftSet) < len(rightSet) {
            for or1 := range leftSet {
                for or2 := range rightSet {
                    maxVal = int(math.Max(float64(maxVal), float64(or1^or2)))
                }
            }
        } else {
            for or2 := range rightSet {
                for or1 := range leftSet {
                    maxVal = int(math.Max(float64(maxVal), float64(or1^or2)))
                }
            }
        }
    }

    return maxVal
}
```

```typescript []
class Solution {
    maxValue(nums: number[], k: number): number {
        const n = nums.length;
        if (2 * k > n) return 0;

        const leftPossible: Set<number>[] = Array.from({ length: k + 1 }, () => new Set<number>());
        leftPossible[0].add(0);
        const leftMaxOrList: Set<number>[] = Array.from({ length: n }, () => new Set<number>());

        for (let i = 0; i < n; i++) {
            const num = nums[i];
            for (let j = k; j > 0; j--) {
                for (const orVal of leftPossible[j - 1]) {
                    leftPossible[j].add(orVal | num);
                }
            }
            if (k <= i + 1) {
                for (const orVal of leftPossible[k]) {
                    leftMaxOrList[i].add(orVal);
                }
            }
        }

        const rightPossible: Set<number>[] = Array.from({ length: k + 1 }, () => new Set<number>());
        rightPossible[0].add(0);
        const rightMaxOrList: Set<number>[] = Array.from({ length: n }, () => new Set<number>());

        for (let i = n - 1; i >= 0; i--) {
            const num = nums[i];
            for (let j = k; j > 0; j--) {
                for (const orVal of rightPossible[j - 1]) {
                    rightPossible[j].add(orVal | num);
                }
            }
            if (k <= n - i) {
                for (const orVal of rightPossible[k]) {
                    rightMaxOrList[i].add(orVal);
                }
            }
        }

        let maxVal = 0;
        for (let i = 0; i < n - 1; i++) {
            if (i < k - 1 || (n - (i + 1)) < k) continue;
            const leftSet = leftMaxOrList[i];
            const rightSet = rightMaxOrList[i + 1];
            if (leftSet.size === 0 || rightSet.size === 0) continue;

            if (leftSet.size < rightSet.size) {
                for (const or1 of leftSet) {
                    for (const or2 of rightSet) {
                        maxVal = Math.max(maxVal, or1 ^ or2);
                    }
                }
            } else {
                for (const or2 of rightSet) {
                    for (const or1 of leftSet) {
                        maxVal = Math.max(maxVal, or1 ^ or2);
                    }
                }
            }
        }

        return maxVal;
    }
}
```