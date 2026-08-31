# Dart implementation O(2^N * ln(2^N)) = O(N * 2^N) where n <= 2^15

**Author:** yakiv_galkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/2912761/](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/2912761/)

---

# Intuition
I follow the hints and the meet in the middle approach. the rest is simple.

# Approach
One tricky thing came up in one of the test cases - is that the total sum/2 might be decimal (non integer). As a result I changed my code to store target sum as double and solution was immediately accepted.


# Complexity
- Time complexity:
O(N * 2^N) 

- Space complexity:
O(2^N) to store all sums

# Code
```

class Solution {
  void dfs(List<int> nums, int end, int i, int k, int sum, List<Set<int>> res) {
    if (i == end) {
      res[k].add(sum);
      return;
    }
    dfs(nums, end, i + 1, k + 1, sum + nums[i], res);
    dfs(nums, end, i + 1, k, sum, res);
  }

  static const double BIG_NUM = 1000000000;

  int leftBoundIndex(List<int> sorted, double target) {
    int l = 0;
    int r = sorted.length;
    while (l < r) {
      int mid = (l + r) ~/ 2; //floor
      if (target > sorted[mid])
        l = mid + 1;
      else
        r = mid;
    }
    return l;
  }

  int minimumDifference(List<int> nums) {
    int N = nums.length ~/ 2;
    double total = nums.reduce((a, b) => a + b) / 2;
    final s1 = List<Set<int>>.generate(N + 1, (index) => Set<int>());
    final s2 = List<Set<int>>.generate(N + 1, (index) => Set<int>());
    //void dfs(List<int> nums, int end, int i, int k, int sum, List<Set<int>> res)
    dfs(
        nums,
        N,
        0, //i
        0, // k
        0, // sum
        s1); // res
    dfs(
        nums,
        N * 2,
        N, //i
        0, //k
        0, //sum
        s2);
    final a2 =
        List<List<int>>.generate(N + 1, (index) => s2[index].toList()..sort());
    double diff = BIG_NUM;
    for (int k = 0; k <= N; k++) {
      for (var v1 in s1[k]) {
        final l2 = a2[N - k];
        int cmpIndex = leftBoundIndex(l2, total - v1);
        if (cmpIndex < l2.length)
          diff = min(diff, (total - (v1 + l2[cmpIndex])).abs());
      }
    }
    return (diff * 2).toInt();
  }
}

```