# ✅C++ solution using Vector & Unordered map!

**Author:** dhruba-datta
**Votes:** 16
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/1708946/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/1708946/)

---

> **If you\u2019re interested in coding you can join my Discord Server, link in the comment section. Also if you find any mistake please let me know. Thank you!\u2764\uFE0F**
> 

---

## Explanation:

### Solution 01

- We\u2019ll be using two data structures:
    1. **`unordered_map<int, vector<int>>`** to store indexes.
    2. **`vector<pair<int, int>>`** to store elements.
- **insert():**
    - First, we\u2019ll find the element using the map.
    - If not present then first we\u2019ll update it on map with **`mp[val].push_back(a.size())`** here **a.size()** because we still haven't push the element to vector, so index will be exact size.
    - Next, simply push_back to vector with it\u2019s index value **`a.push_back(make_pair(val, mp[val].size()-1))`** & return ***true***.
    - Else we\u2019ll return ***false*** & do the same steps, as we need to insert even the element is present.
- **remove():**
    - Store the last element value in last **`auto last = a.back()`**
    - Find the element to be removed & change the index value with the last element in the map **`mp[last.first][last.second] = mp[val].back()`**
    - Then pop out the last element from vector map **`mp[val].pop_back()`**
    - Also erase the value from the vector **`a.pop_back()`**
- **getRandom():**
    - The rand() function is used in C/C++ to generate random numbers in the range [0, RAND_MAX).
- **Time complexity:** O(1).

---

## Code:

```cpp
//Solution 01:
**class RandomizedCollection {
public:
    
    vector<pair<int, int>>a;
    unordered_map<int, vector<int>> mp;
    
    RandomizedCollection() {
        
    }
    
    bool insert(int val) {
        auto it=mp.find(val);
        if(it == mp.end())
        {
            mp[val].push_back(a.size());
            a.push_back(make_pair(val, mp[val].size()-1));
            return true;
        }
        else{
            mp[val].push_back(a.size());
            a.push_back(make_pair(val, mp[val].size()-1));
            return false;
        }
    }
    
    bool remove(int val) {
        auto it=mp.find(val);
        if(it != mp.end()){
            auto last = a.back();
            mp[last.first][last.second] = mp[val].back();
            a[mp[val].back()] = last;
            mp[val].pop_back();
            if(mp[val].empty())
                mp.erase(val);
            a.pop_back();
            return true;
        }
        return false;
         
    }
    
    int getRandom() {
        return a[rand()%a.size()].first;
    }
};

/* * Your RandomizedCollection object will be instantiated and called as such:
 * RandomizedCollection* obj = new RandomizedCollection();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */**
```

---

> **Please upvote this solution**
>