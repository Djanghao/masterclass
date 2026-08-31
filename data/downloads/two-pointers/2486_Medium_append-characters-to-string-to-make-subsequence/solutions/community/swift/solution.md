# 2 Easy Interview Approach ✅ || using map🔥 || using two pointers💯 || Beat💯|| C++ || Java || Python

**Author:** naman_malik
**Votes:** 3
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249301/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249301/)

---

![Runtime complexity.png](./images/0.png)
# Approach -1 
<!-- Describe your approach to solving the problem. -->
Brute force - using two pointers

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int appendCharacters(string s, string t) {
        int i=0,j=0;  // Start both pointers at the beginning of s and t

        while(i<s.size() and j<t.size()) // Continue until one of the strings is not end
        {
            if(s[i]==t[j]) // If characters match
            {
                j++;    // Move the pointer in t forward
            }
            i++;   // Always move the pointer in s forward
        }
         return t.size()-j;   // The number of characters in t not matched in s
    }
};
```
```java []
class Solution {
    public int appendCharacters(String s, String t) {
        int i = 0, j = 0;  // Start both pointers at the beginning of s and t

        while (i < s.length() && j < t.length()) { // Continue until one of the strings is not end
            if (s.charAt(i) == t.charAt(j)) { // If characters match
                j++; // Move the pointer in t forward
            }
            i++; // Always move the pointer in s forward
        }

        return t.length() - j; // The number of characters in t not matched in s
    }
}

```
```python []
class Solution(object):
    def appendCharacters(self, s, t):

        i, j = 0, 0  # Start both pointers at the beginning of s and t

        while i < len(s) and j < len(t):    # Continue until one of the strings is not end
            if s[i] == t[j]:          # If characters match
                j += 1                # Move the pointer in t forward
            i += 1                # Always move the pointer in s forward

        return len(t) - j      # The number of characters in t not matched in s

```


# Approach - 2 
<!-- Describe your approach to solving the problem. -->
using Map

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int appendCharacters(string s, string t) 
    {
        unordered_map<char, vector<int>> m;
        int n=s.size();
        
        for(int i=0; i<n; i++)
        {
            m[s[i]].push_back(i);
        }
        
        for(auto &i: m)
        {
            i.second.push_back(n);
        }
        
        int k=0;
        int i=-1;
        int tn=t.size();
        while(i<n && k<tn)
        {
            if(m.find(t[k])==m.end()) return tn-k;
            else
            {
                int idx= upper_bound(m[t[k]].begin(),m[t[k]].end(),i)-m[t[k]].begin();
                if(m[t[k]][idx]==n) return tn-k;
                else
                {
                    i=m[t[k]][idx];
                    k++;
                }
            }
        }
        return tn-k;   
    }
};
```
```java []
class Solution {
    public int appendCharacters(String s, String t) {
        Map<Character, List<Integer>> m = new HashMap<>();
        int n = s.length();
        
        // Build the map
        for (int i = 0; i < n; i++) {
            m.computeIfAbsent(s.charAt(i), k -> new ArrayList<>()).add(i);
        }
        
        // Append n to the end of each list in the map
        for (Map.Entry<Character, List<Integer>> entry : m.entrySet()) {
            entry.getValue().add(n);
        }
        
        int k = 0;
        int i = -1;
        int tn = t.length();
        
        while (i < n && k < tn) {
            if (!m.containsKey(t.charAt(k))) {
                return tn - k;
            } else {
                List<Integer> indices = m.get(t.charAt(k));
                int idx = Collections.binarySearch(indices, i + 1);
                
                if (idx < 0) {
                    idx = -idx - 1;
                }
                
                if (indices.get(idx) == n) {
                    return tn - k;
                } else {
                    i = indices.get(idx);
                    k++;
                }
            }
        }  
        return tn - k;
    }
}

```
```python []
class Solution(object):
    def appendCharacters(self, s, t):

        m = defaultdict(list)
        n = len(s)
        
        # Build the map
        for i in range(n):
            m[s[i]].append(i)
        
        # Append n to the end of each list in the map
        for key in m:
            m[key].append(n)
        
        k = 0
        i = -1
        tn = len(t)
        
        while i < n and k < tn:
            if t[k] not in m:
                return tn - k
            else:
                idx = bisect.bisect_right(m[t[k]], i)
                
                if m[t[k]][idx] == n:
                    return tn - k
                else:
                    i = m[t[k]][idx]
                    k += 1
        return tn - k
```
![upvote cat3.png](./images/1.png)


