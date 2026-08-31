# The easiest DART solution, 3 LINES

**Author:** Mohamed_Sadeck
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-number/solutions/4448750/](https://leetcode.com/problems/largest-number/solutions/4448750/)

---


# Code
```
class Solution {
  String largestNumber(List<int> nums) {
    List<String> stringList = nums.map((n)=>n.toString()).toList();
    stringList.sort((a,b)=> (b+a).compareTo(a+b));
    return int.tryParse(stringList.join())==0?'0':stringList.join();
  }
}
```