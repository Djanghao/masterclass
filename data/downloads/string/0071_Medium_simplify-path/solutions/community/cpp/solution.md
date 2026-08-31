# ✅ C++ || Easy || Stack || Simple || Explained || Algorithm

**Author:** knockcat
**Votes:** 722
**Link:** [https://leetcode.com/problems/simplify-path/solutions/1847357/](https://leetcode.com/problems/simplify-path/solutions/1847357/)

---

# 71. Simplify Path
**KNOCKCAT**

Please ALso have a look to my Leetcode Repository Link Given Below :)
```
1. Easy C++
2. Line by Line Explanation with Comments.
3. Detailed Explanation \u2705
4. Stack Problem with Initution.
5. Please Upvote if it helps\u2B06\uFE0F
6. Link to my Github Profile contains a repository of Leetcode with all my Solutions. \u2B07\uFE0F
	// \uD83D\uDE09If you Like the repository don't foget to star & fork the repository\uD83D\uDE09
```
``` ```
[LeetCode](https://github.com/knockcat/Leetcode)     **LINK TO LEETCODE REPOSITORY**

Please upvote my comment so that i get to win the 2022 giveaway and motivate to make such discussion post.
**Happy new Year 2023 to all of you**
**keep solving keep improving**
Link To comment
[Leetcode Give away comment](https://leetcode.com/discuss/general-discussion/2946993/2022-Annual-Badge-and-the-Giveaway/1734919)
``` ```

**EXPLANATION**
* Create a **Stack of String** with following condition.
	* **Iterate the loop till you doesn't reaches the end of string.**
	* If you **encounter a  "/" then ignore it.**
	* **Create a temp String** & **Iterate the while loop** till you **doesn't find  "/"** and **append it to temp**.
	* Now check if **temp  == "."** , t**hen ignore it**.
	* If **temp == ".."** then **pop the element from the stack if it exists.**
	* If **no of the above 2 matches** **push temp to stack** as you find a valid path.
	* **Check out temp** string on **basis of above conditions till you doesn't find "/".**
* 	Now **add all stack elements** to result as **res = "/" + st.top() + res**
* 	If **res.size() is 0** then **return "/"**  if no directory or file is present.
* 	At last **return res**.

```
Input: path = "/../"
Output: "/"
Input: path = "/home//foo/"
Output: "/home/foo"
```

**ALGORITHM**
* By looking at examples we can see that the above **simplification process** just **behaves like a stack**.
* **Whenever we encounter any file\u2019s name**, **we simply push it into the stack**.
* when we come across **\u201D . \u201D** **we do nothing**
* When **we find \u201C..\u201D** in our path, **we simply pop the topmost element** as we **have to jump back to parent\u2019s directory.**
* When we **see multiple \u201C////\u201D** we **just ignore them** as **they are equivalent to one single \u201C/\u201D.** 
* After **iterating through the whole string** the **elements remaining in the stack** is our **simplified absolute path.**


``` ```
**CODE WITH EXPLANATION**
```
					// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    string simplifyPath(string path) {
        
        stack<string> st;
        string res;
        
        for(int i = 0;  i<path.size(); ++i)
        {
            if(path[i] == '/')    
                continue;
            string temp;
			// iterate till we doesn't traverse the whole string and doesn't encounter the last /
            while(i < path.size() && path[i] != '/')
            {
				// add path to temp string
                temp += path[i];
                ++i;
            }
            if(temp == ".")
                continue;
			// pop the top element from stack if exists
            else if(temp == "..")
            {
                if(!st.empty())
                    st.pop();
            }
            else
			// push the directory file name to stack
                st.push(temp);
        }
        
		// adding all the stack elements to res
        while(!st.empty())
        {
            res = "/" + st.top() + res;
            st.pop();
        }
        
		// if no directory or file is present
        if(res.size() == 0)
            return "/";
        
        return res;
    }
};
```