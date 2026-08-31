# Simple Dart Solution

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/3550370/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/3550370/)

---


# Approach
Place the values in the linked list into an array then iterate through it in reverse order. If the given values it a 1 then add 2^n-i to the return value where n it the length of the array and i is the current index thus finding the distance from the end.
# Complexity
- Time complexity:
O(n)

# Code
```
class Solution {
  int getDecimalValue(ListNode? head) {
    List<int> vals = [];
    while(head != null){
      vals.add(head.val);
      head = head.next;
    }
    int return_val = 0;
    int itr = 0;
    for(int i = vals.length -1 ; i >= 0 ; --i){
      if(vals[i] == 1){
        return_val += (pow(2 , itr)).toInt();
      }
      itr += 1;
    }
    return return_val;
  }
}
```