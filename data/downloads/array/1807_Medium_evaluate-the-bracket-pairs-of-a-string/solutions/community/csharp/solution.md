# Stack + Dictionary solution

**Author:** nzspider
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/3139848/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/3139848/)

---

# Code
```
public class Solution {
    public string Evaluate(string s, IList<IList<string>> knowledge) {
        var stack = new Stack<char>();
        for(int i=s.Length-1;i>=0;i--){
            stack.Push(s[i]);
        }

        var dic = new Dictionary<string, string>();
        foreach(var k in knowledge){
            dic.Add(k[0], k[1]);
        }

        var res = "";
        while(stack.Count>0){
            var c = stack.Pop();
            if(c == '('){
                var curKey = "";
                while(stack.Peek() != ')'){
                    curKey += stack.Pop();
                }
                stack.Pop();
                
                if(dic.Keys.Contains(curKey)){
                    res += dic[curKey];
                }
                else{
                    res += '?';
                }
            }
            else{
                res += c;
            }
        }
        return res;
    }

    
    //this is first thought coming into my mind. very simple 
    //but too low efficient and can't pass the time limit
    public string Evaluate1(string s, IList<IList<string>> knowledge){
        foreach(var k in knowledge){
            k[0] = $"({k[0]})";
            s = s.Replace(k[0], k[1]);
        }
        var left = s.IndexOf("(");
        while(left >=0){
            var right = s.IndexOf(")");
            s = s.Replace(s[left..(right+1)], "?");
            left = s.IndexOf("(");
        }
        return s;   
    }
    
}
```