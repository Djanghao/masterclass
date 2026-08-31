# Swift Easy linear solution

**Author:** TatianaVol
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3487984/](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solutions/3487984/)

---

# Intuition
Sliding window: 
1) map string of chars to array of `1`(for vowel) and `0`(for other)
2) calculate `1`(vowels) from 0 to k
3) from k to end subtract old value `array[i - k]` and add new value `array[i]`

# Complexity
- Time complexity: O(N)

- Space complexity: O(N)

# Code
```
class Solution {
    func maxVowels(_ s: String, _ k: Int) -> Int {
        
        var array: [Int] = s.map { ["a","e","i","o","u"].contains($0) ? 1 : 0 }
        var count = array.prefix(k).reduce(0, +)

        if array.count <= k { return count }
        var maxCount = count
        for i in (k..<array.count) {
            count = count - array[i - k] + array[i]
            maxCount = max(maxCount, count)
        } 
        return maxCount
    }
}
```