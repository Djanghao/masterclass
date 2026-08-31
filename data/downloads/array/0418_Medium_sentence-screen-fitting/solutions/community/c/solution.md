# C++ greedy approach

**Author:** Maitreya47
**Votes:** 30
**Link:** [https://leetcode.com/problems/sentence-screen-fitting/solutions/1282211/](https://leetcode.com/problems/sentence-screen-fitting/solutions/1282211/)

---

First create a string containing all the words from the sentence, seprated by a " ", also a extra space atlast, so that when the string is repeated in the current row, there is a space between last word and repeated first word. Now we go row by row and try to fit as many characters as possible. If the last character that didnt fit is a space, we have successfully fitted some words in the row. If it is not a space, we need to delete the incomplete word from the row, and try to fit it in next row, so we keep doing 'char_fit--' until we find a space and break the row there.
At last we just need to do char_fit/s.length() to find how many 's' strings were able to fit in.
```
class Solution {
public:
    int wordsTyping(vector<string>& sentence, int rows, int cols) {
        string s = "";
        int ret = 0;
        for(int i=0; i<sentence.size(); i++)
            s+=sentence[i]+" ";
        int char_fit = 0;
        for(int i=0; i<rows; i++)
        {
            char_fit = char_fit + cols; //keep adding cols, as these are available slots to be filled in ro
			// and by doing this, you specifically calculate the index of word that will be at the end of the
			// column
            if(s[char_fit%s.length()]==' ')
                char_fit++;
            else
            {
                while(char_fit>0 && s[(char_fit-1)%s.length()]!=' ')
                    char_fit--;
            }
        }
        ret = char_fit/s.length();
        return ret;
    }
};
```