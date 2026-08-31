# Dart, solution using a Priority Queue

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/5056632/](https://leetcode.com/problems/maximum-subsequence-score/solutions/5056632/)

---

# Approach
- Store pairs of nums1 and nums2 into an array. Sort it based on value of nums2.
- Find the sum of subsequence of k elements of nums1 and multiply it with subsequent minimum value of nums2
- Use a priority queue to store nums1 of k length to find the value of (sum * min_nums2)

# Note
While the PriorityQueue class is part of the Dart standard librairies, it is not available on Leetcode where only uses Core librairies can be used. 
I re-created a basic PriorityQueue class by using the SplayTreeMap() class. The performance is slighlty slower but fast enough to not exceed the time limit allowed.

# Complexity
- Time complexity: O(n log n)
- Space complexity: O(n)

# Code
```
import 'dart:collection';

class Solution {
  int maxScore(List<int> nums1, List<int> nums2, int k) {
    int n = nums1.length;
    var ess = List.generate(n, (i) => [nums2[i], nums1[i]], growable: false);
    ess.sort((a, b) => b[0] - a[0]);
    var pq = PriorityQueue<int>();
    int maxScore = 0, sumSpeed = 0;
    for (var [efficiency, speed] in ess) {
      pq.add(speed);
      sumSpeed += speed;
      if (pq.length > k) {
        sumSpeed -= pq.removeFirst();
      }
      if (pq.length == k) {
        maxScore = max(maxScore, sumSpeed * efficiency);
      }
    }
    return maxScore;
}

class PriorityQueue<T> {
  var pq = SplayTreeMap<T, int>();
  var length = 0;

  void add(key) {
    pq[key] = (pq[key] ?? 0) + 1;
    length++;
  }

  T removeFirst() {
    var key = pq.keys.first;
    pq[key] = pq[key]! - 1;
    if (pq[key]! == 0) pq.remove(key);
    length--;
    return key;
  }
}
```