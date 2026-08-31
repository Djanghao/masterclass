# Simple Map || Easy to understand || Clean Code

**Author:** MohakHarjani
**Votes:** 7
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/3494884/](https://leetcode.com/problems/frequency-tracker/solutions/3494884/)

---

```
class FrequencyTracker {
public:
    unordered_map<int, int>numCount;  //count of "numbers" with a given "number"
    unordered_map<int, int>freqCount; //count of "numbers" with a given "freq"
    FrequencyTracker() {  }
    
    void add(int number) 
    {
        int oldNumCount = numCount[number];
        int newNumCount = ++numCount[number]; //increment first, then use
        
        freqCount[oldNumCount]--;
        freqCount[newNumCount]++;
    }
    
    void deleteOne(int number) 
    {
        int oldNumCount = numCount[number];
        if (oldNumCount == 0) return;
        int newNumCount = --numCount[number];
        
        freqCount[oldNumCount]--;
        freqCount[newNumCount]++;
    }
    
    bool hasFrequency(int frequency) 
    {
        return (freqCount[frequency] != 0);
    }
};
```