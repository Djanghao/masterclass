# C# SortedDictionary and DoubleLinkedList

**Author:** clewBy
**Votes:** 3
**Link:** [https://leetcode.com/problems/max-stack/solutions/2674451/](https://leetcode.com/problems/max-stack/solutions/2674451/)

---


```
public class MaxStack {
    class MaxComparer : IComparer<int>{
        public int Compare(int a, int b){
            return b-a;
        }
    }
    class Node{
        public Node prev;
        public Node next;
        public int val;
        public Node(){}
        public Node(int val){
            this.val = val;
        }
    }

    SortedDictionary<int, List<Node>> map = new SortedDictionary<int, List<Node>>(new MaxComparer());
    Node head, tail;

    public MaxStack() {
        this.head = new Node();
        this.tail = new Node();
        head.next = tail;
        tail.prev = head;
    }
    public void Push(int x) {
        Node node = new Node(x);
        if(!map.ContainsKey(x))
            map.Add(x, new List<Node>());
        map[x].Add(node);
        Node last = tail.prev;
        last.next = node;
        node.prev = last;
        node.next = tail;
        tail.prev = node;
    }
    public int Pop() {
        Node last = tail.prev;
        last.prev.next = tail;
        tail.prev = last.prev;
        map[last.val].RemoveAt(map[last.val].Count-1);
        if(map[last.val].Count == 0)
            map.Remove(last.val);
        return last.val;
    }
    public int Top() {
        return tail.prev.val;
    }
    public int PeekMax() {
        return map.First().Value[0].val;
    }
    public int PopMax() {
        List<Node> list = map.First().Value;
        Node node = list[list.Count-1];
        list.RemoveAt(list.Count-1);
        if(list.Count == 0)
            map.Remove(node.val);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        return node.val;
    }
}
```