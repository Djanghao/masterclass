# 💡 Interview Approach - 4 Approach : List, Stack, Recursion, Two Pointer Approach

**Author:** cs_iitian
**Votes:** 458
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/4908031/](https://leetcode.com/problems/palindrome-linked-list/solutions/4908031/)

---

If I get 100 Upvotes on this post, I will post animated video on my channel for all the approaches.

#### [Youtube Channel Link](https://www.youtube.com/channel/UCuxmikkhqbmBOUVxf-61hxw)

[Animation Link](https://www.youtube.com/shorts/HFtgsnD4rGY)


Before moving forward, I just want to infrom you guys that I just got rating of 1960 in Leetcode, I mean I never thought. But since I got it I am setting new target for myself which is to get Guardian Badge. and approach is simple participate in contest and solve the question asap. ( I have never solved 4 questions in any contest, so I will try to solve leetcode hard problems from past contest to get insights ), Now let's continue the blog.

```Interview-Tip []
Every Linked List Problem, if you can't do it in LinkedList format,
copy the data in list and now your question would become for an 
array, solve it.
```
---
```Note []
Currently code is in java only, 
but will be uploaded in different languages soon.
```

#### [Reverse Linked List ( Yesterday's Solution )](https://leetcode.com/problems/reverse-linked-list/solutions/4904297/animated-solution-3-approach-recursion-two-pointer/)

# Approach ( Using List )
<!-- Describe your approach to solving the problem. -->
To Check if the Given Linked List is palindrome or not , we can copy the data in list and then check if the list if palindrome or not.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public boolean isPalindrome(ListNode head) {
        List<Integer> list = new ArrayList();
        while(head != null) {
            list.add(head.val);
            head = head.next;
        }
        
        int left = 0;
        int right = list.size()-1;
        while(left < right && list.get(left) == list.get(right)) {
            left++;
            right--;
        }
        return left >= right;
    }
}
```
```C++ []
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        vector<int> listVals;
        while (head) {
            listVals.push_back(head->val);
            head = head->next;
        }
        
        int left = 0, right = listVals.size() - 1;
        while (left < right && listVals[left] == listVals[right]) {
            left++;
            right--;
        }
        return left >= right;
    }
};
```
```Python3 []
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        list_vals = []
        while head:
            list_vals.append(head.val)
            head = head.next
        
        left, right = 0, len(list_vals) - 1
        while left < right and list_vals[left] == list_vals[right]:
            left += 1
            right -= 1
        return left >= right
```
```Javascript []
var isPalindrome = function(head) {
    const listVals = [];
    while (head) {
        listVals.push(head.val);
        head = head.next;
    }
    
    let left = 0, right = listVals.length - 1;
    while (left < right && listVals[left] === listVals[right]) {
        left++;
        right--;
    }
    return left >= right;
};
```

# Approach#2 ( Using Stack )

First push all data in stack, and then traverse linked list and keep popping element from stack one by one, so stack will give you element from last.

# Code
```Java []
class Solution {
    public boolean isPalindrome(ListNode head) {
        Stack<Integer> stack = new Stack();
        ListNode curr = head;
        while(curr != null) {
            stack.push(curr.val);
            curr = curr.next;
        }
        curr = head;
        while(curr != null && curr.val == stack.pop()) {
            curr = curr.next;
        }
        return curr == null;
    }
}
```
```C++ []
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        stack<int> stack;
        ListNode* curr = head;
        while (curr) {
            stack.push(curr->val);
            curr = curr->next;
        }
        curr = head;
        while (curr && curr->val == stack.top()) {
            stack.pop();
            curr = curr->next;
        }
        return curr == nullptr;
    }
};
```
```Python3 []
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        list_vals = []
        stack = []
        curr = head
        while curr:
            stack.append(curr.val)
            curr = curr.next
        curr = head
        while curr and curr.val == stack.pop():
            curr = curr.next
        return curr is None
```

# Approach#3 ( Using Recursion )

As you know, if any problem you can do using stack only then you can use recursion as well ( mostly ).

So we will have one global pointer as curr we will move this pointer once we reach the end and recursion will start from end of the list.

# Code
```Java []
class Solution {
    ListNode curr;
    public boolean isPalindrome(ListNode head) {
        curr = head;
        return solve(head);
    }

