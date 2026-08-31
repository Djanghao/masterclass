# C# - method using only two pointers

**Author:** RajakumaranC
**Votes:** 8
**Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/1535520/](https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/1535520/)

---

# This runs at O(AB) Space
```
public ListNode GetIntersectionNode(ListNode headA, ListNode headB) {
        
        if(headA == null || headB == null) return null;
        
        HashSet<ListNode> ListA = new HashSet<ListNode>();
        HashSet<ListNode> ListB = new HashSet<ListNode>();
        
        ListNode currentA = headA;
        ListNode currentB = headB;
        
        
        
        while(currentA != null || currentB != null)
        {
           if(currentA != null)
           {
                if(ListB.Contains(currentA))
                return currentA;
            
            ListA.Add(currentA);
            currentA = currentA.next;
           }
            
            if(currentB != null)
            {

            if(ListA.Contains(currentB))
                return currentB;
            
            ListB.Add(currentB);
            
            
            currentB = currentB.next;
            }
        }
        
        return null;
        
    }

```

# This runs at O(1) Space
```
public ListNode GetIntersectionNode(ListNode headA, ListNode headB) {
     
        ListNode NodeA = headA, NodeB = headB;
        
        while(NodeA != NodeB)
        {
            NodeA = (NodeA == null) ? headB : NodeA.next;
            NodeB = (NodeB == null) ? headA : NodeB.next;
        }
        
        return NodeA;
        
        // Why this works
        // If two LinkedList meetup at somepoint then at that point both LinkedList nodes should be equal.
        // If you Both has same length and meetup at exactly same distance from head then easy right? 
        // What if thats not the case? 
        // What if one goes ahead of other in the pointer? 
        // Now if one is ahead of the other pointer then if you just loop back to start of the next.. then when you iterate they eventually meetup at somepoint right? 
        // Thats the trick
		// also the loop breaks if both a and b are null which also eventually happens when you cycle back.
        
    }

```