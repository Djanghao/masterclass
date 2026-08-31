# C++ | Easy-Explanation | Basics

**Author:** modisanskar5
**Votes:** 18
**Link:** [https://leetcode.com/problems/design-linked-list/solutions/2314409/](https://leetcode.com/problems/design-linked-list/solutions/2314409/)

---

This question *covers all the important basics of single linked list*. 

## Implementation
```
class MyLinkedList {
	struct Node {
		int val;
		Node *next;
		Node(int x): val(x), next(nullptr) {}
	};

	Node *head;
	int size;
public:
    /** Initialize your data structure here. */
    MyLinkedList() {
        head = nullptr;
		size = 0;
    }
    
    // Get the value of the index-th node in the linked list. If the 
    //index is invalid, return -1.
    int get(int index) {
		int res = -1;

		if (index > size)
    //If the index is beyond the size of linked list
			return res;

		Node *curr = head;
		while(curr && index > 0) {
			index--;
    //Reducing index as we are moving forward in linked list
    //till the index becomes 0 
			curr = curr->next;
		}

		if (index == 0 && curr != nullptr)
    //curr is not null ptr means that curr pointer donot exceed the
    // size of linked list
			res = curr->val;
    //Returning the value at the index
		return res;
    }
    
    // Add a node of value val before the first element of the linked list.
    // After the insertion, the new node will be the first node of the linked list.
    void addAtHead(int val) {
       Node *curr = new Node(val);
	   curr->next = head;
	   head = curr; 
	   size++;
    }
    
    //Append a node of value val to the last element of the linked list.
    void addAtTail(int val) {
		size++;
		Node *node = new Node(val);
		if (head == nullptr) {
        //Empty linked list so no need to traverse
        //Similar to addAtHead
			head = node;
			return;
		}

        Node *curr = head;
		while(curr && curr->next)
        //Till curr->next is not equal to NULL
			curr = curr->next;

		curr->next = node;
    }

    //Add a node of value val before the index-th node in the linked list. 
    //If index equals to the length of linked list, 
	//the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
    void addAtIndex(int index, int val) {
		if (index > size)
			return;
        //Index donot go beyond the size of linked list

		if (index == 0) {
        //Adding at head
			size++;
			addAtHead(val);
			return;
		}

		if (index == size) {
        //Adding at last
			size++;
			addAtTail(val);
			return;
		}

		Node *curr = head;
		while(curr && index > 0) {
			index--;
        //Travering the linked list till the index becomes 0
			if (index == 0) {
				Node *new_node = new Node(val);
				new_node->next = curr->next;
				curr->next = new_node;
				size++;
				break;
			}

			curr = curr->next;
		}

    }

    // Delete the index-th node in the linked list, if the index is valid.
    void deleteAtIndex(int index) {
		if (index == 0) {
        //Deleting at head
			Node *tmp = head;
			head = head->next;
			size--;
			delete tmp;
			return;
		}

		Node *curr = head, *pre = nullptr;
		while(curr && index > 0) {
			pre = curr;
			curr = curr->next;
			index--;
		}

		if (index == 0 && curr != nullptr) {
			Node *tmp = curr;
			pre->next = curr->next;
			size--;
			delete tmp;
		}
    }
};
```
**Thank You!** for reading . Do upvote\uD83D\uDC4Dif you like the explanation and if there is any scope of improvement do mention it in the comment section\uD83D\uDE01.