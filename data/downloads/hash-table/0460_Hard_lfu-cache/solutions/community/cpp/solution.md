# Day 29 || C++ - Easiest Beginner Friendly Sol || HashMap and Doubly Linked List

**Author:** singhabhinash
**Votes:** 134
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/3111409/](https://leetcode.com/problems/lfu-cache/solutions/3111409/)

---

# Intuition of this Problem:
**For get(key) -->** *gets the value of the key if exists, else -1;*

**for put(key, value) -->**
***condition 1:** updates the value of the key if present, else inserts the key directly.
**condition 2:** when cache is full -->
    - case i : if cache is full, removes the LFU guy
    - case ii : if cache is full, but exists multiple LFU guys (or a tie exists), then remove the LRU one and then add new node.*
<!-- Describe your first thoughts on how to solve this problem. -->
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Approach for this Problem:
1. The class LFUCache has three unordered_map data structures:
    - keyVal: stores the key-value pairs, with the key as the first element of the pair and the value as the second element.
    - freqList: stores the keys in a list, with the key's frequency as the index of the list.
    - pos: stores the position of each key in the freqList.
1. The class also has a private integer variable 'capacity' that is initialized in the constructor and represents the maximum number of key-value pairs that can be stored in the cache.
2. The get() function is used to retrieve a value from the cache given a key. If the key is not found in the keyVal map, -1 is returned. Otherwise, the following steps are taken:
    - The key's current frequency is retrieved from keyVal.
    - The key is removed from the list at index equal to its current frequency in the freqList map.
    - The key's frequency in keyVal is incremented by 1.
    - The key is added to the list at index equal to its new frequency in the freqList map.
    - The key's position in the freqList map is updated in the pos map.
    - If the list at index equal to the current minimum frequency is empty, the minimum frequency is incremented by 1.
    - The value associated with the key is returned.
1. The put() function is used to add a new key-value pair to the cache or update the value of an existing key.
    - If the capacity is 0, the function returns immediately.
    - If the key already exists in the keyVal map, the following steps are taken:
        - The key's value is updated in the keyVal map.
        - The key is removed from the list at index equal to its current frequency in the freqList map.
        - The key's frequency in keyVal is incremented by 1.
        - The key is added to the list at index equal to its new frequency in the freqList map.
        - The key's position in the freqList map is updated in the pos map.
        - If the list at index equal to the current minimum frequency is empty, the minimum frequency is incremented by 1.
    - If the key does not already exist in the keyVal map and the size of keyVal is equal to the capacity, the following steps are taken:
        - The key at the front of the list at index equal to the current minimum frequency in the freqList map is removed from all three maps (keyVal, freqList, pos).
    - A new key-value pair is added to keyVal, with a frequency of 1.
    - The key is added to the list at index 1 in the freqList map.The key's position in the freqList map is updated in the pos map.
    - The minimum frequency is set to 1.

<!-- Describe your approach to solving the problem. -->



# Code:
```C++ []
class LFUCache {
    int capacity;
    int minFreq;
    unordered_map<int,pair<int,int>> keyVal;
    unordered_map<int,list<int>> freqList;
    unordered_map<int,list<int>::iterator> pos;
public:
    LFUCache(int capacity) {
        this->capacity = capacity;
        minFreq = 0;
    }
    
    int get(int key) {
        if(keyVal.find(key) == keyVal.end())
            return -1;
        freqList[keyVal[key].second].erase(pos[key]);
        keyVal[key].second++;
        freqList[keyVal[key].second].push_back(key);
        pos[key] = --freqList[keyVal[key].second].end();
        if(freqList[minFreq].empty())
            minFreq++;
        return keyVal[key].first;
    }
    
    void put(int key, int value) {
        if(!capacity)
            return;
        if(keyVal.find(key) != keyVal.end()) {
            keyVal[key].first = value;
            freqList[keyVal[key].second].erase(pos[key]);
            keyVal[key].second++;
            freqList[keyVal[key].second].push_back(key);
            pos[key] = --freqList[keyVal[key].second].end();
            if(freqList[minFreq].empty())
                minFreq++;
            return;
        }
        if(keyVal.size() == capacity) {
            int delKey = freqList[minFreq].front();
            keyVal.erase(delKey);
            pos.erase(delKey);
            freqList[minFreq].pop_front();
        }
        keyVal[key] = {value,1};
        freqList[1].push_back(key);
        pos[key] = --freqList[1].end();
        minFreq = 1;
    }
};



/**
 * Your LFUCache object will be instantiated and called as such:
 * LFUCache* obj = new LFUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */
```
```Java []

```
```Python []

```

# Time Complexity and Space Complexity:
- Time complexity:
    - get(): O(1)
    - put(): O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(n)** //where n is the capacity of the cache.

In this implementation, we are using three unordered_maps to store the key-value pairs, the frequency lists, and the positions of the keys in the frequency lists. This allows us to quickly access, update and remove elements in O(1) time complexity. The get() and put() operations both have O(1) time complexity.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->