# [98.72%] One-pass Hash Table

**Author:** smarenkov
**Votes:** 20
**Link:** [https://leetcode.com/problems/two-sum/solutions/2497484/](https://leetcode.com/problems/two-sum/solutions/2497484/)

---

**Please upvote if it was helpful!**
```
class Solution {
  List<int> twoSum(List<int> nums, int target) {
    final map = <int, int>{};
      
    for (int x = 0; x <= nums.length - 1; x++) {
      int remains = target - nums[x]; //Calculate what number we need
      if (map.containsKey(remains)) { 
        return [x, map[remains]!];
      }
      map[nums[x]] = x;
    }
      
    return [];
  }
}
```
[Submission Detail](https://leetcode.com/submissions/detail/785806272/)