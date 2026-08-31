# Java beats 100%  solution [Double LinkedList + HashMap]

**Author:** flyingorange
**Votes:** 25
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/1214603/](https://leetcode.com/problems/design-a-leaderboard/solutions/1214603/)

---

Hey everyone, this solution is heavily inspired by LRU cache problem, so I highly recommend you also go ahead and solve that!
Edit: Thank you everyone, glad to see that the solution helps :D

Intuition:
* You need to keep track of scores of individuals and update them.
	* The best method for that would be to use a HashMap with the StudentID as key
* You also need to maintain a list structure of students and process them based on methods called
	* A Doubly linkedList comes in handy since moving students around post updating scores can be done in O(n)

Implementation:
Begin by building the object for LinkedList structure, here I am doing it under Node. We define 2 dummy nodes as head and tail between which all actual nodes will be placed.
We will need the following method implemented for processing of LinkedList:
* addToTail(node) -> adds a new node to the tail. [O(1) time]
* removeNode(node) -> removes node from LinkedList. [O(1) time]
* insertNode(node) -> insertsNode in linkedList such that the list is in descending order from head to tail. [O(n) time]

Awesome! we are ready for the actual implementation of the class methods!

addScore:
* create node if not already exists
* Update score as per input
* remove node from LinkedList, insert it back!

top:
* int sum = 0;
* get the top K node after head and add the scores to sum and return!

reset:
* remove node
* set score to 0
* add node to tail

Please let me know if there can be any improvements to the code!

I hope this helps, Thanks!
```
class Leaderboard {
    
    class Node{
        int id;
        int score;
        Node prev;
        Node next;
        
        public Node(){}
        public Node(int id, int score){
            this.id = id;
            this.score = score;
        }
    }
    
    HashMap<Integer, Node> ref;
    Node head = new Node();
    Node tail = new Node();
    
    public void removeNode(Node node){
        Node nPrev = node.prev;
        Node nNext = node.next;
        nPrev.next = nNext;
        nNext.prev = nPrev;
    }
    
    public void addToTail(Node node){
        Node prevLast = tail.prev;
        node.prev = prevLast;
        prevLast.next = node;
        
        node.next = tail;
        tail.prev = node;
    }
    
    public void insertNode(Node node){
        Node curr = tail.prev;
        while(curr != head){
            if(curr.score > node.score) break;
            curr = curr.prev;
        }
        node.prev = curr;
        node.next = curr.next;
        curr.next.prev = node;
        curr.next = node;
    }
    
    public Leaderboard() {
        ref = new HashMap<Integer, Node>();
        head.next = tail;
        tail.prev = head;
    }
    
    public void addScore(int playerId, int score) {
        if(!ref.containsKey(playerId)){
            Node node = new Node(playerId, 0);
            ref.put(playerId, node);
            addToTail(node);
        }
        Node temp = ref.get(playerId);
        removeNode(temp);
        temp.score += score;
        insertNode(temp);
    }
    
    public int top(int K) {
        int sum = 0;
        Node temp = head.next;
        int index = 0;
        while(temp != tail && index < K){
            sum += temp.score;
            temp = temp.next;
            index++;
        }
        return sum;
    }
    
    public void reset(int playerId) {
        Node node = ref.get(playerId);
        removeNode(node);
        node.score = 0;
        addToTail(node);
    }
}

/**
 * Your Leaderboard object will be instantiated and called as such:
 * Leaderboard obj = new Leaderboard();
 * obj.addScore(playerId,score);
 * int param_2 = obj.top(K);
 * obj.reset(playerId);
 */
```