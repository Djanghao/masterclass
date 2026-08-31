# [JS/Ruby] - Sentinel head & helper function O(n) / O(1)

**Author:** spacepumpkin
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/1138310/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/1138310/)

---

**Solution Complexity: Time O(n) | Space O(1)**,  where n = # nodes in List
- time: traverse all nodes once --> O(n)
- space: no extra data structure --> O(1)

**Edge Case Considerations**:
- null head
- single-node list
- nodes are all duplicates (need to remove head)

##### JS
```javascript
function deleteDuplicates(head) {
  if (!head || !head.next) return head; // take care of 2 edge cases immediately

  let sentinel = prevNode = new ListNode(0, head);

  while (head && head.next) {
    if (head.val === head.next.val) {
      head = getNodeAfterDups(head); // get node after sequence of repeat nodes
      prevNode.next = head; // remove repeats by rerouting prevNode
    } else {
      prevNode = head;
      head = head.next;
    }
  }
  return sentinel.next;
}

function getNodeAfterDups(node) {
  const repeatVal = node.val;
  while (node && node.val === repeatVal) node = node.next;
  return node; // first node after repeats
}
```
##### Ruby
```ruby
def delete_duplicates(head)
    return head if (!head || !head.next) # take care of 2 edge cases immediately
    
    sentinel = prev_node = ListNode.new(0,head)
    
    while (head && head.next)
        if (head.val == head.next.val)
            head = get_node_after_dups(head) # get node after set of repeat nodes
            prev_node.next = head # remove repeats by rerouting prevNode
        else
            prev_node = head
            head = head.next
        end
    end
    sentinel.next
end

def get_node_after_dups(node)
    repeat_value = node.val
    node = node.next while (node && node.val == repeat_value)
    node # first node after repeats
end
```
*If there's anything that can be clarified or improved further, please let me know!*