# Swift💯4x

**Author:** OrchidHunter
**Votes:** 7
**Link:** [https://leetcode.com/problems/fibonacci-number/solutions/1497638/](https://leetcode.com/problems/fibonacci-number/solutions/1497638/)

---

### **DP Top Down / Recursion with Memo**
Time: worst case (first call): *O(n)*  best case\xA0(all subsequent calls): *O(1)*
Space: *O(n)*

**Note**: `memo[n - 2]` is calculated whenever `memo[n - 1]` is calculated, so we only need one recursive call. 

### **DP Bottom Up / Tabulation**
Time: *O(n)*
Space: *O(n)*

### **Basic Fast Iteration**
Time: *O(n)*
Space: *O(1)*

### **Basic Recursion**
Time: *O(n * n)*
Space: *O(n)* [code stack]

```
class Solution {
  var memo = [0:0, 1:1]

  func fibDPRecursion(_ n:Int) -> Int {
    memo[n] ?? {
      memo[n - 1] = fibDPRecursion(n - 1)    
      return memo[n - 1]! + memo[n - 2]!
    }()
  }
  
  func fibDPTabulation(_ n:Int) -> Int {
    guard n > 1 else { return n }
    var cache = [0, 1] 
    for i in 2 ... n {
      cache.append(cache[i-2] + cache[i-1])
    }
    return cache.last!
  }  
  
  func fibIterative(_ n:Int) -> Int {
    guard n > 1 else { return n }
    var b = [0, 1]
    for i in 2 ... n {
      b[i & 1] = b[0] + b[1]
    }
    return b[n & 1]
  }
  
  func fibRecursive(_ n:Int) -> Int {
    n < 2 ? n : fibRecursive(n - 1) + fibRecursive(n - 2) 
  }
}
```