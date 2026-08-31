# 🔥🔥🔥🔥🔥Beats 100% | JS | TS | Java | C++ | C# | Python | python3 | Kotlin | 🔥🔥🔥🔥🔥

**Author:** 20Sunny
**Votes:** 4
**Link:** [https://leetcode.com/problems/frog-jump/solutions/3964781/](https://leetcode.com/problems/frog-jump/solutions/3964781/)

---

---
![header_.png](./images/0.png)

---

```C++ []
class Solution {
public:
    bool canCross(vector<int>& stones) {
        // Create a hashmap to store possible jump sizes for each stone position
        // Key: Stone position, Value: Set of valid jump sizes from that position
        unordered_map<int, unordered_set<int>> hashMap;

        // Initialize the first stone's jump sizes. Since the frog starts at position 0,
        // it can only jump 1 unit to reach the first stone.
        hashMap[stones[0] + 1] = {1};

        // Iterate through the stones starting from the second stone
        for (int i = 1; i < stones.size(); ++i) {
            int position = stones[i]; // Current stone's position

            // Iterate through the possible jump sizes for the current stone's position
            for (auto it : hashMap[position]) {
                // For each valid jump size 'it', update the jump sizes for the next stones
                
                // Jump to the next stone with the same jump size 'it'
                hashMap[position + it].insert(it);

                // Jump to the next stone with jump size 'it + 1'
                hashMap[position + it + 1].insert(it + 1);

                // Jump to the next stone with jump size 'it - 1'
                hashMap[position + it - 1].insert(it - 1);
            }
        }
        
        // If the last stone's position has any valid jump sizes, it means the frog can cross
        // the river and reach the last stone
        return hashMap[stones.back()].size() != 0;
    }
};
```
```Typescript []
function canCross(stones: number[]): boolean {
    const jumpMap: Map<number, Set<number>> = new Map();

    // Initialize the jumpMap with stone positions
    for (const stone of stones) {
        jumpMap.set(stone, new Set());
    }
    jumpMap.get(0).add(0); // The frog starts at position 0 with jump size 0

    for (const stone of stones) {
        const jumpSizes = jumpMap.get(stone);
        
        for (const jumpSize of jumpSizes) {
            for (let nextJumpSize = jumpSize - 1; nextJumpSize <= jumpSize + 1; nextJumpSize++) {
                if (nextJumpSize > 0 && jumpMap.has(stone + nextJumpSize)) {
                    jumpMap.get(stone + nextJumpSize).add(nextJumpSize);
                }
            }
        }
    }

    return jumpMap.get(stones[stones.length - 1]).size > 0;
}
```
```Java []
import java.util.*;

class Solution {
    public boolean canCross(int[] stones) {
        // Create a hashmap to store jump distances for each stone position
        HashMap<Integer, HashSet<Integer>> jumpMap = new HashMap<>();
        
        // Initialize the hashmap with the first stone
        jumpMap.put(0, new HashSet<>());
        jumpMap.get(0).add(1); // Frog can jump 1 unit from the first stone
        
        // Populate the jumpMap for each stone
        for (int i = 1; i < stones.length; i++) {
            jumpMap.put(stones[i], new HashSet<>());
        }
        
        // Iterate through stones and update jump distances
        for (int i = 0; i < stones.length - 1; i++) {
            int stonePos = stones[i];
            HashSet<Integer> jumpDistances = jumpMap.get(stonePos);
            
            for (int jumpDistance : jumpDistances) {
                int nextPos = stonePos + jumpDistance;
                if (nextPos == stones[stones.length - 1]) {
                    return true; // Frog can reach the last stone
                }
                
                HashSet<Integer> nextJumpDistances = jumpMap.get(nextPos);
                if (nextJumpDistances != null) {
                    nextJumpDistances.add(jumpDistance);
                    if (jumpDistance > 1) {
                        nextJumpDistances.add(jumpDistance - 1);
                    }
                    nextJumpDistances.add(jumpDistance + 1);
                }
            }
        }
        
        return false; // Frog cannot reach the last stone
    }
}
```
```Python []
class Solution(object):
    def canCross(self, stones):
        n = len(stones)
        # Create a dictionary to store the possible jump sizes at each stone.
        dp = {stone: set() for stone in stones}
        dp[0].add(0)  # The frog starts at the first stone with a jump size of 0.

        for stone in stones:
            # Iterate through all possible jump sizes at the current stone.
            for jump_size in dp[stone]:
                # Try the next possible jump sizes for the next stone.
                for step in range(jump_size - 1, jump_size + 2):
                    if step > 0 and stone + step in dp:
                        dp[stone + step].add(step)

        # If the last stone has any valid jump sizes, then the frog can cross the river.
        return len(dp[stones[-1]]) > 0
```
```Python3 []
class Solution:
    def canCross(self, stones: List[int]) -> bool:
        n = len(stones)
        
        # Create a dictionary to store possible jump lengths at each stone.
        # The key is the stone position, and the value is a set of possible jump lengths.
        jump_lengths = {stone: set() for stone in stones}
        jump_lengths[0].add(0)  # Initial jump
        
        for stone in stones:
            for jump in jump_lengths[stone]:
                for next_jump in [jump - 1, jump, jump + 1]:
                    if next_jump > 0 and stone + next_jump in jump_lengths:
                        jump_lengths[stone + next_jump].add(next_jump)
        
        # If the last stone has any possible jump lengths, then the frog can cross.
        return len(jump_lengths[stones[-1]]) > 0
```
```C# []
public class Solution {
    HashSet<int> lookup; // HashSet to quickly check if a stone exists at a certain unit
    Dictionary<string, bool> dp; // Memoization dictionary to store computed results

    public bool CanCross(int[] stones) {
        if (stones[1] != 1)
            return false; // If the second stone is not at position 1, the frog can't jump to it

        lookup = new HashSet<int>();
        dp = new Dictionary<string, bool>();

        // Adding stone positions to the lookup HashSet for quick lookup
        for (int i = 0; i < stones.Length; i++)
            lookup.Add(stones[i]);

        // Start the recursive process from the first stone (position 1) with a step of 1
        return DetermineCanCross(1, 1, stones[stones.Length - 1]);
    }

    private bool DetermineCanCross(int reachedUnits, int lastStep, int destination) {
        if (!lookup.Contains(reachedUnits))
            return false; // If the frog can't land at the reachedUnits, return false

        if (reachedUnits == destination)
            return true; // If the frog reaches the destination, return true

        string localLookup = reachedUnits + "~" + lastStep;
        if (dp.ContainsKey(localLookup))
            return dp[localLookup]; // If the result for this combination of reachedUnits and lastStep is already computed, return it from the memoization dictionary

        if (lastStep == 0) {
            // The frog can only jump to the next stone with a step of 1
            bool computedResult = DetermineCanCross(reachedUnits + 1, 1, destination);
            dp.Add(localLookup, computedResult); // Store the computed result in the memoization dictionary
            return computedResult;
        } else if (lastStep == 1) {
            // The frog can jump to the next stone with a step of 1 or 2
            bool computedResult = DetermineCanCross(reachedUnits + 1, 1, destination) ||
                                  DetermineCanCross(reachedUnits + 2, 2, destination);
            dp.Add(localLookup, computedResult);
            return computedResult;
        } else {
            // The frog can jump to the next stone with a step of lastStep - 1, lastStep, or lastStep + 1
            bool computedResult = DetermineCanCross(reachedUnits + lastStep - 1, lastStep - 1, destination) ||
                                  DetermineCanCross(reachedUnits + lastStep, lastStep, destination) ||
                                  DetermineCanCross(reachedUnits + lastStep + 1, lastStep + 1, destination);
            dp.Add(localLookup, computedResult);
            return computedResult;
        }
    }
}
```
```Javascript []
var canCross = function(stones) {
    const n = stones.length;
    
    // Create a map to store possible jump lengths at each stone
    const jumpMap = new Map();
    for (const stone of stones) {
        jumpMap.set(stone, new Set());
    }
    jumpMap.get(0).add(0); // The frog starts at the first stone
    
    // Iterate through each stone and update possible jump lengths
    for (let i = 0; i < n; i++) {
        const stone = stones[i];
        for (const jumpLength of jumpMap.get(stone)) {
            for (let k = jumpLength - 1; k <= jumpLength + 1; k++) {
                if (k > 0 && jumpMap.has(stone + k)) {
                    jumpMap.get(stone + k).add(k);
                }
            }
        }
    }
    
    // Check if the last stone has any valid jump lengths
    return jumpMap.get(stones[n - 1]).size > 0;
};
```
```Kotlin []
class Solution {
    fun canCross(stones: IntArray): Boolean {
        val jumpMap = mutableMapOf<Int, HashSet<Int>>()
        
        for (stone in stones) {
            jumpMap[stone] = HashSet()
        }
        
        jumpMap[0]?.add(0) // The frog starts at position 0 with a jump of size 0
        
        for (i in stones.indices) {
            val currentStone = stones[i]
            for (jumpSize in jumpMap[currentStone]!!) {
                for (step in -1..1) {
                    val nextJumpSize = jumpSize + step
                    if (nextJumpSize > 0 && jumpMap.containsKey(currentStone + nextJumpSize)) {
                        jumpMap[currentStone + nextJumpSize]?.add(nextJumpSize)
                    }
                }
            }
        }
        
        return jumpMap[stones.last()]?.isNotEmpty() ?: false
    }
}
```


---
![download.jpg](./images/1.jpeg)

---