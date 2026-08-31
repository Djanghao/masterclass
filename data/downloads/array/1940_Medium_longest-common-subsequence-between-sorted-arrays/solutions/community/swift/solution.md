# 💯 Beats 100%, short and simple array, full explanation

**Author:** amt93
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solutions/5308058/](https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solutions/5308058/)

---

# Approach
1) We find the maximum possible value in the shared subsequence by taking the last value of the first array. This works because each input is sorted in increasing order. The index of the array is the original value itself, and the value of the counts array is just that: its count
2) We iterate through each array only up until that max and count each found value. __Efficiency could possibly be improved if you cut down the original counts each time a smaller max is found__, but it may not manifest in the test cases
3) We return any value that occurs in each array, i.e. the indexes that have a value equal to arrays.count


# Complexity
- Time complexity:
$$O(n * m)$$
n = arrays.count
m = maximum

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    func longestCommonSubsequence(_ arrays: [[Int]]) -> [Int] {
        let maximum = arrays.first!.last!
        var counts = Array(repeating: 0, count: maximum + 1)
        for arr in arrays {
            for num in arr where num <= maximum {
                counts[num] += 1
            }
        }
        
        return counts.indices.filter { counts[$0] == arrays.count }
    }
}
```

# Possible optimization (mentioned above)
 This ran the same time for me, but might be better in other similar questions
```
class Solution {
    func longestCommonSubsequence(_ arrays: [[Int]]) -> [Int] {
        var maximum = arrays.first!.last!
        var counts = Array(repeating: 0, count: maximum + 1)
        for arr in arrays {
            for (i, num) in arr.enumerated() where num <= maximum {
                counts[num] += 1
                if i == arr.count - 1, num < maximum {
                    maximum = num
                }
            }
        }
        
        return counts.indices[0...maximum].filter { counts[$0] == arrays.count }
    }
}
```