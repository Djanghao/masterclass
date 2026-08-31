# [Java] | [C++] | O(n) solution | Readable code & illustration 💯

**Author:** tanx4
**Votes:** 23
**Link:** [https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/3746598/](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/3746598/)

---

This problem can be broken down into 2 steps:

1.  Since we need to reverse the nodes in each group with an even length, we need to check length of each group. It it is odd then there is no need to reverse.
2.  If we need to reverse the **N** nodes, how to do that? Following is my idea:
 

	
If the structure of the linkedlist is like this:


		1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 
	
	
Since group 1 will always have one node. It doesn't need to be reversed.

We will have node as a pointer :
```
	ListNode node=head;
	int group=1;
```

After we have node as the pointer, the linked list will look like this:
```
	1 (node) -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
```
Now we will start counting & reversing from 2nd node.
To count number of nodes in a group we will use following code:
```
	int countNodes=0;
    ListNode temp=node.next;
     while(temp!=null && countNodes<group)
		 {
			  temp=temp.next;
              countNodes++;
         }
```

Suppose that there are **even** nodes to be reversed, we just use the "reverse linked list" trick to reverse the k nodes. Please refer to "https://leetcode.com/problems/reverse-linked-list/" if you don't know how to reverse a linked list.

If **countNodes is even** i.e for second group `countNodes= 2, we can reverse 2 to 3`  using the following code:

```
	ListNode curr=node.next,prev=null,next=null;
     for(int i=0;i<countNodes;i++)
		{
			  next=curr.next;
              curr.next=prev;
              prev=curr;
              curr=next;
        }             
```

This is the illustartion of the first 2 steps:

```
    We will begin reversing form 2nd node
	
    Step1: 1 (node)  -> 2      3 -> 4 -> 5 -> 6 -> 7
	Step2: 1 (node)  -> 2 <- 3      4 -> 5 -> 6 -> 7
	
```

This is an easy and general algorithm to reverse a linked list. However, if you are careful enough, you will find that after the for-loop, the link from 3 to 4 will be cut (as shown in step 2).

Now we need to reconstruct the linked list and fix the issue. You will figure out that at step3, the 3 is the **prev** node, 4 is the **curr** node.

```
step2: 1 (node) -> 2 <- 3 (prev)    4 (curr) -> 5 -> 6 -> 7
```

	
We can fix the sequence based on the following codes. The basic idea is to link the `node to 3` and `link 2 to 4`:

```
	ListNode tail=node.next;
    tail.next=curr;
    node.next=prev;
    node=tail;
```

Then the result is:
```
	after first line:        1 (node) -> 2 (tail)  <- 3 (prev)    4 (curr) -> 5 -> 6 -> 7
	after second line:       1 (node) -> 2 (tail)  <- 3 (prev)    4 (curr) -> 5 -> 6 -> 7
								         |________________________\u2191
	after third line:   
								 |--------------------\u2193
						     1 (node)    2 (tail)  <- 3 (prev)    4 (curr) -> 5 -> 6 -> 7
									     |________________________\u2191
									   
	after forth line:	     1  -> 3  -> 2  (node) -> 4 -> 5 -> 6 -> 7
```

Now we get the new **node** as pointer, and we can repeat the process.

` `**Edge Case**:  if the last group is incomplete, we still need to reverse it if it has even number of elements.



If group has odd number of nodes then we can skip the reverse process by following code:
```
	for(int i=0;i<countNodes;i++)
		 node=node.next;
```

Here is the code:

**Java**

```
    public ListNode reverseEvenLengthGroups(ListNode head) {

        //  if LL has 1 or 2 nodes only
        if (head.next == null || head.next.next == null) return head;
        ListNode node = head;
        int group = 1;

        while (node != null && node.next != null) {
            group++;
			
            //first check number of nodes 
            int countNodes = 0;
            ListNode temp = node.next;
            while (temp != null && countNodes < group) {
                temp = temp.next;
                countNodes++;
            }
			
			//now we have count now we will check if it is even then do reverse else skip
            if (countNodes % 2 == 0) {
                ListNode curr = node.next, prev = null, next = null;
                for (int i = 0; i < countNodes; i++) {
                    next = curr.next;
                    curr.next = prev;
                    prev = curr;
                    curr = next;
                }

                ListNode tail = node.next;
                tail.next = curr;
                node.next = prev;
                node = tail;
            } else {
                for (int i = 0; i < countNodes; i++)
                    node = node.next;
            }
        }
        return head;
    }
```

**C++**
```
ListNode* reverseEvenLengthGroups(ListNode *head)
		{
			//  if LL has 1 or 2 nodes only
			if (head->next == nullptr || head->next->next == nullptr) return head;

			ListNode *node = head;
			int group = 1;

			while (node != nullptr && node->next != nullptr)
			{
				group++;

				int countNodes = 0;
				ListNode *temp = node->next;
				while (temp != nullptr && countNodes < group)
				{
					temp = temp->next;
					countNodes++;
				}

				if (countNodes % 2 == 0)
				{
					ListNode *curr = node->next, *prev = nullptr, *next = nullptr;
					for (int i = 0; i < countNodes; i++)
					{
						next = curr->next;
						curr->next = prev;
						prev = curr;
						curr = next;
					}

					ListNode *tail = node->next;
					tail->next = curr;
					node->next = prev;
					node = tail;
				}
				else
				{
					for (int i = 0; i < countNodes; i++)
					{
						node = node->next;
					}
				}
			}

			return head;
		}
```

![image](./images/0.jpeg)

