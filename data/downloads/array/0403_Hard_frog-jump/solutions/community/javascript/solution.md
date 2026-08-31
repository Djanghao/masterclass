# 【Video】Ex-Amazon explains a solution with Python, JavaScript, Java and C++

**Author:** niits
**Votes:** 24
**Link:** [https://leetcode.com/problems/frog-jump/solutions/3968651/](https://leetcode.com/problems/frog-jump/solutions/3968651/)

---

# Intuition
Use dynamic programming to keep the last jump and I thought why the frog can't jump into the water.

# Solution Video

### Please subscribe to my channel from here. I have 249 videos as of August 28th, 2023.

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

https://youtu.be/dvoouRUguvw

## In the video, the steps of approach below are visualized using diagrams and drawings. I'm sure you understand the solution easily!

---

# Approach
This is based on Python. Other might be different a bit.

1. **Initialization and Base Case Setup:**
   Initialize a dictionary `dp` where keys represent the positions of stones, and values are sets to store possible jump distances for each stone. Initialize the stone at position 0 with a set containing only the jump distance 0.

   **Explanation:** At the start, we create a dictionary to keep track of the possible jump distances for each stone. Since the frog starts at position 0, we initialize the set for the stone at position 0 with a jump distance of 0, indicating that it's the starting point.

2. **Iterating Through Stones:**
   Iterate through each stone in the list `stones`.

   a. **Loop Through Jump Distances of Current Stone:**
      For the current stone's position, loop through the possible jump distances stored in `dp[stone]`.

   b. **Considering Different Jump Distances:**
      For each jump distance, consider three potential jump distances: `jump - 1`, `jump`, and `jump + 1`.

   c. **Checking and Updating Valid Jumps:**
      Check if the calculated `jump_distance` is greater than 0 and if the resulting position (`stone + jump_distance`) is present in the `dp` dictionary. If both conditions are met, add the current `jump_distance` to the set of possible jump distances for the next stone's position (`stone + jump_distance`).

   **Explanation:** This nested loop structure is crucial for exploring the different jump distances the frog can take and updating the `dp` dictionary with valid jump possibilities.

3. **Checking if Frog Can Reach the Last Stone:**
   After processing all stones and their respective jump distances:

   a. **Checking Last Stone's Jump Distances:**
      Check if the last stone's position (`stones[-1]`) has any possible jump distances greater than 0 in the `dp` dictionary.

   b. **Returning the Result:**
      If there are any valid jump distances for the last stone, return `True` to indicate that the frog can successfully cross the river. Otherwise, return `False` to indicate that the frog cannot cross the river.

   **Explanation:** This step is the final determination of whether the frog can cross the river based on the calculated jump possibilities for each stone.

# Complexity
- Time complexity: O(n^2)

- Space complexity: O(n^2)

```python []
class Solution:
    def canCross(self, stones: List[int]) -> bool:
        dp = {stone : set() for stone in stones}
        dp[0] = {0}

        for stone in stones:
            for jump in dp[stone]:
                for jump_distance in [jump - 1, jump, jump + 1]:
                    if jump_distance > 0 and stone + jump_distance in dp:
                        dp[stone + jump_distance].add(jump_distance)
        
        return len(dp[stones[-1]]) > 0
```
```javascript []
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const dp = new Map();
    stones.forEach(stone => dp.set(stone, new Set()));
    dp.get(0).add(0);

    for (const stone of stones) {
        for (const jump of dp.get(stone)) {
            for (const jumpDistance of [jump - 1, jump, jump + 1]) {
                if (jumpDistance > 0 && dp.has(stone + jumpDistance)) {
                    dp.get(stone + jumpDistance).add(jumpDistance);
                }
            }
        }
    }

    return dp.get(stones[stones.length - 1]).size > 0;    
};
```
```java []
class Solution {
    public boolean canCross(int[] stones) {
        Map<Integer, Set<Integer>> dp = new HashMap<>();
        for (int stone : stones) {
            dp.put(stone, new HashSet<>());
        }
        dp.get(0).add(0);

        for (int stone : stones) {
            for (int jump : dp.get(stone)) {
                for (int jumpDistance : new int[] {jump - 1, jump, jump + 1}) {
                    if (jumpDistance > 0 && dp.containsKey(stone + jumpDistance)) {
                        dp.get(stone + jumpDistance).add(jumpDistance);
                    }
                }
            }
        }

        return !dp.get(stones[stones.length - 1]).isEmpty();        
    }
}
```
```C++ []
class Solution {
public:
    bool canCross(vector<int>& stones) {
        std::unordered_map<int, std::unordered_set<int>> dp;
        for (int stone : stones) {
            dp[stone] = std::unordered_set<int>();
        }
        dp[0].insert(0);

        for (int stone : stones) {
            for (int jump : dp[stone]) {
                for (int jumpDistance : {jump - 1, jump, jump + 1}) {
                    if (jumpDistance > 0 && dp.find(stone + jumpDistance) != dp.end()) {
                        dp[stone + jumpDistance].insert(jumpDistance);
                    }
                }
            }
        }

        return !dp[stones.back()].empty();        
    }
};
```
