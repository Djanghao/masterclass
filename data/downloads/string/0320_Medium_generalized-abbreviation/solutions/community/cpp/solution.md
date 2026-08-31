# C++ classic backtracking solution with detailed explanation

**Author:** xz2210
**Votes:** 9
**Link:** [https://leetcode.com/problems/generalized-abbreviation/solutions/77240/](https://leetcode.com/problems/generalized-abbreviation/solutions/77240/)

---

**Thought: backtrack.** 

Thought process:
Let's have the result pool starting with the most simple empty string \u201c\u201d and work **backward** using "word" as an example. 

When the first character \u201cd\u201d comes in, it can be transformed to either \u201c1\u201d or \u201cd\u201d and appended to the existing string pool {\u201c0\u201d} and becomes {\u201c1\u201d, \u201cd\u201d} ; Next, when \u201co\u201d comes in, similarly, it can be appended to the existing string pool {\u201cd\u201d,\u201d1\u201d} in the front as either character \u201co\u201d or \u201c1\u201d, so now we have the basic idea for backtrack. But be careful here, if the existing string started with a number, when you want to append the next character as a number, you need to merge them, so \u201c1\u201d+\u201d1\u201d should be \u201c2\u201d not \u201c11\u201d. So what we care about here is **if the existing string started with a number**, that\u2019s why I use a pair<string, int> to record what the candidate string looks like, the second part indicates the number prefix, if it\u2019s 0, meaning it\u2019s not started with number. String is the part that is followed by the number. I broke it down into two scenarios when a new character comes in:
Append it as a string
Append it as a number

Let me know if you think there can be any improvement.


String pool status: 

start: ("",0)

append "d":
As character: ("d", 0)
As abbr/number: ("", 1)

append "r":
As character: ("rd",0), ("r1",0)
As abbr/number: ("d",1), ("",2)

append "o":
As character: ("ord",0), ("or1",0), ("o1d", 0), ("o2", 0)
As abbr/number: ("rd",1), ("r1",1), ("d",2), ("",3)

append "r":
As character: ("word",0), ("wor1",0), ("wo1d", 0), ("wo2", 0), ("w1rd",0), ("w1r1",0), ("w2d",0), ("w3",0)
As abbr/number: ("ord",1), ("or1",1), ("o1d", 1), ("o2", 1), ("rd",2), ("r1",2), ("d",3), ("",4)


Final processing of string pool:
"word", "wor1", "wo1d", "wo2", "w1rd", "w1r1", "w2d", "w3", "1ord", "1or1", "1o1d", "1o2", "2rd", "2r1", "3d", "4"

    class Solution {
    public:
        vector<string> generateAbbreviations(string word) {
            vector<string> res;
            vector<pair<string, int>> all=generateAbbreviations(word,0); 
            //process final string pool
            for(auto a:all){
                if(a.second) res.push_back(to_string(a.second)+a.first); //concatenation is required for pairs started with numbers. e.g.  ("ord", 1), ("rd", 2)
                else res.push_back(a.first); //no need for concatenation without number prefix. e.g. ("word", 0), ("w1rd", 0)
            }        
            return res;
        }
        
        vector<pair<string, int>> generateAbbreviations(string word, int pos) {
            if(pos==word.size())
                return {make_pair("", 0)}; //base
            
            vector<pair<string,int>> newPool;
            
            vector<pair<string, int>> existPool=generateAbbreviations(word, pos+1);
            for(auto a: existPool){
                //add as character: no abbr
                if(a.second)
                    newPool.push_back(make_pair(word.substr(pos,1)+to_string(a.second)+a.first,0)); 
                else
                    newPool.push_back(make_pair(word.substr(pos,1)+a.first, 0));
                //add as number: abbr
                newPool.push_back(make_pair(a.first, a.second+1));
            }
            return newPool;
        }
    };