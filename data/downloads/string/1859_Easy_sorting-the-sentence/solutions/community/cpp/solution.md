# C++ || Rt: 0ms, O(nlogn) || Easy and Detailed Solution with example

**Author:** o_DisDain_o
**Votes:** 44
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/1210311/](https://leetcode.com/problems/sorting-the-sentence/solutions/1210311/)

---

## **O(nlogn) Solution**
Assume input string *s* be "football3 I1 love2"
Solution is divided into the following sections 

**Section 1** 
Use *stringstream* to extract words from *s* in a string *word*. Say *word* = "football3". Use this *word* to make a pair *<int, string>* where *int* is the sequence number at which the word in supposed to be in original sentence and *string* is the word after removing the number at the end of it. Then push this pair in a vector *sent*.
After doing the same for all the words, *sent* vector contains [{3, "football"}, {1, "I"}, {2, "love"}]

**Section 2** 
The sort function sorts the vector *sent* on the basis of the sequence number i.e. first element of each pair in *sent*
After this *sent* vector contains [{1, "I"}, {2, "love"}, {3, "football"}]

**Section 3**
Now that we have the original sentence in the required order, we just have to make a string *ans* that has the string contents of all the pair in vector *sent*. Also we add a space " " after every word other than the last one.


```
class Solution {
public:
    string sortSentence(string s) 
    {
        stringstream words(s); 
        string word;
        pair<int, string> m;
        vector<pair<int, string> > sent;
        
        //SECTION 1
        while(words>>word)
        {
            int len = word.size();
            int i = int(word[len-1]) - 48;
            sent.push_back(make_pair(i, word.substr(0, len-1)));
        }
        
        //SECTION 2
        sort(sent.begin(), sent.end());
        
        //SECTION 3
        string ans = "";
        int len = sent.size();
        for(int i=0; i<len; i++)
        {
            ans += sent[i].second;
            if(i!= len-1)
                ans += " ";
        }
        
        return ans;
    }
};
```

## **O(n) Solution**
Credits: [@Shahabaaz ](https://leetcode.com/Shahabaaz/)
```
class Solution {
public:
    string sortSentence(string s) {
        map<int, string> mp;
        string cur = "";
        for (char c: s) {
            if (c == ' ' && cur != "") {
                string ncur = cur;
                char id = ncur.back();
                int idx = (id - '0');
                ncur.pop_back();
                mp[idx] = ncur;
                cur = "";
            }
            else 
                cur += c;
        }
        if (cur != "") {
                string ncur = cur;
                char id = ncur.back();
                int idx = (id - '0');
                ncur.pop_back();
                mp[idx] = ncur;
        }
    
        string ans = "";
        for (auto p: mp) {
            ans += p.second;
            ans += " ";
        }
        if (ans.back() == ' ')
            ans.pop_back();
        return ans;
    }
};
```

