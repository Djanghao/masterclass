# Beats 100%🚀➡️Intuitive Solution Full Explained ➡️[Java/C++/C/C#/JavaScript/Python3/Rust]

**Author:** Shivansu_7
**Votes:** 7
**Link:** [https://leetcode.com/problems/merge-in-between-linked-lists/solutions/4901054/](https://leetcode.com/problems/merge-in-between-linked-lists/solutions/4901054/)

---

# Intuition
1. We have to get the node before a and node after b.
2. We will attach the node before a to the start of list2, and add the the end of the list2 to the node after b.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Check for `null` lists:** 
    - The method begins by checking if either `list1` or `list2` is null. 
    - If either is `null`, it returns `null` immediately, indicating that there's nothing to merge.

2. **Initialize pointers and variables:** 
    - It initializes several pointers and a counter variable.
    - `curr`, `start`, and end are ListNode pointers initially pointing to `list1`.
    - `count` is an integer variable initialized to `0`.
3. **Traverse list1 to find start and end points:** 
    - It traverses `list1` using the `curr` pointer while counting the number of nodes visited `(count)`.
    - When the `count` equals `a`, it sets `start` to the current node.
    - When the `count` equals `b + 1`, it sets `end` to the current node.
4. **Merge list2 between start and end points:** 
    - After finding the appropriate `start` and `end` points in `list1`, it sets the next pointer of start to `list2`, effectively merging `list2` into `list1`.
    - It then traverses `list2` to find its `end` node `(curr)` and sets the next pointer of `curr` to `end`.
5. **Return the modified list1:** 
    - Finally, it returns the modified `list1`.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public ListNode mergeInBetween(ListNode list1, int a, int b, ListNode list2) {
        if(list1==null || list2==null) {
            return null;
        }
        ListNode curr = list1;
        ListNode start = list1;
        ListNode end =list1;
        int count = 0;

        while(curr!=null) {
            count++;
            if(count==a) {
                start = curr;
            }
            curr = curr.next;
            if(count==b+1) {
                end = curr;
            }
        }

        curr = list2;
        start.next = list2;
        while(curr.next!=null) {
            curr=curr.next;
        }

        curr.next = end;
        return list1;
    }
}
```
```C++ []
class Solution {
public:
    ListNode* mergeInBetween(ListNode* list1, int a, int b, ListNode* list2) {
        if (!list1 || !list2) {
            return nullptr;
        }
        ListNode* curr = list1;
        ListNode* start = list1;
        ListNode* end = list1;
        int count = 0;

        while (curr) {
            count++;
            if (count == a) {
                start = curr;
            }
            curr = curr->next;
            if (count == b + 1) {
                end = curr;
            }
        }

        curr = list2;
        start->next = list2;
        while (curr->next) {
            curr = curr->next;
        }

        curr->next = end;
        return list1;
    }
};
```
```Python3 []
class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        if not list1 or not list2:
            return None
        curr = list1
        start = list1
        end = list1
        count = 0

        while curr:
            count += 1
            if count == a:
                start = curr
            curr = curr.next
            if count == b + 1:
                end = curr

        curr = list2
        start.next = list2
        while curr.next:
            curr = curr.next

        curr.next = end
        return list1
```
```Go []
func mergeInBetween(list1 *ListNode, a int, b int, list2 *ListNode) *ListNode {
    if list1 == nil || list2 == nil {
        return nil
    }
    curr := list1
    start := list1
    end := list1
    count := 0

    for curr != nil {
        count++
        if count == a {
            start = curr
        }
        curr = curr.Next
        if count == b+1 {
            end = curr
        }
    }

    curr = list2
    start.Next = list2
    for curr.Next != nil {
        curr = curr.Next
    }

    curr.Next = end
    return list1
}
```
```C# []
public class Solution {
    public ListNode MergeInBetween(ListNode list1, int a, int b, ListNode list2) {
        if (list1 == null || list2 == null) {
            return null;
        }
        ListNode curr = list1;
        ListNode start = list1;
        ListNode end = list1;
        int count = 0;

        while (curr != null) {
            count++;
            if (count == a) {
                start = curr;
            }
            curr = curr.next;
            if (count == b + 1) {
                end = curr;
            }
        }

        curr = list2;
        start.next = list2;
        while (curr.next != null) {
            curr = curr.next;
        }

        curr.next = end;
        return list1;
    }
}
```
```Rust []
impl Solution {
    pub fn merge_in_between(list1: Option<Box<ListNode>>, a: i32, b: i32, list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut list1 = list1;
        let mut list2 = list2;

        if list1.is_none() || list2.is_none() {
            return None;
        }

        let mut curr = list1.as_mut().unwrap().as_mut();
        let mut start = curr;
        let mut end = curr;
        let mut count = 0;

        while let Some(node) = curr {
            count += 1;
            if count == a {
                start = node;
            }
            curr = node.next.as_mut().map(|n| n.as_mut());
            if count == b + 1 {
                end = curr.unwrap();
            }
        }

        let mut curr = list2.as_mut().unwrap().as_mut();
        start.next = list2;
        while let Some(node) = curr {
            if let Some(next) = &mut node.next {
                curr = next.as_mut();
            } else {
                break;
            }
        }

        curr.unwrap().next = end.next;
        list1
    }
}
```
```JavaScript []
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    if (!list1 || !list2) {
        return null;
    }
    let curr = list1;
    let start = list1;
    let end = list1;
    let count = 0;

    while (curr) {
        count++;
        if (count === a) {
            start = curr;
        }
        curr = curr.next;
        if (count === b + 1) {
            end = curr;
        }
    }

    curr = list2;
    start.next = list2;
    while (curr.next) {
        curr = curr.next;
    }

    curr.next = end;
    return list1;
};
```

---


---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)

