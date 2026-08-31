# Sliding Window Using Dart

**Author:** user7097xf
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/4963363/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/4963363/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:math';
class Solution {
  int minimumRecolors(String blocks, int k) {
    int minCount =1000;
    int count =0;
    for(int i=0;i<k;i++){
        if(blocks[i]=="W"){
            count++;
        }
    }
    minCount =count;

    for(int i =k;i<blocks.length;i++){
        if(blocks[i-k]=="W"){
            count--;
        }
        if(blocks[i]=="W"){
            count++;
        }
        minCount= min(minCount,count);
    }
return minCount;
  }
}
```