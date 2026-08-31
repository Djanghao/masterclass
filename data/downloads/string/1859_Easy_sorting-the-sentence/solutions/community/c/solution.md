# Easy C++ solution - beats 100% space and time

**Author:** yajassardana
**Votes:** 63
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/1210177/](https://leetcode.com/problems/sorting-the-sentence/solutions/1210177/)

---

*   As at max 9 words are allowed, we use a string vector of size 10 to store word positions.
* Then we simply traverse our input string word by word and keep adding it in the pos array as per it's given position digit.
 * Lastly, we travese our pos array and append the strings with spaces to the final answer.
  * The answer must not end with a space so we delete the last space before returning.
```
string sortSentence(string s) {
        vector<string>pos(10,"");
        for(int i=0; i<s.size(); i++){
            int j = i;
            string temp;
            while(!isdigit(s[j])){
                temp.push_back(s[j]);
                j++;
            }
            pos[s[j]-'0'] = temp;
            i = j+1;
        }
        string ans;
        for(int i=1; i<10; i++){
            if(pos[i].length()>0){
                ans+=pos[i];
                ans.push_back(' ');
            }
        }
        ans.pop_back();
        return ans;
    }
};
```