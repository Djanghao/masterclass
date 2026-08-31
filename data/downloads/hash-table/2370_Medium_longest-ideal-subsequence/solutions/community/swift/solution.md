# Short & Fast Solution [Swift]

**Author:** Anastasia1944
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-ideal-subsequence/solutions/5071304/](https://leetcode.com/problems/longest-ideal-subsequence/solutions/5071304/)

---

# Intuition
For each element we find previous element with max sequence.

# Example
`Input: s = "acfgbd", k = 2`

Firstly we fill `prev` array with 1 - because each element has itself
```
a c f g b d
1 1 1 1 1 1
```
Then we go through `s` and find previous element that is less than 2 from current
1. For `a` there are no such element
2. For `c` it's an `a` - so we iterate it with 1
3. For `f` there is no such element
4. For `g` it's an `f` - so we iterate it with 1
5. For `b` there are two matching elements - `a` and `c`. We take max prev between them and iterate it with 1
6. For `d` similarly we take max from matching and iterate it

```
a c f g b d
1 2 1 2 3 4
```

Then we take max() from this prev array - there is an answer 
```
answer = 4
```


# Code
```
class Solution {
    func longestIdealString(_ s: String, _ k: Int) -> Int {
        var lastPos: [Int: Int] = [:]
        var countPrev: [Int] = Array(repeating: 1, count: s.count)
        
        for (num, char) in s.enumerated() {
            let intChar = Int(char.asciiValue!) - 97
            for i in -k ... k {
                if let prev = lastPos[abs(i - intChar)] {
                    countPrev[num] = max(countPrev[prev] + 1, countPrev[num])
                }
            }
            lastPos[intChar] = num
        }
         
        return countPrev.max()!
    }
}
```