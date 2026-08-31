# Swift Solution (Using GCD and Sorting array)

**Author:** imamatov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/2299490/](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/2299490/)

---

```
class Solution {
    func minOperations(_ nums: [Int], _ numsDivide: [Int]) -> Int {
        var nums=nums.sorted()
		
        var div=numsDivide.reduce(0){a, b in  gcd(a, b)}
		
        for i in 0..<nums.count{
            if (div % nums[i] == 0){
                return i
            }
         }
		 
        return -1
    }
	
    func gcd(_ a:Int, _ b:Int)->Int { return b == 0 ? a : gcd(b, a % b); }
}
```