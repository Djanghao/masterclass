# Binary Search. Time: O(N* logN); Space: O(K)

**Author:** playability
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/4311139/](https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/4311139/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The function said to be monotonically increasing with respect to `x` and `y`, A brute force is to be, for every `x` in `[1...1000]` check if there is an `y` in `[1...1000]`. This is `O(N^2)` time compexity. 
The next (smaller) time complexity could be `O(N * logN)`, which suggests we can optimize of searching for `y` while monotonically increase the value of `x`. 

# Approach
<!-- Describe your approach to solving the problem. -->
For every `x` in `[1...1000]` we do a binary search of `y`, and exit the search once we find the match, by adding the pair of `x` and `y` to the answers array. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(N * logN)` - linear search of `x` combined with binary search of `y`

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(K)` where `K` is number of answers to return.

# Code
```
class Solution {
    func findSolution(_ customfunction: CustomFunction, _ z: Int) -> [[Int]] {
        var pairs: [[Int]] = []

        for x in 1...1000 {
            var minY = 1
            var maxY = 1000
            while minY < maxY {  
                let midY = minY + (maxY - minY) / 2 
                let guess = customfunction.f(x, midY) 
                
                if guess == z {
                    // store the pair
                    pairs.append([x, midY])
                    break
                } 

                if guess > z { 
                    // decrease X
                    maxY = midY 
                } else {
                    // increase X
                    minY = midY + 1
                }
            }
        }

        return pairs
    }
}
```