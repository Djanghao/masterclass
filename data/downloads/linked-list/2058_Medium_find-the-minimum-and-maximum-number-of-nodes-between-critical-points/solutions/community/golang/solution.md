# [LinkedList Tutorial] Find the Minimum and Maximum Number of Nodes Between Critical Points

**Author:** never_get_piped
**Votes:** 51
**Link:** [https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5418261/](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5418261/)

---

**Topic** :  Linked List
A linked list is a fundamental data structure in computer science. It consists of nodes where each node contains data and a reference (link) to the next node in the sequence. This allows for dynamic memory allocation and efficient insertion and deletion operations compared to arrays. (GFG)

The crucial aspect to note about linked list:
* For adding a new node or deleting an existing node, the operations in a linked list are `O(1)`.
* To traverse the entire list, the time complexity in a linked list is `O(n)`.
* It can also serve as a stack or a queue.

___

## Solution
To traverse a linked list, we can employ the following straightforward pseudocode:
```
while(node != null) {
	print(node);
	node = node.next;
}
```

To identify a node as a critical point, we require information about both its preceding and succeeding nodes. While traversing our linked list, it's essential to keep track of the previous node. We maintain the following information using the pseudocode:
```
preNode = null;
curNode = head;
while(curNode != null) {
	print(node);
	preNode = node;
	curNode = curNode.next;
}
```

After determining whether a node is critical or not, to find the maximum and minimum distances: **the maximum distance spans from the first to the last critical node, while the minimum distance occurs between any two adjacent critical nodes**.

So, we need to maintain the positions of the following critical nodes: the first critical node encountered, the current critical node position, and the position of the previous critical node.

<br/>

```c++ []
class Solution {
public:
    vector<int> nodesBetweenCriticalPoints(ListNode* head) {
        ListNode* pre = head; 
        ListNode*cur = head -> next;
        vector<int> ans = {-1, -1};
        int prePosition = -1, curPosition = -1, firstPosition = -1, position = 0;
        while(cur -> next != NULL) {
            if((cur -> val < pre -> val && cur -> val < cur -> next -> val) || (cur -> val > pre -> val && cur -> val > cur -> next -> val)) {
                //local
                prePosition = curPosition;
                curPosition = position;
                if(firstPosition == -1) {
                    firstPosition = position;
                }
                if(prePosition != -1) {
                    if(ans[0] == -1) ans[0] = curPosition - prePosition;
                    else ans[0] = min(ans[0], curPosition - prePosition);
                    ans[1] = position - firstPosition;
                }
            }
            position++;
            pre = cur;
            cur = cur -> next;
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int[] nodesBetweenCriticalPoints(ListNode head) {
        ListNode pre = head;
        ListNode cur = head.next;
        int[] ans = {-1, -1};
        int prePosition = -1, curPosition = -1, firstPosition = -1, position = 0;
        while (cur.next != null) {
            if ((cur.val < pre.val && cur.val < cur.next.val) || (cur.val > pre.val && cur.val > cur.next.val)) {
                // local
                prePosition = curPosition;
                curPosition = position;
                if (firstPosition == -1) {
                    firstPosition = position;
                }
                if (prePosition != -1) {
                    if (ans[0] == -1) ans[0] = curPosition - prePosition;
                    else ans[0] = Math.min(ans[0], curPosition - prePosition);
                    ans[1] = position - firstPosition;
                }
            }
            position++;
            pre = cur;
            cur = cur.next;
        }
        return ans;
    }
}
```
```python []
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        pre = head
        cur = head.next
        ans = [-1, -1]
        prePosition, curPosition,firstPosition, position  = -1, -1, -1, 0

        while cur.next is not None:
            if (cur.val < pre.val and cur.val < cur.next.val) or (cur.val > pre.val and cur.val > cur.next.val):
                # local
                prePosition = curPosition
                curPosition = position
                
                if firstPosition == -1:
                    firstPosition = position
                if prePosition != -1:
                    if ans[0] == -1:
                        ans[0] = curPosition - prePosition
                    else:
                        ans[0] = min(ans[0], curPosition - prePosition)
                    ans[1] = position - firstPosition
            position += 1
            pre = cur
            cur = cur.next
        return ans
```
```Go []
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func nodesBetweenCriticalPoints(head *ListNode) []int {
    pre := head
    cur := head.Next
    ans := []int{-1, -1}
    prePosition, curPosition, firstPosition, position := -1, -1, -1, 0
    
    for cur.Next != nil {
        if (cur.Val < pre.Val && cur.Val < cur.Next.Val) || (cur.Val > pre.Val && cur.Val > cur.Next.Val) {
            // local
            prePosition = curPosition
            curPosition = position
            
            if firstPosition == -1 {
                firstPosition = position
            }
            if prePosition != -1 {
                if ans[0] == -1 {
                    ans[0] = curPosition - prePosition
                } else {
                    if curPosition-prePosition < ans[0] {
                        ans[0] = curPosition - prePosition
                    }
                }
                ans[1] = position - firstPosition
            }
        }
        position++
        pre = cur
        cur = cur.Next
    }
    return ans
}
```
```PHP []
class Solution {

    /**
     * @param ListNode $head
     * @return Integer[]
     */
    function nodesBetweenCriticalPoints($head) {
        $pre = $head;
        $cur = $head->next;
        $ans = [-1, -1];
        $prePosition = -1;
        $curPosition = -1;
        $firstPosition = -1;
        $position = 0;
        
        while ($cur->next != null) {
            if (($cur->val < $pre->val && $cur->val < $cur->next->val) || ($cur->val > $pre->val && $cur->val > $cur->next->val)) {
                // local
                $prePosition = $curPosition;
                $curPosition = $position;
                
                if ($firstPosition == -1) {
                    $firstPosition = $position;
                }
                if ($prePosition != -1) {
                    if ($ans[0] == -1) {
                        $ans[0] = $curPosition - $prePosition;
                    } else {
                        $ans[0] = min($ans[0], $curPosition - $prePosition);
                    }
                    $ans[1] = $position - $firstPosition;
                }
            }
            $position++;
            $pre = $cur;
            $cur = $cur->next;
        }
        return $ans;
    }
}
```
```javascript []
var nodesBetweenCriticalPoints = function(head) {
    let pre = head;
    let cur = head.next;
    let ans = [-1, -1];
    let prePosition = -1, curPosition = -1, firstPosition = -1, position = 0;
    
    while (cur.next !== null) {
        if ((cur.val < pre.val && cur.val < cur.next.val) || (cur.val > pre.val && cur.val > cur.next.val)) {
            // local
            prePosition = curPosition;
            curPosition = position;
            
            if (firstPosition === -1) {
                firstPosition = position;
            }
            
            if (prePosition !== -1) {
                if (ans[0] === -1) {
                    ans[0] = curPosition - prePosition;
                } else {
                    ans[0] = Math.min(ans[0], curPosition - prePosition);
                }
                
                ans[1] = position - firstPosition;
            }
        }
        position++;
        pre = cur;
        cur = cur.next;
    }
    
    return ans;    
};
```

**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(1)`


**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**