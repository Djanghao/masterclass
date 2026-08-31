# ✅Python3 || C++|| Java✅ [Beats 97%]

**Author:** abdullayev_akbar
**Votes:** 86
**Link:** [https://leetcode.com/problems/design-hashset/solutions/3577264/](https://leetcode.com/problems/design-hashset/solutions/3577264/)

---

# Please Upvote \uD83D\uDE07
# Before
# Python3
```
class MyHashSet:

    def __init__(self):
        self.mp=defaultdict(int)
        

    def add(self, key: int) -> None:
        self.mp[key]=True
        

    def remove(self, key: int) -> None:
        self.mp[key]=False

    def contains(self, key: int) -> bool:
        return self.mp[key]
        
```
# After
# C++
```
class MyHashSet {
private:
    std::vector<bool> mp;

public:
    MyHashSet() {
        mp.resize(1000001, false);
    }

    void add(int key) {
        mp[key] = true;
    }

    void remove(int key) {
        mp[key] = false;
    }

    bool contains(int key) {
        return mp[key];
    }
};

```
# Python3
```
class MyHashSet:

    def __init__(self):
        self.mp=[False]*1000001
        

    def add(self, key: int) -> None:
        self.mp[key]=True
        

    def remove(self, key: int) -> None:
        self.mp[key]=False

    def contains(self, key: int) -> bool:
        return self.mp[key]

```
# Java
```
class MyHashSet {
    private boolean[] mp;

    public MyHashSet() {
        mp = new boolean[1000001];
        Arrays.fill(mp, false);
    }

    public void add(int key) {
        mp[key] = true;
    }

    public void remove(int key) {
        mp[key] = false;
    }

    public boolean contains(int key) {
        return mp[key];
    }
}
```
![image.png](./images/0.png)