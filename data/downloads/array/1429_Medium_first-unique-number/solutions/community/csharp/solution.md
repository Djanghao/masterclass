# C# Solution using LinkedList queue and Dictionary to store value -> node - O(1) all operations

**Author:** somdeep
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-unique-number/solutions/3203255/](https://leetcode.com/problems/first-unique-number/solutions/3203255/)

---

# Intuition
Use a LinkedList queue - and a Dictionary to store a map from a value to a node in the queue 

# Approach


# Complexity
- Time complexity:
O(1) Add and ShowFirstUnique

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class FirstUnique {
    public Dictionary<int, LinkedListNode<int>> travel = new Dictionary<int, LinkedListNode<int>>();

    public LinkedList<int> queue = new LinkedList<int>();

    public FirstUnique(int[] nums) {
        foreach(int num in nums)
        {
            this.Add(num);
        }
    }
    
    public int ShowFirstUnique() {
        if(queue.Count > 0)  return queue.Last.Value;

        return -1;
    }
    
    public void Add(int value) {
        if(!travel.ContainsKey(value))
        {
            LinkedListNode<int> lln = new LinkedListNode<int>( value );
            queue.AddFirst(lln);
            travel.Add(value, lln);
        }
        else if(travel[value] != null)
        {
            queue.Remove(travel[value]);
            travel[value] = null;

        }
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * FirstUnique obj = new FirstUnique(nums);
 * int param_1 = obj.ShowFirstUnique();
 * obj.Add(value);
 */
```