# C++ & Java || Brute-force - check for all possible side value ||  Very simple

**Author:** kreakEmp
**Votes:** 33
**Link:** [https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4449605/](https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4449605/)

---


# Approach
- Iterate over hFences and get all possible combination of rod. find their abs diff between any two rods and add it to hash set.
- Now iterate over vFences and generate all possible comination of rods diff and search them in the hash set. If its present then take it as possible answer and keep tracking the max possible value
- Return area of the square as we have the max possible side of the square. If No square possible return -1.


### C++
```
int maximizeSquareArea(int m, int n, vector<int>& hFences, vector<int>& vFences) {
    long long ans = 0, mod= 1e9 + 7;
    unordered_set<int> st;
    hFences.push_back(1); hFences.push_back(m); 
    vFences.push_back(1); vFences.push_back(n); 
    for(int i = 0; i < hFences.size(); ++i){
        for(int j = 0; j < hFences.size(); ++j){
            st.insert(abs(hFences[i] - hFences[j]));
        }
    }
    for(int i = 0; i < vFences.size(); ++i){
        for(int j = 0; j < vFences.size(); ++j){
            if(i != j  && st.find(abs(vFences[i] - vFences[j])) != st.end()) {
                ans = max(ans, (long long)abs(vFences[i] - vFences[j]));
            }
        }
    }
    return (ans == 0)?-1: ((ans * ans) % mod);
}
```

### Java
```
public int maximizeSquareArea(int m, int n, int[] hFences, int[] vFences) {
    long ans = 0, mod = 1000000007;
    HashSet<Integer> hs = new HashSet<>();
    int[] hFen = Arrays.copyOf(hFences, hFences.length + 2); 
    int[] vFen = Arrays.copyOf(vFences, vFences.length + 2);
    hFen[hFences.length] = 1; hFen[hFences.length + 1] = m;
    vFen[vFences.length] = 1; vFen[vFences.length + 1] = n;
    for(int i = 0; i < hFen.length; ++i){
        for(int j = 0; j < hFen.length; ++j){
            if(i != j ) hs.add(Math.abs(hFen[i] - hFen[j]));
        }
    }
    for(int i = 0; i < vFen.length; ++i){
        for(int j = 0; j < vFen.length; ++j){
            if(hs.contains(Math.abs(vFen[i] - vFen[j])) == true) {
                ans = Math.max(ans, Math.abs(vFen[i] - vFen[j]));
            }
        }
    }
    return (ans == 0)?-1: (int)((ans * ans) % mod);
}
```

---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---