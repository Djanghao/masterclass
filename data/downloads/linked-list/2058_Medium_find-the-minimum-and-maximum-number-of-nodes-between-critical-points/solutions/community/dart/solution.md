# dart solution

**Author:** muhammedsinan8446
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5423232/](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5423232/)

---



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
List<int>
   nodesBetweenCriticalPoints(ListNode? head) {

    int min =-1;
    int max =-1;

ListNode? temp = head;
// int countx = 0;
// int county= 0;
int index=1;
List<int> indexes=[];

while (temp != null) {
  ListNode? ref = temp.next;
  if (ref != null && ref.next != null) {
    if (temp.val > ref.val && ref.val < ref.next!.val) {
      
indexes.add(index+1);
    //   countx++;
    }else if(temp.val < ref.val && ref.val > ref.next!.val){
         
           indexes.add(index+1);
        // county++;
    }

  }

  index++;
  temp = temp.next; 
}

if(indexes.length>1){
    min = indexes[1]-indexes[0];
    max = indexes.last- indexes.first;
}


for(int i=1;i<indexes.length-1;i++){
    min = customMin(min,indexes[i+1]-indexes[i]);
}

 return [min, max];
  }

  customMin(int i, int j){
        return i<j?i:j;
  }

}
```