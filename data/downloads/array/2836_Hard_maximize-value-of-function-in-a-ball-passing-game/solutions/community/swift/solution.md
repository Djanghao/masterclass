# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/4941623/](https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/4941623/)

---

In this code, first initialize lastReceiver and sum for each player id x and for every i in the range [0, ceil(log2k)]. Then, compute lastReceiver and sum for each player id x and for every i in the range [1, ceil(log2k)]. Finally, go through the powers of 2 in the binary representation of k and make jumps corresponding to each power, using the pre-computed values, to compute f(x). The answer is the maximum f(x) from each player id. This solution has a time complexity of O(n log k).

# Code
```
class Solution {
    func getMaxFunctionValue(_ receiver: [Int], _ k: Int) -> Int {
        let n = receiver.count
        let logK = Int(log2(Double(k))) + 1
        var lastReceiver = Array(repeating: Array(repeating: 0, count: logK), count: n)
        var sum = Array(repeating: Array(repeating: 0, count: logK), count: n)
        
        for x in 0..<n {
            lastReceiver[x][0] = receiver[x]
            sum[x][0] = receiver[x]
        }
        
        for i in 1..<logK {
            for x in 0..<n {
                let last = lastReceiver[x][i - 1]
                lastReceiver[x][i] = lastReceiver[last][i - 1]
                sum[x][i] = sum[x][i - 1] + sum[last][i - 1]
            }
        }
        
        var maxFunctionValue = 0
        for x in 0..<n {
            var k = k
            var currentX = x
            var functionValue = x
            
            for i in 0..<logK {
                if k & (1 << i) != 0 {
                    functionValue += sum[currentX][i]
                    currentX = lastReceiver[currentX][i]
                }
            }
            
            maxFunctionValue = max(maxFunctionValue, functionValue)
        }
        
        return maxFunctionValue
    }
}

```