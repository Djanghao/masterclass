# simple cpp solution

**Author:** bitrish
**Votes:** 27
**Link:** [https://leetcode.com/problems/sentence-similarity-iii/solutions/1140673/](https://leetcode.com/problems/sentence-similarity-iii/solutions/1140673/)

---

**Logic--
If first words matches increase the start pointers else If last words matches decrease the end pointers else return false**

```
class Solution {
public:
    bool areSentencesSimilar(string sentence1, string sentence2) {
        // two vectors to store words of both sentence
        vector<string>s1;
        vector<string>s2;
        string word;
        stringstream iss(sentence1);//storing each word of sentence 1
            while(iss>>word)
               s1.push_back(word);
        string word1;
        stringstream iss1(sentence2);//storing each word of sentence 2
            while(iss1>>word1)
                 s2.push_back(word1);
        int start1=0,start2=0,end1=s1.size()-1,end2=s2.size()-1;
        while(start1<=end1&&start2<=end2)
        {
            if(s1[start1]==s2[start2]) // if start of both vectors are equal
            {
                start1++; start2++;
            }
            else if(s1[end1]==s2[end2]) //if end of both vectors are equal
            {
                end1--; end2--;
            }
            else  return false;
        }
        return true;
    }
        
};
```