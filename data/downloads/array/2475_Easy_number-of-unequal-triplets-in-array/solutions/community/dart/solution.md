# dart solution

**Author:** jincykp
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/6063308/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/6063308/)

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
```dart []
class Solution {
  int unequalTriplets(List<int> numb) {
      int count=0;
    for(int i=0;i<numb.length-2;i++){
        for(int j=i+1;j<numb.length-1;j++){
            for(int k=j+1;k<numb.length;k++){
                if(numb[i] != numb[j] && numb[i] != numb[k] && numb[j] != numb[k] ){
                    count++;
                }
            }
        }
    }
    return count;
  }
}
```