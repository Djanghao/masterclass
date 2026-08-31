# Ruby | Two-pointer and Stack | Very easy to understand | Explanation | O(n)

**Author:** tonybuivn
**Votes:** 1
**Link:** [https://leetcode.com/problems/reorder-list/solutions/2419430/](https://leetcode.com/problems/reorder-list/solutions/2419430/)

---

Very easy solution. Step by step
* **Step 1**: Use slow and fast pointer to find the middle node of the Linked-list
  * With odd list 1 -> 2 -> [3] -> 4 -> 5, the middle node is `3`
  * With even list 1 -> 2 -> 3 -> [4] -> 5 -> 6, the middle node is `4`
* **Step 2:** Use a stack to store remaining nodes after the middle node
* **Step 3**: Pop each node from the stack then add it to the middle of the current node and the node after the current node
	* **Note**: I use a variable that determines Linked-list is even or odd to cut the link of the ending node, avoid cycle in Linked-list.

Time compex : O(n)
```
def reorder_list(head)
  return if head.nil? || head.next.nil? || head.next.nil?

  slow = head
  fast = head
  while fast && fast.next
    slow = slow.next
    fast = fast.next.next
  end
  even_list = fast.nil? ? true : false

  stack = []
  reorder_node = slow.next
  while reorder_node
    stack << reorder_node
    reorder_node = reorder_node.next
  end

  curr = head
  until stack.empty?
    temp = stack.pop
    temp.next = curr.next
    curr.next = temp
    curr = curr.next.next
    next unless stack.empty?

    if even_list
      curr.next.next = nil
    else
      curr.next = nil
    end
  end
end
```