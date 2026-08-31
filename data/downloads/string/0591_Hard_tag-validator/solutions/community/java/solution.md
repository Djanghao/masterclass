# Solution

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/tag-validator/solutions/3409219/](https://leetcode.com/problems/tag-validator/solutions/3409219/)

---

```C++ []
class Solution {
public:
    bool isValid(string code) {
        int i = 0;
        return validTag(code, i) && i == code.size();
    }
private:
    bool validTag(string s, int& i) {
        int j = i;
        string tag = parseTagName(s, j);
        if (tag.empty()) return false;
        if (!validContent(s, j)) return false;
        int k = j + tag.size() + 2; // expecting j = pos of "</" , k = pos of '>'
        if (k >= s.size() || s.substr(j, k + 1 - j) != "</" + tag + ">") return false;
        i = k + 1;
        return true;
    }
    string parseTagName(string s, int& i) {
        if (s[i] != '<') return "";
        int j = s.find('>', i);
        if (j == string::npos || j - 1 - i < 1 || 9 < j - 1 - i) return "";
        string tag = s.substr(i + 1, j - 1 - i);
        for (char ch : tag) {
            if (ch < 'A' || 'Z' < ch) return "";
        }
        i = j + 1;
        return tag;
    }
    bool validContent(string s, int& i) {
        int j = i;
        while (j < s.size()) {
            if (!validText(s, j) && !validCData(s, j) && !validTag(s, j)) break;
        }
        i = j;
        return true;
    }
    bool validText(string s, int& i) {
        int j = i;
        while (i < s.size() && s[i] != '<') { i++; }
        return i != j;
    }
    bool validCData(string s, int& i) {
        if (s.find("<![CDATA[", i) != i) return false;
        int j = s.find("]]>", i);
        if (j == string::npos) return false;
        i = j + 3;
        return true;
    }
};
```

```Python3 []
class Solution:
    def isValid(self, code: str) -> bool:
        tags = []
        i = 0
        while i < len(code):
            if i > 0 and len(tags) == 0:
                return False
            elif code.startswith("<![CDATA[", i):
                j = code.find("]]>", i)
                if j == -1:
                    return False
                i = j + len("]]>")
            elif code.startswith("</", i):
                j = code.find('>', i)
                if j == -1:
                    return False
                tag_tail = code[i+2:j]
                if tags and tags[-1] == tag_tail:
                    i = j + 1
                    tags.pop()
                else:
                    return False
            elif code[i] == '<':
                j = code.find('>', i)
                if j == -1: 
                    return False
                tag_head = code[i+1:j]
                if 1 <= len(tag_head) <= 9 and tag_head.isupper() and tag_head.isalpha():
                    tags.append(tag_head)
                    i = j + 1
                else:
                    return False
            else:
                i += 1
        return len(tags) == 0
```

```Java []
class Solution {
      public boolean isValid(String exp) {
        int length = exp.length();
        Stack S=new Stack();
        for (int i = 0; i < length; i++) {
            if(i>0 && S.empty())
                return false;
            if(exp.startsWith("<![CDATA[",i)){
                int pos=exp.indexOf("]]>",i+9);
                if (pos==-1)
                    return false;
                else
                    i=pos+2;
            }
            else if(exp.startsWith("</",i)){
                int pos=exp.indexOf('>',i+2);
                if (pos==-1) {
                    return false;
                }
                String to_be_matched=exp.substring(i+2,pos);
                if(S.empty())
                   return false;
                if(!to_be_matched.equals((String)S.pop()))
                    return false;
                i=pos;
            }
            else if (exp.charAt(i) == '<') {
                int pos=exp.indexOf('>',i+1);
                if (pos==-1)
                    return false;
                String to_be_pushed=exp.substring(i+1, pos);
                if(!(to_be_pushed.length() >=1 && to_be_pushed.length() <=9))
                    return false;
                for(int k=0;k<to_be_pushed.length();k++) {
                    char temp = to_be_pushed.charAt(k);
                    if (!(temp >= 65 && temp <= 90))
                        return false;
                }
                S.push(to_be_pushed);
                i=pos;
            }
            else
            {
                int pos=exp.indexOf('<',i);
                if (pos!=-1) {
                    i=pos-1;
                }
            }
        }
        if(S.empty())
            return true;
        else
            return false;
    }
}
```
