# Count Collisions Between Cars 85 ms

**Author:** tinyprocessing
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-collisions-on-a-road/solutions/4115223/](https://leetcode.com/problems/count-collisions-on-a-road/solutions/4115223/)

---

# Intuition
We need to count collisions between cars moving in opposite directions or 
between a car and a stationary car.

# Approach
We first perform a double point collision check by iterating through the directions.
If we find "R" followed by "L," we count 2 collisions, mark both cars as "S," 
and skip the next car to avoid double counting.
Then, we perform a single point collision check by iterating through the directions again.
If we find an "L" car to the right of the leftmost "S" or an "R" car to the left of 
the rightmost "S," we count 1 collision.

# Complexity 85 ms
Time complexity: O(n), where n is the length of the input directions string.

We iterate through the string twice.
Space complexity: O(n) for the copy array, where n is the length of the input directions string.

# Code
```
final class Solution {
    func countCollisions(_ directions: String) -> Int {
        var i = 0
        var collisions = 0  
        var copy = Array(directions)
        let count = copy.count
        
        while i + 1 < count {
            if copy[i] == "R" && copy[i + 1] == "L" {
                collisions += 2
                copy[i] = "S"
                copy[i + 1] = "S"
                i += 1
            }
            i += 1
        }
        
        // MARK: - Single Point Collision Check
        i = 0
        let leftMostSIndex = copy.firstIndex(of: "S")
        let rightMostSIndex = copy.lastIndex(of: "S")
        
        while i < count {
            if let leftMostSIndex = leftMostSIndex, copy[i] == "L" && i > leftMostSIndex {
                collisions += 1
            } else if let rightMostSIndex = rightMostSIndex, copy[i] == "R" && i < rightMostSIndex {
                collisions += 1
            }
            i += 1
        }
        
        return collisions
    }
}

```