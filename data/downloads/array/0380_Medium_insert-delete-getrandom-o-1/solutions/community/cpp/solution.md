# ✅☑Beats 99.84% Users || [C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 343
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/4572728/](https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/4572728/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2024-01-16 053325.png](./images/0.png)

---

# Approaches
(Also explained in the code)

1. The class `RandomizedSet` uses a vector `v` to store the elements and an unordered map `mp` to store the mapping of elements to their indices in the vector.
1. The `search` function checks if a given value is present in the set by looking it up in the unordered map.
1. The `insert` function adds a value to the set if it's not already present. It appends the value to the vector and updates the unordered map with its index.
1. The `remove` function removes a value from the set if it's present. It replaces the value with the last element in the vector, updates the index in the unordered map, and then removes the last element.
1. The `getRandom` function returns a random element from the vector using the `rand()` function.



# Complexity
- Time complexity:
$$O(1)$$

    

- Space complexity:
$$O(n)$$
    


# Code
```C++ []
class RandomizedSet {
    vector<int> v;
    unordered_map<int,int> mp;
public:
   
    RandomizedSet() {
    }

    bool search(int val){

         if(mp.find(val)!=mp.end())
            return true;
         return false;

    }

    
    bool insert(int val) {

        if(search(val))
            return false;

        v.push_back(val);
        mp[val] = v.size()-1;
        return true;
    }

    
    bool remove(int val) {

        if(!search(val))
            return false;

       
        auto it = mp.find(val);
        v[it->second] = v.back();
        v.pop_back();
        mp[v[it->second]] = it->second;
        mp.erase(val);
        return true;
    }

   
    int getRandom() {

        return v[rand()%v.size()];
    }
};



```
```Java []


class RandomizedSet {
    private ArrayList<Integer> list;
    private Map<Integer, Integer> map;

    public RandomizedSet() {
        list = new ArrayList<>();
        map = new HashMap<>();
    }

    public boolean search(int val) {
        return map.containsKey(val);
    }

    public boolean insert(int val) {
        if (search(val)) return false;

        list.add(val);
        map.put(val, list.size() - 1);
        return true;
    }

    public boolean remove(int val) {
        if (!search(val)) return false;

        int index = map.get(val);
        list.set(index, list.get(list.size() - 1));
        map.put(list.get(index), index);
        list.remove(list.size() - 1);
        map.remove(val);

        return true;
    }

    public int getRandom() {
        Random rand = new Random();
        return list.get(rand.nextInt(list.size()));
    }
}



```
```python3 []
import random

class RandomizedSet:

    def __init__(self):
        self.lst = []
        self.idx_map = {}

    def search(self, val):
        return val in self.idx_map

    def insert(self, val):
        if self.search(val):
            return False

        self.lst.append(val)
        self.idx_map[val] = len(self.lst) - 1
        return True

    def remove(self, val):
        if not self.search(val):
            return False

        idx = self.idx_map[val]
        self.lst[idx] = self.lst[-1]
        self.idx_map[self.lst[-1]] = idx
        self.lst.pop()
        del self.idx_map[val]
        return True

    def getRandom(self):
        return random.choice(self.lst)



```
```javascript []
class RandomizedSet {
    constructor() {
        this.list = [];
        this.map = new Map();
    }

    search(val) {
        return this.map.has(val);
    }

    insert(val) {
        if (this.search(val)) return false;

        this.list.push(val);
        this.map.set(val, this.list.length - 1);
        return true;
    }

    remove(val) {
        if (!this.search(val)) return false;

        const index = this.map.get(val);
        this.list[index] = this.list[this.list.length - 1];
        this.map.set(this.list[index], index);
        this.list.pop();
        this.map.delete(val);
        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---