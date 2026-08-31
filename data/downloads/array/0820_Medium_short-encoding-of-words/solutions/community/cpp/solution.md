# ✅C++ | ✅2 Approaches  | ✅Simple & Efficient solution |  🗓️ DLC June, Day 20

**Author:** Yash2arma
**Votes:** 10
**Link:** [https://leetcode.com/problems/short-encoding-of-words/solutions/2173223/](https://leetcode.com/problems/short-encoding-of-words/solutions/2173223/)

---

**Approach-1:** Use reverse and sorting
We have to end the words with a #. So, we have to find the all the words which ends with same suffix. To make it more clear we can reverse the words, so we don't have to deal with suffix rather with prefix. We can make it more simpler by sorting the given array after reversing each word. Now we just have to check one word with the next adjacent not with the whole array.

**TC : O(N^2 + NlogN + N*S)** N^2- for reverse each word, NlogN- for sort and , N*S- for comparing adjacent word.

**SC: O(1)**
Here,
	N-Size of vector words
	S-Size of string word in words 

**Code:**

```
class Solution 
{
public:
    int minimumLengthEncoding(vector<string>& words) 
    {
        for(auto &word: words) //reverse each word in words i.e. time->emit
            reverse(word.begin(), word.end());
        
        sort(words.begin(), words.end()); //sort words in increasing order of their length
        
        int n = words.size();
        string str = words[0]; 
        int ans=0, wordsize;
        
        //compare adjacent words if both are different we add wordsize+1 in ans, +1 for #
        for(int i=1;i<n;i++) 
        {
            wordsize = str.size();
            if(words[i].compare(0, wordsize, str)) //if both words are same return 0 else 1 
                ans += 1+wordsize;
            str = words[i];
        }
        ans += str.size()+1; //to handle last word and condition when size of words is 1
        return ans;
    }
};
```
**Please upvote if it helps \uD83D\uDE0A\u2764\uFE0F**


**Approach-2:** Use set and erase operation
Push words in a set and find all the suffixes of a word in the set and remove them from set. After this all the remaing words in the set are valid encoding string so we just count them by adding 1 for #.

**TC : O(2N + N*S)** 2N- for storing word in set s and counting valid encoding string, N*S- for erasing all suffixes of word.

**SC: O(N)** - for set
Here,
	N-Size of vector words
	S-Size of string word in words 

**Code:**
```
class Solution 
{
public:
    int minimumLengthEncoding(vector<string>& words) 
    {
        set<string> s(words.begin(), words.end()); //store word in set so that they can remove easily
        
        //for each word find its suffixes and remove from set s if it present
        for(auto &word: words)
        {
            for(int i=1; i<word.size(); i++) //erase suffixes of a word
                s.erase(word.substr(i));
        }
        
        int ans=0;
        //all the remaining words in s are valid encoding string
        for(auto word:s)
            ans += word.size()+1;
        
        return ans;
    }
};
```
**Please upvote if it helps \uD83D\uDE0A\u2764\uFE0F**