# starts with trie dfs iterator python go rust

**Author:** typingMonkeyLi
**Votes:** 2
**Link:** [https://leetcode.com/problems/map-sum-pairs/solutions/661148/](https://leetcode.com/problems/map-sum-pairs/solutions/661148/)

---

starts with
py
```python []
class MapSum:
    def __init__(self):
        self.d = {}

    def insert(self, key: str, val: int) -> None:
        self.d[key] = val

    def sum(self, prefix: str) -> int:
        return sum(self.d[s] for s in self.d if s.startswith(prefix))
```
go
```golang []
type MapSum struct {
    d map[string]int
}

func Constructor() MapSum {
    return MapSum{map[string]int{}}
}

func (this *MapSum) Insert(key string, val int)  {
    this.d[key] = val
}

func (this *MapSum) Sum(prefix string) int {
    sum := 0
    for s, v := range this.d {
        if strings.HasPrefix(s, prefix) {
            sum += v
        }
    }
    return sum
}
```
rs
```rust []
use std::collections::HashMap;
struct MapSum {
    d: HashMap<String, i32>
}

impl MapSum {
    fn new() -> Self {
        Self {d: HashMap::new()}
    }
    
    fn insert(&mut self, key: String, val: i32) {
        self.d.insert(key, val);
    }
    
    fn sum(&self, prefix: String) -> i32 {
        self.d.keys().filter(|s| s.starts_with(&prefix)).map(|s| self.d[s]).sum()
    }
}
```

trie dfs
py
```python []
class MapSum(dict):
    def __init__(self):
        self.val, self.next = 0, {}

    def insert(self, key: str, val: int) -> None:
        reduce(lambda t, c: t.next.setdefault(c, MapSum()), key, self).val = val

    def sum(self, prefix: str) -> int:
        dfs = lambda t: t.val + sum(map(dfs, t.next.values()))
        try:
            return dfs(reduce(lambda t, c: t.next[c], prefix, self))
        except:
            return 0
```
```python []
class MapSum:
    def __init__(self):
        self.d = {}

    def insert(self, key: str, val: int) -> None:
        t = self.d
        for c in key:
            if c not in t:
                t[c] = {}
            t = t[c] 
        t['val'] = val          

    def sum(self, prefix: str) -> int:
        t = self.d
        for c in prefix:
            if c not in t:
                return 0        
            t = t[c]
        ans = 0
        def dfs(t):
            for c in t:
                if c == 'val':
                    nonlocal ans
                    ans += t[c] 
                else:
                    dfs(t[c])   
        dfs(t)
        return ans
```
go
```golang []
type MapSum struct {
    val int
    next map[rune]*MapSum
}

func Constructor() MapSum {
    return MapSum{next: map[rune]*MapSum{}}
}

func (this *MapSum) Insert(key string, val int)  {
    for _, c := range key {
        if _, ok := this.next[c]; !ok {
            this.next[c] = &MapSum{next: map[rune]*MapSum{}}
        } 
        this = this.next[c]
    }
    this.val = val
}

func (this *MapSum) Sum(prefix string) int {
    for _, c := range prefix {
        if _, ok := this.next[c]; !ok {
            return 0
        }
        this = this.next[c]
    }
    var dfs func(*MapSum) int; dfs = func(t *MapSum) (res int) {
        res += t.val
        for _, v := range t.next {
            res += dfs(v)
        }
        return
    }
    return dfs(this)
}
```
```golang []
type MapSum struct {
    val int
    next [26]*MapSum
}

func Constructor() MapSum {
    return MapSum{next: [26]*MapSum{}}
}

func (this *MapSum) Insert(key string, val int)  {
    for _, c := range key {
        c := int(c - 'a')
        if this.next[c] == nil {
            this.next[c] = &MapSum{next: [26]*MapSum{}}
        } 
        this = this.next[c]
    }
    this.val = val
}

func (this *MapSum) Sum(prefix string) int {
    for _, c := range prefix {
        c := int(c - 'a')
        if this.next[c] == nil {
            return 0
        }
        this = this.next[c]
    }
    ans := 0
    var dfs func(*MapSum); dfs = func(t *MapSum) {
        ans += t.val
        for _, v := range t.next {
            if v != nil {
                dfs(v)
            }
        }
    }
    dfs(this)
    return ans
}
```
rs
```rust []
#[derive(Default)]
struct MapSum {
    val: i32,
    next: [Option<Box<MapSum>>; 26]
}

impl MapSum {
    fn new() -> Self {
        Default::default()
    }
    
    fn insert(&mut self, key: String, val: i32) {
        key.bytes().fold(self, |t, c| t.next[c as usize - 97].get_or_insert(Box::new(MapSum::new()))).val = val;
    }
    
    fn sum(&self, prefix: String) -> i32 {
        fn dfs(t: &MapSum) -> i32 {t.val + t.next.iter().filter(|r| r.is_some()).map(|r| dfs(r.as_ref().unwrap())).sum::<i32>()}
        std::panic::catch_unwind(|| dfs(prefix.bytes().fold(self, |t, c| t.next[c as usize - 97].as_ref().unwrap()))).unwrap_or(0)
    }
}
```
```rust []
use std::collections::HashMap;
#[derive(Default)]
struct MapSum {
    val: i32,
    next: HashMap<u8, MapSum>
}

impl MapSum {
    fn new() -> Self {
        Default::default()
    }
    
    fn insert(&mut self, key: String, val: i32) {
        let mut t = self;
        for c in key.bytes() {
            if !t.next.contains_key(&c) {
                t.next.insert(c, MapSum::new());
            }
            t = t.next.get_mut(&c).unwrap();
        }
        t.val = val;
    }
    
    fn sum(&self, prefix: String) -> i32 {
        let mut t = self;
        for c in prefix.bytes() {
            if !t.next.contains_key(&c) {
                return 0
            }
            t = &t.next[&c];
        }
        fn dfs(t: &MapSum) -> i32 {
            t.val + t.next.values().map(dfs).sum::<i32>()
        }
        dfs(t)
    }
}
```
```rust []
#[derive(Default)]
struct MapSum {
    val: i32,
    next: [Option<Box<MapSum>>; 26]
}

impl MapSum {
    fn new() -> Self {
        Default::default()
    }
    
    fn insert(&mut self, key: String, val: i32) {
        let mut t = self;
        for c in key.bytes() {
            t = t.next[c as usize - 97].get_or_insert(Box::new(MapSum::new()))
        }
        t.val = val;
    }
    
    fn sum(&self, prefix: String) -> i32 {
        let mut t = self;
        for c in prefix.bytes() {
            if let Some(next) = t.next[c as usize - 97].as_ref() {
                t = next;
            } else {
                return 0
            }
        }
        fn dfs(t: &MapSum) -> i32 {
            t.val + t.next.iter().filter(|r| r.is_some()).map(|r| dfs(r.as_ref().unwrap())).sum::<i32>()
        }
        dfs(t)
    }
}
```