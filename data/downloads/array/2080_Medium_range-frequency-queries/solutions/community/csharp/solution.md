# C# Easy Solution using segment tree

**Author:** mohamedAbdelety
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-frequency-queries/solutions/3991874/](https://leetcode.com/problems/range-frequency-queries/solutions/3991874/)

---

```
public class RangeFreqQuery {
    Dictionary<int,int>[] tree;
    int n;  
    public RangeFreqQuery(int[] arr) {
        n = arr.Length;
        tree = new Dictionary<int,int>[4 * n + 1];
        void build(int v,int vl,int vr){
            if(vl == vr){
                tree[v] = new Dictionary<int,int>();
                tree[v].Add(arr[vl],1);
                return;
            }
            int vm = (vl + vr) / 2;
            build(2 * v,vl,vm);
            build(2 * v + 1,vm + 1,vr);
            tree[v] = new Dictionary<int,int>();
            foreach(var kv in tree[2 * v]){
                if(!tree[v].ContainsKey(kv.Key)) tree[v].Add(kv.Key,kv.Value);
                else tree[v][kv.Key]+= kv.Value;
            }
            foreach(var kv in tree[2 * v + 1]){
                if(!tree[v].ContainsKey(kv.Key)) tree[v].Add(kv.Key,kv.Value);
                else tree[v][kv.Key]+= kv.Value;
            }
        }
        build(1,0, n - 1);
    }
    
    public int Query(int left, int right, int value) {
        int Get(int v,int vl,int vr,int l,int r){
            if(l > r) return 0;
            if(vl == l && vr == r)
                return (tree[v].ContainsKey(value)) ? tree[v][value] : 0;
            int vm = (vl + vr) / 2;
            int res1 = Get(2 * v,vl,vm,l,Math.Min(r,vm));
            int res2 = Get(2 * v + 1,vm + 1,vr,Math.Max(l,vm + 1),r);
            return res1 + res2;
        }
        return Get(1,0,n - 1,left,right);
    }

}
```