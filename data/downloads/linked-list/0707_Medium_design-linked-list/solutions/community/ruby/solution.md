# Linked List Implementation

**Author:** _ABOUD
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-linked-list/solutions/5863811/](https://leetcode.com/problems/design-linked-list/solutions/5863811/)

---

# Intuition
A singly linked list allows for efficient insertions and deletions, making it ideal for dynamic data structures where size frequently changes. However, accessing elements by index requires linear time because traversal is needed. This problem can be solved by maintaining a linked list that supports operations like adding, deleting, and accessing nodes at specific positions.

---


# Approach
The approach revolves around using a singly linked list structure with a `Node` class that holds a value and a pointer to the next node. Key methods are implemented for the basic operations:
- **`get`**: Traverse the list to return the value at a specific index.
- **`addAtHead`**: Insert a new node at the head of the list.
- **`addAtTail`**: Traverse to the end of the list and append the node.
- **`addAtIndex`**: Insert a new node at the specified index by first traversing to the correct position.
- **`deleteAtIndex`**: Remove the node at a given index, handling edge cases for the head.

---


# Complexity
- **Time complexity**:
  - `get`: O(n) because it traverses the list to find the node at the given index.
  - `addAtHead`: O(1) since it's a direct insertion at the head.
  - `addAtTail`: O(n) because it requires traversing to the last node.
  - `addAtIndex`: O(n) because of the traversal needed to reach the specified index.
  - `deleteAtIndex`: O(n) as it involves finding the node right before the one to delete.
  
- **Space complexity**: O(n), where `n` is the number of elements in the list. Each node takes O(1) space, but the list can hold up to `n` nodes.

---



# Code
```cpp []
class MyLinkedList {
private:
    struct Node { 
        // A structure to represent a node in the linked list
        int val;         // Value stored in the node
        Node* next;      // Pointer to the next node
        Node(int x) : val(x), next(nullptr) {} // Constructor to initialize the node with value x and next set to nullptr
    };
    
    Node* head; // Pointer to the head (first node) of the linked list
    int size;   // Variable to keep track of the size of the linked list (number of nodes)

public:
    MyLinkedList() : head(nullptr), size(0) {}
    // Constructor initializes the linked list with head set to nullptr and size set to 0

    ~MyLinkedList() {
        // Destructor to clean up memory when the linked list is destroyed
        Node* current = head; 
        // Start from the head of the list
        while (current != nullptr) { 
            // Traverse the entire list and delete every node
            Node* next = current->next; 
            // Store the next node before deleting the current one
            delete current; 
            // Delete the current node
            current = next; 
            // Move to the next node
        }
    }
    
    int get(int index) {
        // Method to retrieve the value at a specific index in the list
        if (index < 0 || index >= size) return -1; 
        // If the index is out of bounds, return -1
        Node* current = head; 
        // Start from the head
        for (int i = 0; i < index; i++) { 
            // Traverse to the node at the given index
            current = current->next; 
            // Move to the next node
        }
        return current->val; 
        // Return the value of the node at the given index
    }
    
    void addAtHead(int val) {
        // Method to add a new node with value `val` at the head (beginning) of the list
        Node* newNode = new Node(val); 
        // Create a new node with the given value
        newNode->next = head; 
        // Set the new node's next pointer to the current head
        head = newNode; 
        // Update the head to point to the new node
        size++; 
        // Increment the size of the list
    }
    
    void addAtTail(int val) {
        // Method to add a new node with value `val` at the tail (end) of the list
        Node* newNode = new Node(val); 
        // Create a new node with the given value
        if (head == nullptr) {
            // If the list is empty (head is nullptr), set the new node as the head
            head = newNode; 
        } else {
            // Otherwise, traverse to the end of the list
            Node* current = head; 
            // Start from the head
            while (current->next != nullptr) { 
                // Traverse until you find the last node (whose next pointer is nullptr)
                current = current->next; 
                // Move to the next node
            }
            current->next = newNode; 
            // Set the last node's next pointer to the new node
        }
        size++; 
        // Increment the size of the list
    }
    
    void addAtIndex(int index, int val) {
        // Method to add a new node with value `val` at the specified index
        if (index < 0 || index > size) return; 
        // If the index is out of bounds, do nothing
        if (index == 0) {
            // If the index is 0, add the node at the head
            addAtHead(val); 
        } else {
            // Otherwise, traverse to the node just before the specified index
            Node* newNode = new Node(val); 
            // Create a new node with the given value
            Node* current = head; 
            // Start from the head
            for (int i = 0; i < index - 1; i++) { 
                // Traverse to the node just before the given index
                current = current->next; 
                // Move to the next node
            }
            newNode->next = current->next; 
            // Set the new node's next pointer to the current node's next pointer
            current->next = newNode; 
            // Link the current node to the new node
            size++; 
            // Increment the size of the list
        }
    }
    
    void deleteAtIndex(int index) {
        // Method to delete the node at the specified index
        if (index < 0 || index >= size) return; 
        // If the index is out of bounds, do nothing
        if (index == 0) {
            // If the index is 0, delete the head node
            Node* temp = head; 
            // Store the current head node
            head = head->next; 
            // Move the head to the next node
            delete temp; 
            // Delete the old head node
        } else {
            // Otherwise, traverse to the node just before the one to delete
            Node* current = head; 
            // Start from the head
            for (int i = 0; i < index - 1; i++) { 
                // Traverse to the node just before the given index
                current = current->next; 
                // Move to the next node
            }
            Node* temp = current->next; 
            // Store the node to be deleted
            current->next = temp->next; 
            // Link the current node to the node after the one being deleted
            delete temp; 
            // Delete the node
        }
        size--; 
        // Decrement the size of the list
    }
};

```
```javascript []
class MyLinkedList {
    constructor() {
        // Initialize the head to null and size to 0
        this.head = null; 
        this.size = 0;
    }

    // Node class to represent a node in the linked list
    class Node {
        constructor(val) {
            // Store the value and set next pointer to null
            this.val = val;
            this.next = null;
        }
    }

    get(index) {
        // If the index is out of bounds, return -1
        if (index < 0 || index >= this.size) return -1;

        // Start from the head of the list
        let current = this.head;
        
        // Traverse the list to find the node at the given index
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        // Return the value at the current node
        return current.val;
    }

    addAtHead(val) {
        // Create a new node with the given value
        const newNode = new Node(val);
        
        // Set the new node's next pointer to the current head
        newNode.next = this.head;

        // Update the head to point to the new node
        this.head = newNode;

        // Increment the size of the list
        this.size++;
    }

    addAtTail(val) {
        // Create a new node with the given value
        const newNode = new Node(val);
        
        // If the list is empty, set the new node as the head
        if (this.head === null) {
            this.head = newNode;
        } else {
            // Otherwise, traverse to the end of the list
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }

            // Set the last node's next pointer to the new node
            current.next = newNode;
        }

        // Increment the size of the list
        this.size++;
    }

    addAtIndex(index, val) {
        // If the index is out of bounds, do nothing
        if (index < 0 || index > this.size) return;

        // If the index is 0, add the node at the head
        if (index === 0) {
            this.addAtHead(val);
        } else {
            // Otherwise, traverse to the node just before the specified index
            const newNode = new Node(val);
            let current = this.head;

            // Traverse to the node just before the index
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }

            // Set the new node's next pointer to the current node's next
            newNode.next = current.next;

            // Link the current node to the new node
            current.next = newNode;

            // Increment the size of the list
            this.size++;
        }
    }

    deleteAtIndex(index) {
        // If the index is out of bounds, do nothing
        if (index < 0 || index >= this.size) return;

        // If the index is 0, delete the head node
        if (index === 0) {
            this.head = this.head.next;
        } else {
            // Otherwise, traverse to the node just before the one to delete
            let current = this.head;

            // Traverse to the node just before the index
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }

            // Set the current node's next pointer to the node after the one to delete
            current.next = current.next.next;
        }

        // Decrement the size of the list
        this.size--;
    }
}

```
```python []
class MyLinkedList:
    class Node:
        # Node class to represent a node in the linked list
        def __init__(self, val):
            self.val = val  # Store the value of the node
            self.next = None  # Initialize the next pointer as None

    def __init__(self):
        # Initialize the linked list with head set to None and size to 0
        self.head = None
        self.size = 0

    def get(self, index):
        # Method to get the value at the specified index
        if index < 0 or index >= self.size:
            return -1  # Return -1 if the index is out of bounds

        current = self.head  # Start from the head of the list
        for _ in range(index):
            current = current.next  # Traverse to the node at the given index
        return current.val  # Return the value of the node at the index

    def add_at_head(self, val):
        # Method to add a new node with value val at the head of the list
        new_node = self.Node(val)  # Create a new node
        new_node.next = self.head  # Set the new node's next pointer to the current head
        self.head = new_node  # Update the head to point to the new node
        self.size += 1  # Increment the size of the list

    def add_at_tail(self, val):
        # Method to add a new node with value val at the tail of the list
        new_node = self.Node(val)  # Create a new node
        if not self.head:
            # If the list is empty, set the new node as the head
            self.head = new_node
        else:
            current = self.head  # Start from the head
            while current.next:
                # Traverse to the last node
                current = current.next
            current.next = new_node  # Set the last node's next pointer to the new node
        self.size += 1  # Increment the size of the list

    def add_at_index(self, index, val):
        # Method to add a new node with value val at the specified index
        if index < 0 or index > self.size:
            return  # If the index is out of bounds, do nothing

        if index == 0:
            # If index is 0, add the node at the head
            self.add_at_head(val)
        else:
            new_node = self.Node(val)  # Create a new node
            current = self.head  # Start from the head
            for _ in range(index - 1):
                # Traverse to the node just before the index
                current = current.next
            new_node.next = current.next  # Link the new node to the next node
            current.next = new_node  # Link the current node to the new node
            self.size += 1  # Increment the size of the list

    def delete_at_index(self, index):
        # Method to delete the node at the specified index
        if index < 0 or index >= self.size:
            return  # If the index is out of bounds, do nothing

        if index == 0:
            # If index is 0, delete the head node
            self.head = self.head.next
        else:
            current = self.head  # Start from the head
            for _ in range(index - 1):
                # Traverse to the node just before the index
                current = current.next
            current.next = current.next.next  # Skip the node at the index
        self.size -= 1  # Decrement the size of the list

```
```ruby []
class MyLinkedList
  # Node class to represent a node in the linked list
  class Node
    attr_accessor :val, :next

    def initialize(val)
      # Initialize the node with a value and set the next pointer to nil
      @val = val
      @next = nil
    end
  end

  def initialize
    # Initialize the linked list with head set to nil and size to 0
    @head = nil
    @size = 0
  end

  def get(index)
    # Get the value at the given index
    return -1 if index < 0 || index >= @size

    current = @head # Start from the head
    index.times do
      current = current.next # Traverse to the node at the given index
    end

    current.val # Return the value at the given index
  end

  def add_at_head(val)
    # Add a node with value val at the head
    new_node = Node.new(val) # Create a new node
    new_node.next = @head # Set new node's next to current head
    @head = new_node # Update head to the new node
    @size += 1 # Increment the size of the list
  end

  def add_at_tail(val)
    # Add a node with value val at the tail (end) of the list
    new_node = Node.new(val) # Create a new node

    if @head.nil?
      # If the list is empty, set the new node as the head
      @head = new_node
    else
      current = @head # Start from the head
      current = current.next until current.next.nil? # Traverse to the last node
      current.next = new_node # Set the last node's next to the new node
    end

    @size += 1 # Increment the size of the list
  end

  def add_at_index(index, val)
    # Add a node with value val at the given index
    return if index < 0 || index > @size

    if index == 0
      add_at_head(val) # If index is 0, add at head
    else
      new_node = Node.new(val) # Create a new node
      current = @head # Start from the head

      # Traverse to the node just before the given index
      (index - 1).times { current = current.next }

      new_node.next = current.next # Link the new node to the next node
      current.next = new_node # Link current node to the new node

      @size += 1 # Increment the size of the list
    end
  end

  def delete_at_index(index)
    # Delete the node at the given index
    return if index < 0 || index >= @size

    if index == 0
      @head = @head.next # If index is 0, delete the head
    else
      current = @head # Start from the head

      # Traverse to the node just before the one to delete
      (index - 1).times { current = current.next }

      # Skip the node at the given index
      current.next = current.next.next
    end

    @size -= 1 # Decrement the size of the list
  end
end
```
``` dart []
class MyLinkedList {
  // Node class to represent a node in the linked list
  class Node {
    int val;
    Node? next;

    // Constructor to initialize the node with a value
    Node(this.val);
  }

  Node? head; // Head pointer for the linked list
  int size;   // To keep track of the size of the list

  MyLinkedList() : head = null, size = 0; // Constructor to initialize the linked list

  // Get the value at the specified index
  int get(int index) {
    if (index < 0 || index >= size) {
      return -1; // Return -1 if index is out of bounds
    }
    
    Node? current = head; // Start from the head
    for (int i = 0; i < index; i++) {
      current = current?.next; // Traverse to the node at the given index
    }
    
    return current!.val; // Return the value at the node
  }

  // Add a node with value val at the head
  void addAtHead(int val) {
    Node newNode = Node(val); // Create a new node
    newNode.next = head; // Set new node's next to current head
    head = newNode; // Update head to the new node
    size++; // Increment the size of the list
  }

  // Add a node with value val at the tail
  void addAtTail(int val) {
    Node newNode = Node(val); // Create a new node
    
    if (head == null) {
      head = newNode; // If list is empty, set the new node as the head
    } else {
      Node? current = head; // Start from the head
      
      // Traverse to the last node
      while (current?.next != null) {
        current = current?.next;
      }
      
      current?.next = newNode; // Set the last node's next to the new node
    }
    
    size++; // Increment the size of the list
  }

  // Add a node with value val at the given index
  void addAtIndex(int index, int val) {
    if (index < 0 || index > size) return; // Return if index is out of bounds
    
    if (index == 0) {
      addAtHead(val); // If index is 0, add at head
    } else {
      Node newNode = Node(val); // Create a new node
      Node? current = head; // Start from the head
      
      // Traverse to the node just before the index
      for (int i = 0; i < index - 1; i++) {
        current = current?.next;
      }
      
      newNode.next = current?.next; // Link new node to the next node
      current?.next = newNode; // Link current node to the new node
      size++; // Increment the size of the list
    }
  }

  // Delete the node at the specified index
  void deleteAtIndex(int index) {
    if (index < 0 || index >= size) return; // Return if index is out of bounds
    
    if (index == 0) {
      head = head?.next; // If index is 0, delete the head node
    } else {
      Node? current = head; // Start from the head
      
      // Traverse to the node just before the index
      for (int i = 0; i < index - 1; i++) {
        current = current?.next;
      }
      
      current?.next = current?.next?.next; // Skip the node at the given index
    }
    
    size--; // Decrement the size of the list
  }
}


```
