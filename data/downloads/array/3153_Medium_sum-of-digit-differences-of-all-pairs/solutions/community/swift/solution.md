# Beat 100% Easiest Swift Solution

**Author:** Shomil_03
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5193443/](https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5193443/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func sumDigitDifferences(_ nums: [Int]) -> Int {
        var sum = 0;
        var num = nums;
        while(num[0] > 0) {
            var arr = Array(repeating : 0 , count :  10)
            for i in 0 ..< num.count {
                let d = num[i]%10;
                arr[d] += 1;
                num[i] /= 10;
            }
            for i in 0 ..< 10 {
                if(arr[i] == 0){
                    continue;
                }

                for j in i+1 ..< 10 {
                    if(arr[j]==0) {
                        continue;
                    }
                    let count = arr[i] * arr[j];
                    sum += count;
                }
               
            }
        }
        return sum;
    }
}
```