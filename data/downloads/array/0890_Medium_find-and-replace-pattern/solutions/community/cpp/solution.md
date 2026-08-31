# ✅ C++ || Map  || Easy To Understand || Beginner Friendly

**Author:** knockcat
**Votes:** 112
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/2348171/](https://leetcode.com/problems/find-and-replace-pattern/solutions/2348171/)

---

# 890. Find and Replace Pattern
**KNOCKCAT**
```
1. Easy C++
2. Line by Line Explanation with Comments.
3. Detailed Map Explanation \u2705
4. Please Upvote if it helps\u2B06\uFE0F
5. Link to my Github Profile contains a repository of Leetcode with all my Solutions. \u2B07\uFE0F
	//\uD83D\uDE09If you Like the repository don't foget to star & fork the repository\uD83D\uDE09
```

[LeetCode](http://github.com/knockcat/Leetcode) **LINK TO LEETCODE REPOSITORY**

Please upvote my comment so that i get to win the 2022 giveaway and motivate to make such discussion post.
**Happy new Year 2023 to all of you**
**keep solving keep improving**
Link To comment
[Leetcode Give away comment](https://leetcode.com/discuss/general-discussion/2946993/2022-Annual-Badge-and-the-Giveaway/1734919)

**ALGORITHM**

* **Give it a read** and you will find **there is nothing much in the question.**
* So **I created a Found_Pattern Function** which will **return the numeric pattern of the  pattern and all words** and then **we are comparing is the numeric pattern of Pattern and words[i]** are **similar than we will push words[i] in our answer  Vector**.
* So how we are **creating the numeric pattern** of **Pattern and words[i]**.
* So **I take an unordered_map and a vector<int> to store the numeric pattern.**
* Inside the found pattern function what i am doing.
	* If **string is empty we will return empty vector**.
	* I am **iterating the string** and **if the ith character is not present in the map** I am **inserting that character in map with an index (ind)** , after **for every unique character i am incrementing ind.**
	* And, **if that character is already present than we will push the index that we assigned to that char on inserting.**
	* After Generating the Pattern.
	* Return the numeric pattern (v) and compare it with pattern vector.

* **Hope the idea is clear how we are generating pattern**
* let **see some example** **what patten we get for some string** according to **above algorithm.**
```
["abc ","  deq "," mee "," aqq "," dkd "," ccc"]
  123     123      122     122      121     111
PATTERN
   "abb"
    122
```
**So**, we can clearly see **2 words have same pattern** that is **122**
```
```

**CODE** [Looks Lengthy due to comments But idea is pretty simple]
```
			//\uD83D\uDE09If you Like the repository don't foget to star & fork the repository\uD83D\uDE09
class Solution {
public:
    
    vector<int> found_Pattern(string pattern)
    {
	   // if string is empty return empty vector.
        if(pattern.size() == 0)
            return {};
        
        vector<int> v;
		
		// ind variable for keeping track of unique characters
        int ind = 0;
		
        unordered_map<char,int> mp;
        for(int i = 0; i<pattern.size(); ++i)
        {
			// if character not present in map, insert the char with an index,
			// increment index because for next unique character the index should be differnt.
           if(mp.find(pattern[i]) == mp.end())
           {
               mp.insert({pattern[i],ind++});
			   // also  push the index to v(numeric  pattern vector)
			   // mp[pattern[i]] gives the key to that character, here key is ind(which we are giving to every unique character)
               v.push_back(mp[pattern[i]]);
           }
            else
            {
				// if char is already in map than push index mapped to that character into the vector
                v.push_back(mp[pattern[i]]);
            }
        }
		// return numeric pattern
        return v;
    }
    vector<string> findAndReplacePattern(vector<string>& words, string pattern) {
       
		// store numeric patten of Pattern string in v
        vector<int> v = found_Pattern(pattern);
        
        int n = words.size();
        vector<string> ans;
        
		// iterating and comparing pattern of each word with v(numeric pattern of Pattern)
        for(int i = 0; i<n; ++i)
        {
            vector<int> pattern_word = found_Pattern(words[i]);
            
			// if matched add words[i] to answer vector
            if(v == pattern_word)
                ans.push_back(words[i]);
        }
        
        return ans;
    }
};
```