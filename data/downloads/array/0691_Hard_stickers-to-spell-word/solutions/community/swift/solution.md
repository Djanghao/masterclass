# BEST SWIFT APPROACH BEATS 100% DETAILED!!

**Author:** aminbagheri
**Votes:** 1
**Link:** [https://leetcode.com/problems/stickers-to-spell-word/solutions/3997554/](https://leetcode.com/problems/stickers-to-spell-word/solutions/3997554/)

---

# Intuition
My first thoughts on solving this problem are that it might require a recursive approach to generate all combinations of stickers to form the target string. However, this would be very inefficient. Memoization could potentially speed this up.

# Approach
1. **Initial Filtering**: Before diving into the problem, filter out stickers that don't contain any characters found in the target string. These stickers won't be useful.
2. **Character Frequency Mapping**: Represent both stickers and the target string as frequency maps (i.e., dictionaries) that map each character to the number of times it appears.
3. **Memoization**: Use a memoization table to store the minimum number of stickers required to form particular strings, to avoid redundant work.
4. **Recursive Function**: Use a recursive function to find the minimum number of stickers required for the given target. The function takes as parameters the current state of the target string, the list of stickers, and a memoization table.

# Complexity
- **Time complexity**: \\(O(2^T \	imes S)\\) where \\(T\\) is the size of the target string and \\(S\\) is the number of stickers. This accounts for generating all combinations of letters from stickers to match the target.
  
- **Space complexity**: \\(O(2^T)\\) mainly for storing memoization tables and function call stacks. \\(T\\) is the length of the target string.

# Code

```swift
class Solution {
    // Main function to find the minimum number of stickers needed to create the target string
    func minStickers(_ stickers: [String], _ target: String) -> Int {
        // Memoization table to store the minimum stickers needed for each target substring
        var memo = [String: Int]()
        
        // Convert each sticker into a frequency map (Dictionary)
        var stickerMaps = stickers.map { buildMap(from: $0) }
        
        // Create a frequency map for the target string
        let targetMap = buildMap(from: target)
        
        // Filter out stickers that are not useful (do not contain any character from the target)
        stickerMaps = stickerMaps.filter { sticker in
            for (key, _) in targetMap {
                if sticker[key] != nil {
                    return true
                }
            }
            return false
        }
        
        // If no useful stickers are left, return -1
        if stickerMaps.isEmpty {
            return -1
        }
        
        // Call the helper function for the actual calculation
        return helper(&memo, stickerMaps, targetMap)
    }

    // Recursive function to find minimum stickers needed, with memoization
    func helper(_ memo: inout [String: Int], _ stickers: [[Character: Int]], _ target: [Character: Int]) -> Int {
        // Convert the target frequency map to a string for memoization
        let targetStr = mapToString(target)
        
        // If this sub-problem has already been solved, return the stored answer
        if let val = memo[targetStr] {
            return val
        }
        
        // Base case: If the target is empty, 0 stickers are needed
        if target.isEmpty {
            return 0
        }
        
        // Initialize the answer to maximum integer value
        var ans = Int.max
        
        // Iterate through each sticker to see how it can reduce the target
        for sticker in stickers {
            if let key = target.keys.first(where: { sticker[$0] != nil }) { // Find first common character
                var newTarget = target // Clone the target map to modify it
                // Reduce the target frequency map based on the current sticker
                for (ch, count) in sticker {
                    newTarget[ch, default: 0] -= count
                    if newTarget[ch]! <= 0 {
                        newTarget.removeValue(forKey: ch)
                    }
                }
                // Recursive call with the reduced target
                let sub = helper(&memo, stickers, newTarget)
                if sub != -1 {
                    ans = min(ans, 1 + sub)
                }
            }
        }
        
        // Update memoization table and return the answer
        memo[targetStr] = ans == Int.max ? -1 : ans
        return memo[targetStr]!
    }

    // Utility function to build a frequency map from a string
    func buildMap(from str: String) -> [Character: Int] {
        var map = [Character: Int]() // Initialize an empty map
        // Count the frequency of each character in the string
        for ch in str {
            map[ch, default: 0] += 1
        }
        return map
    }

    // Utility function to convert a frequency map to a string for memoization
    func mapToString(_ map: [Character: Int]) -> String {
        var str = ""
        // Sort the map by keys and convert it to a string
        for (key, value) in map.sorted(by: { $0.key < $1.key }) {
            str += "\\(key)\\(value)"
        }
        return str
    }
}
```

### Variable Explanation
- `memo`: A Dictionary to store previously calculated results for subproblems. Keys are target strings, and values are minimum stickers needed.
- `stickerMaps`: An array of Dictionaries, each representing the frequency map of a sticker.
- `targetMap`: A Dictionary representing the frequency map of the target string.

# Complexity Analysis
The time complexity is \\(O(2^T \	imes S)\\) due to recursion that explores all possibilities. The space complexity is \\(O(2^T)\\), mainly for the memoization table.