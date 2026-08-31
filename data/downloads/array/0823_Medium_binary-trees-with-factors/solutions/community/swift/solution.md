# DP Approach: Swift

**Author:** tywysocki
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-trees-with-factors/solutions/4212160/](https://leetcode.com/problems/binary-trees-with-factors/solutions/4212160/)

---

# Intuition
The problem can be solved using dynamic programming. We can consider each integer in the array as a potential root for a binary tree. For each root, we need to count the number of binary trees that can be created with that root. The key insight is that for each pair of integers where one is the divisor of the other, we can compute the number of binary trees they contribute. We can then sum up these possibilities to get the total count.

# Approach
1. Sort the input array `arr` in ascending order. Sorting is necessary to ensure that we consider smaller numbers as potential roots first.
2. Initialize a dictionary `dp` to store the number of binary trees that can be created for each value in the array. Set each number's count to 1 initially since each number itself can be a binary tree with one node.
3. Iterate through the sorted array:
   - For each integer `arr[i]` at index `i`, iterate through the previous integers `arr[j]` from index 0 to `i-1`.
   - Check if `arr[i]` is divisible by `arr[j]` (i.e., `arr[i] % arr[j] == 0`).
   - If it is divisible, calculate the quotient as `arr[i] / arr[j]`.
   - Check if the quotient exists in the `dp` dictionary. If it does, update `dp[arr[i]]` by adding the product of the counts of `arr[j]` and `quotient` to it.
4. After the iteration, `dp[arr[i]]` will represent the number of binary trees that can be created with `arr[i]` as the root.
5. Sum up all the values in the `dp` dictionary to get the total number of binary trees.
6. Return the total count modulo 10^9 + 7 as the answer.

# Complexity
- Time complexity: $O(n^2)$ where $n$ is the number of elements in the input array. This is because, in the worst case, we iterate through the array twice, and each iteration can take up to $O(n)$ time.
- Space complexity: $O(n)$ to store the `dp` dictionary, which is proportional to the size of the input array.

# Code
```swift
class Solution {
    func numFactoredBinaryTrees(_ arr: [Int]) -> Int {
        let MOD = 1_000_000_007
        var sortedArr = arr.sorted()
        var dp = [Int: Int]()
        
        for i in 0..<sortedArr.count {
            dp[sortedArr[i]] = 1
            for j in 0..<i {
                if sortedArr[i] % sortedArr[j] == 0 {
                    let quotient = sortedArr[i] / sortedArr[j]
                    if dp.keys.contains(quotient) {
                        dp[sortedArr[i]] = (dp[sortedArr[i]]! + dp[sortedArr[j]]! * dp[quotient]!) % MOD
                    }
                }
            }
        }
        
        var totalTrees = 0
        for value in dp.values {
            totalTrees = (totalTrees + value) % MOD
        }
        
        return totalTrees
    }
}
