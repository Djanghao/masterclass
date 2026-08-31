# C# Solution || Easy Solution using HashSet

**Author:** mohamedAbdelety
**Votes:** 0
**Link:** [https://leetcode.com/problems/throne-inheritance/solutions/4679862/](https://leetcode.com/problems/throne-inheritance/solutions/4679862/)

---

```
public class ThroneInheritance {
    HashSet<string> set;
    string _kingName;
    Dictionary<string,List<string>> map;
    public ThroneInheritance(string kingName) {
        set = new();
        map = new();
        _kingName = kingName;
    }
    
    public void Birth(string parentName, string childName) {
        if(!map.ContainsKey(parentName)) map[parentName] = new List<string>();
        map[parentName].Add(childName);
    }
    
    public void Death(string name) {
        set.Add(name);
    }
    
    public IList<string> GetInheritanceOrder() {
        List<string> res = new();
        void dfs(string cur){
            if(!set.Contains(cur))
                res.Add(cur);
            if(!map.ContainsKey(cur)) return;
            for(int i = 0;i < map[cur]?.Count;i++)
                dfs(map[cur][i]);
        }
        dfs(_kingName);
        return res;
    }
}
```