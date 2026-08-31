# 😎 Best Solution ||  💯 % on Runtime 🚀 ||  💻 With Explanation

**Author:** IamHazra
**Votes:** 58
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5745229/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5745229/)

---

![Screenshot (2985).png](./images/0.png)


### Intuition  
Imagine you're running a party, but only some guests are invited (based on a list of numbers). If a guest shows up and isn't on the list, you need to remove them. That's what we're doing here with linked lists. We want to keep only the nodes whose values match the numbers from the array.

### Approach  
1. First, we find the largest number in the list to know how big our frequency array needs to be.
2. We create a frequency array (like a guest list) where `True` means the number is invited, and `False` means they aren't.
3. Then we walk through the linked list. If a node\u2019s value is on the guest list (i.e., the frequency array says `True`), we skip it. If not, we add it to our new, modified linked list.
4. Finally, we return the new linked list that only contains the uninvited guests (nodes with values not in the array).

### Time Complexity  
- Time complexity:  
  We first loop through the array to find the max value and then build a frequency array based on that. After that, we loop through both the `nums` array and the linked list. So, overall it's $$O(n + m)$$ where `n` is the length of `nums` and `m` is the length of the linked list.

### Space Complexity  
- Space complexity:  
  We need extra space for the frequency array, which depends on the largest number in the input array. Therefore, the space complexity is $$O(k)$$, where `k` is the largest number in `nums`.

---

# Code
```java []
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode modifiedList(int[] nums, ListNode head) {
        int max = -1;
        for(int num : nums ){
            max = num > max ? num : max;
        }
        boolean[] freq = new boolean[max+1];

        for(int num : nums) freq[num] = true;

        ListNode temp = new ListNode();
        ListNode current = temp;

        while(head != null){
            if( head.val >= freq.length || freq[head.val] == false){
                current.next = head;
                current = current.next;
            }
            head = head.next;
        }

        current.next = null;
        return temp.next;
    }
}
```
``` C++ []
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
    ListNode* modifiedList(vector<int>& nums, ListNode* head) {
        int max = -1;
        for (int num : nums) {
            max = num > max ? num : max;
        }

        vector<bool> freq(max + 1, false);

        for (int num : nums) {
            freq[num] = true;
        }

        ListNode* temp = new ListNode();
        ListNode* current = temp;

        while (head != nullptr) {
            if (head->val >= freq.size() || !freq[head->val]) {
                current->next = head;
                current = current->next;
            }
            head = head->next;
        }

        current->next = nullptr;

        return temp->next;
    }
};
```

``` Javascript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let max = -1;
    for( let num of nums ){
        max = num > max ? num : max;
    }

    let freq = new Array(max+1).fill(false);

    for(let num of nums)freq[num] = true;

    let temp = new ListNode();
    let current = temp;

    while(head != null ){
        if( head.val >= freq.length || freq[head.val] == false){
            current.next = head;
            current = current.next;
        }
        head = head.next;
    }

    current.next = null;
    return temp.next;
};


```

``` Python []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def modifiedList(self, nums: List[int], head: Optional[ListNode]) -> Optional[ListNode]:
        max_val = -1
        for num in nums:
            max_val = max(num, max_val)

        freq = [False] * (max_val + 1)

        for num in nums:
            freq[num] = True

        temp = ListNode()
        current = temp

        while head:
            if head.val >= len(freq) or not freq[head.val]:
                current.next = head
                current = current.next
            head = head.next

        current.next = None

        return temp.next

        
```

Happy Coding \uD83D\uDCBB

![upvote image.jpg](./images/1.jpeg)
