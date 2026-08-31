# Swift - All combinations O(n * 101)

**Author:** duyetnt
**Votes:** 1
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/1920902/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/1920902/)

---

- Maintain `counter` in which `counter[num][i]` represents the occurrences of `num` from index `0 --> i`.
- Let's consider each number `b = arr[i]` from index `1 --> arr.count - 2` as the middle number corresponding to index `j`. 
	- For every number `a` from `0-->100` corresponding to index `i`, we can get the occurences of `a` on the left side of `b` in constant time --> `left = counter[a][i - 1]`
	- Since we already know `a & b`, it's simple to know `c = target - a - b`  coressponding to index `k` and also we're able to get the occurences of `c` on the right side of `b` in constant time --> `right = counter[c][n - 1] - counter[c][i]` 
	- Then increase the result accordingly `res += left * right`

```swift
class Solution {
  func threeSumMulti(_ arr: [Int], _ target: Int) -> Int {
    let n = arr.count
    var counter = Array(repeating: Array(repeating: 0, count: n), count: 101)
    for i in 0..<n {
      for num in 0...100 {
        let prev = i == 0 ? 0: counter[num][i - 1]
        counter[num][i] = prev
      }
      
      let num = arr[i]
      let prev = i == 0 ? 0 : counter[num][i - 1] 
      counter[num][i] = prev + 1
    }
    
    let mod = 1_000_000_007
    var res = 0 
    for i in stride(from: 1, to: n - 1, by: 1) {
      let b = arr[i]
      for a in 0...100 {
        let c = target - a - b
        if c < 0 || c > 100 { 
          continue
        }
        
        let left = counter[a][i - 1]
        let right = max(0, counter[c][n - 1] - counter[c][i])
        res += left * right
      }
    }
    
    return res % mod
  }
}
// Time complexity: O(n * 101) 
// Space complexity: O(n * 101) to store counter
```