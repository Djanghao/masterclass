# C++ & Java solution || Using map || Simple and easy to understand

**Author:** kreakEmp
**Votes:** 21
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3901813/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3901813/)

---

## C++
```
int maxSum(vector<int>& nums) {
    int ans = -1;
    unordered_map<int,vector<int>> mp;
    for(auto n: nums){
        int t = n, maxDigit = 0;
        while(t){ //evaluate max digit in the number
            maxDigit = max(t%10, maxDigit);
            t = t/10;
        }
        mp[maxDigit].push_back(n); // add the number to the map 
    }
    for(auto [k, v]: mp){
        sort(v.rbegin(), v.rend()); //to find max two number in each max digit 
        if(v.size() >= 2) ans = max(ans, v[0] + v[1]); //sum max two number and take max
    }
    return ans;
}
```

## Java
```
public int maxSum(int[] nums) {
    int ans = -1;
    Map<Integer,List<Integer>> ump = new HashMap<>();
    for(int i = 0; i < nums.length; ++i){
        int t = nums[i], maxDigit = 0;
        while(t != 0){ //evaluate max digit in the number
            maxDigit = Math.max(t%10, maxDigit);
            t = t/10;
        }
        if(!ump.containsKey(maxDigit)) ump.put(maxDigit, new ArrayList<>());
        ump.get(maxDigit).add(nums[i]); // add the number to the map 
    }
    for(Map.Entry<Integer, List<Integer>> entry: ump.entrySet()){
        entry.getValue().sort(Comparator.reverseOrder()); //to find max two number in each max digit 
        if(entry.getValue().size() >= 2) ans = Math.max(ans, entry.getValue().get(0) + entry.getValue().get(1)); //sum max two number and take max
    }
    return ans;
}
```


---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---

