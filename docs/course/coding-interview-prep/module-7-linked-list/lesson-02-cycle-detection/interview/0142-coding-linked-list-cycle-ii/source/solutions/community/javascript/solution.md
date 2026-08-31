# JavaScript Two Pointers w/ Extended Notes

**Author:** bramphft
**Votes:** 184
**Link:** [https://leetcode.com/problems/linked-list-cycle-ii/solutions/495311/](https://leetcode.com/problems/linked-list-cycle-ii/solutions/495311/)

---

```
var detectCycle = function(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            slow = head;
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}
```

The strategy here is to use two pointers, one slow (1 node per iternation)  and one fast( 2 nodes per iteration). 

First, we use the two pointer technique from [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)  to determine **IF** there is a cycle. 

If we discover a cycle we know a few things. 
1. The slow pointer and the fast pointer are at the same node. 
2. The fast pointer has traveled a further distance than the slow node. 

Envision a cycle set up like this....

**Initial Setup**
```
// S          5->6
// F         /    \\     
// 0->1->2->4      7
//           \\    /
//            9<-8  
```

**Iteration 1**
```
//            5->6
//    S  F   /    \\     
// 0->1->2->4      7
//           \\    /
//            9<-8

```

**Iteration 2**
```
//            F
//            5->6
//       S   /    \\     
// 0->1->2->4      7
//           \\    /
//            9<-8  
```

**Iteration 3**
```
//            5->6
//          S/    \\     
// 0->1->2->4      7F
//           \\    /
//            9<-8
```

**Iteration 4**
```
//            S
//            5->6
//           /    \\     
// 0->1->2->4      7
//           \\    /
//           F9<-8 
```

**Iteration 5**
```
//            F  S
//            5->6
//           /    \\     
// 0->1->2->4      7
//           \\    /
//            9<-8
```

**Iteration 6**
```
//            5->6
//           /    \\     
// 0->1->2->4      7SF
//           \\    /
//            9<-8 
```

If we followed the two pointer technique to discover a cycle we would find that the slow pointer and the fast pointer meet at node `7`.  

Knowing this allows us to make a formula that gives us our answer. 

**D** = the distance from the beginning of the linked list to the node that starts the cycle ( ie - `0->1->2->4 `

**P** = the distance from the node that starts the cycle to the position where the slow pointer equals the fast pointer . `4->5->6->7`

**X** = the total distance from the beginning of the list to **P** `0->1->2->4->5->6->7 `

**R** = the remaining distance from **P** back to **D** `7->8->9->4`

**T** = the total distance from the beginning of the list to the node that starts the cycle `0->1->2->4->5->6->7->8->9->4`

```
 |--------X--------|
 |----D---|----P---|---R---|
 0->1->2->4->5->6->7->8-9->4....
 |-----------T-------------|
```

Give that both pointers are at node 7, we know that...
`Slow = 1X = D + P`
`Fast = 2X = 2D + 2P`

We can also deduce that...
`T  = 2D + 2P - P` therefore `T = 2D + P`

Knowing this we can tell that...
`R = T - P - D`

Substituting what we know about **T** we can now tell that ...
`R = 2D + P - P - D`

finally...
`R = D`

Now we know... the distance from where we discover a cycle to the node that starts the cycle **IS EQUAL TO** the distance from the beginning of the list to the node that starts the cycle. 

Knowing this we reset the slow pointer to the head of the list and change the incremation of the fast pointer from 2x per iternation to 1x per iteration. 

With distances  from both pointers to the node that starts the cycle being equal and increment being equal, we can see that when the nodes are equal again we are now at the node that starts the cycle. 

**Reset the Slow Pointer the Head**
```
//               
//            5->6
// S         /    \\     
// 0->1->2->4      7F
//           \\    /
//            9<-8
```

**Iteration 1**
```
//            5->6
//    S      /    \\     
// 0->1->2->4      7
//           \\    /
//            9<-8F
```

**Iteration 2**
```
//            5->6
//       S   /    \\     
// 0->1->2->4      7
//           \\    /
//           F9<-8 
```

**Iteration 3 - THE ANSWER**
```
//            5->6
//          S/    \\     
// 0->1->2->4      7
//          F\\    /
//            9<-8 
```


Hope that helps!


