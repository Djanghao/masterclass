# Very easy with explanation

**Author:** Arundhati_09
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/3804661/](https://leetcode.com/problems/split-strings-by-separator/solutions/3804661/)

---

**Time complexity : O(n)**,  since we are traversing the vector only once
**Space complextity: O(1)** since we are not using any extra space apart from the ans vector, which is asked to return hence not considering it


```
vector<string> splitWordsBySeparator(vector<string>& words, char separator) 
    {
               
        vector<string> ans;
        for(int i=0; i<words.size();i++)
        {
            string s = words[i];
            string temp ="";
            
            for(auto ch:s)
            {
                //if separator is encountered and the resultant string is not empty , we push it into our answer vector
                if(ch == separator && temp != "")
                {
                    ans.push_back(temp);
                    temp="";
                }
                //adding characters to form a string untill we encounter the separator
                if(ch != separator)
                    temp += ch;
            }
            
            //pushing the last string explicitely
            if(temp != "")
                ans.push_back(temp);
        }
        return ans;
    }
```