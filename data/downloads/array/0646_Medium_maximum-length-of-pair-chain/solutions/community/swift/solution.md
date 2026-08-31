# ✅ [Swift, C++, Python, Java]: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/3961537/](https://leetcode.com/problems/maximum-length-of-pair-chain/solutions/3961537/)

---


# Complexity
- Time complexity: $$O(sort)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(sort)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Swift
```
class Solution {
    func findLongestChain(_ pairs: [[Int]]) -> Int {
        var (ans, prevEnd) = (0, Int.min)
        
        for pair in pairs.sorted(by: { $0[1] < $1[1] }){
            if pair[0] > prevEnd {
                ans += 1
                prevEnd = pair[1]
            }
        }
        
        return ans
    }
}

```
# C++
```
class Solution {
 public:
  int findLongestChain(vector<vector<int>>& pairs) {
    int ans = 0;
    int prevEnd = INT_MIN;

    sort(pairs.begin(), pairs.end(),
         [](const auto& a, const auto& b) { return a[1] < b[1]; });

    for (const vector<int>& pair : pairs)
      if (pair[0] > prevEnd) {
        ++ans;
        prevEnd = pair[1];
      }

    return ans;
  }
};

```
# Python
```
class Solution:
  def findLongestChain(self, pairs: List[List[int]]) -> int:
    ans = 0
    prevEnd = -math.inf

    for s, e in sorted(pairs, key=lambda x: x[1]):
      if s > prevEnd:
        ans += 1
        prevEnd = e

    return ans

```
# Java
```
import java.util.Arrays;

class Solution {
  public int findLongestChain(int[][] pairs) {
    int ans = 0;
    int prevEnd = Integer.MIN_VALUE;

    Arrays.sort(pairs, (a, b) -> a[1] - b[1]);

    for (int[] pair : pairs)
      if (pair[0] > prevEnd) {
        ++ans;
        prevEnd = pair[1];
      }

    return ans;
  }
}

```