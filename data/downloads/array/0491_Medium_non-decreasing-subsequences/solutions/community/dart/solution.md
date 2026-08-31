# Dart solution

**Author:** Marat_Ramazanov
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/3844211/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/3844211/)

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
List<List<int>> findSubsequences(List<int> nums) {
  List<List<int>> result = [];

  void findSubsequenceRecursion(int index, List<int> path) {
    if(index == nums.length) {
      if(path.length > 1) {
        result.add(List.from(path));
      }
      return;
    }

    // \u041D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043F\u043E\u0434\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C
    findSubsequenceRecursion(index + 1,  path);

    // \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043F\u043E\u0434\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C
    if(path.isEmpty || nums[index] >= path.last) {
      path.add(nums[index]);
      findSubsequenceRecursion(index + 1, path);
      path.removeLast();
    }
  }

  findSubsequenceRecursion(0, []);

  List<List<int>> uniqueList = removeDuplicateLists(result);

  return uniqueList;
}

List<List<int>> removeDuplicateLists(List<List<int>> twoDimList) {
  List<List<int>> uniqueList = [];
  for (var sublist in twoDimList) {
    if (!listContainsList(uniqueList, sublist)) {
      uniqueList.add(sublist);
    }
  }
  return uniqueList;
}

bool listContainsList(List<List<int>> list, List<int> sublist) {
  for (var element in list) {
    if (listEquals(element, sublist)) {
      return true;
    }
  }
  return false;
}

bool listEquals(List<int> list1, List<int> list2) {
  if (list1.length != list2.length) {
    return false;
  }

  for (int i = 0; i < list1.length; i++) {
    if (list1[i] != list2[i]) {
      return false;
    }
  }
  return true;
}
}
```