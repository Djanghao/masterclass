# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/3892249/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/3892249/)

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

class Answer {
    double val;
    List<int> res;

    Answer(this.val, this.res);
}

class Solution {
  List<int> kthSmallestPrimeFraction(List<int> arr, int k) {
      final List<Answer> ans = [];
      for (int i = 0; i < arr.length; i++) {
          for (int j = i + 1; j < arr.length; j++) {
              ans.add(Answer(arr[i]/arr[j], [arr[i], arr[j]]));
          }
      }
      ans.sort((a, b) {
          return a.val.compareTo(b.val);
      });
      return ans[k - 1].res;
  }

}


```