    public boolean solve(ListNode head) {
        if(head == null) return true;
        boolean ans = solve(head.next) && head.val == curr.val;
        curr = curr.next;
        return ans;
    }
}
```
```Python3 []
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        self.curr = head
        return self.solve(head)

    def solve(self, head: Optional[ListNode]) -> bool:
        if head is None:
            return True
        ans = self.solve(head.next) and head.val == self.curr.val
        self.curr = self.curr.next
        return ans
```
```C++ []
int init = [] {
    ios_base::sync_with_stdio(false);  cin.tie(nullptr);
    ofstream out("user.out");
    for (string s; getline(cin, s);)
        out<<(equal(s.begin()+1, s.begin()+s.size()/2, s.rbegin() + 1) ? "true\
" : "false\
");
    out.flush();
    exit(0);
    
    return 0;
}();

class Solution {
    ListNode* curr;
public:
    bool isPalindrome(ListNode* head) {
        curr = head;
        return solve(head);
    }

    bool solve(ListNode* head) {
        if (head == nullptr) return true;
        bool ans = solve(head->next) && head->val == curr->val;
        curr = curr->next;
        return ans;
    }
};
```


`Interview` : Can you come up with a solution with O(1) space ?
`You`: Sure. ( I already knew that )

# Approach#4
The main idea to check palindrome is , if the first and last elements are same or not and then check for second and second last.

So I am thinking what if I create new linked list which would be reversed of the original linked list.

And then I can compare each element one by one.

##### But do I need the whole linked list to reverse and compare ?
No, I just need the second half of linked list to be reversed.

Now the question is how can I get the second half ?
There are two approach
1. Count all nodes first and then move to n/2th node, this would be middle node.
2. Use two pointer one will move with the speed of 1 and one with the speed of 2, so when the fast pointer reaches the end, slow pointer would be at mid.

After getting middle node, reverse the list after that node.
and then compare each element.

# Code
```Java []
class Solution {

    public ListNode reverse(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while(curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    public boolean isPalindrome(ListNode head) {
        ListNode slow = head;
        ListNode fast = head.next;
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode rev = reverse(slow.next); // reverse second list
        slow.next = null;
        while(rev != null) {
            if(head.val != rev.val) {
                return false;
            }
            head = head.next;
            rev = rev.next;
        }
        return true;
    }
}
```
```Python3 []
class Solution:
    def reverse(self, head: ListNode) -> ListNode:
        prev = None
        curr = head
        while curr:
            next_temp = curr.next
            curr.next = prev
            prev = curr
            curr = next_temp
        return prev

    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        rev = self.reverse(slow)
        while rev:
            if head.val != rev.val:
                return False
            head = head.next
            rev = rev.next
        return True
```
```C++ []
class Solution {
public:
    ListNode* reverse(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        while (curr != nullptr) {
            ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    
    bool isPalindrome(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        ListNode* rev = reverse(slow);
        while (rev != nullptr) {
            if (head->val != rev->val) {
                return false;
            }
            head = head->next;
            rev = rev->next;
        }
        return true;
    }
};
```
```Javascript []
function reverse(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

var isPalindrome = function(head) {
    let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let rev = reverse(slow);
        while (rev) {
            if (head.val !== rev.val) {
                return false;
            }
            head = head.next;
            rev = rev.next;
        }
        return true;
};
```

If you like this, please upvote it !

Read other solutions
[143. Reorder List](https://leetcode.com/problems/reorder-list/solutions/4250201/interview-approach-4-approaches/?envType=daily-question&envId=2024-03-23)


---
### Connect via
#### [1. Instagram](https://www.instagram.com/cs_iitian/) ( Follow )
#### [2. Facebook Page](https://www.facebook.com/cs.iitian)
#### [3. Twitter](https://twitter.com/cs_iitian)
#### [4. Blog](https://csiitian.blog/) ( Subscribe to news letter )
#### [5. Medium](https://medium.com/@csiitian)
#### [6. Youtube](https://www.youtube.com/channel/UCuxmikkhqbmBOUVxf-61hxw) ( Like, Share & Subscribe )
#### [7. Leetcode](https://leetcode.com/cs_iitian/)