# simple dimple

**Author:** sayedadinan
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-candies/solutions/4632296/](https://leetcode.com/problems/distribute-candies/solutions/4632296/)

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
  int distributeCandies(List<int> candyType) {
   int n=candyType.length ~/2;//length divided by two
   Set<int>s=candyType.toSet();//taking unique values by converting to set
   return n < s.length ? n : s.length ; // if(n<s.length){return n}else{return s.length}
   }
  }
}
```