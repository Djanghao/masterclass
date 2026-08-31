# C++ | 4 Solutions | Pairs | Comparator

**Author:** kiranpalsingh1806
**Votes:** 113
**Link:** [https://leetcode.com/problems/sort-the-people/solutions/2620605/](https://leetcode.com/problems/sort-the-people/solutions/2620605/)

---

**1. With Vector of Pairs**
Just sort the pair vector in which we will store the height in first part of pair.

```cpp
vector<string> sortPeople(vector<string>& names, vector<int>& heights) {
        vector<pair<int, string>> A;
        int N = names.size();
        for(int i = 0; i < N; i++) {
            A.push_back({heights[i], names[i]});
        }

        sort(A.rbegin(), A.rend());

        vector<string> ans;
        for(int i = 0; i < N; i++) {
            ans.push_back(A[i].second);
        }
        return ans;
    }
```

**EDIT 1**
**Optimization** suggested by @dvisp - No need to create answer vector.
```cpp
for(int i = 0; i < N; i++) {
	names[i] = A[i].second;
}
return names;
```

**2. Using Custom Comparator**
Create separate vector and sort its index as per heights vector. Use those index to put names in answer. 

```cpp
vector<string> sortPeople(vector<string>& names, vector<int>& heights) {
        vector<int> idx(names.size());
        for (int i = 0; i < names.size(); ++i) {
            idx[i] = i;
        }
        sort(idx.begin(), idx.end(), [&](int i, int j) {
            return heights[i] > heights[j];
        });
        vector<string> ans(names.size());
        for (int i = 0; i < names.size(); ++i) {
            ans[i] = names[idx[i]];
        }
        return ans;
    }
};
```

**3. Priority Queue**  ( Solution by @secretsuccess291)
```cpp
vector<string> sortPeople(vector<string>& names, vector<int>& heights) {
        
        priority_queue<pair<int, string>> pq;
        
        for(int i = 0; i < heights.size(); i++){
            pq.push({heights[i], names[i]});
        }
        
        vector<string> ans;
        
        while(!pq.empty()){
            ans.push_back(pq.top().second);
            pq.pop();
        }
        return ans;
}
```

**4. Map**
Solution suggested by @raunak_pandey
```cpp
vector<string> sortPeople(vector<string>& names, vector<int>& heights) {
        map<int, string>mp;
        vector<string>v;
        for(int i=0; i < size(names); i++)
            mp[heights[i]] = names[i];
        for (auto i = mp.rbegin(); i != mp.rend(); ++i) v.push_back(i->second);
        return v;
}
```

**Related Problems**
[Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/)