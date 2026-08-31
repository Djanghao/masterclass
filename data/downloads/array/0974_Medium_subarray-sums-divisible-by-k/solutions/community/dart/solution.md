# Dart concise 100%🔥🚀✅

**Author:** Mahmoud_Zakaria
**Votes:** 1
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/3074334/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/3074334/)

---


If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int subarraysDivByK(List<int> nums, int k) {
      List<int> count = List<int>.filled(k,0);
      count[0] = 1 ;
      int res =0, prefix=0;
      for(int n in nums){
          prefix = (prefix + n % k + k) % k ;
          res += count[prefix]++ ;
      }
      return res ;

  }
}
```


Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)


