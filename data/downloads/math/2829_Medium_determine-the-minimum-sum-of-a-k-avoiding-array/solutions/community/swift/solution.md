# Swift soltuion 0 ms

**Author:** Prrrr
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/6086923/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/6086923/)

---

# Intuition
Sums of pairs to get to number k always consist of number that is less and more than half, so we can only include the numbers that are equal or less than half.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Adding numbers to array from 1 until half of k, then adding remaining numbers starting from k until lenght of n is reached.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func minimumSum(_ n: Int, _ k: Int) -> Int {
        //special case for better runtime :)
        if n == 1 {
          return 1
        }
    
        //standard logic
        var half = k/2
        var sum = 0

        if half >= n || k == 1 {//adding numbers until n
            for i in 1...n {
                sum += i
            }
            
        }
        else {
            var count = 0
            for i in 1...half { //addind numbers from 1 to half
                sum += i
                count += 1
            }

            var nextNumber = k
            if half == k{ //avoiding adding k twice
              nextNumber = k + 1
            }
            
            while count < n { //numbers from k until needed lenght is reacghed
                sum += nextNumber
                nextNumber += 1
                count += 1
            } 
        }
        return sum
    }
}
```