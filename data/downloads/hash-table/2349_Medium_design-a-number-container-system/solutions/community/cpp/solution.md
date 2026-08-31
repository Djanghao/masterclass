# CPP One Map Easy Sol'n

**Author:** Vp-
**Votes:** 21
**Link:** [https://leetcode.com/problems/design-a-number-container-system/solutions/2322653/](https://leetcode.com/problems/design-a-number-container-system/solutions/2322653/)

---

It's very simple, we want to insert a number at index i. In the case of an existing number, we need to update it. In this case, we will use a map since it stores the index sorted. This allows us to automatically return the first index  whenever we need to find some element.

```cpp
class NumberContainers {
public:
    map<int, int> mp;
    NumberContainers() 
    {

    }
    
    void change(int index, int number)
    {
        mp[index] = number;
    }
    
    int find(int number)
    {
       for(auto it: mp){
           if(it.second == number) return it.first;
       }
        
       return -1;
    }
};
```