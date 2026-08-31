# C#, O(1) solution using Dictionary and HashSet

**Author:** edevyatkin
**Votes:** 2
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/685571/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/685571/)

---

```
public class RandomizedCollection {
    private Dictionary<int,HashSet<int>> _dict;
    private List<int> _list;
    private Random _rand;
    
    /** Initialize your data structure here. */
    public RandomizedCollection() {
        _dict = new Dictionary<int,HashSet<int>>();
        _list = new List<int>(); 
        _rand = new Random();
    }
    
    /** Inserts a value to the collection. Returns true if the collection did not already contain the specified element. */
    public bool Insert(int val) {
        bool result = false;
        if (!_dict.ContainsKey(val)) {
            _dict[val] = new HashSet<int>();
            result = true;
        }
        _list.Add(val);
        int index = _list.Count-1;
        _dict[val].Add(index);
        return result;        
    }
    
    /** Removes a value from the collection. Returns true if the collection contained the specified element. */
    public bool Remove(int val) {
        if (!_dict.ContainsKey(val))
            return false;
        int indexToRemove = _dict[val].First();
        _dict[val].Remove(indexToRemove);
        if (indexToRemove != _list.Count-1) {
            _dict[_list[^1]].Remove(_list.Count-1);
            _list[indexToRemove] = _list[^1];
            _dict[_list[indexToRemove]].Add(indexToRemove);            
        }
        _list.RemoveAt(_list.Count-1);
        if (_dict[val].Count == 0)
            _dict.Remove(val);
        return true;       
    }
    
    /** Get a random element from the collection. */
    public int GetRandom() {
        int index = _rand.Next(_list.Count);
        return _list[index];        
    }
}
```