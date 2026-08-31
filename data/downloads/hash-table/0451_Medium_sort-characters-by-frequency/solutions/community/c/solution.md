# [C++] Concise 7-Lines O(n) | Heap | No Custom Comparator

**Author:** anandthegreat
**Votes:** 137
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/645688/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/645688/)

---

The idea is to use max heap with nodes containing a pair {frequency, character}. Since the first element of the pair is frequency, we don't need to pass a custom comparator. Max heap will be constructed on the basis of frequency of characters, i.e. the root will contain the character with maximum frequency. 

**Time Complexity:** O(n)
O(26log(n)) = **O(log(n))** For Construction and extraction from heap
**O(n)** For storing the frequency in hashmap.


```
string frequencySort(string s) {
        unordered_map<char,int> freq;           //for frequency of characters
        priority_queue<pair<int,char>> maxheap; //maxheap according to frequency of characters
        for(char c: s)
            freq[c]++;
        for(auto it: freq)
            maxheap.push({it.second,it.first}); //heap will be constructed on the basis of frequency
        s="";   
        while(!maxheap.empty()){
            s+=string(maxheap.top().first,maxheap.top().second); //frequency times the character
            maxheap.pop();
        }
        return s;
    }
```