# Ruby O(n) solution

**Author:** zaptot
**Votes:** 3
**Link:** [https://leetcode.com/problems/copy-list-with-random-pointer/solutions/1842641/](https://leetcode.com/problems/copy-list-with-random-pointer/solutions/1842641/)

---

```ruby
# @param {Node} node
# @return {Node}
# time O(n), space O(n)
def copyRandomList(head)
  new_list = Node.new(0)
  new_node = new_list
  cache = {}

  while head
    cache[head] ||= Node.new(head.val)
    cache[head.random] ||= Node.new(head.random.val) if head.random
    new_node.next = cache[head]
    new_node.next.random = cache[head.random]
    head = head.next
    new_node = new_node.next
  end

  new_list.next
end
```