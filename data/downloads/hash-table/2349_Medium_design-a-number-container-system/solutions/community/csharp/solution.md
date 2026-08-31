# Using HashMap and SortedSet in C#

**Author:** remedydev
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-number-container-system/solutions/5487576/](https://leetcode.com/problems/design-a-number-container-system/solutions/5487576/)

---

# Approach
We need
1) Find an old value by index so we use Dictionary<INDEX,NUMBER>
2) Keep track of backward Map which uses a "number" as a key and a SortedSet as a value to store "indexe"s sorted (Dictionary<NUMBER, SortedSet<INDEX>>)
3) We maintain both Hashsets during Change operation 
   

# Complexity
- Time complexity:
Change: $$O(logN)$$
Find: O(1)

- Space complexity:
$$O(n)$$

# Code
```
public class NumberContainers {
    private Dictionary<int,int> _indexNumberMap=new();
    private Dictionary<int, SortedSet<int>> _numberIndexMap=new();
    
    public void Change(int index, int number) {
        if(_indexNumberMap.ContainsKey(index)){
            var oldNumber=_indexNumberMap[index];
            _numberIndexMap[oldNumber].Remove(index);
            if(_numberIndexMap[oldNumber].Count==0){
                _numberIndexMap.Remove(oldNumber);
            }
        }
        _numberIndexMap[number]=_numberIndexMap.GetValueOrDefault(number,new());

        _indexNumberMap[index]=number;
        _numberIndexMap[number].Add(index);
    }
    
    public int Find(int number) {
        if(_numberIndexMap.ContainsKey(number)){
            return _numberIndexMap[number].Min;
        }
        return -1;
    }
}
```