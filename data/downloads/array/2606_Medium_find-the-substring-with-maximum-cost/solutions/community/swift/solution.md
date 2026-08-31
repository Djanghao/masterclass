# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/5090509/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/5090509/)

---

- charToVal is a dictionary that maps each character in chars to its corresponding value in vals.
- maxCost is the maximum cost of a substring found so far.
- cost is the cost of the current substring.
start and end are the start and end indices of the current substring.
- For each character in the string s, update cost by adding the value of the character. If the character is in chars, its value is charToVal[char]. Otherwise, its value is its position in the alphabet.
- If cost becomes negative, we remove characters from the start of the substring until cost is non-negative.
- Finally, we update maxCost with the maximum of maxCost and cost.

This solution has a time complexity of O(n), where n is the length of the string s. It iterates over the string once and performs constant time operations for each character. 

# Code
```
class Solution {
    func maximumCostSubstring(_ s: String, _ chars: String, _ vals: [Int]) -> Int {
        let s = Array(s)
        var charToVal = [Character: Int]()
        for (i, char) in chars.enumerated() {
            charToVal[char] = vals[i]
        }
        var maxCost = 0, cost = 0, start = 0
        for end in 0..<s.count {
            let val = charToVal[s[end]] ?? (Int(s[end].asciiValue!) - 96)
            cost += val
            while cost < 0 {
                let startVal = charToVal[s[start]] ?? (Int(s[start].asciiValue!) - 96)
                cost -= startVal
                start += 1
            }
            maxCost = max(maxCost, cost)
        }
        return maxCost
    }
}

```