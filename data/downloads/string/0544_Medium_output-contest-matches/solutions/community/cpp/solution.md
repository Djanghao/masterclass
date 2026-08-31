# C++ O(n) Time, O(logN) Space, One-Pass Scan Solution with Detailed Explanation.

**Author:** fentoyal
**Votes:** 3
**Link:** [https://leetcode.com/problems/output-contest-matches/solutions/101233/](https://leetcode.com/problems/output-contest-matches/solutions/101233/)

---

Treat this problem as two problems merged:
1. generate a sequence of parentheses and commas in this format:
(((,),(,)),((,),(,)))
2. generated a sequence of numbers in this order:
1,16,8,9,4,13..6,11

This is actually literally how I coded the algorithm below.

For the 1st problem, I think it's a typical medium level LC problems, not much to explain. Keep a stack of current symbols and pop things properly.

For the 2nd problem, things are a little bit obscure, but it can be solved by keeping a stack too. Let's take n = 16 as an example to how my algorithm works.
1. The first one is always 1, generate it and then push the sum of 1+n to the stack together with 1:
Result:1,     Stack:(17, 1) // (17, 1) is one single element in the stack.
2. The second one can be calculated by 17 - 1 = 16. Add 16 to the result and update the stack's top by halving its value (9 = 17/2 + 1). Then push the new value onto stack too.
Result:1,16,  Stack:(9, 1), (17, 16) //17 is still the sum of n+1, and 16 is the 2nd value; 9 is obtained by 9 = 17/2 + 1
3. Now we meet our first ')', pop the stack:
Result:1,16, Stack: (9,1)
4. The third one can be calculated the same as step 2: Use stack top pair: 9 - 1 = 8, and then halving the stack's top value (5 = 9/2 + 1), and then push the new value to the stack.
Result:1, 16, 8, Stack: (5, 1),(17, 8)   // 5 = 9/2 + 1
5. The forth one is same: Use stack top pair: 17 - 8 = 9, halve 17 and push the new value in:
Result,1, 16, 8, 9, Stack:(5,1),(9,8),(17,9)
6. Now we meet ')', pop stack:
Result,1, 16, 8, 9, Stack:(5,1),(9,8)
7. It's still ')', keep popping:
Result,1, 16, 8, 9, Stack:(5,1)
8. Next element: 5 - 1 = 4, halve top and push (17, 4) in
Result,1, 16, 8, 9, 4, Stack:(3,1),(17, 4)
9. Next element: 17 - 4 = 13, halve top and push (17, 13) in
Result,1, 16, 8, 9, 4, 13 Stack:(3,1),(9, 4),(17, 13)
10. meet ')', pop stack:
Result,1, 16, 8, 9, 4, 13 Stack:(3,1),(9, 4)
11. Next element 9-4 = 5, halve top and push (17, 5) in
Result,1, 16, 8, 9, 4, 13, 5 Stack:(3,1),(9, 4),(17, 5)
12. Next element 17 - 5 = 12, do the same things:
Result,1, 16, 8, 9, 4, 13, 5, 12 Stack:(3,1),(9, 4),(9, 5)
13. See ')' Pop stack;
14.  See ')' Pop stack;
Result,1, 16, 8, 9, 4, 13, 5, 12 Stack:(3,1),
15. Generate 3-1 = 2;
Result,1, 16, 8, 9, 4, 13, 5, 12, 2  Stack:(2, 1), (17, 2)
16. Generate 17-2 = 15;
Result,1, 16, 8, 9, 4, 13, 5, 12, 2, 15  Stack:(2, 1), (9, 2), (17, 15)
17. See ')', pop stack;
Result,1, 16, 8, 9, 4, 13, 5, 12, 2, 15  Stack:(2, 1), (9, 2)
18. Generate 9- 2 = 7;
Result,1, 16, 8, 9, 4, 13, 5, 12, 2, 15, 7  Stack:(2, 1), (9, 2), (17, 7)
19. Generate 17 - 7 = 10;
Result,1, 16, 8, 9, 4, 13, 5, 12, 2, 15, 7, 10  Stack:(2, 1), (5, 2), (9, 7), (17, 10)
20. See ')', pop;
21. See ')', pop;
Result,1, 16, 8, 9, 4, 13, 5, 12, 2, 15, 7, 10  Stack:(2, 1), (5, 2),
22. Generate 5-2 = 3;
Result,1, 16, 8, 9, 4, 13, 5, 12, 2, 15, 7, 10, 3  Stack:(2, 1), (3, 2),(17, 3)
23. Generate 17-3 = 14;
Result,1, 16, 8, 9, 4, 13, 5, 12, 2, 15, 7, 10, 3, 14  Stack:(2, 1), (3, 2), (9, 3), (17, 14)
24. See ')' Pop;
Result,1, 16, 8, 9, 4, 13, 5, 12, 2, 15, 7, 10, 3, 14  Stack:(2, 1), (3, 2), (9, 3),
25. Generate 9-3 = 6;
Result,1, 16, 8, 9, 4, 13, 5, 12, 2, 15, 7, 10, 3, 14, 6  Stack:(2, 1), (3, 2), (5, 3), (17, 6)
25. Generate 17 - 6 = 11;
Result,1, 16, 8, 9, 4, 13, 5, 12, 2, 15, 7, 10, 3, 14, 6, 11  Stack:(2, 1), (3, 2), (5, 3), (9, 6), (17,11)
27. See ')' Pop;
28. See ')' Pop;
29. See ')' Pop;
30. See ')' Pop;
Result,1, 16, 8, 9, 4, 13, 5, 12, 2, 15, 7, 10, 3, 14, 6, 11  Stack:Empty.

Done.

```
class Solution {
    string result;
    stack<pair<int, int>> stk;
    int n;
    int generate()
    {
        if (stk.empty())
        {
            stk.emplace(n + 1, 1);
            return 1;
        }else{
            auto elem = stk.top();
            int s = elem.first;
            int num = elem.second;
            stk.top().first = s / 2 + 1;
            stk.emplace(n + 1, s - num);
            return s - num;
        }
    }
public:
    string findContestMatch(int _n) {
        n = _n;
        stack<char> pars;
        int level = 0, max_level = 0;
        for (int i = 1; i < n; i<<=1)
            max_level ++;
        pars.push('(');
        result.push_back('(');
        max_level --;
        while(pars.size())
        {
            char c = pars.top();
            if (c == '(')
            {
                if (level < max_level)
                {
                    result.push_back('(');
                    level ++;
                    pars.push('(');
                }else{
                    result += to_string(generate());
                    result.push_back(',');
                    pars.push(',');
                }
                continue;
            }
            if (c == ',')
            {
                if (level < max_level)
                {
                    result.push_back('(');
                    level ++;
                    pars.push('(');
                }else{
                    result += to_string(generate());
                    while (pars.size() && pars.top() == ',')
                    {
                        result.push_back(')');
                        pars.pop(); //pop ,
                        pars.pop(); // pop (
                        stk.pop();  // pop data stack;
                        level --;
                    }
                    if (pars.empty())
                        break;
                    result.push_back(',');
                    pars.push(',');
                }
            }
        }
        return result;
    }
};
```