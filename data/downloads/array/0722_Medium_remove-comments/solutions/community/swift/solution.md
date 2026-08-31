# Swift one pass solution beats 100%

**Author:** NamanGarg20
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-comments/solutions/1814287/](https://leetcode.com/problems/remove-comments/solutions/1814287/)

---

```

class Solution {
    func removeComments(_ source: [String]) -> [String] {
        
        var ans:String = ""
        var res = [String]()
        var block = false
        var skip = false
        for line in source{
            let len = line.count
            var strArr:[Character] = Array(line)
            for (i, ch) in line.enumerated(){
                if skip == true {
                    skip = false
                    continue
                }
                if block == false {
                    if (ch == "/") && (i < len - 1) && (strArr[i+1] == "/"){
                        break
                    }
                    else if (ch == "/") && (i < len - 1 ) && (strArr[i+1] == "*"){
                        block = true
                        skip = true
                        
                    }
                    else {
                        ans += String(ch)
                    }
                        
                    }
                else{
                    if (ch == "*") && (i < len - 1 ) && (strArr[i+1] == "/"){
                        block = false
                        skip = true
                    }
                }
            }
            
            if block == false && ans != "" {
                res.append(ans)
                ans = ""
            }
        }
        return res
        
    }
}


```