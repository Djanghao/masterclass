# Java, Sqrt Decomposition, Short, Doubly Linked List

**Author:** madno
**Votes:** 30
**Link:** [https://leetcode.com/problems/design-most-recently-used-queue/solutions/1065076/](https://leetcode.com/problems/design-most-recently-used-queue/solutions/1065076/)

---

```
/*
Partition numbers into bucket = sqrt(n) long doubly linked lists (dll).

Access directly the target/bucket-th bucket and seek
to the anwser: target%bucket

When removing the target from the dll, rebalance by appending
each subsequent head to the end of the previous bucket.

Append target to the last bucket dll.

Use sentinel nodes to ease coding.
*/
class MRUQueue {
    Node[] nodes;
    int bucket;
    public MRUQueue(int n) {
        bucket = (int)Math.sqrt(n);
        nodes = new Node[(n+bucket-1)/bucket];
        Arrays.asList(nodes).replaceAll(i->new Node(-1));
        for(int i = 1; i <= n;++i){
            nodes[(i-1)/bucket].pre.append(new Node(i));
        }
    }
    public int fetch(int k) {
        var ans = nodes[--k/bucket].nxt;
        for(int i = k%bucket; i > 0; --i){//seek to target inside bucket
            ans = ans.nxt;
        }
        ans.remove();
        for(int i = 1+k/bucket; i < nodes.length; ++i){//rebalance
            nodes[i-1].pre.append(nodes[i].nxt.remove());
        }
        nodes[nodes.length-1].pre.append(ans);
        return ans.val;
    }
    static class Node{
        Node pre = this, nxt = this;
        int val;
        Node(int v){
            val = v;
        }
        void append(Node node){
            var tmp = nxt;
            nxt = node;
            node.pre = this;
            node.nxt = tmp;
            tmp.pre = node;
        }
        Node remove(){
            pre.nxt = nxt;
            nxt.pre = pre;
            return nxt = pre = this;
        }
    }
}
```