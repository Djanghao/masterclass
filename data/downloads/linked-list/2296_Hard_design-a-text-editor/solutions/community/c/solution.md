# Using Two Stacks | C++

**Author:** karthikrudroju
**Votes:** 274
**Link:** [https://leetcode.com/problems/design-a-text-editor/solutions/2111861/](https://leetcode.com/problems/design-a-text-editor/solutions/2111861/)

---

**Always maintain the left part of string in left stack and right part of the string in right stack which are divided  by the cursor**

**1)** **Add operation:** Push string character by character to the left stack.
**2)** **Deletion operation:** Pop characters from the left stack and return the number of characters popped.
**3)** **Cursor movement to left:** Pop elements from left stack and push in right stack.
**4)** **Cursor movement to right:** Pop elements from right stack and push in left stack. 

```
class TextEditor {
    stack<char> left;
    stack<char> right;
public:
    TextEditor() {
        
    }
    
    void addText(string text) {
        for(auto &c : text){
            left.push(c);
        }
    }
    
    int deleteText(int k) {
        int cnt=0;
        while(!left.empty() and k>0){
            left.pop();
            cnt++;
            k--;
        }
        return cnt;
    }
    
    string cursorLeft(int k) {
        while(!left.empty() and k>0){
            char c = left.top();left.pop();
            right.push(c);
            k--;
        }
		// returning the last min(10, len) characters to the left of the cursor
        return cursorShiftString();
    }
    
    string cursorRight(int k) {
        while(!right.empty() and k>0){
            char c = right.top();right.pop();
            left.push(c);
            k--;
        }
		// returning the last min(10, len) characters to the left of the cursor
        return cursorShiftString();
    }
    
	// function to return the last min(10, len) characters to the left of the cursor
    string cursorShiftString(){
        string rtn = "";
        int cnt=10;
        while(!left.empty() and cnt>0){
            char c = left.top();left.pop();
            rtn += c;
            cnt--;
        }
        reverse(rtn.begin(),rtn.end());
        for(int i=0;i<rtn.size();i++){
            left.push(rtn[i]);
        }
        return rtn;
    }
};
```

**Time Complexity of each operation:**
```addText(string text) : O(n) {where n == length of text}```
```deleteText(int k) : O(k)```
```cursorLeft(int k) : O(k)```
```cursorRight(int k) : O(k)```