# Swift - Greatest Common Divisor

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/5257032/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/5257032/)

---

# Intuition
To solve this problem, the idea is to find a point in the array where the product of the elements to the left and the product of the elements to the right are coprime. Two numbers are coprime if their greatest common divisor (GCD) is 1, meaning they have no common prime factors.

# Approach
1. Prime Factor Counting: For each element in the array, compute its prime factors.
2. Prefix and Suffix Factor Counts: Maintain dictionaries to count the prime factors in the prefix and suffix parts of the array.
3. Sliding Window Update: As we move the split point from left to right, update the prefix and suffix prime factor counts.
4. Check for Common Factors: At each split point, check if the prefix and suffix parts share any common prime factors. If they do not share any common prime factors, then the split is valid.

# Complexity
- Time complexity:
The time complexity is proportional to the number of elements in the array multiplied by the square root of the maximum element in the array. This is because prime factorization for each number takes time proportional to the square root of the number, and we perform this factorization for each element in the array.

- Space complexity:
The space complexity is proportional to the number of elements in the array multiplied by the logarithm of the maximum element in the array. This is because we need to store the prime factors for each element, and a number can have at most a logarithmic number of prime factors.

# Code
```
class Solution {
    func findValidSplit(_ nums: [Int]) -> Int {
        let n = nums.count
        
        // Helper function to get prime factors of a number
        func getPrimeFactors(_ num: Int) -> [Int] {
            var n = num
            var factors = [Int]()
            var divisor = 2
            while n >= divisor * divisor {
                if n % divisor == 0 {
                    factors.append(divisor)
                    while n % divisor == 0 {
                        n /= divisor
                    }
                }
                divisor += 1
            }
            if n > 1 {
                factors.append(n)
            }
            return factors
        }
        
        // Count prime factors for each element
        var primeFactorCounts = Array(repeating: [Int: Int](), count: n)
        for i in 0..<n {
            let factors = getPrimeFactors(nums[i])
            for factor in factors {
                primeFactorCounts[i][factor, default: 0] += 1
            }
        }
        
        // Track prime factor counts for prefix and suffix
        var prefixFactors = [Int: Int]()
        var suffixFactors = primeFactorCounts.reduce(into: [Int: Int]()) { result, factors in
            for (factor, count) in factors {
                result[factor, default: 0] += count
            }
        }
        
        // Try to find a valid split
        for i in 0..<n-1 {
            // Update prefix and suffix factor counts
            for (factor, count) in primeFactorCounts[i] {
                prefixFactors[factor, default: 0] += count
                suffixFactors[factor, default: 0] -= count
                if suffixFactors[factor] == 0 {
                    suffixFactors.removeValue(forKey: factor)
                }
            }
            
            // Check for common prime factors
            var hasCommonFactor = false
            for factor in prefixFactors.keys {
                if suffixFactors.keys.contains(factor) {
                    hasCommonFactor = true
                    break
                }
            }
            
            if !hasCommonFactor {
                return i
            }
        }
        
        return -1
    }
}
```
# ;)
If you found this helpful, please give it a like!