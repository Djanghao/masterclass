# Swift Easy solution || 100 % beat  in Time & Space

**Author:** rekhalilapara
**Votes:** 0
**Link:** [https://leetcode.com/problems/sender-with-largest-word-count/solutions/3868291/](https://leetcode.com/problems/sender-with-largest-word-count/solutions/3868291/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func largestWordCount(_ messages: [String], _ senders: [String]) -> String {
    
        var dict = [String: Int]()
        
        for (i,val) in senders.enumerated() {
            dict[val,default: 0] += messages[i].components(separatedBy: " ").count
        }
        
        var arr = dict.sorted(by: {$0.value > $1.value})
        var newArr = arr.filter({$0.value == arr.first?.value})
        newArr.sort(by: {$0.key > $1.key})
        
        return newArr.first?.key ?? ""
        
    }
}
```