# ✅Beats 100% users || Easy to understand || 💚Please upvote if you appreciate the effort.💚

**Author:** Abhifleet
**Votes:** 35
**Link:** [https://leetcode.com/problems/add-two-numbers/solutions/4148275/](https://leetcode.com/problems/add-two-numbers/solutions/4148275/)

---

# Intuition
The approach taken in the provided Java code simulates manual addition. It iterates through both linked lists, adding corresponding digits along with any carry from the previous step. This approach intuitively mirrors the process of adding numbers on paper, making it easy to understand and implement. It efficiently handles cases where the input numbers have different lengths and ensures any remaining carry is properly accounted for. Overall, this approach emerges from the need to perform digit-wise addition while considering carry, which is a fundamental concept in arithmetic.

# Approach
1. Define the "addTwoNumbers" method that takes two ListNode objects l1 and l2 as input.

2. Initialize variables sum and carry to 0 and create a new ListNode l3 to store the result. Also initialize head to l3, which will be used to return the head of the resulting linked list.

3. Enter a while loop that continues until both l1 and l2 are null (i.e., iterate through both linked lists).

4. Inside the loop, calculate the sum by adding the values of the current nodes of l1 and l2 (if they exist) and the current carry.

5. Update carry to be the result of the integer division of sum by 10 and sum itself to be the remainder of the division.

6. Create a new ListNode with the value of sum and make l3 point to it.

7. Move l3 to the next node in the result linked list.

8. After the loop, if there's still a carry left, create an additional ListNode for it and append it to the result linked list.

9. Finally, return the head.next, which is the head of the resulting linked list.

# Complexity
- Time complexity: $$O(n)$$
>  Where n-> Maximum of lengths of l1 and l2

- Space complexity: $$O(n)$$
>  Where n-> Maximum of lengths of l1 and l2

# Code
```python []
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def addTwoNumbers(l1, l2):
    dummy_head = ListNode(0)
    current = dummy_head
    carry = 0

    while l1 or l2:
        # Get the values of the current nodes (if available)
        x = l1.val if l1 else 0
        y = l2.val if l2 else 0

        # Calculate the sum of current digits and the carry from the previous step
        _sum = x + y + carry

        # Update carry for the next calculation
        carry = _sum // 10

        # Create a new node with the sum % 10 as its value and move the current pointer
        current.next = ListNode(_sum % 10)
        current = current.next

        # Move to the next nodes if available
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next

    # If there's a carry left after the loop, create an additional node
    if carry > 0:
        current.next = ListNode(carry)

    return dummy_head.next
```
```java []
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        
        int sum = 0;
        int carry = 0;
        ListNode l3 = new ListNode();
        ListNode head = l3;

        while(l1 != null || l2 != null) {
            sum = 0;
            
            if(l1 != null) {
                sum = sum + l1.val;
                l1 = l1.next;
            }

            if(l2 != null) {
                sum = sum + l2.val;
                l2 = l2.next;
            }
            sum = sum + carry;
            carry = sum / 10;
            sum = sum % 10;
            l3.next = new ListNode(sum);
            l3 = l3.next;
        }

        if(carry != 0) {
            l3.next = new ListNode(carry);
        }

        return head.next;
    }
}
```
```cpp []
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int sum = 0;
        int carry = 0;
        ListNode* l3 = new ListNode();
        ListNode* head = l3;

        while (l1 || l2) {
            sum = 0;

            if (l1) {
                sum += l1->val;
                l1 = l1->next;
            }

            if (l2) {
                sum += l2->val;
                l2 = l2->next;
            }
            sum += carry;
            carry = sum / 10;
            sum %= 10;
            l3->next = new ListNode(sum);
            l3 = l3->next;
        }

        if (carry != 0) {
            l3->next = new ListNode(carry);
        }

        return head->next;
    }
};
```
```c []
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    int sum = 0;
    int carry = 0;
    struct ListNode* l3 = (struct ListNode*)malloc(sizeof(struct ListNode));
    struct ListNode* head = l3;

    while (l1 || l2) {
        sum = 0;

        if (l1) {
            sum += l1->val;
            l1 = l1->next;
        }

        if (l2) {
            sum += l2->val;
            l2 = l2->next;
        }
        sum += carry;
        carry = sum / 10;
        sum %= 10;
        l3->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        l3->next->val = sum;
        l3->next->next = NULL;
        l3 = l3->next;
    }

    if (carry != 0) {
        l3->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        l3->next->val = carry;
        l3->next->next = NULL;
    }

    return head->next;
}
```
```Go []
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    sum := 0
    carry := 0
    l3 := &ListNode{}
    head := l3

    for l1 != nil || l2 != nil {
        sum = 0

        if l1 != nil {
            sum += l1.Val
            l1 = l1.Next
        }

        if l2 != nil {
            sum += l2.Val
            l2 = l2.Next
        }
        sum += carry
        carry = sum / 10
        sum %= 10
        l3.Next = &ListNode{Val: sum}
        l3 = l3.Next
    }

    if carry != 0 {
        l3.Next = &ListNode{Val: carry}
    }

    return head.Next
}
```
```javascript []
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let sum = 0;
    let carry = 0;
    const l3 = new ListNode();
    let head = l3;

    while (l1 || l2) {
        sum = 0;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        carry = Math.floor(sum / 10);
        sum %= 10;
        l3.next = new ListNode(sum);
        l3 = l3.next;
    }

    if (carry !== 0) {
        l3.next = new ListNode(carry);
    }

    return head.next;
}
```
```typescript []
class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sum = 0;
    let carry = 0;
    const l3 = new ListNode(0);
    let head: ListNode | null = l3;

    while (l1 || l2) {
        sum = 0;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        carry = Math.floor(sum / 10);
        sum %= 10;
        l3.next = new ListNode(sum);
        l3 = l3.next;
    }

    if (carry !== 0) {
        l3.next = new ListNode(carry);
    }

    return head?.next;
}
```
```rust []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     val: i32,
 *     next: Option<Box<ListNode>>,
 * }
 */

impl Solution {
    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut sum = 0;
        let mut carry = 0;
        let mut l3 = Some(Box::new(ListNode { val: 0, next: None }));
        let mut head = l3.as_mut();

        let (mut l1, mut l2) = (l1.as_ref(), l2.as_ref());

        while l1.is_some() || l2.is_some() {
            sum = 0;

            if let Some(node) = l1 {
                sum += node.val;
                l1 = node.next.as_ref();
            }

            if let Some(node) = l2 {
                sum += node.val;
                l2 = node.next.as_ref();
            }
            sum += carry;
            carry = sum / 10;
            sum %= 10;
            head.as_mut().unwrap().next = Some(Box::new(ListNode { val: sum, next: None }));
            head = head.unwrap().next.as_mut();
        }

        if carry != 0 {
            head.as_mut().unwrap().next = Some(Box::new(ListNode { val: carry, next: None }));
        }

        l3.unwrap().next
    }
}
```
```ruby []
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end

def add_two_numbers(l1, l2)
    sum = 0
    carry = 0
    l3 = ListNode.new(0)
    head = l3

    while l1 || l2
        sum = 0

        if l1
            sum += l1.val
            l1 = l1.next
        end

        if l2
            sum += l2.val
            l2 = l2.next
        end

        sum += carry
        carry = sum / 10
        sum %= 10
        l3.next = ListNode.new(sum)
        l3 = l3.next
    end

    if carry != 0
        l3.next = ListNode.new(carry)
    end

    head.next
end
```
```php []
class ListNode {
    public $val;
    public $next;

    function __construct($val = 0, $next = null) {
        $this->val = $val;
        $this->next = $next;
    }
}

function addTwoNumbers($l1, $l2) {
    $sum = 0;
    $carry = 0;
    $l3 = new ListNode();
    $head = $l3;

    while ($l1 !== null || $l2 !== null) {
        $sum = 0;

        if ($l1 !== null) {
            $sum += $l1->val;
            $l1 = $l1->next;
        }

        if ($l2 !== null) {
            $sum += $l2->val;
            $l2 = $l2->next;
        }
        $sum += $carry;
        $carry = (int)($sum / 10);
        $sum %= 10;
        $l3->next = new ListNode($sum);
        $l3 = $l3->next;
    }

    if ($carry !== 0) {
        $l3->next = new ListNode($carry);
    }

    return $head->next;
}
```
![upvote-upvote14.gif](./images/0.gif)
