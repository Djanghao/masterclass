# ✔ C++ || Sliding Window || Hash Table || Intuitive

**Author:** iqlipse_abhi
**Votes:** 108
**Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1739169/](https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1739169/)

---

**Approach 1: Brute Force (Finding all substrings of size (p) and cheacking if it is anagram or not)**
**Status: TLE**
```
class Solution {
public:
    bool areAnagram(string str1, string str2)
    {
        sort(str1.begin(), str1.end());
        for (int i=0;i<str1.size();i++)
        {
            if (str1[i]!=str2[i])
            {
                return false;
            }
        }
        return true;
    }
    vector<int> findAnagrams(string s, string p) {
        vector<string> v;
        vector<int> ans;
        string k="";
        for(int i=0;i<s.size();i++)
        {
            for(int j=i;j<i+p.size() && j<s.size();j++)
            {
                k+=s[j];
            }
            if(k.size()==p.size())
            {
                v.push_back(k);   
            }
            k="";
        }
        sort(p.begin(),p.end());
        for(int i=0;i<v.size();i++)
        {
            if(areAnagram(v[i],p))
            {
                ans.push_back(i);
            }
        }
        return ans;
    }
};
```
**Approach 2: Using Hash table**
**Status: AC**
***Credit: Youtube Channel Tech Dose***

* Basically, we are keeping one hash to keep the every elements in p to compare with another hash that we have used as window slide.

* Every time current index is more than window, we need to pop our hash window at front. So how we do this? we find what would be the front by using `curr_index - window_size` in hash to pop that. If the keyed-value is equal to 1, then we can delete the entire key from the existence, otherwise, we just reduce by 1.

We directly compare phash to window hash if they are same -> if it is, then we take the beginning of the index of the window and moving on.

```
class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> ans;
        vector<int> hash(26, 0);
        vector<int> phash(26, 0);
        int window = p.size();
        int len = s.size();
        if(len < window)
        {
            return ans;
        }
        int left = 0,right = 0;
        while(right < window)
        {
            phash[p[right] - 'a'] += 1;
            hash[s[right] - 'a'] += 1;
            right++;
        }
        right -=1;
        while(right < len)
        {
            if(phash == hash)
            {
                ans.push_back(left);
            }
            right+=1;
            if(right != len)
            {
                hash[s[right] - 'a'] += 1;
            }
            hash[s[left] - 'a'] -=1 ;
            left += 1;
        }
        return ans;
    }
};
```

**Please Upvote if you Like.......... :)**