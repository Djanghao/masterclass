# Easy solution with Run time 3s

**Author:** chandanios
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/5545442/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/5545442/)

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
    func longestSubstring(_ s: String, _ k: Int) -> Int {
        let sCount = s.count
        if sCount == 0, k > sCount { return 0 }
        if k <= 1 { return sCount}
        let sArray = Array(s)
        var hashDict = [Character:Int]()
        for i in 0..<sCount {
            hashDict[sArray[i],default: 0] += 1
        }
        var index = 0
        while index < sCount {
            if hashDict[sArray[index]]! >= k {
                index += 1
            }else{
                break
            }
        }
        if index >= sCount { return index}
        let str = String(sArray[0..<index])
        let long1 = longestSubstring(str, k)
        while index < sCount {
            if hashDict[sArray[index]]! < k {
                index += 1
            }else{
                break
            }
        }
        let str2 = String(sArray[index..<sCount])
        let long2 = longestSubstring(str2, k)
        return max(long1,long2)
    }
}
```