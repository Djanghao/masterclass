# Dart - Simple solution with comments

**Author:** hyungzin
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4194239/](https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4194239/)

---

# Intuition
Simple problem solving using hashmaps and xor operations.
I have little experience in creating solutions, so I'm quite inadequate.
If you have any questions or improvements, please leave a comment.

# Approach
The xor operation is that the law of exchange holds
Based on the proviso to find a coordinate pair with distance(i,j) == k and i<j in the conditions in question (in order). For example (2, 3) pairs are possible (3, 2) pairs are not)
Leverage HashMap and xor operations

# Complexity
- Time complexity:
O(nk)
k <=100, so it's okay to handle the constant
In conclusion, it's okay to look at it as O(n)


- Space complexity:
O(n)

# Code
```
class Solution {
  int countPairs(List<List<int>> coordinates, int k) {
      final hm = <String, int>{};
      int res = 0;
    //   Counting the number of appearances in Map, separated by commas
      for (final c in coordinates){
          hm['${c[0]},${c[1]}'] ??= 0;
          hm['${c[0]},${c[1]}'] = hm['${c[0]},${c[1]}']! + 1;
      }
      for (final c in coordinates){
        //   The condition has the number of pairs (i, j) much that i < j, which affects the order
        //  Therefore, remove the coordinate friend once used from the count
          hm['${c[0]},${c[1]}'] = hm['${c[0]},${c[1]}']! - 1;
          for (int i = 0; i <= k; i++){
              final l = i;
              final r = k - i;
            //   The law of exchange holds for xor
            //  Therefore, to find a coordinate pair with a distance k, we reversely perform an xor operation on k
            //  If Map has the right coordinates for that distance, add the number to the answer
              res += hm['${l ^ c[0]},${r ^ c[1]}'] ?? 0;
          }
      }
    //    Tada~
      return res;

  }
}
```