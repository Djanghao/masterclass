# AAM jindagi - MENTOS jindagi CPP easy to understand

**Author:** user7027vu
**Votes:** 5
**Link:** [https://leetcode.com/problems/html-entity-parser/solutions/751143/](https://leetcode.com/problems/html-entity-parser/solutions/751143/)

---

Ye hai AAM Jindagi:

```
class Solution {
public:
    string entityParser(string text) {
        string res="";
        string temp="";
        
        unordered_map<string,string> mp;
        mp["&quot;"]="\"";
        mp["&apos;"]="'";
        mp["&amp;"]="&";
        mp["&gt;"]=">";
        mp["&lt;"]="<";
        mp["&frasl;"]="/";
            
        for(char c:text)
        {
            if(mp.find(temp)!=mp.end())
            {
                res+=mp[temp];
                temp="";
                temp+=c;
            }
            else if(c=='&') 
            {
                res+=temp;
                temp="";
                temp+=c;
            }
            else temp+=c;
        }
        if(mp.find(temp)!=mp.end())
        {
            res+=mp[temp];
            temp="";
        }
        else
        res+=temp;
        return res;
    }
};
```

Ye hai MENTOS Jindagi:

```
class Solution {
public:
    string entityParser(string text) {
            unordered_map<string, string> mp = { {"&quot;", "\""}, {"&apos;", "\\'"}, {"&amp;", "&"}, {"&gt;", ">"}, {"&lt;", "<"}, {"&frasl;", "/"}};
            for(auto& [key,value]:mp)
            {
                regex xx(key);
                text=regex_replace(text,xx,value);
            }
            return text;
    }
};
```