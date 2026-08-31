# scala easy solution - explained

**Author:** tanel3203
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/2561623/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/2561623/)

---

```

    def mergeNodes(head: ListNode): ListNode = {
        merge(head.next, 0)
    }
    
    
    def merge(node: ListNode, carryOn: Int): ListNode = {
        if (node == null) {
            null
        } else {
            if (node.x == 0) {
                ListNode(carryOn, merge(node.next, 0))
            } else {
                merge(node.next, carryOn + node.x)
            }
        }
    }
```


example process
given input head = [0,3,1,0,4,5,2,0]
merge non zero nodes

this needs a recursion solution. 
We only have a handle on a single node with the movement happening through the link 'next' to the next one, and next one, and so on. So we can solve it by focusing on a single node and use to build a memory of info we need from nodes we've already passed. Also we don't know anything about the upcoming nodes until we actually .next into them. E.g. on iteration three we only know about the node 3 and basically could just pass forward a list of nodes we've passed and then operate on that, but it'd be excessive. Just passing a carry on value and adding to it and resetting it to zero where appropriate would be better. 

steps for the example above:
1. look at 0 => special case. We know it'll be zero always and we don't want a zero in the output. So we just ignore it by immediatelly calling head.next for the first iteration. And just set the initial carry on value (where the sums will be gathered, then cleaned after next zero, etc) to 0. `merge(head.next, 0)` 
2. look at 3 => we don't want to create this as a node in output, but we do need this as an input when we move forward to the next one. So we carry it on without creating any new ListNode objects (`merge(node.next, carryOn + node.x)`). (carryOn then is 0+3=3)
3. look at 1 => identical to previous step, except now we have incoming carryOn (value 3), so we'll at it to the existing carryOn.  (`merge(node.next, carryOn + node.x)`) (carryOn then is 3+1=4)
4. look at 0 => we know that at this point we have a full carryOn with us and we can create a new object in the output array. But we also need to continue iterating, so at this step we also need to make sure to call the recursion function again in a different way, and this time setting the carryOn back to 0. `ListNode(carryOn, merge(node.next, 0))` - creates new object to the output, sets the carryOn as the node value (total sum between this and a previous zero, here 4) and sets the next node as the recursion function which will provide the next node in due time. 
5. ...next steps the same way as above...
6. once the array has been passed in full, we also need a way to terminate it. As we still need the last item in the array to be operated on, we'll continue normally at the last iteration and still pass the .next. This is of course null and we'll create a null check at the beginning of the recursion function to terminate. `if (node == null) {return null}`