# Simplified C# Solution, detailed explanation & comments | do..while

**Author:** parthbadani
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/2968763/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/2968763/)

---

# Approach
- Since the list is ordered in ascending, lesser number will be leading greater number
- Take 2 pointers: greater => point to head; lesser => point to next of greater (because list is in ascending order)
- There will be 5 cases we need to handle for insertion:
1. Normal case: insertVal <= lesser node && insertVal >= greater node
2. If there is only 1 node in the list: greater == lesser
3. If all elements are equal in the list: here, we will iterate the complete list. At the end of list, lesser == head since all elements are equal. We will insert new element after this lesser element
4. If the insert value is lowest and the head is not pointing to the least number. We will have to iterate till the highest element of the existing list. At that point, greater node will point the highest element and lesser node will be pointing the lowest element. We will insert new node (which will be lowest) in between these two nodes.
Eg: head = [3,5,1] insertVal = 0
5. Similar to #4, if insert value is highest and head is not pointing to the least number. Similar process of iteration as #4. After reaching the highest node, we will insert new node.
Eg: head = [3,5,1] insertVal = 6

- Once we have figured out the correct place of insertion, inserting the node is quite simple: point next of new node to lesser and point next of greater to the new node

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
/*
// Definition for a Node.
public class Node {
    public int val;
    public Node next;

    public Node() {}

    public Node(int _val) {
        val = _val;
        next = null;
    }

    public Node(int _val, Node _next) {
        val = _val;
        next = _next;
    }
}
*/

public class Solution {
    public Node Insert(Node head, int insertVal) {
        if(head == null) // insert a node and make it circular
        {
            Node newNode = new Node(insertVal);
            newNode.next = newNode;
            return newNode;
        }
        
        Node greater = head;
        Node lesser = greater.next;
        
        do
        {
            if(insertVal <= lesser.val && insertVal >= greater.val)
                break;
                
            else if(greater == lesser) //for single node in the list
                break;

            else if(lesser == head) // for all equal elements in the list
                break;
            
            else if(insertVal <= lesser.val && insertVal <= greater.val && lesser.val < greater.val) // for inserting value with head not starting with least number eg [3,5,1] + 0
                break;
            
            else if(insertVal >= lesser.val && insertVal >= greater.val && lesser.val < greater.val) // for eg [3,5,1] + 6
                break;
            
            else // just iterate to the next node, no insertion at this stage
            {
                lesser = lesser.next;
                greater = greater.next;
            }
        } while(greater != head);
        
        // inserting new node at the correct place:
        Node ins = new Node(insertVal);
        ins.next = lesser;
        greater.next = ins;
        
        return head;
    }
}
```