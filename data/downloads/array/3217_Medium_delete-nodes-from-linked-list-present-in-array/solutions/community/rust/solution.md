# Beats 100% | C++ | Python  | Java | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 10
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5473120/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5473120/)

---


EDIT1: Working on Optimization, removed the explanation

# Code


```C++ []
class Solution {
public:
    ListNode* modifiedList(vector<int>& excludeValues, ListNode* head) {
        bitset<100001> excludeSet; 
        for (int val : excludeValues) {
            excludeSet.set(val);
        }
        
        ListNode dummy(0);
        dummy.next = head;
        ListNode* curr = &dummy;
        
        while (curr->next) {
            if (excludeSet[curr->next->val]) {
                curr->next = curr->next->next;  
            } else {
                curr = curr->next;  
            }
        }
        
        return dummy.next;
    }
};

static const int speedup = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return 0;
}();




```

```python []
class Solution:
    def modifiedList(self, excludeValues: List[int], head: Optional[ListNode]) -> Optional[ListNode]:
        exclude_set = set(excludeValues)
        
        dummy = ListNode(0)
        dummy.next = head
        curr = dummy
        
        while curr.next:
            if curr.next.val in exclude_set:
                curr.next = curr.next.next  
            else:
                curr = curr.next  
        
        return dummy.next

def list_to_linked_list(arr):
    dummy = ListNode(0)
    curr = dummy
    for val in arr:
        curr.next = ListNode(val)
        curr = curr.next
    return dummy.next

def linked_list_to_list(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

def kdsmain():
    inputs = map(loads, sys.stdin)
    results = []

    for excludeValues in inputs:
        head_list = next(inputs)
        head = list_to_linked_list(head_list)
        
        filtered_head = Solution().modifiedList(excludeValues, head)
        results.append(linked_list_to_list(filtered_head))

    with open("user.out", "w") as f:
        for result in results:
            print(dumps(result).replace(", ", ","), file=f)

if __name__ == "__main__":
    kdsmain()
    sys.exit(0)


```
```Java []
class Solution {
    public ListNode modifiedList(int[] excludeValues, ListNode head) {

        java.util.BitSet excludeSet = new java.util.BitSet();
        for (int val : excludeValues) {
            excludeSet.set(val);
        }
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode curr = dummy;

        while (curr.next != null) {
            if (excludeSet.get(curr.next.val)) {
                curr.next = curr.next.next;  
            } else {
                curr = curr.next;  
            }
        }

        return dummy.next;
    }
}

```
```Go []
func modifiedList(excludeValues []int, head *ListNode) *ListNode {
    excludeSet := make(map[int]bool)
    for _, val := range excludeValues {
        excludeSet[val] = true
    }
    
    dummy := &ListNode{Val: 0, Next: head}
    curr := dummy
    
    for curr.Next != nil {
        if excludeSet[curr.Next.Val] {
            curr.Next = curr.Next.Next  
        } else {
            curr = curr.Next 
        }
    }
    
    return dummy.Next
}

```

```Rust []
impl Solution {
    pub fn modified_list(exclude_values: Vec<i32>, head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut exclude_set = std::collections::HashSet::new();
        for &val in &exclude_values {
            exclude_set.insert(val);
        }
        
        let mut dummy = Box::new(ListNode::new(0));
        dummy.next = head;
        let mut curr = &mut dummy;
        
        while let Some(next) = curr.next.take() {
            if exclude_set.contains(&next.val) {
                curr.next = next.next;
            } else {
                curr.next = Some(next);
                curr = curr.next.as_mut().unwrap();
            }
        }
        
        dummy.next
    }
}

```
```JavaScript []
/**
 * @param {number[]} excludeValues
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(excludeValues, head) {
    const excludeSet = new Set(excludeValues);
    
    const dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;
    
    while (curr.next) {
        if (excludeSet.has(curr.next.val)) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;  
        }
    }
    
    return dummy.next;
};

```
