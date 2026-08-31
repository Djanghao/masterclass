# Six Cases

**Author:** votrubac
**Votes:** 30
**Link:** [https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/1268245/](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/1268245/)

---

Not hard but frustrating to implement. 
 
Let's consider the basic expressions and what it takes to flip the result:

1. `1 & 0 == 0`: we change `&` to `|` (cost is 1).
2. `1 & 1 == 1`: we change either `left` or `right`
3. `0 & 0 == 0`: we change `&` to `|` (cost is 1) and we change either `left` or `right`.
4. `1 | 0 == 1`: we change `|` to `&` (1 operation).
5. `0 | 0 == 0`: we change either `left` or `right`
6. `1 | 1 == 1`: we change `&` to `|` (cost is 1) and we change either `left` or `right`.
 
Now, the cost to change `left` or `right` is `1` in a simple case. But if we have nested expressions, the const to change that expression could be higher. Therefore, when computing the cost, we add `min(cost(left), cost(right))` to flip either left or right.
 
At this point, we can arrive at the recursive solution that computes nested expressions, and replaces them with their result, and the cost to change that result.

**C++**
```cpp
array<char, 2> eval(vector<array<char, 2>> &exp, int i) {
    if (i == 0)
        return exp[0];
    auto left = eval(exp, i - 2), right = exp[i];
    int v1 = left[0] - '0', v2 = right[0] - '0', cost = 1; 
    if (exp[i - 1][0] == '|') {
        if (v1 == v2)
            cost = min(left[1], right[1]) + (v1 == 1);
        return { v1 | v2 ? '1' : '0', (char)cost};
    }
    if (v1 == v2)
        cost = min(left[1], right[1]) + (v1 == 0);
    return { v1 & v2 ? '1' : '0', (char)cost};
}
int minOperationsToFlip(string expression) {
    vector<vector<array<char, 2>>> st(1);
    for (auto ch : expression) {
        if (ch == '(')
            st.push_back(vector<array<char, 2>>());
        else if (ch == ')') {
            auto val = eval(st.back(), st.back().size() - 1);
            st.pop_back();
            st.back().push_back(val);
        }
        else
            st.back().push_back({ch, 1});
    }
    return eval(st.back(), st.back().size() - 1)[1];
}
```