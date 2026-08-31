# C++ short O(n log(n)) solution with `std::unordered_set<std::string_view>`

**Author:** dzze
**Votes:** 71
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/695101/](https://leetcode.com/problems/longest-duplicate-substring/solutions/695101/)

---

Rabin-Karp algorihm can be implemented in C++17 with `std::unordered_set<std::string_view>` if a custom hasher is supplied. Check the second code block below for the custom hasher.
`std::string_view` does not copy the whole string and `std::unordered_set` handles the logic of hashing and comparing `std::string_view`'s.

```cpp
class Solution {
public:
    string longestDupSubstring(string S)
    {
        std::string_view longest;
        std::unordered_set<std::string_view> set;
        size_t beg = 1;
        size_t end = S.size() - 1;
        while (beg <= end)
        {
            auto len = beg + (end - beg) / 2;
            bool found = false;
            for (size_t i = 0; i != S.size() - len + 1; ++i)
            {
                const auto [it, inserted] = set.emplace(S.data() + i, len);
                if (!inserted)
                {
                    found = true;
                    longest = *it;
                    break;   
                }
            }
            
            if (found)
                beg = len + 1;
            else
                end = len - 1;
            
            set.clear();      
        }
            
        return {longest.begin(), longest.end()};
    }
};
```

Edit: As @shortenda, @jatinmittal199510 and @Jabro have pointed out, the answer above uses a naive hash algorithm which takes O(len) time per each slice. With minimal change to the function, we can add a hash function that keeps track of the first character of the previously hashed string slice and the previous hash value. This answer runs in around 1000ms and beats about 98% of all C++ answers.

```
class Solution {
    class rabinFingerprint
    {
    public:
        size_t operator()(const std::string_view& s)
        {
    	    if (m_clear)
            {
                m_pow = 1;
                for (size_t i = 1; i != s.size(); ++i)
                    m_pow = (m_pow * base) % p;
                m_cur = 0;
                for (auto c : s)
                    m_cur = ((m_cur * base) % p + (c - 'a')) % p;
                m_clear = false;
            }
            else
            {
                m_cur = ((ssize_t(m_cur) - ssize_t(m_pow * (m_first - 'a'))) % ssize_t(p) + p) % p;
                m_cur = (m_cur * base + (s.back() - 'a')) % p;
            }
            m_first = s.front();
            return m_cur;
        };
        
        void clear() { m_clear = true; }

    private:
        static constexpr size_t p = 19260817;
        static constexpr size_t base = 26;

        bool m_clear = true;
        size_t m_cur;
        size_t m_pow;
        char m_first;
    };
    
    struct wrapper
    {
        size_t operator()(const std::string_view& s) const
        {
            return m_hasher(s);
        }
        
        rabinFingerprint& m_hasher;  
    };

public:    
    string longestDupSubstring(string S)
    {
        std::string_view longest;
        rabinFingerprint hasher;
        std::unordered_set<std::string_view, wrapper> set{10, wrapper{hasher}};
        size_t beg = 1;
        size_t end = S.size() - 1;
        while (beg <= end)
        {
            auto len = beg + (end - beg) / 2;
            bool found = false;
            for (size_t i = 0; i != S.size() - len + 1; ++i)
            {
                const auto [it, inserted] = set.emplace(S.data() + i, len);
                if (!inserted)
                {
                    found = true;
                    longest = *it;
                    break;
                }
            }
            
            if (found)
                beg = len + 1;
            else
                end = len - 1;
            
            set.clear();
            hasher.clear();
        }
            
        return {longest.begin(), longest.end()};
    }
};
```