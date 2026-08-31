# Explained || Very Simple & Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 28
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/3494972/](https://leetcode.com/problems/frequency-tracker/solutions/3494972/)

---

<b> Up vote if you like the solution </b>

# Approach

Take two maps, one to store number & frequency count ( mp )
& second one to store frequency & set of number whose frequecny is same ( rmp )
   - Basically the rmp is kind of reverse mapping of the data from the frequency to number
    
Then when we add a new number, 
 - first errase its occurance from the frequency mapping 
 - update the mapping mp
 - Then add to the new frequency set
 
Same above step we have to execute when deleted a number.
     
finally to check if a number has a frequency equal to a particualr frequencyor not
    simply check if there is a index in rmp which has a set of size larger than 0.
        
 
```
class FrequencyTracker {
public:
    unordered_map<int, int> mp;   //store number & frequency count
    unordered_map<int, unordered_set<int>> mps; //store frequency & set of number whose frequecny is same
    FrequencyTracker() {
        
    }
    
    void add(int number) {
        if(mp.find(number) != mp.end()){
            int f = mp[number];
            mps[f].erase(number);
        }
        mp[number]++;
        mps[mp[number]].insert(number);
    }
    
    void deleteOne(int number) {
        if(mp.find(number) != mp.end() && mp[number] > 0){
            int f = mp[number];
            mps[f].erase(number);
            mp[number]--;
            if(mp[number]){
                mps[mp[number]].insert(number);
            }
        }
    }
    
    bool hasFrequency(int frequency) {
        return (mps[frequency].size() > 0);
    }
};
```

Solution 2: The second map can be stored only count of numbers whose frequency is same, without tracking exact number stored as well, as we only need the count. 

```
class FrequencyTracker {
public:
    unordered_map<int, int> mp;   //store number & frequency count
    unordered_map<int, int> mps;  //store frequency & count number whose frequecny is same
    FrequencyTracker() {
        
    }
    
    void add(int number) {
        if(mp.find(number) != mp.end()){
            mps[mp[number]]--;
        }
        mp[number]++;
        mps[mp[number]]++;
    }
    
    void deleteOne(int number) {
        if(mp.find(number) != mp.end() && mp[number] > 0){
            mps[mp[number]]--;
            mp[number]--;
            mps[mp[number]]++;
        }
    }
    
    bool hasFrequency(int frequency) {
        return (mps[frequency] > 0);
    }
};
```

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted