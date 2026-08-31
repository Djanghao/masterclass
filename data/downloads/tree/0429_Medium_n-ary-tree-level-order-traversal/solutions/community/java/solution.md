# JAVA || Easy Solution Using ArrayList || 90% Faster Code

**Author:** shivrastogi
**Votes:** 15
**Link:** [https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/2532193/](https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/2532193/)

---

	PLEASE UPVOTE IF YOU LIKE.
```
class Solution {

public List<List<Integer>> levelOrder(Node root) {
    List<List<Integer>> nm=new ArrayList<List<Integer>>();
    if(root==null)
        return nm;
    Queue<Node> kk=new LinkedList<>();
    kk.offer(root);
    while(!kk.isEmpty())
    {
        int p=kk.size();
        ArrayList<Integer> k=new ArrayList<>();
        for(int i=0;i<p;i++)
        {
            k.add(kk.peek().val);
            for(Node f:kk.peek().children)
            {
                kk.offer(f);
            }
            kk.poll();
        }
        nm.add(new ArrayList<>(k));
    }
    return nm;
}
}
```