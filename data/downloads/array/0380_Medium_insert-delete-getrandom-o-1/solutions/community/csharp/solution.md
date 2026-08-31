# C# dictionary and list

**Author:** clewBy
**Votes:** 8
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/2858191/](https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/2858191/)

---

As a bonus there is a [video](https://www.youtube.com/watch?v=46dZH7LDbf8) where Neetcode creator interviews one arrogant Meta intern by using exactly the same question.
```
public class RandomizedSet {
    private Random rnd = new();
    private Dictionary<int, int> map = new();
    private List<int> list = new();

    public RandomizedSet() {}
    
    public bool Insert(int val) {
        if(map.ContainsKey(val)) return false;
        list.Add(val);
        map.Add(val, list.Count-1);
        return true;
    }
    public bool Remove(int val) {
        if(!map.ContainsKey(val)) return false;
        int lastVal = list[list.Count-1];
        list[list.Count-1] = val;
        list[map[val]] = lastVal;
        map[lastVal] = map[val];
        map.Remove(val);
        list.RemoveAt(list.Count-1);
        return true;
    }
    public int GetRandom() {
        int idx = rnd.Next(0, list.Count);
        return list[idx];
    }
}
```