# C++/Java/Python/JavaScript || ✅Memory: O(1) || 🚀 3 Approaches || ✅🚀 Linked List

**Author:** devanshupatel
**Votes:** 35
**Link:** [https://leetcode.com/problems/sort-list/solutions/3417365/](https://leetcode.com/problems/sort-list/solutions/3417365/)

---

# Approach 1: Time Complexity: O(nlogn) Space Complexity: O(n)
**Intuition:**
The problem asks to sort the linked list, so the most straightforward approach is to convert the linked list into an array or vector, sort it using the built-in sort function, and then create a new linked list using the sorted values.

**Approach:**

1. Check if the given linked list is empty or not.
2. Traverse the linked list and store the node values into a vector.
3. Sort the vector using the built-in sort function.
4. Create a new linked list using the sorted vector.
5. Return the head of the newly created linked list.

**Complexity:**
- Time Complexity: O(nlogn) as the vector is sorted using the built-in sort function.
- Space Complexity: O(n) as we store all the node values in a vector.

# C++
```
class Solution {
public:
    ListNode* sortList(ListNode* head) {
        if(head==NULL){
            return NULL;
        }
        ListNode* ptr=head;
        vector<int> vec;
        while(ptr){
            vec.push_back(ptr->val);
            ptr=ptr->next;
        }
        sort(vec.begin(),vec.end());
        ListNode* n = new ListNode(vec[0]);
        head=n;
        ListNode* temp=head;
        for(int i=1;i<vec.size();i++){
            ListNode* n1 = new ListNode(vec[i]);
            temp->next=n1;
            temp=temp->next;
            
        }
        return head;
    }
};
```
# JAVA
```
class Solution {
    public ListNode sortList(ListNode head) {
        if(head==null){
            return null;
        }
        ListNode ptr=head;
        List<Integer> list=new ArrayList<>();
        while(ptr!=null){
            list.add(ptr.val);
            ptr=ptr.next;
        }
        Collections.sort(list);
        ListNode n = new ListNode(list.get(0));
        head=n;
        ListNode temp=head;
        for(int i=1;i<list.size();i++){
            ListNode n1 = new ListNode(list.get(i));
            temp.next=n1;
            temp=temp.next;
        }
        return head;
    }
}

```
# Python
```
class Solution(object):
    def sortList(self, head):
        if head is None:
            return None
        ptr=head
        arr=[]
        while ptr is not None:
            arr.append(ptr.val)
            ptr=ptr.next
        arr.sort()
        n = ListNode(arr[0])
        head=n
        temp=head
        for i in range(1,len(arr)):
            n1 = ListNode(arr[i])
            temp.next=n1
            temp=temp.next       
        return head

```

# JavaScript
```
var sortList = function(head) {
    if(head==null){
        return null;
    }
    let ptr=head;
    let arr=[];
    while(ptr){
        arr.push(ptr.val);
        ptr=ptr.next;
    }
    arr.sort((a,b)=>a-b);
    let n = new ListNode(arr[0]);
    head=n;
    let temp=head;
    for(let i=1;i<arr.length;i++){
        let n1 = new ListNode(arr[i]);
        temp.next=n1;
        temp=temp.next;       
    }
    return head;
};
```

---
# Approach 2: Time Complexity: O(nlogn) Space Complexity: O(log n)

**Intuition:**
The merge sort algorithm is based on the divide-and-conquer strategy. It recursively divides the linked list into two halves, sorts each half separately, and then merges the sorted halves to obtain the final sorted list.

**Approach:**
1. The `merge()` function is responsible for merging two sorted linked lists `l1` and `l2`. It maintains a dummy node (`dummy`) and a `tail` pointer to build the merged list.
2. Iterate while both `l1` and `l2` are not `nullptr`.
    - If the value of the current node in `l1` is less than or equal to the value of the current node in `l2`, append the current node from `l1` to the merged list, and move the `l1` pointer to the next node.
    - Otherwise, append the current node from `l2` to the merged list, and move the `l2` pointer to the next node.
    - Move the `tail` pointer to the next node.
3. After the above loop, if any elements are remaining in either `l1` or `l2`, append them to the merged list.
4. Return the `next` pointer of the dummy node, which will be the head of the merged list.

5. The `sortList()` function is the recursive implementation of merge sort for a linked list.
    - If the `head` is `nullptr` or there is only one node in the list (`head->next` is `nullptr`), return the `head` itself as it is already sorted.
    - Find the middle node of the list using the slow and fast pointer approach.
    - Break the list into two halves by setting the `next` pointer of the node before the middle node to `nullptr`.
    - Recursively call `sortList()` on the first half (`head` to `slow`) and the second half (`mid` to the end of the list).
    - Merge the two sorted halves using the `merge()` function.
    - Return the head of the merged and sorted list.

**Complexity:**
- The time complexity of the `merge()` function is O(n), where n is the total number of nodes in the merged list. Each node is visited once during the merging process.
- The `sortList()` function has a time complexity of O(n log n), where n is the total number of nodes in the linked list. This is because the list is divided into halves recursively until there is only one node in each partition. The merge step takes O(n) time at each level of recursion.
- The space complexity is O(log n) due to the recursion stack used in the `sortList()` function.


# C++
```
class Solution {
public:
    ListNode* merge(ListNode* l1, ListNode* l2) {
        ListNode dummy(0);
        ListNode* tail = &dummy;

        while (l1 && l2) {
            if (l1->val <= l2->val) {
                tail->next = l1;
                l1 = l1->next;
            } else {
                tail->next = l2;
                l2 = l2->next;
            }
            tail = tail->next;
        }

        if (l1)
            tail->next = l1;
        else if (l2)
            tail->next = l2;

        return dummy.next;
    }
    ListNode* sortList(ListNode* head) {
        if (!head || !head->next)
        return head;

        // Find the middle node using slow and fast pointers
        ListNode* slow = head;
        ListNode* fast = head->next;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }

        ListNode* mid = slow->next;
        slow->next = nullptr; // Break the list into two halves

        ListNode* l1 = sortList(head); // Sort the first half
        ListNode* l2 = sortList(mid);  // Sort the second half

        return merge(l1, l2); // Merge the sorted halves
    }
};
```

# JavaScript
```
var merge = function (l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    if (l1)
        tail.next = l1;
    else if (l2)
        tail.next = l2;

    return dummy.next;
};

var sortList = function (head) {
    if (!head || !head.next)
        return head;

    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow.next;
    slow.next = null;

    let l1 = sortList(head);
    let l2 = sortList(mid);

    return merge(l1, l2);
};
```

# Java
```
class Solution {
    public ListNode merge(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;

        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        if (l1 != null)
            tail.next = l1;
        else if (l2 != null)
            tail.next = l2;

        return dummy.next;
    }

    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null)
            return head;

        ListNode slow = head;
        ListNode fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode mid = slow.next;
        slow.next = null;

        ListNode l1 = sortList(head);
        ListNode l2 = sortList(mid);

        return merge(l1, l2);
    }
}
```

# Python
```
class Solution(object):
    def merge(self, l1, l2):
        dummy = ListNode(0)
        tail = dummy

        while l1 and l2:
            if l1.val <= l2.val:
                tail.next = l1
                l1 = l1.next
            else:
                tail.next = l2
                l2 = l2.next
            tail = tail.next

        if l1:
            tail.next = l1
        elif l2:
            tail.next = l2

        return dummy.next

    def sortList(self, head):
        if not head or not head.next:
            return head

        # Find the middle node using slow and fast pointers
        slow = head
        fast = head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        mid = slow.next
        slow.next = None  # Break the list into two halves

        l1 = self.sortList(head)  # Sort the first half
        l2 = self.sortList(mid)   # Sort the second half

        return self.merge(l1, l2)  # Merge the sorted halves
```
---

# Approach 3: Time Complexity: O(nlogn) Space Complexity: O(1)

1. The `sortList` function takes the head of the linked list as input and returns the sorted linked list.
2. The first step is to check if the list is empty or contains only one element. In such cases, the list is already sorted, so the function simply returns the head.
3. The `getLength` function is used to determine the length of the linked list.
4. The `split` function takes a linked list and a step size as input. It traverses the linked list until the specified step size is reached or the end of the list is reached. It then splits the list by setting the `next` pointer of the last node in the left sublist to `nullptr` and returns the head of the right sublist.
5. The `merge` function takes two sorted linked lists (`left` and `right`) and a `tail` pointer as input. It merges the two lists into a single sorted list and returns the tail of the merged list.
6. The main sorting logic is implemented using a loop that iterates until the step size is greater than or equal to the length of the list.
7. Inside the loop, a `curr` pointer is set to the head of the list, and a `tail` pointer is set to a dummy node (`dummy`) that is initially connected to the head.
8. The `while` loop is used to iterate through the list in pairs, where each pair consists of a left sublist, a right sublist, and a merged sublist.
9. Within the loop, the `split` function is used to split the list into left and right sublists of size `step`.
10. The `merge` function is then called to merge the left and right sublists into a single sorted sublist, and the `tail` pointer is updated to point to the last node of the merged sublist.
11. After the loop completes, the sorted list is stored in `dummy.next`, and the function returns the head of the sorted list.

**Complexity:**
- The time complexity of this algorithm is O(n log n), where n is the length of the linked list. This is because the list is divided into smaller sublists in each iteration, and merging two sorted sublists takes linear time. 
- The space complexity is O(1) since the algorithm sorts the list in place without using any extra space, except for the dummy node.

Overall, the code efficiently sorts a singly-linked list using the Merge Sort algorithm.
# C++
```
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* sortList(ListNode* head) {
        if (head == nullptr || head->next == nullptr)
            return head;

        int length = getLength(head);
        ListNode dummy(0);
        dummy.next = head;

        for (int step = 1; step < length; step *= 2) {
            ListNode* curr = dummy.next;
            ListNode* tail = &dummy;

            while (curr) {
                ListNode* left = curr;
                ListNode* right = split(left, step);
                curr = split(right, step);

                tail = merge(left, right, tail);
            }
        }

        return dummy.next;
    }

private:
    int getLength(ListNode* head) {
        int length = 0;
        ListNode* curr = head;
        while (curr) {
            length++;
            curr = curr->next;
        }
        return length;
    }

    ListNode* split(ListNode* head, int step) {
        if (head == nullptr)
            return nullptr;

        for (int i = 1; i < step && head->next; i++) {
            head = head->next;
        }

        ListNode* right = head->next;
        head->next = nullptr;
        return right;
    }

    ListNode* merge(ListNode* left, ListNode* right, ListNode* tail) {
        ListNode* curr = tail;
        while (left && right) {
            if (left->val < right->val) {
                curr->next = left;
                left = left->next;
            } else {
                curr->next = right;
                right = right->next;
            }
            curr = curr->next;
        }

        curr->next = left ? left : right;
        while (curr->next)
            curr = curr->next;

        return curr;
    }
};
```
# Java
```
class Solution {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null)
            return head;

        int length = getLength(head);
        ListNode dummy = new ListNode(0);
        dummy.next = head;

        for (int step = 1; step < length; step *= 2) {
            ListNode curr = dummy.next;
            ListNode tail = dummy;

            while (curr != null) {
                ListNode left = curr;
                ListNode right = split(left, step);
                curr = split(right, step);

                tail = merge(left, right, tail);
            }
        }

        return dummy.next;
    }

    private int getLength(ListNode head) {
        int length = 0;
        ListNode curr = head;
        while (curr != null) {
            length++;
            curr = curr.next;
        }
        return length;
    }

    private ListNode split(ListNode head, int step) {
        if (head == null)
            return null;

        for (int i = 1; i < step && head.next != null; i++) {
            head = head.next;
        }

        ListNode right = head.next;
        head.next = null;
        return right;
    }

    private ListNode merge(ListNode left, ListNode right, ListNode tail) {
        ListNode curr = tail;
        while (left != null && right != null) {
            if (left.val < right.val) {
                curr.next = left;
                left = left.next;
            } else {
                curr.next = right;
                right = right.next;
            }
            curr = curr.next;
        }

        curr.next = (left != null) ? left : right;
        while (curr.next != null)
            curr = curr.next;

        return curr;
    }
}
```
# Python
```
class Solution(object):
    def sortList(self, head):
        if head is None or head.next is None:
            return head

        length = self.getLength(head)
        dummy = ListNode(0)
        dummy.next = head

        step = 1
        while step < length:
            curr = dummy.next
            tail = dummy

            while curr:
                left = curr
                right = self.split(left, step)
                curr = self.split(right, step)

                tail = self.merge(left, right, tail)

            step *= 2

        return dummy.next

    def getLength(self, head):
        length = 0
        curr = head
        while curr:
            length += 1
            curr = curr.next
        return length

    def split(self, head, step):
        if head is None:
            return None

        for i in xrange(1, step):
            if head.next is None:
                break
            head = head.next

        right = head.next
        head.next = None
        return right

    def merge(self, left, right, tail):
        curr = tail
        while left and right:
            if left.val < right.val:
                curr.next = left
                left = left.next
            else:
                curr.next = right
                right = right.next
            curr = curr.next

        curr.next = left if left else right
        while curr.next:
            curr = curr.next

        return curr

```
# JavaScript
```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head){
    if (head === null || head.next === null)
        return head;

    const getLength = function (head) {
        let length = 0;
        let curr = head;
        while (curr) {
            length++;
            curr = curr.next;
        }
        return length;
    };

    const split = function (head, step) {
        if (head === null)
            return null;

        for (let i = 1; i < step && head.next; i++) {
            head = head.next;
        }

        const right = head.next;
        head.next = null;
        return right;
    };

    const merge = function (left, right, tail) {
        let curr = tail;
        while (left && right) {
            if (left.val < right.val) {
                curr.next = left;
                left = left.next;
            } else {
                curr.next = right;
                right = right.next;
            }
            curr = curr.next;
        }

        curr.next = left ? left : right;
        while (curr.next)
            curr = curr.next;

        return curr;
    };

    const length = getLength(head);
    const dummy = new ListNode(0);
    dummy.next = head;

    let step = 1;
    while (step < length) {
        let curr = dummy.next;
        let tail = dummy;

        while (curr) {
            const left = curr;
            const right = split(left, step);
            curr = split(right, step);

            tail = merge(left, right, tail);
        }

        step *= 2;
    }

    return dummy.next;
}

```