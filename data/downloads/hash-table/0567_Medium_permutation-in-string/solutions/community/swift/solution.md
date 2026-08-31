# [Swift] Short solution using dictionaries. | Runtime: 23 ms, faster than 85.71%

**Author:** rateleu
**Votes:** 3
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/2555379/](https://leetcode.com/problems/permutation-in-string/solutions/2555379/)

---

```
class Solution {
	/// MARK: - Dictionaries approach
    func checkInclusion(_ s1: String, _ s2: String) -> Bool {
        let length = s1.count // *
        guard length <= s2.count else { return false }
        
        let map = s1.reduce(into: [Character:Int]()) { map, character in
            map[character, default: 0] += 1
        }
        var s2 = Array(s2) // **
		
        var count = 0
        var window = [Character:Int]()
        for (index, character) in s2.enumerated() {
            if count >= length {
                // let character = s2[s2.index(s2.startIndex, offsetBy: (index - n))] **
                let character = s2[index - length]
                let value = window[character, default: 0] - 1
                window[character] = value > 0 ? value : nil
            } else { 
				count += 1
			}
            window[character, default: 0] += 1
            if window == map { return true }
        }
        return false
    }
}

// MARK: - EXPLANATIONS
//
// *    I dont know why, but assigning string's size to a variable makes huge difference compared
//      to accessing it every time by .count . 
//      Without it the runtime rises from 20-50ms to 4000ms. 
//      I thought it won't matter since this is precalculated property. 
//
// **  I wanted to access the character directly without converting string to an array
//      but somehow that takes forever.
//      I replaced it with converting string to an array. Runtime went down from 2000ms to 20-50ms
```

if anyone could explain why there's so huge difference in runtime, please do tell me