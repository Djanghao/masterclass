# 9 lines 4ms Java solution

**Author:** sky-xu
**Votes:** 293
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/86615/](https://leetcode.com/problems/longest-absolute-file-path/solutions/86615/)

---

```
public int lengthLongestPath(String input) {
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(0); // "dummy" length
        int maxLen = 0;
        for(String s:input.split("\
")){
            int lev = s.lastIndexOf("\	")+1; // number of "\	"
            while(lev+1<stack.size()) stack.pop(); // find parent
            int len = stack.peek()+s.length()-lev+1; // remove "/t", add"/"
            stack.push(len);
            // check if it is file
            if(s.contains(".")) maxLen = Math.max(maxLen, len-1); 
        }
        return maxLen;
    }
```

An even shorter and faster solution using array instead of stack:
```
public int lengthLongestPath(String input) {
    String[] paths = input.split("\
");
    int[] stack = new int[paths.length+1];
    int maxLen = 0;
    for(String s:paths){
        int lev = s.lastIndexOf("\	")+1, curLen = stack[lev+1] = stack[lev]+s.length()-lev+1;
        if(s.contains(".")) maxLen = Math.max(maxLen, curLen-1);
    }
    return maxLen;
}
```