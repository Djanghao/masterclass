# Dart Simple Solution

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/3509264/](https://leetcode.com/problems/spiral-matrix-iv/solutions/3509264/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
- Place node values in a matrix that is m * n in size until there are no more listnodes to place.
# Complexity
- Time complexity:
O(m*n)

# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  List<List<int>> spiralMatrix(int m, int n, ListNode? head) {
      int top_margin = 0;
      int right_margin = n - 1;
      int left_margin = 0;
      int bottom_margin = m-1;
      List<List<int>> return_list = [];
      for(int i = 0 ; i < m; ++i){
          return_list.add([]);
          for(int x = 0 ; x < n ; ++x){
              return_list[return_list.length - 1].add(-1);
          }
      }
      while(head != null){
          for(int i = left_margin ; i <= right_margin ; ++i){
              return_list[top_margin][i] = (head?.val ?? return_list[top_margin][i]);
              head = head?.next;
          }
          top_margin += 1;
          for(int i = top_margin; i <= bottom_margin ; ++i){
              return_list[i][right_margin] = (head?.val ?? return_list[i][right_margin]);
              head = head?.next;
          }
          right_margin-=1;

          for(int i = right_margin ; i >= left_margin ; --i){
              return_list[bottom_margin][i] = (head?.val ?? return_list[bottom_margin][i]);
              head = head?.next;
          }
          bottom_margin-=1;
          for(int i = bottom_margin ; i >= top_margin ; --i){
              return_list[i][left_margin] = (head?.val ?? return_list[i][left_margin]);
              head = head?.next;
          }
          left_margin += 1;
      }
      return return_list;
  }
}
```