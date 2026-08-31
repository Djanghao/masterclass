# C# dictionary solution | 3ms beats 87% runtime

**Author:** nzspider
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-sum-pairs/solutions/5950834/](https://leetcode.com/problems/map-sum-pairs/solutions/5950834/)

---

![image.png](./images/0.png)


# Code
```csharp []
public class MapSum {
    Dictionary<string,int> dic;
    public MapSum() {
        dic=new Dictionary<string,int>();
    }
    
    public void Insert(string key, int val) {
        dic[key]=val;
    }
    
    public int Sum(string prefix) {
        return dic.Where(d=>d.Key.StartsWith(prefix)).Sum(d=>d.Value);
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * MapSum obj = new MapSum();
 * obj.Insert(key,val);
 * int param_2 = obj.Sum(prefix);
 */
```