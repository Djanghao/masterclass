# [PHP, JavaScript, Swift] O(n) time, O(1) space, reservoir sampling

**Author:** rozinko
**Votes:** 7
**Link:** [https://leetcode.com/problems/linked-list-random-node/solutions/957399/](https://leetcode.com/problems/linked-list-random-node/solutions/957399/)

---

PHP:
```
class Solution
{
    private $head;

    function __construct($head)
    {
        $this->head = $head;
    }

    function getRandom()
    {
        $i = $val = 0;
        $node = $this->head;

        while ($node) {
            if (rand(1, ++$i) == $i) $val = $node->val;
            $node = $node->next;
        }

        return $val;
    }
}
```

JavaScript:
```
var Solution = function (head) {
    this.head = head;
};

Solution.prototype.getRandom = function () {
    let i = 0, val;
    let node = this.head;

    while (node) {
        i++;
        if (Math.floor(Math.random() * i) + 1 === i) val = node.val;
        node = node.next;
    }

    return val;
};
```

Swift:
```
class Solution {

    private let head: ListNode?

    init(_ head: ListNode?) {
        self.head = head
    }

    func getRandom() -> Int {
        var i: Int = 0
        var val: Int?
        var node: ListNode? = self.head

        while(node !== nil) {
            i += 1
            if Int.random(in: 1...i) == i {
                val = node!.val
            }
            node = node!.next
        }

        return val!
    }
}
```