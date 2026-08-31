# JavaScript Solution : Time O(n), Space: O(n)

**Author:** sam_coder
**Votes:** 7
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/1203104/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/1203104/)

---

```
var deleteDuplicatesUnsorted = function(ll) {
  let map = {}
  let current = ll

  //traverse and fill my map with node occurences
  while(current){
    if(!map[current.val]){
      map[current.val] = 1
    }else{
      map[current.val]++
    }
      current = current.next
  }
   

  //traverse the list and delete where necessary
  let dummyHead = new ListNode(0, ll)
  current = dummyHead
  while(current){
    //check for duplicates 
    while(current.next && map[current.next.val] > 1){
      current.next = current.next.next
    }

    current = current.next
  }

  return dummyHead.next
    
};

//Time: O(2n) -> O(n)
//Space: O(n)

```