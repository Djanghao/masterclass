# ✅ C++ || 2 Approaches || Explained With Algorithm || Easy & Simple

**Author:** knockcat
**Votes:** 80
**Link:** [https://leetcode.com/problems/validate-stack-sequences/solutions/1853109/](https://leetcode.com/problems/validate-stack-sequences/solutions/1853109/)

---

# 946. Validate Stack SequencesParentheses
**KNOCKCAT**
```
1. Easy C++
2. Line by Line Explanation with Comments.
3. Detailed Explanation \u2705
4. Stack Approach with initution.
5. Please Upvote if it helps\u2B06\uFE0F
6. 6. Link to my Github Profile contains a repository of Leetcode with all my Solutions. \u2B07\uFE0F
	// \uD83D\uDE09If you Like the repository don't foget to star & fork the repository\uD83D\uDE09
```
[LeetCode](http://github.com/knockcat/Leetcode) **LINK TO LEETCODE REPOSITORY**

Please upvote my comment so that i get to win the 2022 giveaway and motivate to make such discussion post.
**Happy new Year 2023 to all of you**
**keep solving keep improving**
Link To comment
[Leetcode Give away comment](https://leetcode.com/discuss/general-discussion/2946993/2022-Annual-Badge-and-the-Giveaway/1734919)

* **APPROACH 1**

**ALGORITHM**
* If the **element X has been pushed to the stack** then **check if the top element in the pop[] sequence is X or not**. 
* **If it is X then pop it right now** else **top of the push[] sequence will be changed** and **make the sequences invalid**.
* similarly, do the same for all the elements and **check if the stack is empty or not in the last.**
*  If **empty then return True** else **return False**.
*  **Time  Complexity** O(N)
*  **Space Complexity** O(N)
``` ```

**CODE WITH EXPLANATION**
```
				// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        stack<int> s ;   // an empty stack
        int j = 0;
        for(int i= 0; i<pushed.size(); ++i)
        {
            s.push(pushed[i]);
            
			// check if pushed values is next to pe popped out.
            while(!s.empty() && s.top() == popped[j])
            {
                s.pop();
                ++j;
            }
        }
		// if stack is empty means sequence is correct.
        return s.empty();
    }
};
```
* **APPROACH 2**
 
**ALGORITHM**

* Using **pushed vector as a stack.**
* **Same Steps as above approach.**
* As **both pushed and popped are permutation** of **each other.**
* **At end the vector will be empty if sequence is correct.**
* **TIME COMPLEXITY** O(n)
* **SPACE COMPLEXITY** O(1)
* Though **In second approach** for **achieveing space complexity** of O(1), **i am modifying inputs**, of which **i am not in favour**.


**CODE WITH EXPLANATION**
```
						// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        int i = 0, j = 0;
        for(int x :  pushed)
        {
            pushed[i++] = x;
            // check that current pushed element matches with popped sequence
            while(i> 0 && pushed[i-1] == popped[j])
            {
                --i;
                ++j;
            }
        }
        // as pushed is a permutation of stack so at end it should be empty
        return i == 0;
    }
};
```