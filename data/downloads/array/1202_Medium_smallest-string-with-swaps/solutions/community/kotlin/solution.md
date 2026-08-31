# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 6
**Link:** [https://leetcode.com/problems/smallest-string-with-swaps/solutions/1986936/](https://leetcode.com/problems/smallest-string-with-swaps/solutions/1986936/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
class Solution {
    public String smallestStringWithSwaps(String s, List<List<Integer>> pairs) {
        int n = s.length();
        int[] parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        for (List<Integer> pair : pairs) {
            int left = getRoot(parent, pair.get(0));
            int right = getRoot(parent, pair.get(1));
            if (left != right) {
                parent[left] = right;
            }
        }
        
        Map<Integer, List<Integer>> groups = new HashMap<>();
        for (int i = 0; i < n; i++) {
            groups.computeIfAbsent(getRoot(parent, i), r -> new ArrayList<>()).add(i);
        }
        char[] res = s.toCharArray();
        for (List<Integer> group : groups.values()) {


            char[] chars = new char[group.size()];
            for (int i = 0; i < chars.length; i++) {
                chars[i] = s.charAt(group.get(i));
            }
            Arrays.sort(chars);
            for (int i = 0; i < chars.length; i++) {
                res[group.get(i)] = chars[i];
            }
            
        }
        return new String(res);
        
    }
```

***JavaScript***
```
var smallestStringWithSwaps = function(s, pairs) {
function DisjointSet(len) {
this.par = [];
for (let i = 0; i < len; ++i) {
this.par[i] = i;
}
}
DisjointSet.prototype.find = function(u) {
return (this.par[u] = this.par[u] == u ? u : this.find(this.par[u]));
};

DisjointSet.prototype.union = function(u, v) {
this.par[this.find(u)] = this.find(v);
};

const ds = new DisjointSet(s.length);

pairs.forEach(p => ds.union(p[0], p[1]));

const _comp = (a, b) => (a == b ? 0 : a > b ? 1 : -1);

const arr = s.split("");

const map = {};

for (let i = 0; i < s.length; ++i) {
const p = ds.find(i);
(map[p] = map[p] || []).push(i);
}

for (const a of Object.values(map)) {
const tmp = a.slice();
a.sort((a, b) => _comp(s[a], s[b]));
tmp.forEach((t, idx) => (arr[t] = s[a[idx]]));
}

return arr.join("");
};
```

***C++***
```
class Solution {
    vector<int>parent; 
public:
    
    int findParent(int n){
        if(parent[n]==n){
            return n; 
        }
        return parent[n] = findParent(parent[n]); 
    }
    
    string smallestStringWithSwaps(string s, vector<vector<int>>& pairs) {
        
        parent.resize(s.length());
        map<int , set<int>>obj;
        set<int>idx;
        string ans=s;
        
        
        for(int i=0; i<parent.size(); i++){
            parent[i]=i;
        }
        
        for(int i=0; i<pairs.size(); i++){
            int u = pairs[i][0];
            int v = pairs[i][1];
            int fx = findParent(u);
            int fy = findParent(v);
            
            if(fx!=fy){
                parent[fy]=fx; 
            }
                 
        }
        for(int i=0; i<pairs.size(); i++){
            
            int u = pairs[i][0];
            int v = pairs[i][1];
            
            int fx = findParent(u);
            obj[fx].insert(u);
            obj[fx].insert(v);
              
        }
        
        for(auto it = obj.begin(); it!=obj.end(); it++){
            
            idx = it->second;
            vector<pair<char,int>>t; 
            auto index=idx.begin(); 
            
            for(index=idx.begin(); index!=idx.end(); index++){
                 
                 int pos = *index;
                 char ch = s[pos]; 
                 t.push_back({ch,pos}); 
            }
            
            sort(t.begin() , t.end()); 
            index=idx.begin(); 
            
            for(int i=0; i<t.size(); i++){ 
                 
                ans[*index] = t[i].first;
                index++; 
            } 
        
        }
       
        return ans;
    }
};
```

***Python***
```
def smallestStringWithSwaps(self, s: str, pairs: List[List[int]]) -> str:
        
        subsets = list(range(len(s)))
        
        def find(x):
            nonlocal subsets
            if x != subsets[x]:
                subsets[x] = find(subsets[x])
            return subsets[x]
        
        def union(x,y):
            nonlocal subsets
            s1 = find(x)
            s2 = find(y)
            subsets[s2] = s1
            
        for pair in pairs:
            union(pair[0],pair[1])
            
        components = defaultdict(list)
        alphabets = defaultdict(list)
        for i,v in enumerate(subsets):
			parent = find(v)
			components[parent].append(i)
			alphabets[parent].append(s[i])
        
# constructing the final output. Notice that the swaps can only affect the indexes in the connected component (subset). 
        res = [None] * len(s)
        
        for cid in components.keys():
            indexes = components[cid]
            indexes.sort()
            chars = alphabets[cid]
            chars.sort()
            for i,j in zip(indexes,chars):
                res[i] = j
        
        return ''.join(res)
```

***Kotlin***
```
class Solution {
    fun smallestStringWithSwaps(s: String, pairs: List<List<Int>>): String {
        val lenS = s.length
        val uf = UnionFind(lenS)
        
        for(pair in pairs){
            uf.union(pair[0], pair[1])
        }
        
        val map = HashMap<Int, PriorityQueue<Char>>()
        for(idx in s.indices){
            val root = uf.find(idx)
            map.getOrPut(root){ PriorityQueue<Char>() }.add(s[idx])
        }
        
        val builder = StringBuilder()
        for(idx in s.indices){
            map[uf.find(idx)]?.let{
                builder.append(it.poll())
            }
        }
        return builder.toString()
    }
    
    private class UnionFind(isolated: Int) {
        private val roots = IntArray(isolated) { idx -> idx }
        private val ranks = IntArray(isolated) { 1 }

        fun union(x: Int, y: Int) {
            val rootX = find(x)
            val rootY = find(y)

            if (rootX == rootY) return

            if (ranks[rootX] > ranks[rootY]) {
                roots[rootY] = rootX
                ++ranks[rootX]
            } else {
                roots[rootX] = rootY
                ++ranks[rootY]
            }
        }

        fun find(x: Int): Int {
            if (roots[x] != x) {
                roots[x] = find(roots[x])
            }

            return roots[x]
        }
    }
}
```

***Swift***
```
class Solution {

    struct UnionFind {
        
        var parent: [Int]
        var rank: [Int]
        
        init(_ maxCount: Int) { 
            parent = [Int](0..<maxCount)
            rank = [Int](repeating: 0, count: maxCount)
        }
        
        mutating func find(_ u: Int) -> Int {
            if parent[u] == u {
                return u
            }
            
            parent[u] = find(parent[u])
            return parent[u]
        }
        
        mutating func union(_ u: Int, _ v: Int) {
            let pu = find(u)
            let pv = find(v)
            
            if pu != pv {
                if rank[pu] > rank[pv] {
                    parent[pu] = parent[pv]
                } else {
                    parent[pv] = parent[pu]
                    rank[pu] += 1
                }
            }
        }
    }
    
    func smallestStringWithSwaps(_ s: String, _ pairs: [[Int]]) -> String {
        
        var uf = UnionFind(s.count)
        var group = [Int: Set<Int>]()
        
        for pair in pairs {
            let u = pair[0], v = pair[1]
            uf.union(u, v)
        }
        
        var chars = Array(s)
        var charsMap = [Int: [Character]]()
        var indexesMap = [Int: [Int]]()
        for i in 0..<chars.count {
            let root = uf.find(i)
            charsMap[root, default: [Character]()].append(chars[i])
            indexesMap[root, default: [Int]()].append(i)
        }
        
        for (key, value) in charsMap {
            var indice: [Int] = indexesMap[key] ?? []
            var sortedChars = value.sorted()
            for (idx, char) in zip(indice, sortedChars) {
                chars[idx] = char
            }
        }
        
        return String(chars)
    }
}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***