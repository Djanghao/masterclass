# Easy Solution

**Author:** Akshay_velur
**Votes:** 0
**Link:** [https://leetcode.com/problems/complement-of-base-10-integer/solutions/5406731/](https://leetcode.com/problems/complement-of-base-10-integer/solutions/5406731/)

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
  int bitwiseComplement(int n) {
    final binary=n.toRadixString(2);
    final myList=binary.split('');
    for(int i=0;i<myList.length;i++){
        if(myList[i]=='1'){
            myList[i]='0';
        }else{
            myList[i]='1';
        }
    }
    return int.parse(myList.join(),radix:2);
  }
}
```