# Dart....!

**Author:** 0varun
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/4473059/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/4473059/)

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
  int numDifferentIntegers(String word) {
      BigInt number = BigInt.parse('0');
      int count = 0;
      List<dynamic> f = [];
      for(int i = 0; i < word.length; i++){
        if(word[i] == '0' || word[i] == '1' || word[i] == '2' || word[i] == '3' || word[i] == '4' || word[i] == '5' || word[i] == '6' || word[i] == '7' || word[i] == '8' || word[i] == '9' ){
          count++;
          number = number*BigInt.parse('10')+BigInt.parse(word[i]);
        } else {
          if(count > 0){
            f.add(number);
          }
          count = 0;
          number = BigInt.parse('0');
        }
      }
      count > 0 ? f.add(number) : count = 0;
      var ret = f.toSet();
      return ret.length;
  }

  }

```