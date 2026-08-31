# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS -Dynamic Programming -Interview Solution

**Author:** lancertech6
**Votes:** 104
**Link:** [https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5320446/](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5320446/)

---


![Screenshot 2024-06-16 110510.png](./images/0.png)


# YouTube Video Explanation:

<!-- **If you want a video for this question please write in the comments** -->

https://youtu.be/btt34fYah6s


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2000 Subscribers*
*Current Subscribers: 1976*

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to maximize the total damage a magician can cast given constraints on which spells can be cast together. Specifically, if a spell with damage `power[i]` is cast, then spells with damages `power[i] - 2`, `power[i] - 1`, `power[i] + 1`, and `power[i] + 2` cannot be cast. This constraint suggests a need for a dynamic programming approach where we keep track of the maximum possible damage while avoiding forbidden spell combinations.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Frequency Count**:
   - Use a `HashMap` to count the frequency of each unique spell damage.

2. **Sort Unique Damages**:
   - Extract unique damage values from the map and sort them. This helps in efficiently checking and updating the dynamic programming state.

3. **Dynamic Programming Array**:
   - Initialize a DP array where `dp[i]` represents the maximum damage achievable using the first `i` unique spell damages.
   - The transition involves either taking the current spell damage (if it doesn't conflict with the previously considered spell damages) or skipping it.

4. **State Transition**:
   - For each unique damage, calculate its contribution to the total damage.
   - Update the DP array considering the constraints.

# Complexity
- **Time Complexity**: 
  - Building the frequency map: `O(m)`, where `m` is the number of elements in the input array.
  - Sorting the unique keys: `O(m log m)`.
  - Dynamic programming update: `O(m^2)` in the worst case, due to the nested while loop. However, with efficient indexing, this can be optimized.

- **Space Complexity**: 
  - `O(m)` for the frequency map and the DP array.



# Step By Step Explanation

Let's explain the logic using an example with `power = [7, 1, 6, 6]`.

1. **Input Preparation**
    - **Input Array:** `[7, 1, 6, 6]`
    - **Frequency Map:** Count the frequency of each damage value.
    - **Unique Damages:** Extract and sort the unique damage values.

| Element | Count |
|---------|-------|
| 1       | 1     |
| 6       | 2     |
| 7       | 1     |

- **Unique Damages (sorted):** `[1, 6, 7]`
- **Frequency:** `{1: 1, 6: 2, 7: 1}`

2. **Initialization**
    - Create a DP array to store the maximum damage up to each unique damage index.
    - **DP Array Initialization:**
    
| Index | Unique Damage | Frequency | Initial DP Value         |
|-------|---------------|-----------|--------------------------|
| 0     | 1             | 1         | 1 * 1 = 1                |
| 1     | 6             | 2         | 0                        |
| 2     | 7             | 1         | 0                        |

3. **Dynamic Programming Transition**
    - **Step 1: Processing Damage Value 1**

| i  | Current Damage Value | Current Damage Total | Previous Index | Max Damage Up to i      | DP Array after Update    |
|----|----------------------|----------------------|----------------|-------------------------|--------------------------|
| 0  | 1                    | 1 * 1 = 1            | -              | max(0, 1) = 1           | `[1, 0, 0]`              |

    - **Step 2: Processing Damage Value 6**

| i  | Current Damage Value | Current Damage Total | Previous Index | Max Damage Up to i      | DP Array after Update    |
|----|----------------------|----------------------|----------------|-------------------------|--------------------------|
| 1  | 6                    | 6 * 2 = 12           | -1 (no conflict) | max(1, 12) = 12         | `[1, 12, 0]`             |

    - **Step 3: Processing Damage Value 7**

| i  | Current Damage Value | Current Damage Total | Previous Index | Max Damage Up to i      | DP Array after Update    |
|----|----------------------|----------------------|----------------|-------------------------|--------------------------|
| 2  | 7                    | 7 * 1 = 7            | 0 (no conflict) | max(12, 1 + 7) = 13     | `[1, 12, 13]`            |

4. **Final Result**
    - **Maximum Total Damage:** `13`

### Explanation Summary
1. **Input Preparation:**
    - Count the frequency of each spell damage.
    - Extract and sort unique damages.

2. **Initialization:**
    - Initialize the DP array with the damage of the first unique spell.

3. **Dynamic Programming Transition:**
    - For each unique damage, calculate its total contribution.
    - Update the DP array by considering conflicts with previous damages.

4. **Result:**
    - The maximum total damage is the last value in the DP array.



# Code
```java []
class Solution {
    public long maximumTotalDamage(int[] power) {
        // Step 1: Count the frequency of each damage value
        Map<Integer, Long> damageFrequency = new HashMap<>();
        for (int damage : power) {
            damageFrequency.put(damage, damageFrequency.getOrDefault(damage, 0L) + 1);
        }

        // Step 2: Extract and sort the unique damage values
        List<Integer> uniqueDamages = new ArrayList<>(damageFrequency.keySet());
        Collections.sort(uniqueDamages);

        int totalUniqueDamages = uniqueDamages.size();
        long[] maxDamageDP = new long[totalUniqueDamages];

        // Step 3: Initialize the DP array with the first unique damage
        maxDamageDP[0] = uniqueDamages.get(0) * damageFrequency.get(uniqueDamages.get(0));

        // Step 4: Fill the DP array with the maximum damage calculations
        for (int i = 1; i < totalUniqueDamages; i++) {
            int currentDamageValue = uniqueDamages.get(i);
            long currentDamageTotal = currentDamageValue * damageFrequency.get(currentDamageValue);

            // Initially, consider not taking the current damage
            maxDamageDP[i] = maxDamageDP[i - 1];

            // Find the previous damage value that doesn't conflict with the current one
            int previousIndex = i - 1;
            while (previousIndex >= 0 && 
                   (uniqueDamages.get(previousIndex) == currentDamageValue - 1 || 
                    uniqueDamages.get(previousIndex) == currentDamageValue - 2 || 
                    uniqueDamages.get(previousIndex) == currentDamageValue + 1 || 
                    uniqueDamages.get(previousIndex) == currentDamageValue + 2)) {
                previousIndex--;
            }

            // Update the DP value considering the current damage
            if (previousIndex >= 0) {
                maxDamageDP[i] = Math.max(maxDamageDP[i], maxDamageDP[previousIndex] + currentDamageTotal);
            } else {
                maxDamageDP[i] = Math.max(maxDamageDP[i], currentDamageTotal);
            }
        }

        // Return the maximum damage possible
        return maxDamageDP[totalUniqueDamages - 1];
    }
}

```
```C++ []
#include <vector>
#include <unordered_map>
#include <algorithm>

class Solution {
public:
    long long maximumTotalDamage(std::vector<int>& power) {
        std::unordered_map<int, long long> damageFrequency;
        for (int damage : power) {
            damageFrequency[damage]++;
        }

        std::vector<int> uniqueDamages;
        for (const auto& pair : damageFrequency) {
            uniqueDamages.push_back(pair.first);
        }
        std::sort(uniqueDamages.begin(), uniqueDamages.end());

        int totalUniqueDamages = uniqueDamages.size();
        std::vector<long long> maxDamageDP(totalUniqueDamages, 0);

        maxDamageDP[0] = uniqueDamages[0] * damageFrequency[uniqueDamages[0]];

        for (int i = 1; i < totalUniqueDamages; i++) {
            int currentDamageValue = uniqueDamages[i];
            long long currentDamageTotal = currentDamageValue * damageFrequency[currentDamageValue];

            maxDamageDP[i] = maxDamageDP[i - 1];

            int previousIndex = i - 1;
            while (previousIndex >= 0 && 
                   (uniqueDamages[previousIndex] == currentDamageValue - 1 || 
                    uniqueDamages[previousIndex] == currentDamageValue - 2 || 
                    uniqueDamages[previousIndex] == currentDamageValue + 1 || 
                    uniqueDamages[previousIndex] == currentDamageValue + 2)) {
                previousIndex--;
            }

            if (previousIndex >= 0) {
                maxDamageDP[i] = std::max(maxDamageDP[i], maxDamageDP[previousIndex] + currentDamageTotal);
            } else {
                maxDamageDP[i] = std::max(maxDamageDP[i], currentDamageTotal);
            }
        }

        return maxDamageDP[totalUniqueDamages - 1];
    }
};
```
```Python []
class Solution(object):
    def maximumTotalDamage(self, power):
        damageFrequency = defaultdict(int)
        for damage in power:
            damageFrequency[damage] += 1

        uniqueDamages = sorted(damageFrequency.keys())
        totalUniqueDamages = len(uniqueDamages)
        maxDamageDP = [0] * totalUniqueDamages

        maxDamageDP[0] = uniqueDamages[0] * damageFrequency[uniqueDamages[0]]

        for i in range(1, totalUniqueDamages):
            currentDamageValue = uniqueDamages[i]
            currentDamageTotal = currentDamageValue * damageFrequency[currentDamageValue]

            maxDamageDP[i] = maxDamageDP[i - 1]

            previousIndex = i - 1
            while (previousIndex >= 0 and 
                   (uniqueDamages[previousIndex] == currentDamageValue - 1 or 
                    uniqueDamages[previousIndex] == currentDamageValue - 2 or 
                    uniqueDamages[previousIndex] == currentDamageValue + 1 or 
                    uniqueDamages[previousIndex] == currentDamageValue + 2)):
                previousIndex -= 1

            if previousIndex >= 0:
                maxDamageDP[i] = max(maxDamageDP[i], maxDamageDP[previousIndex] + currentDamageTotal)
            else:
                maxDamageDP[i] = max(maxDamageDP[i], currentDamageTotal)

        return maxDamageDP[totalUniqueDamages - 1]

        
```
```JavaScript []
var maximumTotalDamage = function(power) {
    const damageFrequency = new Map();
    for (let damage of power) {
        damageFrequency.set(damage, (damageFrequency.get(damage) || 0) + 1);
    }

    const uniqueDamages = Array.from(damageFrequency.keys()).sort((a, b) => a - b);
    const totalUniqueDamages = uniqueDamages.length;
    const maxDamageDP = Array(totalUniqueDamages).fill(0);

    maxDamageDP[0] = uniqueDamages[0] * damageFrequency.get(uniqueDamages[0]);

    for (let i = 1; i < totalUniqueDamages; i++) {
        const currentDamageValue = uniqueDamages[i];
        const currentDamageTotal = currentDamageValue * damageFrequency.get(currentDamageValue);

        maxDamageDP[i] = maxDamageDP[i - 1];

        let previousIndex = i - 1;
        while (previousIndex >= 0 && 
               (uniqueDamages[previousIndex] === currentDamageValue - 1 || 
                uniqueDamages[previousIndex] === currentDamageValue - 2 || 
                uniqueDamages[previousIndex] === currentDamageValue + 1 || 
                uniqueDamages[previousIndex] === currentDamageValue + 2)) {
            previousIndex--;
        }

        if (previousIndex >= 0) {
            maxDamageDP[i] = Math.max(maxDamageDP[i], maxDamageDP[previousIndex] + currentDamageTotal);
        } else {
            maxDamageDP[i] = Math.max(maxDamageDP[i], currentDamageTotal);
        }
    }

    return maxDamageDP[totalUniqueDamages - 1];
};
```

![upvote.png](./images/1.png)
