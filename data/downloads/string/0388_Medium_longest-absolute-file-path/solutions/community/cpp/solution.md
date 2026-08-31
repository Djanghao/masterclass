# A fast, simple and detailed solution using deque

**Author:** shvmsaini
**Votes:** 15
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/2737090/](https://leetcode.com/problems/longest-absolute-file-path/solutions/2737090/)

---

`len` will keep track of the length of the directory or file name, `level` will track depth. 

Whenever we encounter a `\
` character, we know the directory name has ended so we can push the length of the directory to our deque, it will only store the hierarchy we are working in so if `level` is less than size(depth) of deque we can pop the values as we no longer need them.

Finally, when a `.` character is encountered, we know it's a file so we can try it as result by summing all directory names from deque and we will add `level` to the final result to make up for `/` and `len` for the current file name.
```
class Solution {
public:
    int lengthLongestPath(string input) {
        deque<int> dq;
        int len = 0, res = 0, level = 0;
        bool file = false;
        for(char c: input){
            if(c == '\
'){
                dq.push_back(len);
                level = len = file = 0;
            }
            else if(c == '\	') ++level;
            else if(c == '.') ++len, file = true;
            else{
                ++len;
                if(file) res = max(res, len + accumulate(dq.begin(), dq.end(), 0) + level);
                while(level < dq.size()){
                    dq.pop_back();
                }
            }
        }        
        return res;
    }
};
```