# Swift - Hashmap approach

**Author:** Gupta5610
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance-ii/solutions/5553270/](https://leetcode.com/problems/shortest-word-distance-ii/solutions/5553270/)

---

# Intuition
The intuition behind the approach is to pre-process the input array to store the indices of each word in a map. This pre-processing allows us to quickly access the locations of `word1` and `word2` during the shortest function, enabling us to efficiently calculate the shortest distance between them.

# Approach
 * Pre-processing (`init`)

   - Initialize a dictionary (map) where keys are words from `wordsDict`, and values are lists of indices where those words occur in `wordsDict`.
Iterate through `wordsDict`. For each `word` at `index`, append `index` to the list associated with `word` in the map.

 * Calculating Shortest Distance (shortest)

   - Retrieve the lists of indices for `word1` and `word2` from the `map`.
   - Initialize two pointers, `index1` and `index2`, to track the current positions within the index lists of `word1` and `word2`, respectively.
   - Initialize `shortestDist` to `Int.max` to keep track of the shortest distance found so far.
   - Iterate while both pointers are within the bounds of their respective index lists:
     * Calculate the absolute difference between the current indices pointed to by `index1` and `index2`. Update shortestDist if this difference is smaller.
     * Increment the pointer pointing to the smaller index value, effectively moving closer to the other word's index.
     
   - Return `shortestDist`.
# Complexity
- ##### Time complexity:
  * _Pre-processing (`init`)_: O(N), where N is the length of `wordsDict`. We iterate through the array once to build the map.
  * _Calculating Shortest Distance (shortest)_: O(M1 + M2), where M1 and M2 are the number of occurrences of `word1` and `word2` in wordsDict, respectively. In the worst case, we iterate through all occurrences of both words.
- ##### Space complexity:
  * O(N), where N is the length of `wordsDict`. The map stores the indices of each word, and in the worst case, each word could be unique, leading to N entries in the map.

# Code
```

class WordDistance {

    var map:[String:[Int]] = [:]

    init(_ wordsDict: [String]) {
        for (index, word) in wordsDict.enumerated() {
         map[word, default: []].append(index)
        }
    }
    
    func shortest(_ word1: String, _ word2: String) -> Int {
        var index1 = 0
        var index2 = 0

        var shortestDist = Int.max

        let word1Map = map[word1] ?? []
        let word2Map = map[word2] ?? []

        while index1 < word1Map.count && index2 < word2Map.count {
            let value1 = word1Map[index1]
            let value2 = word2Map[index2]
            shortestDist = min(shortestDist,abs(value1-value2))
            if value1 <= value2 {
                index1 += 1
            } else {
                index2 += 1
            }
        }
        return shortestDist
    }
}

/**
 * Your WordDistance object will be instantiated and called as such:
 * let obj = WordDistance(wordsDict)
 * let ret_1: Int = obj.shortest(word1, word2)
 */
```