# Solution

**Author:** deleted_user
**Votes:** 28
**Link:** [https://leetcode.com/problems/design-a-text-editor/solutions/3045030/](https://leetcode.com/problems/design-a-text-editor/solutions/3045030/)

---

```C++ []
class TextEditor {
public:
    string ltext = "", rtext="";
    TextEditor() {}
    
    void addText(string text) {
        ltext += text;
    }
    
    int deleteText(int k) {
        k = min(k, (int) ltext.size());
        ltext.resize(ltext.size() - k);
        return k;
    }
    
    string cursorLeft(int k) {
        for(;k > 0 && !ltext.empty(); ltext.pop_back(), k--)
            rtext.push_back(ltext.back());
            
        return ltext.size() >= 10 ? ltext.substr(ltext.size()-10, 10): ltext;
    }
    
    string cursorRight(int k) {
        for(;k > 0 && !rtext.empty(); rtext.pop_back(), k--)
            ltext.push_back(rtext.back());
        
        return ltext.size() >= 10 ? ltext.substr(ltext.size()-10, 10): ltext;
    }
};
```

```Python3 []
class TextEditor:

    def __init__(self):
        self.left = []
        self.right = deque([])
        
    def addText(self, text: str) -> None:
        self.left.append(text)
        
    def deleteText(self, k: int) -> int:
        total = 0
        while k:
            if not self.left:
                break
            s = self.left.pop()
            if len(s) > k:
                s = s[:-k]
                self.left.append(s)
                total +=k
                break
            k -= len(s)
            total += len(s)
        return total

    def cursorLeft(self, k: int) -> str:
        total = 0
        while k:
            if not self.left:
                break
            s = self.left.pop()
            if len(s) > k:
                self.left.append(s[:-k])
                self.right.appendleft(s[-k:])
                break
            self.right.appendleft(s)
            k -= len(s)
        return self.get()
        

    def cursorRight(self, k: int) -> str:
        total = 0
        while k:
            if not self.right:
                break
            s = self.right.popleft()
            if len(s) > k:
                self.left.append(s[:k])
                self.right.appendleft(s[k:])
                break
            self.left.append(s)
            k -= len(s)
        return self.get()
    
    def get(self):
        ans = ''
        i = len(self.left) - 1
        while i >= 0 and len(ans) < 10:
            ans = self.left[i] + ans
            i -= 1
        return ans[-10:]
```

```Java []
class TextEditor {
    char buffer[];
    int left;
    int right;
    public TextEditor() {
        buffer = new char[800000];
        left = 0;
        right = buffer.length-1;
    }
    
    public void addText(String text) {
        for(char c : text.toCharArray()){
            buffer[left] = c;
            left++;
        }
    }
    
    public int deleteText(int k) {
        if(k>left)k=left;
        left-=k;
        return k;
    }
    
    public String cursorLeft(int k) {                
        k = Math.min(k,left);
        while(k>0){
            left--;k--;
            buffer[right] = buffer[left];
            right--;
        }
        int len = Math.min(10,left);
        StringBuilder sb = new StringBuilder();
        int i = left;
        while(len!=0){
            len--;i--;
            sb.append(buffer[i]);
        }
        return sb.reverse().toString();        
    }
    
    public String cursorRight(int k) {
        int charOnRight = buffer.length - right -1;
        k = Math.min(k,charOnRight);
        while(k>0){
            k--;
            right++;            
            buffer[left] = buffer[right];
            left++;
        }
        int len = Math.min(10,left);
        int i = left;
        StringBuilder sb = new StringBuilder();
        while(len!=0){
            len--;i--;
            sb.append(buffer[i]);
        }
        return sb.reverse().toString();

    }
}
```
