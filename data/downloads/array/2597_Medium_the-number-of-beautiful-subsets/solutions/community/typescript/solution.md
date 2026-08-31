# Fastest execution || beats 96% users with java & C++, 100% users with typescript || Python3 || DP

**Author:** SanketSawant18
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5195465/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5195465/)

---

# Approach
Dynamic Programming

# Complexity
- Time complexity: O(nlogn)

- Space complexity: O(n)

# Explanation
1. **Frequency Map Initialization:**

- We use a Map<Integer, Map<Integer, Integer>> called freqMap to store frequency counts of elements based on their remainders when divided by k.
2. **Populating Frequency Map:**

- We iterate through the nums array.
- For each number, we compute its remainder when divided by k and update the nested map to count occurrences of each number.
3. **Processing Each Remainder Group:**

- For each group of numbers sharing the same remainder, we use dynamic programming to calculate the number of valid subsets.
- We sort the numbers in the group and initialize counts for the dynamic programming approach.
4. **Dynamic Programming Approach:**

- We iterate through the sorted numbers in reverse.
- For each number, we compute:
    - skip: the count of subsets excluding the current number.
    - take: the count of subsets including the current number, adjusted by the number of occurrences and whether it can be paired with subsequent numbers.
- We update the total count of subsets considering both including and excluding the current number.
5. **Combining Results:**

- Multiply the counts of valid subsets for each remainder group.
Subtract 1 from the total to exclude the empty subset and return the result.


---

```java []
import java.util.*;

public class Solution {
    public int beautifulSubsets(int[] nums, int k) {
        int totCount = 1;
        Map<Integer, Map<Integer, Integer>> freqMap = new HashMap<>();

        // Calculate frequencies based on remainder
        for (int num : nums) {
            int remainder = num % k;
            freqMap.putIfAbsent(remainder, new HashMap<>());
            freqMap.get(remainder).put(num, freqMap.get(remainder).getOrDefault(num, 0) + 1);
        }

        // Iterate through each remainder group
        for (Map<Integer, Integer> fr : freqMap.values()) {
            int n = fr.size();
            int currCount = 1;
            int next1 = 1;
            int next2 = 0;
            List<Map.Entry<Integer, Integer>> subsets = new ArrayList<>(fr.entrySet());
            subsets.sort(Map.Entry.comparingByKey());

            // Calculate counts for each subset starting from the second last
            for (int i = n - 1; i >= 0; i--) {
                int skip = next1;

                int take = (1 << subsets.get(i).getValue()) - 1;

                if (i + 1 < n && subsets.get(i + 1).getKey() - subsets.get(i).getKey() == k) {
                    take *= next2;
                } else {
                    take *= next1;
                }

                currCount = skip + take;
                next2 = next1;
                next1 = currCount;
            }

            totCount *= currCount;
        }

        return totCount - 1;
    }
}
```
```C++ []
#include <vector>
#include <unordered_map>
#include <map>
#include <algorithm>
#include <cmath>

using namespace std;

class Solution {
public:
    int beautifulSubsets(vector<int>& nums, int k) {
        int totCount = 1;
        unordered_map<int, map<int, int>> freqMap;

        // Calculate frequencies based on remainder
        for (int num : nums) {
            int remainder = num % k;
            freqMap[remainder][num]++;
        }

        // Iterate through each remainder group
        for (auto& frPair : freqMap) {
            map<int, int>& fr = frPair.second;
            int n = fr.size();
            int currCount = 1;
            int next1 = 1;
            int next2 = 0;
            vector<pair<int, int>> subsets(fr.begin(), fr.end());

            // Calculate counts for each subset starting from the second last
            for (int i = n - 1; i >= 0; i--) {
                int skip = next1;
                int take = pow(2, subsets[i].second) - 1;

                if (i + 1 < n && subsets[i + 1].first - subsets[i].first == k) {
                    take *= next2;
                } else {
                    take *= next1;
                }

                currCount = skip + take;
                next2 = next1;
                next1 = currCount;
            }

            totCount *= currCount;
        }

        return totCount - 1;
    }
};
```
```python3 []
class Solution:
    def beautifulSubsets(self, nums: List[int], difference: int) -> int:
        tot_count = 1
        freq_map = defaultdict(dict)

        # Calculate frequencies based on remainder
        for num in nums:
            remainder = num % difference
            freq_map[remainder][num] = freq_map[remainder].get(num, 0) + 1

        # Iterate through each remainder group
        for fr in freq_map.values():
            n = len(fr)
            curr_count = 1
            next1 = 1
            next2 = 0
            subsets = sorted(fr.items())

            # Calculate counts for each subset starting from the second last
            for i in range(n - 1, -1, -1):
                # Count of subsets skipping the current subset
                skip = next1

                # Count of subsets including the current subset
                take = 2 ** subsets[i][1] - 1

                # If next number has a 'difference', calculate subsets; otherwise, move to next
                if i + 1 < n and subsets[i + 1][0] - subsets[i][0] == difference:
                    take *= next2
                else:
                    take *= next1
                
                # Store the current total count for the current subset
                curr_count = skip + take  
                next2, next1 = next1, curr_count

            tot_count *= curr_count

        return tot_count - 1
```
```Typescript []

function beautifulSubsets(nums: number[], k: number): number {
    let totCount = 1;
    const freqMap: Map<number, Map<number, number>> = new Map();

    // Calculate frequencies based on remainder
    for (let num of nums) {
        let remainder = num % k;
        if (!freqMap.has(remainder)) {
            freqMap.set(remainder, new Map());
        }
        const remainderMap = freqMap.get(remainder)!;
        remainderMap.set(num, (remainderMap.get(num) || 0) + 1);
    }

    // Iterate through each remainder group
    for (let fr of freqMap.values()) {
        const subsets = Array.from(fr.entries()).sort((a, b) => a[0] - b[0]);
        const n = subsets.length;
        let currCount = 1;
        let next1 = 1;
        let next2 = 0;

        // Calculate counts for each subset starting from the second last
        for (let i = n - 1; i >= 0; i--) {
            let skip = next1;

            let take = (1 << subsets[i][1]) - 1;

            if (i + 1 < n && subsets[i + 1][0] - subsets[i][0] === k) {
                take *= next2;
            } else {
                take *= next1;
            }

            currCount = skip + take;
            next2 = next1;
            next1 = currCount;
        }

        totCount *= currCount;
    }

    return totCount - 1;
}
```