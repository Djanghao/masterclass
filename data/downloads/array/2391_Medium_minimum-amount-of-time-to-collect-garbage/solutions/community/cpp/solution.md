# ✅✅✅  Simple sum - O(N) time & O(1) space

**Author:** kreakEmp
**Votes:** 75
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/2492857/](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/2492857/)

---

<b> Up Vote if you like the solution </b>

1. Count all the garbage size irrespective of type - as each garbage is taking 1min
2. Keep tracking last g, p, m visited house - as we do not need to move further. Here we are tracking sum up to last occurance and not the index.

### C++
```
    int garbageCollection(vector<string>& garbage, vector<int>& travel) {
        int sum = 0, count = 0; 
        unordered_map<char, int> last;
        for(int i = 0; i < garbage.size(); ++i){
            count += garbage[i].size();
            for(auto c: garbage[i]) last[c] = sum;
            if(i < travel.size()) sum += travel[i];
        }
        return count + last['M'] + last['P'] + last['G'];
    }
```


### Java 
```
public int garbageCollection(String[] garbage, int[] travel) {
    int sum = 0, count = 0; 
    Map<Character, Integer> last= new HashMap<>();
    for(int i = 0; i < garbage.length; ++i){
        count += garbage[i].length();
        for(char c: garbage[i].toCharArray()) last.put(c, sum);
        if(i < travel.length) sum += travel[i];
    }
    return count + last.getOrDefault('M', 0) + last.getOrDefault('P', 0) + last.getOrDefault('G', 0);
}
```
---

<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---