# ✅ C++ || Monotonic Stack || Easy & Simple || O(N)

**Author:** knockcat
**Votes:** 192
**Link:** [https://leetcode.com/problems/remove-duplicate-letters/solutions/1859332/](https://leetcode.com/problems/remove-duplicate-letters/solutions/1859332/)

---


# 316. Remove Duplicate Letters
**KNOCKCAT**

```
1. Easy C++
2. Line by Line Explanation with Comments.
3. Detailed Explanation \u2705
4. cnt & visited array/vector approach with initution.
5. Please Upvote if it helps\u2B06\uFE0F
6. Link to my Github Profile contains a repository of Leetcode with all my Solutions. \u2B07\uFE0F
	// \uD83D\uDE09If you Like the repository don't foget to star & fork the repository\uD83D\uDE09
```
``` ```
[LeetCode](http://github.com/knockcat/Leetcode) **LINK TO LEETCODE REPOSITORY**
``` ```

Please upvote my comment so that i get to win the 2022 giveaway and motivate to make such discussion post.
**Happy new Year 2023 to all of you**
**keep solving keep improving**
Link To comment
[Leetcode Give away comment](https://leetcode.com/discuss/general-discussion/2946993/2022-Annual-Badge-and-the-Giveaway/1734919)

**Intution**

1. The task is to return the **lexically smallest string of unique characters**.
1. Or the smallest string which **do not contain any repetition of characters and it is the smallest** in terms of lexical order.
1. **eg adbcabcd**  , here we have 2 a's , b's and c's and d's ( **all have 2 frequency**)
1. We have to return a **string which contain all the characters and is the smallest one** above eg have two possible strings.
1. adbc and abcd and abcd is the smallest in lexical order. Again this is the simpler eg but you can imagine complex eg .
1. The only point is to return the smallest unique lexical characters string.

1. Now, this is what the problems want us to do, Hope this is clear now.

 Now **how we can come up with the lexical smallest unique characters string ?**

	THere are 2 observations
1. to maintain the smallest lexical order **if the current character is smaller than your last added** character than obviously **you will try to bring it at its correct position** but  **we have to maintain the order too** ( we have to return lexically smallest among all possible result).

1. now since the current character is smaller you will pop the character you have added so far till you bring current it into its correct position but now **you will only pop the character if you have occurences of the character that you want to pop in future** because **if there are no occurences of your last added characters you cannot pop** as all unique chaaracters should be there. so in this case you have to keep this character you cannot pop because it has no upcoming occurences.

1. so we will use the concept of **monotonic stack** it **helps in maintaing an increasing or decreasing sequence** in this problem we are maintain increasing sequence but apart from this we cannot say we will maintain an complete increasing sequence since there is one more condition that all characters has to be there.

**for eg for the case        [d a b c]**
* we have to keep d since it has no future occurences so here we will not be able to maintain a complete increasing sequence. That can be possible if we have occurences of elements in future.

* So **we will scan the string and if at some instance we find the current character is smaller we will pop** the characters **until there occurences are available or curr character comes at it right place** and with that we will able to keep the string lexically smaller.

*  and we can also thing this problem not in terms of occrences but the **only about the last occurence of some character** like **if you want to pop an character you will see that have you crossed it last occurence or not**, if you have not you will definitely able to add it in future otherwise you cannot make string more lexically smallest.

Now if the idea is clear to you, you can do in any way, either keeping only the last occurence track or frequency I have done the frequency way.

* now what i have done, i **store all the frequency of character.**
* Then i have kept **a visited array to keep track that i am not adding the same character again.**
* now, I am first **decrementing the frequency** because **i will be adding that character if it is not already added.**
* if the **curr character is not visited** that **means i had to add** that character to its current position so if my **ans string is not empty** and the current character is greater than last added charater there is no problem.
* but, **if the curr character is smaller** than i will **check if the occurences of last characters is available** if that the case, i will **pop those  last characters until my current comes to correct position and mark them unvisited because i have to add them in future.**
* if **frequency is not available that mean I have to keep that**, because **that is the only lexical  smaller string which will be containing all the characters.**
* after I finish this steps whatever the case, I will **add the character and also marks is visited..**

**Now don't think that the stack data structure is not used since we did the same this using ans string.**

ANALYSIS :-

* TIME COMPLEXITY :-  **O(N)**
* SPACE COMPLEXITY :- **O(N)**



**CODE WITH EXPLANATION**
			
```
						// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    string removeDuplicateLetters(string s) {
        // cnt for storing frequency of characters
        // vis for marking visited characters
        vector<int> cnt(26,0)  , vis(26,0);
        
        string res = "";
        int n = s.size();
        
        for(int i = 0; i<n; ++i)
            cnt[s[i] - 'a']++;
        
        for(int i = 0; i<n; ++i)
        {
            // decrease cnt of current character
            cnt[s[i] - 'a']--;
            
            // If character is not already
            // in answer
            if(!vis[s[i]- 'a'])
            {
                // Last character > s[i]
                // and its count > 0
                while(res.size() > 0 && res.back() > s[i] && cnt[res.back() - 'a'] > 0)
                {
                    // marking letter visited
                    vis[res.back() - 'a'] = 0;
                    res.pop_back();
                }
                
                // Add s[i] in res and
                // mark it visited
                res += s[i];
                vis[s[i] - 'a'] = 1;
            }
        }
        // return resultant string
        return res;
    }
};
```

