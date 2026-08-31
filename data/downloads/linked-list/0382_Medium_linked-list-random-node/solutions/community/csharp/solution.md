# C# Low-effort solution

**Author:** ilya-a-f
**Votes:** 1
**Link:** [https://leetcode.com/problems/linked-list-random-node/solutions/3281620/](https://leetcode.com/problems/linked-list-random-node/solutions/3281620/)

---

```
public class Solution
{
    private int length;
    private Random random;
    private ListNode head;

    public Solution(ListNode head)
    {
        this.head = head;
        this.random = new Random();
        this.length = GetNodes().Count();
    }
    
    public int GetRandom()
    {
        var i = random.Next(length);
        var node = GetNodes().ElementAt(i);
        return node.val;
    }

    public IEnumerable<ListNode> GetNodes()
    {
        var node = head;
        while (node != null)
        {
            yield return node;
            node = node.next;
        }
    }
}
```