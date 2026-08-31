# Brute-force & Line sweep solution - O(N)

**Author:** kreakEmp
**Votes:** 27
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4024738/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4024738/)

---



# Approach 1: Brute force - O(N*N) complexity
### C++
```
int numberOfPoints(vector<vector<int>>& nums) {
    vector<int> v(102, 0);
    int ans = 0;
    for(auto n: nums){
        for(int i = n[0]; i <= n[1]; ++i) v[i-1]++;
    }
    for(auto e: v){
        if(e) ans++;
    }
    return ans;
}
```

### Java
```
public int numberOfPoints(List<List<Integer>> nums) {
    int[] v = new int[102];
    int ans = 0;
    for(List<Integer> n: nums){ 
        for(int i = n.get(0); i <= n.get(1); ++i) v[i-1]++; 
    }
    for(int i = 0; i <= 100; ++i){
        if(v[i] != 0) ans++;
    }
    return ans;
}
```

---

# Approach 2: Line sweep algo - O(N) complexity

If you don't konw line sweep algo check this here with its veriations : https://leetcode.com/discuss/study-guide/2166045/line-sweep-algorithms 

### C++
```
int numberOfPoints(vector<vector<int>>& nums) {
    vector<int> v(102, 0);
    for(auto n: nums){ v[n[0]]++; v[n[1]+1]--; }
    int ans = 0, sum = 0;
    for(int i = 1; i <= 100; ++i){
        sum += v[i];
        if(sum) ans++;
    }
    return ans;
}
```

### Java
```
int numberOfPoints(List<List<Integer>> nums) {
    int[] v = new int[102];
    int ans = 0, sum = 0;
    for(List<Integer> n: nums){ v[n.get(0)]++; v[n.get(1)+1]--; }
    for(int i = 1; i <= 100; ++i){
        sum += v[i];
        if(sum != 0) ans++;
    }
    return ans;
}
```

---

<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---
