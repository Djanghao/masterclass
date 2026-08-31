# Python / Rust - Solutions

**Author:** nuclearoreo
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-comments/solutions/739545/](https://leetcode.com/problems/remove-comments/solutions/739545/)

---

- **Python**
```
class Solution:
    def removeComments(self, source: List[str]) -> List[str]:
        res, mode, buffer = [], False, ''
        
        for line in source:
            i = 0
            while i < len(line):
                if mode:
                    if line[i:i+2] == '*/':
                        mode = False
                        i += 1
                else:
                    if line[i:i+2] == '//':
                        break
                    elif line[i:i+2] == '/*':
                        mode = True
                        i += 1
                    else:
                        buffer += line[i]
                i += 1
                
            if not mode and len(buffer):
                res.append(buffer)
                buffer = ''

        return res  
```

- **Rust**

```rust
impl Solution {
    pub fn remove_comments(source: Vec<String>) -> Vec<String> {
        let mut res: Vec<String> = Vec::new();
        let mut buffer: String = String::new();
        let mut mode: bool = false;
        
        for line in source.iter() {
            let mut i = 0;
            let len = line.len();
            while i < len {
                if mode {
                    if i < len - 1 && &line[i..i+2] == "*/" {
                        mode = false;
                        i += 1;
                    }
                } else {
                    if i < len - 1 && &line[i..i+2] == "//" {
                        break;
                    } else if i < len - 1 && &line[i..i+2] == "/*" {
                        mode = true;
                        i += 1;
                    } else {
                        buffer.push_str(&line[i..i+1]);
                    }
                }
                i += 1;
            }
            if !mode && buffer.len() > 0 {
                res.push(buffer);
                buffer = String::new();
            }    
        }
        
        return res;
    }
}
```