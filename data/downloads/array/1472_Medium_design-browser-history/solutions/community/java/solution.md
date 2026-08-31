# Java use dual LinkedList

**Author:** hobiter
**Votes:** 184
**Link:** [https://leetcode.com/problems/design-browser-history/solutions/674388/](https://leetcode.com/problems/design-browser-history/solutions/674388/)

---

I cannot think of a better data structure than dual-linked list to solve this problem.
Looks like DDL is born to solve it.

```
class BrowserHistory {
    
    public class Node{
        String url;
        Node next, prev;
        public Node(String url) {
            this.url = url;
            next = null;
            prev = null;
        }
    }
    
    Node curr;
    public BrowserHistory(String homepage) {
        curr = new Node(homepage);
    }
    
    public void visit(String url) {
        Node node = new Node(url);
        curr.next = node;
        node.prev = curr;
        curr = node;
    }
    
    public String back(int steps) {
        while (curr.prev != null && steps-- > 0) {
            curr = curr.prev;
        }
        return curr.url;
    }
    
    public String forward(int steps) {
        while (curr.next != null && steps-- > 0) {
            curr = curr.next;
        }
        return curr.url;
    }
}
```
Update 20240108, removing unused "head", thanks to @gotit.