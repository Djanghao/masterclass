# C# : O(1) : In-Built Doubly Linked List and Dictionary : Proper comments

**Author:** Tabrej
**Votes:** 2
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/1373526/](https://leetcode.com/problems/lfu-cache/solutions/1373526/)

---

```
//Using the in built Doubly linked list data structure of C#, Takes O(1) time is LinkedListNode is passed to LinkedList for removal.
//Thats is why NodeDictionary maintains a map of key and LinkedListNode.
//Custom node class Node to makes sure key and count is always available with Value of the item.

public class LFUCache {
    
    private class Node
    {
        public int Key {get; set; }
        public int Val {get; set; }
        public int Count {get; set;}
    }
    
    //Dictionary for key to value mapping for checking if key exists in O(1) time, Handles Get Calls for returning value
    
	Dictionary<int, LinkedListNode<Node>> NodeDictionary;
    
	//Dictionary for element count( how frequently it has been accessed/updated) to value mapping for checking. Maintains value in a bucket where bucket is a Doubly linked list to remove the nodes in O(1) time if needed. Adds the new elements with same count at thge front of the DLL to maintain LRU logic inn case there is a tie for count of the elements for the removal candidates
	//    Count       Items
	//     1           2->3->5
	//     2           8->10->4
	//     4           1->6->9

    Dictionary<int, LinkedList<Node>> CountDictionary;
    
    int Capacity;
    int CacheCurrentSize;
    int Min;

    public LFUCache(int capacity) {
        
        NodeDictionary = new Dictionary<int, LinkedListNode<Node>>();
        CountDictionary = new Dictionary<int, LinkedList<Node>>();
        Capacity = capacity;
        CacheCurrentSize = 0;
        Min =1;
        
    }
    
    public int Get(int key) {
        
        if(!NodeDictionary.ContainsKey(key)) return -1;
        
        var currentNode = NodeDictionary[key];
        
        updateNodeCountAndFrequency(currentNode);
        
        return currentNode.Value.Val;
        
		// Explanation : currentNode is LinkedListNode, LinkedListNode.Value return the value wrapped in a given LinkedListNode which is Node type in this case thus Node.Val will return the value.  
	   }
    
    public void Put(int key, int value) 
	{        
        if(Capacity == 0) return;
        
        if(NodeDictionary.ContainsKey(key))
        {
            var currentNode = NodeDictionary[key];
            
            currentNode.Value.Val = value;
            
            updateNodeCountAndFrequency(currentNode);
            return;
        }
        
        if(CacheCurrentSize == Capacity)
        {
            var minCountList = CountDictionary[Min];
			
            NodeDictionary.Remove(minCountList.Last.Value.Key);
            
            // Explanation : minCountList is Doubly linked list. minCountList.Last is the Last item in the DLL which if of type LinkedListNode, LinkedListNode.Value return the value wrapped in a given LinkedListNode which is Node type in this case thus Node.Key will return the key using which the item will be removed from NodeDictionary. 
            
            minCountList.RemoveLast();
            
            CacheCurrentSize--;
        }
        
        Min=1;
        LinkedList<Node> countList;
        if(!CountDictionary.ContainsKey(Min))
        {
            countList = new LinkedList<Node>();
            CountDictionary.Add(Min, countList);
        }
        else countList = CountDictionary[Min];
        countList.AddFirst(new Node{Key = key, Val = value, Count = 1});
        
        NodeDictionary.Add(key, countList.First);
        CacheCurrentSize++;
    }
    
    private void updateNodeCountAndFrequency(LinkedListNode<Node> currNode)
    {
        var currCountList = CountDictionary[currNode.Value.Count];
        
        currCountList.Remove(currNode);
        
        // currCountList.Count : is it O(n) ??
        if(currCountList.Count ==0 && currNode.Value.Count == Min) Min++;
        
        currNode.Value.Count++;
        
        LinkedList<Node> countList;
        if(!CountDictionary.ContainsKey(currNode.Value.Count))
        {
           countList = new LinkedList<Node>();
           CountDictionary.Add(currNode.Value.Count, countList); 
        }
        else countList = CountDictionary[currNode.Value.Count];
        countList.AddFirst(currNode.Value);
        
        //The current node refernce needs to be updated back in the NodeDictionary.
        NodeDictionary[currNode.Value.Key] = countList.First;
        
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * LFUCache obj = new LFUCache(capacity);
 * int param_1 = obj.Get(key);
 * obj.Put(key,value);
 */
 ```