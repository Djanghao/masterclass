# Simple Solution in Swift

**Author:** fatmanblues
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/4599363/](https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/4599363/)

---

# Intuition
1. Find the largest K numbers in the array
2. If the sum of the largest K numbers is even. End the search. 
3. Else: 
   a. Substitute the minimum value odd number in the above set with maximum even value(if exists) in the remaining set and check the sum
   b. Substitute the minimum value even number in the above set with maximum odd value(if exists) in the remaining set
6. Note the value of the largest sum for the above cases 

# Approach
Sort the array and use the above approach. The runtime can be improved by substituting the sort with binary search

# Complexity
- Time complexity:
O(n) + the complexity of the search

- Space complexity:
O(n) as no additional space is used

# Code
```
class Solution {
    func largestEvenSum(_ nums: [Int], _ k: Int) -> Int {
    var largestEvenSum = -1
    var sortedNums = nums.sorted() as [Int]
    
    let arrWithKElements = sortedNums[(sortedNums.count - k)..<(sortedNums.count)]
    var sumOfKElements = arrWithKElements.reduce(0, +)
    
    if sumOfKElements % 2 == 0 {
        if largestEvenSum < sumOfKElements {
            largestEvenSum = sumOfKElements
        }
    } else {
        if (k < sortedNums.count) {
            let arrWithRemainingElements = sortedNums[0...((sortedNums.count - k) - 1)]
            
            if let minOdd = arrWithKElements.compactMap({ $0 % 2 != 0 ? $0 : nil}).min() {
                if let maxEven = arrWithRemainingElements.compactMap({ $0 % 2 == 0 ? $0 : nil}).max() {
                    let newSum = sumOfKElements - minOdd + maxEven
                    if largestEvenSum < newSum {
                        largestEvenSum = newSum
                    }
                }
            }
            if let minEven = arrWithKElements.compactMap({ $0 % 2 == 0 ? $0 : nil}).min() {
                if let maxOdd = arrWithRemainingElements.compactMap({ $0 % 2 != 0 ? $0 : nil}).max() {
                    let newSum = sumOfKElements - minEven + maxOdd
                    if largestEvenSum < newSum {
                        largestEvenSum = newSum
                    }
                }
            }
        }
    }
    return largestEvenSum
    }
}
```