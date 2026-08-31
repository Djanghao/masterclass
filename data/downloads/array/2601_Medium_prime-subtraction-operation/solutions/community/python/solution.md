# Very Easy | Reverse Traversed | Beats 100% | Java,C++,Python,C#,Swift | Solution for LeetCode#2601

**Author:** samir023041
**Votes:** 31
**Link:** [https://leetcode.com/problems/prime-subtraction-operation/solutions/6032566/](https://leetcode.com/problems/prime-subtraction-operation/solutions/6032566/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem appears to involve adjusting elements of the array nums such that they satisfy a certain condition, likely ensuring that nums remains in strictly increasing order by performing prime number subtraction operations.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Prime Numbers:** A precomputed list of prime numbers is provided in the primes array, which covers prime values up to 997.
2. **Reverse Iteration:** The algorithm iterates through nums in reverse (from the second-to-last element to the first).
	- If an element nums[i] is greater than or equal to nums[i + 1], an adjustment is needed.
	- The algorithm tries to find the largest prime number p in the range [l, h) such that subtracting p from nums[i] keeps nums[i] smaller than nums[i + 1].
3. **Prime Selection:** The getPrime method finds a suitable prime number in the specified range.
	- If no such prime is found (p == h), the operation is impossible, and the method returns false.
	- Otherwise, the prime number is subtracted from nums[i].
	
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public boolean primeSubOperation(int[] nums) {
        int[] primes = {2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997};

        int n=nums.length;
        int l=0, h=0;
        for(int i=n-2; i>=0; i--){
            if(nums[i]>=nums[i+1]){
                l=nums[i]-(nums[i+1]-1);
                h=nums[i];
                int p=getPrime(primes, l, h);
                if(p==h){
                    return false;
                }
                else{
                    nums[i]=nums[i]-p;
                }
            }
        }

        return true;
    }

    int getPrime(int[] primes, int l, int h){
        for(int i=0; i<primes.length; i++){
            if(l<=primes[i] && primes[i]<h){
                return primes[i];
            }
        }
        return h;
    }
}
```
```cpp []
#include <vector>
using namespace std;

class Solution {
public:
    bool primeSubOperation(vector<int>& nums) {
        vector<int> primes = {
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 
            71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 
            151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 
            233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 
            317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 
            419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 
            503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 
            607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 
            701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 
            811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 
            911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997
        };

        int n = nums.size();
        int l = 0, h = 0;
        for (int i = n - 2; i >= 0; i--) {
            if (nums[i] >= nums[i + 1]) {
                l = nums[i] - (nums[i + 1] - 1);
                h = nums[i];
                int p = getPrime(primes, l, h);
                if (p == h) {
                    return false;
                } else {
                    nums[i] = nums[i] - p;
                }
            }
        }
        return true;
    }

private:
    int getPrime(const vector<int>& primes, int l, int h) {
        for (int prime : primes) {
            if (l <= prime && prime < h) {
                return prime;
            }
        }
        return h;
    }
};
```
```python []
class Solution:
    def primeSubOperation(self, nums):
        primes = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
            71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
            151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
            233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
            317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
            419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499,
            503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601,
            607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691,
            701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809,
            811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907,
            911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997
        ]

        n = len(nums)
        for i in range(n - 2, -1, -1):
            if nums[i] >= nums[i + 1]:
                l = nums[i] - (nums[i + 1] - 1)
                h = nums[i]
                p = self.getPrime(primes, l, h)
                if p == h:
                    return False
                else:
                    nums[i] -= p

        return True

    def getPrime(self, primes, l, h):
        for prime in primes:
            if l <= prime < h:
                return prime
        return h
```
```c# []
public class Solution {
    public bool PrimeSubOperation(int[] nums) {
        int[] primes = {
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 
            71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 
            151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 
            233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 
            317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 
            419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 
            503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 
            607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 
            701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 
            811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 
            911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997
        };

        int n = nums.Length;
        int l = 0, h = 0;
        for (int i = n - 2; i >= 0; i--) {
            if (nums[i] >= nums[i + 1]) {
                l = nums[i] - (nums[i + 1] - 1);
                h = nums[i];
                int p = GetPrime(primes, l, h);
                if (p == h) {
                    return false;
                } else {
                    nums[i] = nums[i] - p;
                }
            }
        }
        return true;
    }

    private int GetPrime(int[] primes, int l, int h) {
        foreach (int prime in primes) {
            if (l <= prime && prime < h) {
                return prime;
            }
        }
        return h;
    }
}
```
```swift []
class Solution {
    func primeSubOperation(_ nums: inout [Int]) -> Bool {
        let primes: [Int] = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
            71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
            151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
            233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
            317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
            419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499,
            503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601,
            607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691,
            701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809,
            811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907,
            911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997
        ]

        let n = nums.count
        for i in stride(from: n - 2, through: 0, by: -1) {
            if nums[i] >= nums[i + 1] {
                let l = nums[i] - (nums[i + 1] - 1)
                let h = nums[i]
                let p = getPrime(primes, l, h)
                if p == h {
                    return false
                } else {
                    nums[i] -= p
                }
            }
        }
        return true
    }

    private func getPrime(_ primes: [Int], _ l: Int, _ h: Int) -> Int {
        for prime in primes {
            if l <= prime && prime < h {
                return prime
            }
        }
        return h
    }
}
```