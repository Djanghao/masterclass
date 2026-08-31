# C++ | Properly Commented | Easy Explanation | Full Approach Explained

**Author:** chaitanyanand
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/3696676/](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/3696676/)

---

# Intuition
We need the substrings which won't overlap and all occurences of the characters are included in it.

In a string abcdade, 
abcda is invalid because all occurences of d are not included, 
abcdad is valid but if we take this then our ouptut is "abcdad","e", that means 2 substrings.

What if I take: "b","c","e", these are all valid. and 3 is the answer to this test case.

# Approach
In the first loop, I mapped the start and end of all characters. basically start is the leftmost occurence of a char, and end is the rightmost occurence of a character.

Go through the comments in the code for more detailed info.


# Code
```
class Solution {
public:
    vector<string> maxNumOfSubstrings(string s) {
        vector<int> start(26,-1);
        vector<int> end(26,0);
        vector<int> skip(26,0);
        vector<string> result;
        //store the starting and ending of all characters in the string.
        for (int i=0;i<s.size();i++){
            int ind = s[i]-'a';
            if (start[ind]==-1) start[ind] = i;;
            end[ind] =i;
        }
       

        //for all starting indexes, check that start:end is a valid non overlapping string
        for(int i=0;i<26;i++){
            if (start[i]==-1) continue;
            for (int k = start[i];k<=end[i];k++){
                if (start[s[k]-'a']<start[i]){ //iif there's a character ch between start[i] and end[i]
                // whose start is less than start[i] then any string beginning from start[i] cannot 
                // be a valid string 
                    skip[i]=1;  
                    break;
                }

                //update the end. 
                // for example abcacd
                // we re iterating for character a
                // that means we're iterating the substring abca (which is invalid because of c)
                // now during iterating we come to c, so we update the end to make a valid string
                // we update the substring to be abcac 
                else end[i] = max(end[i],end[s[k]-'a']);
            }
        }
        int cut = INT_MAX; //to ensure there is no overlapping
        for (int i=s.size()-1;i>=0;i--){
            if (i==start[s[i]-'a'] //this index is the starting of that character.
            && end[s[i]-'a']<cut && //the ending of this index is valid. cut represents the last 
            // index where we made a cut and stored the substring . so if end>cut that means it is invalid
            !skip[s[i]-'a'] //we ensured skip[] =1 in the previous loop
            ){
                result.push_back(s.substr(i,end[s[i]-'a'] - i +1)); //end[] -i +1 is the length of the substr
                cut=i; //updating last cut
            }
                
        }

        return result;

    }
};
```

![upvote.jpeg](./images/0.jpeg)
