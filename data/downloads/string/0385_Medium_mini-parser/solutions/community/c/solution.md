# C++ Non-Recursive One-Pass Solution (using Stack) || A Possible Implementation of NestedInteger

**Author:** zhiqing_xiao
**Votes:** 53
**Link:** [https://leetcode.com/problems/mini-parser/solutions/86074/](https://leetcode.com/problems/mini-parser/solutions/86074/)

---

**Solution in a Glance:**
This solution uses a stack to record the NestedInteger's.
At the very beginning, an empty NestedInteger is placed in the stack. This NestedInteger will be regarded as a list that holds one but only one NestedInteger, which will be returned in the end.
*Logic:* When encountering '[', the stack has one more element. When encountering ']', the stack has one less element.

**Complexities:**
* Time: *O*(n)     
* Space: worse-case *O*(n) (worse case: [1,[2,[3,[....[n-1,[n]]]....])

**C++ Accepted Code:** 
(A possible implementation of **NestedInteger** is also provided in the first reply.)

    class Solution {
    public:
        NestedInteger deserialize(string s) {
            function<bool(char)> isnumber = [](char c){ return (c == '-') || isdigit(c); };
            
            stack<NestedInteger> stk;
            stk.push(NestedInteger());
            
            for (auto it = s.begin(); it != s.end();) {
                const char & c = (*it);
                if (isnumber(c)) {
                    auto it2 = find_if_not(it, s.end(), isnumber);
                    int val = stoi(string(it, it2));
                    stk.top().add(NestedInteger(val));
                    it = it2;
                }
                else {
                    if (c == '[') {
                        stk.push(NestedInteger());
                    }
                    else if (c == ']') {
                        NestedInteger ni = stk.top();
                        stk.pop();
                        stk.top().add(ni);
                    }
                    ++it;
                }
            }
            
            NestedInteger result = stk.top().getList().front();
            return result;
        }
    };