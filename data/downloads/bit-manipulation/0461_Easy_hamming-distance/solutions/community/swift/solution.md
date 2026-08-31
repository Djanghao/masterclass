# Simple XOR and right shift to count 1's with COMMENTS for Swift

**Author:** BillyLeetcode
**Votes:** 3
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/2436433/](https://leetcode.com/problems/hamming-distance/solutions/2436433/)

---

```
class Solution {
    func hammingDistance(_ x: Int, _ y: Int) -> Int {
        // XOR the two numbers  
        // The result will have a 1 bit, where there is a difference.
        var delta = x ^ y
        
        // Next, count the 1's in the delta       
        var count = 0
        while delta != 0 {
            if delta & 1 == 1 {count += 1} // check least sig bit for a 1
            delta >>= 1 // Right shift 1
        }
        return count
    }
}
```