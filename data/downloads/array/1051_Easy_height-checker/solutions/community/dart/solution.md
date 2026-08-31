# Easy One!

**Author:** jasijasu959
**Votes:** 3
**Link:** [https://leetcode.com/problems/height-checker/solutions/5287184/](https://leetcode.com/problems/height-checker/solutions/5287184/)

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
  int heightChecker(List<int> heights) {
    
    int count = 0;
    List<int> store = heights.toList()..sort();

    for(int i = 0 ; i < heights.length ; i++){
        if(heights[i] == store[i]){
            continue;
        }else{
            count++;
        }
    }
    return count;
  }
}
```