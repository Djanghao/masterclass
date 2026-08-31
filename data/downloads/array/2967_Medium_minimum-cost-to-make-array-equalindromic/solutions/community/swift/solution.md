# Brute force and string comparison

**Author:** gustilc
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/5614590/](https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/5614590/)

---

# Intuition
Search for the closer number to the Palindromic that cause the smaller cost.

# Approach
- Find the mediam, sort the list and choose the number in the middle.
- If the mediam isn't a Palindromic check for the closer from the left and the right and choose the one that cost the less.
    - In order to check if a number is a Palindromic we go for the visuall solution, convert it to a string and compate with its reverse.
    - In order to find the closer from the left and right we just go and check one number at the time to the left and right

# Complexity
- Time complexity:
    - Sort the nums is $O(n * log(n))$
    - Find the closer Palindromic, worse case $n$
    - Conclusion: $O(n * log(n))$

- Space complexity:
$O(1)$

# Code
```
class Solution {
    func minimumCost(_ nums: [Int]) -> Int {
        let nums = nums.sorted().map { $0 }
        let average =  nums[nums.count / 2] //nums.reduce(0) { $0 + $1} / nums.count

        if isPalinDrome(average) {
            // if mid is palindrome in sorted add them 
            return cost(nums, average)
        } else {
            // find first lower palindrome and next bigger palindrome 
            return min(
                cost(nums, leftPalinDrome(average)), 
                cost(nums, rightPalinDrome(average+1)) )
        }
    }

    private func leftPalinDrome(_ num: Int) -> Int {
        //print("leftPalinDrome \\(num)")
        if isPalinDrome(num) { return num }
        return leftPalinDrome(num - 1)
    }

    private func rightPalinDrome(_ num: Int) -> Int {
        //print("rightPalinDrome \\(num)")
        if isPalinDrome(num) { return num }
        return rightPalinDrome(num + 1)
    }
    
    private func isPalinDrome(_ num: Int) -> Bool {        
        "\\(num)" == String("\\(num)".reversed())
    }

    private func cost(_ nums: [Int], _ palindrome: Int) -> Int {
        nums.reduce(0) { $0 + abs($1 - palindrome) }
    }
}
```