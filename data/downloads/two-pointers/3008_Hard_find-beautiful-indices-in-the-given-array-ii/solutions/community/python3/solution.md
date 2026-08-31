# ✅ 5 Approaches 🔥 | KMP Algorithm | Brute Force to Optimised ✅🔥

**Author:** harsh_reality_
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4562109/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4562109/)

---

# Intuition
First we needed to find the indices of occurances of `a` and `b` in `s` and store them in two list, viz., `first` and `second`
<!-- Describe your first thoughts on how to solve this problem. -->
# *Only submit the KMP Algorithm codes, others will give TLE*

# Approach - Brute Force Pair Find and Brute Force String Matching

# Complexity
- Time complexity: O(N * M + N * N) for finding occurances of `a` and `b` in `s`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N) for storing starting indices of occurances of `a` and `b`

```C++ []
class Solution {
    vector<int> find_occurrences(const string& s, const string& b) {
        vector<int> indices;
        size_t index = s.find(b);
        while (index != string::npos) {
            indices.push_back(static_cast<int>(index));
            index = s.find(b, index + 1);
        }
        return indices;
    }
public:
    vector<int> beautifulIndices(string s, string a, string b, int k) {

        vector<int> first = find_occurrences(s, a);
        vector<int> second = find_occurrences(s, b);

        vector<int> ans;
        for(int i=0; i < first.size(); i++){
            for(int j=0; j < second.size(); j++){
                if(second[j] != -1){
                    if(abs(first[i] - second[j]) <= k){
                        ans.push_back(first[i]);
                        break;
                    }
                }
            }
        }
        return ans;
    }
};
```
```python []
class Solution:
    def find_occurrences(self, s, b):
        indices = []
        index = s.find(b)
        while index != -1:
            indices.append(index)
            index = s.find(b, index + 1)
        return indices

    def beautifulIndices(self, s, a, b, k):
        first = self.find_occurrences(s, a)
        second = self.find_occurrences(s, b)

        ans = []
        for i in range(len(first)):
            for j in range(len(second)):
                if second[j] != -1:
                    if abs(first[i] - second[j]) <= k:
                        ans.append(first[i])
                        break

        return ans
```

# Approach - two pointers and Brute Force String Matching
We apply two pointers approach to find number of pairs of `i` and `j` such that there exists atleast one `j` for each `i` in `first` and `second` array

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N * M + N) for finding occurances of `a` and `b` in `s`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N) for storing starting indices of occurances of `a` and `b`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
```C++ []
class Solution {
    vector<int> find_occurrences(const string& s, const string& b) {
        vector<int> indices;
        int index = s.find(b);
        while (index != string::npos) {
            indices.push_back(index);
            index = s.find(b, index + 1);
        }
        return indices;
    }
public:
    vector<int> beautifulIndices(string s, string a, string b, int k) {

        vector<int> first = find_occurrences(s, a);
        vector<int> second = find_occurrences(s, b);

        int i = 0, j = 0;
        vector<int> result;
        while (i < first.size() && j < second.size()) {
            if (abs(first[i] - second[j]) <= k)
                result.push_back(first[i++]);
            else if (second[j] - first[i] > k)
                i++;
            else 
                j++;
        }
        return result;
    }
};
```
```python []
class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int) -> List[int]:
        def find_occurrences(s, b):
            indices = []
            index = s.find(b)
            while index != -1:
                indices.append(index)
                index = s.find(b, index + 1)
            return indices

        first, second = find_occurrences(s, a), find_occurrences(s, b)
        
        print(first, second)
        
        i = j = 0
        result = []
        while i < len(first) and j < len(second):
            if abs(first[i] - second[j]) <= k:
                result.append(first[i])
                i += 1
            elif second[j] - first[i] > k: 
                i += 1
            else:
                j += 1
                
        return result
        
```

# Approach - Binary Search and Brute Force String Matching

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N * logN + N) for KMP algorithm and Binary Search
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N) for storing starting indices of occurances of `a` and `b` along with prefix sum for KMP

```C++ []
class Solution {
    vector<int> find_occurrences(const string& s, const string& b) {
        vector<int> indices;
        size_t index = s.find(b);
        while (index != string::npos) {
            indices.push_back(static_cast<int>(index));
            index = s.find(b, index + 1);
        }
        return indices;
    }
public:
    vector<int> beautifulIndices(string s, string a, string b, int k) {

        vector<int> first = find_occurrences(s, a);
        vector<int> second = find_occurrences(s, b);

        vector<int> ans;
        for(auto i : first){
            auto it = lower_bound(second.begin(), second.end(), i);
            
            if (it == second.end())
                it--;
            
            int diff1 = abs(i- *it);
            int diff2 = INT_MAX;
            
            if (it!=second.begin()){
                it--;
                diff2 = abs(i-*it);
            }

            if (diff1 <= k or diff2 = k)
                ans.push_back(i);
        }
        return ans;
    }
};
```

