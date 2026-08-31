# Swift | 854. K-Similar Strings | Memoized DFS with pruning, 80ms beats 100%

**Author:** iosdevzone
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-similar-strings/solutions/1573204/](https://leetcode.com/problems/k-similar-strings/solutions/1573204/)

---

Hopefully there are enough comments in the code to explain what's going on. If not, feel free to post a question in the comments and I'll do my best to answer it.
Also, if you like the solution, an upvote would be appreciated!
```swift
class Solution {
    // Memoization cache
    var cache = [String:Int]()
    
    func kSimilarity_(_ s1: String, _ s2: String, _ position: Int = 0) -> Int {
        guard position < s1.count else { return 0 }
        let cs1 = Array(s1)
        let cs2 = Array(s2)
        // Create a map from characters to the indices where they occur.
        let cs1map = (position..<cs1.count).reduce(into: [Character:[Int]]()) {
            $0[cs1[$1], default:[]].append($1)
        }
        // Dispose of the trivial case (equality) first.
        if cs1[position] == cs2[position] {
            return kSimilarity(s1, s2, position + 1)
        }
        // These are the indices of all the possible swaps
        var possibleIndices = cs1map[cs2[position]]!.filter({$0>position})
        var minTail = Int.max
        // Check for a perfect swap to prune repeated recursive calls
        for possibleIndex in  possibleIndices {
            if cs2[possibleIndex] == cs1[position] {
                // Just cut the array and break so we don't have to repeat ourselves.
                possibleIndices = [possibleIndex]
                break
            }
        }
        // Try the remaining possibilities... 
        for possibleIndex in possibleIndices {
            var temp = cs1
            temp.swapAt(position, possibleIndex)
            minTail = min(minTail, kSimilarity(String(temp), s2, position + 1))
        }
        return 1 + minTail
    }
    
    // Call the worker routine with memoization.
    func kSimilarity(_ s1: String, _ s2: String, _ position: Int = 0) -> Int {
        let key = "\\(s1)\\(position)"
        if let result = cache[key] { return result }
        let result = kSimilarity_(s1, s2, position)
        cache[key] = result
        return result
    }
}
```