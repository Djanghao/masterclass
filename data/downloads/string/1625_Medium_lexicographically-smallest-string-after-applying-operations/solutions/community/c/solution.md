# ✅ C++ || Explained [Easy to Understand || Beginner || BFS

**Author:** 99NotOut_half_dead
**Votes:** 7
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/1457839/](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/1457839/)

---

# ***Approach***
```
This is a quite easy to implement kind of problem!!!

There is nothing special or hidden in the problem statement , do what is mentioned...

We are required to find the lexiographically smallest string that can be formed from string s

What we will do is create all possible strings and return the lexiographically smallest one we encountered!!!
    
For a string s : we can have 2 childs
                    first_child : formed by applying operation 1 on parent string
                    second_child : formed by applying operation 2 on parent string
                    we only push those strings to queue that are not seen yet!!![to avoid infinite loop]
NOTE : I have used BFS , u can also use DFS , it will work fine!!!
```
# ***Code***
```
class Solution {
public:
    string findLexSmallestString(string str, int a, int b) {
        unordered_set<string> seen; // to keep track of seen strings
        queue<string> q;
        q.push(str);
        
        string lex_smallest_string = str;
        
        while(q.empty() == false) //simple-bfs
        {
            string s = q.front();
            q.pop();

            lex_smallest_string = min(lex_smallest_string , s);

            // Pushing all those childs which are not seen yet!!!
            // 1st child is formed by applying operation 1 on string
            // 2nd child is formed by applying operation 2 on string

            string first_child = apply_operation_1(s , a);
            if(seen.find(first_child) == seen.end())
                q.push(first_child) , seen.insert(first_child);

            string second_child = apply_operation_2(s , b);
            if(seen.find(second_child) == seen.end())
                q.push(second_child) , seen.insert(second_child);
        }
        return lex_smallest_string;
    }
    
    string apply_operation_1(string s , int a)
    {
    // Operation 1 : states that increasing all odd indices of string a times!!!!
        for(int i = 1 ; i < s.size() ; i += 2)
            s[i] = (s[i] - '0' + a) % 10 + '0';
        return s;
    }
    
    string apply_operation_2(string s , int b)
    {
    // Operation 2 : states that we have to rotate string to right b times!!!!!
        string res(s.size() , ' ');
        for(int i = 0 ; i < s.size() ; ++i)
            res[(i + b) % s.size()] = s[i];
        return res;
    }
};
```
# ***If you liked the solution, Please Upvote!!!***