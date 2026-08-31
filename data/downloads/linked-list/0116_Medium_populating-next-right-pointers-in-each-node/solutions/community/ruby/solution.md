# Ruby Solution

**Author:** lywc
**Votes:** 3
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/2595318/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/2595318/)

---

Time: O(N)
Space: O((N+1)/2)

```
def connect(root)
    return root if root.nil?
    q = Array.new()
    q << root
    while q.any?
        tmp = Array.new()
        q.each_with_index do |curr, idx|
            curr.next = q[idx + 1] unless idx >= q.size() - 1
            tmp << curr.left unless curr.left.nil?
            tmp << curr.right unless curr.right.nil?
        end
        q = tmp
    end
    root         
end
```