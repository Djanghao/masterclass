# C# : O(n) Time. Sliding window with Custom Linked Hash Map

**Author:** Tabrej
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/1370045/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/1370045/)

---

```
//This solution uses custom Linked hash map for maintaning on ordered dictionary.
// The idea is to maintain left and right pointer initially set to 0.
// keep adding the new elements from the array with the index to LinkedHashMap by incrementing the right pointer.
// If the capacity is reached, custom LinkedHashMap implementation makes sure it removes the index with minimum value in O(1) time

public class Solution {
    public int LengthOfLongestSubstringKDistinct(string s, int k) {
        
        int length = s.Length;
        if(length ==0 || k == 0) return 0;
        
        int maxLength = 1, left =0, right =0;
        LinkedHashMap linkedHashMap = new LinkedHashMap(k);
        
        while(right < length)
        {
            left = linkedHashMap.put(s[right], right);
            
            right++;
            
            maxLength = Math.Max(maxLength, right - left);
        }
        
        return maxLength;
        
    }
}

//Adds the character and the index in custom LinkedHashMap kind of datastructure in O(1) time using put(char key, char value) method
// When the capacity is reached, Item with lowest value is removed in O(1) time

public class LinkedHashMap
{
    private class Node
    {
        public char Key {get; set;}
        public int Val { get; set; }
    }
    
    //For initializing the constructor with capacity(k), size
    int Capacity;
    int Left ;
    int size;
    
    //Dictionary for fetching the value for a key in O(1) time 
    Dictionary<char, LinkedListNode<Node>> CharMap;
    
    //DLL for maintaining Ordered dictionary logic - Move/Add the most recently used item at front of the list
    LinkedList<Node> circularDll;
    
    public LinkedHashMap(int capacity)
    {
        Capacity = capacity;
        Left =0;
        size =0;
        
        CharMap = new Dictionary<char, LinkedListNode<Node>>();
        circularDll = new LinkedList<Node>();
    }
    
    //Add the key at front of the DLL thus maintaining the logic of ordered dictionary
    //Whenever an item needs to be removed after reaching the capacity, the last node of the dll can be removed safely
    //Dictionary is being maintained here so that we can check whether the key already exists in the dictionary in O(1) time 
    public int put (char key, int value)
    {
        //If the key already exists, Move (remove , Add at front) it to the front of the DLL(Doubly linked list)
        if(CharMap.ContainsKey(key))
        {
            var node = CharMap[key];
            circularDll.Remove(node);
            circularDll.AddFirst(node);
            node.Value.Val = value;
        }
        //else add the node at the front of the list, increase the size,
        //if capacity is reached, remove the node from the front, move the left index one step ahead, return left
        else
        {        
            circularDll.AddFirst(new Node {Key = key, Val = value });
            CharMap.Add(key, circularDll.First );
            size++;

            if(size == Capacity+1)
            {
                CharMap.Remove(circularDll.Last.Value.Key);
                Left = circularDll.Last.Value.Val +1;
                circularDll.RemoveLast();
                size--;
            }
        }
        
        return Left;
        
    }
}
```