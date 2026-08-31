# Clean Codes🔥🔥|| Full Explanation✅|| Doubly Linked List✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 50
**Link:** [https://leetcode.com/problems/design-browser-history/solutions/3309592/](https://leetcode.com/problems/design-browser-history/solutions/3309592/)

---

# What Problem says ?
- Create a class called `BrowserHistory` that keeps track of the web pages a user has visited in a web browser. 
- Also make a `visit` method to add new pages to the `history` and `back` and `forward` methods to move the user back and forward in their browsing history. 

# Approach : Using Doubly Linked List
- Define a `Node` class which represents a node in a linked list. Each node contains a URL and has references to the previous and next nodes in the list.
- In `BrowserHistory` class ,use the Node class to implement a browser history that allows the user to navigate back and forward through visited URLs. 
- It has a constructor that takes a homepage URL, and a visit method that adds a new URL to the history by creating a new node and updating the current node's next reference to point to it.
- In `back` method ,navigate backwards through the history by updating the current node's reference to the previous node, until the desired number of steps have been taken or there are no more previous nodes. and return the URL of the current node.
- In `forward` method ,navigate forward through the history by updating the current node's reference to the next node, until the desired number of steps have been taken or there are no more next nodes and return the URL of the current node.
<!-- Describe your approach to solving the problem. -->

# Let's See an Example :
```
BrowserHistory history = new BrowserHistory("https://www.google.com");

// Visit some websites
history.visit("https://en.wikipedia.org");
history.visit("https://www.nytimes.com");
history.visit("https://www.youtube.com");

// Go back to the previous website twice
System.out.println(history.back(2)); // Outputs: https://en.wikipedia.org

// Go forward to the next website
System.out.println(history.forward(1)); // Outputs: https://www.nytimes.com

// Visit a new website
history.visit("https://www.reddit.com");

// Go back to the previous website
System.out.println(history.back(1)); // Outputs: https://www.nytimes.com


```
- In this example, we create a new `BrowserHistory` object with the homepage set to `https://www.google.com.` We then visit some websites and move back and forward through the history using the `back` and `forward` methods. Finally, we visit a new website and go back to the previous site again.
# Complexity :
- Time complexity : O(steps)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```
# Codes [C++ |Java |Python3] : With Comments
```Java []
// A class to represent a node in a linked list
class Node {
  // The previous and next nodes in the list
  public Node prev;
  public Node next;
  // The URL represented by this node
  public final String url;
  
  // Constructor that sets the URL for this node
  public Node(final String url) {
    this.url = url;
  }
}

// A class to represent a browser history
class BrowserHistory {
  // The current node in the history
  private Node curr;
  
  // Constructor that creates a new history with the given homepage
  public BrowserHistory(String homepage) {
    // Create a new node to represent the homepage
    curr = new Node(homepage);
  }

  // Method to add a new URL to the history
  public void visit(String url) {
    // Create a new node to represent the new URL
    curr.next = new Node(url);
    // Set the previous node for the new node to be the current node
    curr.next.prev = curr;
    // Make the new node the current node
    curr = curr.next;
  }

  // Method to navigate back in the history by the given number of steps
  public String back(int steps) {
    // While there are previous nodes and we haven't gone back enough steps yet
    while (curr.prev != null && steps-- > 0) {
      // Move back one node by setting the current node to the previous node
      curr = curr.prev;
    }
    // Return the URL represented by the current node
    return curr.url;
  }

  // Method to navigate forward in the history by the given number of steps
  public String forward(int steps) {
    // While there are next nodes and we haven't gone forward enough steps yet
    while (curr.next != null && steps-- > 0) {
      // Move forward one node by setting the current node to the next node
      curr = curr.next;
    }
    // Return the URL represented by the current node
    return curr.url;
  }
}

```
```C++ []
// A struct to represent a node in a doubly linked list
struct Node {
  // The previous and next nodes in the list
  Node* prev = nullptr;
  Node* next = nullptr;
  // The URL represented by this node
  const string url;

  // Constructor that sets the URL for this node
  Node(const string& url) : url(url) {}
};

// A class to represent a browser history
class BrowserHistory {
 public:
  // Constructor that creates a new history with the given homepage
  BrowserHistory(string homepage) {
    // Create a new node to represent the homepage
    curr = new Node(homepage);
  }

  // Method to add a new URL to the history
  void visit(string url) {
    // Create a new node to represent the new URL
    curr->next = new Node(url);
    // Set the previous node for the new node to be the current node
    curr->next->prev = curr;
    // Make the new node the current node
    curr = curr->next;
  }

  // Method to navigate back in the history by the given number of steps
  string back(int steps) {
    // While there are previous nodes and we haven't gone back enough steps yet
    while (curr->prev && steps-- > 0) {
      // Move back one node by setting the current node to the previous node
      curr = curr->prev;
    }
    // Return the URL represented by the current node
    return curr->url;
  }

  // Method to navigate forward in the history by the given number of steps
  string forward(int steps) {
    // While there are next nodes and we haven't gone forward enough steps yet
    while (curr->next && steps-- > 0) {
      // Move forward one node by setting the current node to the next node
      curr = curr->next;
    }
    // Return the URL represented by the current node
    return curr->url;
  }

 private:
  // The current node in the history
  Node* curr = nullptr;
};

```
```Python []
# A class to represent a node in a doubly linked list
class Node:
  def __init__(self, url: str):
    # The previous and next nodes in the list
    self.prev = None
    self.next = None
    # The URL represented by this node
    self.url = url

# A class to represent a browser history
class BrowserHistory:
  def __init__(self, homepage: str):
    # Create a new node to represent the homepage
    self.curr = Node(homepage)

  # Method to add a new URL to the history
  def visit(self, url: str) -> None:
    # Create a new node to represent the new URL
    self.curr.next = Node(url)
    # Set the previous node for the new node to be the current node
    self.curr.next.prev = self.curr
    # Make the new node the current node
    self.curr = self.curr.next

  # Method to navigate back in the history by the given number of steps
  def back(self, steps: int) -> str:
    # While there are previous nodes and we haven't gone back enough steps yet
    while self.curr.prev and steps > 0:
      # Move back one node by setting the current node to the previous node
      self.curr = self.curr.prev
      steps -= 1
    # Return the URL represented by the current node
    return self.curr.url

  # Method to navigate forward in the history by the given number of steps
  def forward(self, steps: int) -> str:
    # While there are next nodes and we haven't gone forward enough steps yet
    while self.curr.next and steps > 0:
      # Move forward one node by setting the current node to the next node
      self.curr = self.curr.next
      steps -= 1
    # Return the URL represented by the current node
    return self.curr.url

```

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)
