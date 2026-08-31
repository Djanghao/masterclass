# Easy Explanation | | PrefixSum + HashMap | | C++ | | Java | | Python3 | | ✅✅✅

**Author:** Hunter_0718
**Votes:** 40
**Link:** [https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4862085/](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4862085/)

---

![image.png](./images/0.png)


### Intuition
To approach this problem, we can utilize a hashmap to keep track of the cumulative sum encountered while traversing the linked list. If we encounter the same cumulative sum again, it means the subsequence between the current node and the node with the same cumulative sum sums to zero, so we can remove that subsequence. To facilitate this removal, we maintain a dummy node to handle cases where the entire linked list needs to be modified.

### Approach
1. Initialize a dummy node to handle cases where the entire linked list needs to be modified.
2. Traverse the linked list, maintaining a cumulative sum and storing the sum along with the corresponding node in a hashmap.
3. If we encounter a cumulative sum that already exists in the hashmap, it indicates a subsequence sums to zero. In this case, we remove the nodes between the current node and the node corresponding to the encountered cumulative sum.
4. Continue traversing until the end of the linked list.
5. Return the modified linked list.

### Complexity
**- Time complexity:** The algorithm has a time complexity of O(n), where n is the number of nodes in the linked list. This is because we traverse the linked list only once.
**- Space complexity:** The space complexity is also O(n) because, in the worst case, we might need to store all nodes in the hashmap.

### Explanation of Dummy Node and Entry in Map
1. **Dummy Node (`dummy`):** The dummy node is a placeholder at the beginning of the linked list. It helps handle cases where the first node needs to be removed. By having a dummy node, we can easily modify the next pointers of nodes without worrying about special cases for the head of the linked list.
2. **Entry in Map (`mp[0] = dummy`):** We initialize the hashmap with an entry `mp[0] = dummy`. This entry serves as a starting point for cumulative sums. When we encounter a cumulative sum of zero, it means the sum from the beginning of the list to the current node is zero, and thus, we need to remove the nodes between the dummy node and the current node. This entry helps in handling such scenarios efficiently.

```C++ []
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
    ListNode* removeZeroSumSublists(ListNode* head) {
        int prefixSum = 0;
        unordered_map<int,ListNode*>mp;
        ListNode *dummy = new ListNode(0);
        dummy->next = head;
        mp[0] = dummy;
        while(head != NULL){
            prefixSum += head->val;
            if(mp.find(prefixSum) != mp.end()){
                //delete the node
                ListNode *start = mp[prefixSum];
                ListNode *temp = start;
                int pSum = prefixSum;
                while(temp != head){
                    temp = temp->next;
                    pSum += temp->val;
                    if(temp != head)
                        mp.erase(pSum);
                }
                start->next = head->next;
            }
            else{
                mp[prefixSum] = head;
            }
            head = head->next;
        }
        return dummy->next;
    }
};
```
```Java []
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
    public ListNode removeZeroSumSublists(ListNode head) {
        int prefixSum = 0;
        HashMap<Integer, ListNode> map = new HashMap<>();
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        map.put(0, dummy);
        while (head != null) {
            prefixSum += head.val;
            if (map.containsKey(prefixSum)) {
                ListNode start = map.get(prefixSum);
                ListNode temp = start;
                int sum = prefixSum;
                while (temp != head) {
                    temp = temp.next;
                    sum += temp.val;
                    if (temp != head)
                        map.remove(sum);
                }
                start.next = head.next;
            } else {
                map.put(prefixSum, head);
            }
            head = head.next;
        }
        return dummy.next;
    }
}

```
```Python3 []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeZeroSumSublists(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prefixSum = 0
        mp = {}
        dummy = ListNode(0)
        dummy.next = head
        mp[0] = dummy
        while head:
            prefixSum += head.val
            if prefixSum in mp:
                start = mp[prefixSum]
                temp = start
                pSum = prefixSum
                while temp != head:
                    temp = temp.next
                    pSum += temp.val
                    if temp != head:
                        del mp[pSum]
                start.next = head.next
            else:
                mp[prefixSum] = head
            head = head.next
        return dummy.next

```
```Kotlin []
/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun removeZeroSumSublists(head: ListNode?): ListNode? {
        var prefixSum = 0
        val mp = HashMap<Int, ListNode>()
        val dummy = ListNode(0)
        dummy.next = head
        mp[0] = dummy
        var current = head
        while (current != null) {
            prefixSum += current.`val`
            if (mp.containsKey(prefixSum)) {
                var start = mp[prefixSum]
                var temp = start
                var pSum = prefixSum
                while (temp != current) {
                    temp = temp?.next
                    pSum += temp?.`val` ?: 0
                    if (temp != current)
                        mp.remove(pSum)
                }
                start?.next = current.next
            } else {
                mp[prefixSum] = current
            }
            current = current.next
        }
        return dummy.next
    }
}

```
```JavaScript []
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
var removeZeroSumSublists = function(head) {
    let prefixSum = 0;
    const mp = new Map();
    const dummy = new ListNode(0);
    dummy.next = head;
    mp.set(0, dummy);
    while (head) {
        prefixSum += head.val;
        if (mp.has(prefixSum)) {
            let start = mp.get(prefixSum);
            let temp = start;
            let pSum = prefixSum;
            while (temp !== head) {
                temp = temp.next;
                pSum += temp.val;
                if (temp !== head)
                    mp.delete(pSum);
            }
            start.next = head.next;
        } else {
            mp.set(prefixSum, head);
        }
        head = head.next;
    }
    return dummy.next;
};

```




### Dry Run with Test Case :
`head = [1,2,3,-3,4]`
Initial state:
- Linked List: `[1,2,3,-3,4]`
- Cumulative Sum: 0 (Initialized with the entry `mp[0] = dummy`)

1. Traverse the linked list:
   - At node `1`: Cumulative Sum = 1, Insert `(1, node1)` into hashmap.
   - At node `2`: Cumulative Sum = 3, Insert `(3, node2)` into hashmap.
   - At node `3`: Cumulative Sum = 6, Insert `(6, node3)` into hashmap.
   - At node `-3`: Cumulative Sum = 3, Found in hashmap. Remove nodes between `node2` and `node3`. New linked list: `[1,2,4]`.
   - At node `4`: Cumulative Sum = 7, Insert `(7, node4)` into hashmap.

2. Return the modified linked list: `[1,2,4]`.