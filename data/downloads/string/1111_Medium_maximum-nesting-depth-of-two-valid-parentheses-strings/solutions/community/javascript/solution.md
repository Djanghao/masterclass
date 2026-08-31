# C++ 100%, Javascript, C# odd/even levels, easy to understand

**Author:** leonenko
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/329635/](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/329635/)

---

When depth increases - change set, so we divide depths/levels between sets as even as possible. 

If you imagine histogram with parentheses nesting depth represented as height of the bars, and put all even vertical levels to one set and the rest (odd levels) to the other, then you basically get a solution to the problem.

Small catch, to match open to close parenthesis, for open parenthesis first increment then calculate set code (0 or 1), for close case first calculate set then decrement depth, this way parenthesis will match.

C++ human friendly version
```
vector<int> maxDepthAfterSplit1(string seq) {
    int size = seq.size();
    vector<int> result(size);
    int depth = 0;
    for(int i = 0; i < size; ++i) {
        if (seq[i] == '(') {
            ++depth;
            result[i] = depth % 2;
        } else  {
            result[i] = depth % 2;
            --depth;
        }
    }
    return result;
}
```

C++
```
vector<int> maxDepthAfterSplit(string seq) {
    vector<int> result;
    int depth = 0;
    for(auto& ch: seq) 
        result.push_back(ch == '(' ? ++depth % 2 : depth-- % 2);
    return result;
}
```

C# human friendly version
```
public int[] MaxDepthAfterSplit(string seq) {
    var result = new int[seq.Length];
    var depth = 0;
    for(var i = 0; i < seq.Length; ++i) {
        if (seq[i] == '(') {
            ++depth;
            result[i] = depth % 2;
        } else  {
            result[i] = depth % 2;
            --depth;
        }
    }
    return result;
}
```

C# short version
```
public int[] MaxDepthAfterSplit(string seq) {
    var result = new int[seq.Length];
    var depth = 0;
    for(var i = 0; i < seq.Length; ++i)
        result[i] = seq[i] == '(' ? ++depth % 2 : depth-- % 2;
    return result;
}
```

Javascript human friendly version
```
var maxDepthAfterSplit = function(seq) {
    const result = [];
    let depth = 0;
    for(let ch of seq) {
        if (ch == '(') {
            ++depth;
            result.push(depth & 1);
        } else  {
            result.push(depth & 1);
            --depth;
        }
    }
    return result;
};
```

Javascript
```
var maxDepthAfterSplit = function(seq) {
    const result = [];
    let depth = 0;
    for(let ch of seq) {
        result.push(ch == '(' ? ++depth & 1 : depth-- & 1);
    return result;
};
```