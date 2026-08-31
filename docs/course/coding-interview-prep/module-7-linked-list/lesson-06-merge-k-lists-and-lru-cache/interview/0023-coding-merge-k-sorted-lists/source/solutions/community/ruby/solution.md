# Simple but fast Ruby O(nlog(k)) solution

**Author:** yang-hong-xin
**Votes:** 5
**Link:** [https://leetcode.com/problems/merge-k-sorted-lists/solutions/1387269/](https://leetcode.com/problems/merge-k-sorted-lists/solutions/1387269/)

---

Ideas
* always pop out min listnode from left of array
* insert next node into sorted array at correct index to keep it still a sorted array
* when array is empty means you already iterate all listnode

```ruby
def merge_k_lists(lists)
  # Prepare answer list
  head = ListNode.new
  tail = head
  
  # Remove empty list first
  lists.delete_if { |list| list.nil? }
  
  # Sort list from min to max
  lists.sort_by! { |list| list.val }
  
  while !lists.empty?
    # Get min node from left of array
    min_node = lists.shift
    
    # Add to answer list
    tail.next = min_node
    tail = tail.next
    
    # Prepare next node
    new_list = min_node.next
    next if new_list.nil?

    # Want to insert next node into sorted array at correct index to keep it still a sorted array
    # Then we can still shift min node from left in next run
    # Using bsearch on a sorted array is very fast
    insert_at = lists.bsearch_index { |list| list.val >= new_list.val }
    if insert_at.nil?
      lists.push(new_list)
    else
      lists.insert(insert_at, new_list)
    end
  end
  
  head.next
end
```