# Dart solution.

**Author:** henrik1995
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/3193300/](https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/3193300/)

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
  List<int> closestPrimes(int left, int right) {
   List<int>  primes = [];
   Map<int, List<int>> diffs = {};
      for( var i = left ; i <= right; i++) { 
         if(isPrime(i)){
            if(primes.isEmpty){
                primes.add(i);
            } else {
                final diff = i - primes.last;
                if(diffs[diff] == null) {
                    diffs[diff] = [primes.last, i];
                }
                primes.add(i);
                if(diffs[1] != null){
                    return diffs[1]!;
                }
                if(diffs[2] != null){
                    return diffs[2]!;
                }
            }
         } 
      }
      return diffs.keys.isEmpty ? [-1, -1] : diffs[diffs.keys.toList().reduce(min)]!;
  }

  bool isPrime(int num){
   if (num <= 1){
      return false;
   }
   for (int j = 2; j <= num/2; j++){
      if (num % j == 0) { 
          return false;
     }
   }
   return true;
}
}
```