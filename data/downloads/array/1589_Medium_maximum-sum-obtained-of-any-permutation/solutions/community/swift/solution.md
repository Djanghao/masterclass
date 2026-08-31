# Swift - greedy and prefix sum with explanation

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/6038679/](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/6038679/)

---

# Code
```swift []
class Solution {
    func maxSumRangeQuery(_ nums: [Int], _ requests: [[Int]]) -> Int {
        //we need to maximize the sum based on frequency. Since we can use any permutation , we can greedily choose numbers based on frequencies.
        //So first we need to know for each index, whats the frequencies based on requests.
        //then we assign largest num in nums to largest frequency so that we get maximum sum overall.

        //how to get frequencies at each index. - prefix sum
        let n = nums.count
        var nums = nums
        var freq = Array(repeating: 0, count : n)

        for request in requests {
            let (start, end) = (request[0], request[1])
            freq[start] += 1 
            if end + 1 < n {
                freq[end + 1] -= 1 
            }
        }

        //prefix sum gives the actual times, each index is requested based on requests array
        for i in 1..<n {
            freq[i] += freq[i-1] //prefix sum
        }

        freq.sort()
        nums.sort() //sort in ascending order

        var sum = 0
        for (num, freq) in zip(nums, freq) {
            sum += num * freq
        }
        return sum % Int(1e9 + 7)
    }
}
```