# Approach - Binary Search and KMP String Matching

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N * logN + N) for KMP algorithm and Binary Search
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N) for storing starting indices of occurances of `a` and `b` along with prefix sum for KMP

```C++ []
class Solution {
    vector<int> prefix(const string& a) {
        int m = a.size();
        vector<int> table(m, 0);
        int j = 0;
        for (int i = 1; i < m; ++i) {
            while (j > 0 && a[i] != a[j]) 
                j = table[j - 1];
            
            if (a[i] == a[j]) 
                j++;
            table[i] = j;
        }

        return table;
    }

    vector<int> kmpSearch(const string& text, const string& a) {
        int n = text.size();
        int m = a.size();
        if (m == 0) {
            vector<int> result(n);
            iota(result.begin(), result.end(), 0);
            return result;
        }

        vector<int> table = prefix(a);
        vector<int> result;
        int j = 0;

        for (int i = 0; i < n; ++i) {
            while (j > 0 && text[i] != a[j]) 
                j = table[j - 1];

            if (text[i] == a[j])
                j++;
        

            if (j == m) {
                result.push_back(i - m + 1);
                j = table[j - 1];
            }
        }

        return result;
    }
public:
    vector<int> beautifulIndices(string s, string a, string b, int k) {

        vector<int> first = kmpSearch(s, a);
        vector<int> second = kmpSearch(s, b);
        int i = 0, j = 0;
        vector<int> result;

        for(auto i : first){
            auto it = lower_bound(second.begin(), second.end(), i);
            
            if (it == second.end())
                it--;
            
            int diff1 = abs(i- *it);
            int diff2 = INT_MAX;
            
            if (it!=second.begin()){
                it--;
                diff2 = abs(i-*it);
            }

            if (diff1 <= k or diff2 <= k)
                result.push_back(i);
        }
        return result;
    }
};
```

# Approach - two pointers and KMP String Matching
We optimize the previous string matching code via KMP algoritm. This reduces the time complexity to O(N)

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N + N) for KMP algorithm and two pointers
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N) for storing starting indices of occurances of `a` and `b` along with prefix sum for KMP
```C++ []
class Solution {
    vector<int> prefix(const string& a) {
        int m = a.size();
        vector<int> table(m, 0);
        int j = 0;
        for (int i = 1; i < m; ++i) {
            while (j > 0 && a[i] != a[j]) 
                j = table[j - 1];
            
            if (a[i] == a[j]) 
                j++;
            table[i] = j;
        }

        return table;
    }

    vector<int> kmpSearch(const string& text, const string& a) {
        int n = text.size();
        int m = a.size();
        if (m == 0) {
            vector<int> result(n);
            iota(result.begin(), result.end(), 0);
            return result;
        }

        vector<int> table = prefix(a);
        vector<int> result;
        int j = 0;

        for (int i = 0; i < n; ++i) {
            while (j > 0 && text[i] != a[j]) 
                j = table[j - 1];

            if (text[i] == a[j])
                j++;
        

            if (j == m) {
                result.push_back(i - m + 1);
                j = table[j - 1];
            }
        }

        return result;
    }
public:
    vector<int> beautifulIndices(string s, string a, string b, int k) {

        vector<int> first = kmpSearch(s, a);
        vector<int> second = kmpSearch(s, b);
        int i = 0, j = 0;
        vector<int> result;

        while (i < first.size() && j < second.size()) {
            if (abs(first[i] - second[j]) <= k)
                result.push_back(first[i++]);
            else if (second[j] - first[i] > k) 
                i++;
            else 
                j++;
        }
        return result;
    }
};

```
```python []
class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int) -> List[int]:
        def prefix(a):
            m = len(a)
            table = [0] * m
            j = 0

            for i in range(1, m):
                while j > 0 and a[i] != a[j]:
                    j = table[j - 1]

                if a[i] == a[j]:
                    j += 1

                table[i] = j

            return table

        def kmp_search(text, a):
            n, m = len(text), len(a)
            if m == 0:
                return list(range(n))

            table = prefix(a)
            result = []
            j = 0

            for i in range(n):
                while j > 0 and text[i] != a[j]:
                    j = table[j - 1]

                if text[i] == a[j]:
                    j += 1

                if j == m:
                    result.append(i - m + 1)
                    j = table[j - 1]

            return result

        first, second = kmp_search(s, a), kmp_search(s, b)
        i = j = 0
        result = []

        while i < len(first) and j < len(second):
            if abs(first[i] - second[j]) <= k:
                result.append(first[i])
                i += 1
            elif second[j] - first[i] > k:
                i += 1
            else:
                j += 1

        return result

```

# Please Upvote 

# If anyone solves using Rabin-Karp then please share in Comments
