# Solution

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/parse-lisp-expression/solutions/3445653/](https://leetcode.com/problems/parse-lisp-expression/solutions/3445653/)

---

```C++ []
class Solution {
public:
    int evaluate(string expression) {
        unordered_map<string, int> map;
        int idx = 0;
        return eval(expression, idx, map);
    }
    int eval(const string& exp, int& idx, const unordered_map<string, int>& map){
        int result;
        idx++;
        int end = exp.find(' ', idx);
        const string op = exp.substr(idx, end - idx);
        idx = end + 1;
        if(op == "add" || op == "mult"){
            const int v1 = parse_and_eval(exp, idx, map);
            const int v2 = parse_and_eval(exp, idx, map);
            result = op == "add" ? v1 + v2 : v1 * v2;
        }else{
            unordered_map<string, int> new_map = map;
            while(exp[idx] != '('){
                end = idx;
                while(exp[end] != ' ' && exp[end] != ')') ++end;
                if(exp[end] == ')') break;
                const string var = exp.substr(idx, end - idx);
                idx = end + 1;
                const int val = parse_and_eval(exp, idx, new_map);
                new_map[var] = val;
            }
            result = parse_and_eval(exp, idx, new_map);
        }
        idx++;
        return result;
    }
    int parse_and_eval(const string& exp, int& idx, const unordered_map<string, int>& map){
        int result;
        if(exp[idx] == '('){
            result = eval(exp, idx, map);
            if(exp[idx] == ' ') ++idx;
        }else{
            int end = idx;
            while(exp[end] != ' ' && exp[end] != ')') ++end;
            if(exp[idx] == '-' || (exp[idx] >= '0' && exp[idx] <= '9'))
                result = stoi(exp.substr(idx, end - idx));
            else
                result = map.at(exp.substr(idx, end - idx));
            idx = exp[end] == ' ' ? end + 1 : end;
        }
        return result;
    }
};
```

```Python3 []
class Solution:
    def evaluate(self, expression: str) -> int:
        
        tokens = deque(expression.replace('(','( ').replace(')',' )').split())
        
        def eva(tokens,env):
            
            if tokens[0] != '(':
                if tokens[0][0] in '-1234567890':
                    return int(tokens.popleft())
                else:
                    return env[tokens.popleft()]
            else:
                tokens.popleft()
                if tokens[0] in ('add', 'mult'):
                    op = tokens.popleft()
                    a, b = eva(tokens, env), eva(tokens, env)
                    val = a + b if op == 'add' else a * b
                else:
                    tokens.popleft()
                    local = env.copy()
                    while tokens[0] != '(' and tokens[1] != ')':
                        var = tokens.popleft()
                        local[var] = eva(tokens, local)
                    val = eva(tokens, local)
                tokens.popleft()
                return val
            
        return eva(tokens,{})
```

```Java []
class Solution {
    String expression;
    int index;
    HashMap<String,Deque<Integer>> scope; 
    public int evaluate(String expression) {
        this.expression=expression;
        index=0;
        scope=new HashMap<>();
        return evaluate();
    }
    private int evaluate(){
        if(expression.charAt(index)=='('){
            index++;
            char begin=expression.charAt(index);
            int ret;
            if(begin=='l'){
                index += 4;
                ArrayList<String> vars=new ArrayList<>();
                while(true){
                    if(!Character.isLowerCase(expression.charAt(index))){
                        ret=evaluate();
                        break;
                    }
                    String var=parseVar();
                    if(expression.charAt(index)==')'){
                        ret=scope.get(var).peek();
                        break;
                    }
                    vars.add(var);
                    index++;
                    int e=evaluate();
                    scope.putIfAbsent(var, new LinkedList<>());
                    scope.get(var).push(e);
                    index++;
                }
                for (String var : vars) {
                    scope.get(var).pop();
                }
            } else if(begin=='a') {
                index += 4;
                int v1 = evaluate();
                index++;
                int v2 = evaluate();
                ret = v1+v2;
            } else {
                index += 5;
                int v1 = evaluate();
                index++;
                int v2 = evaluate();
                ret =  v1*v2;
            }
            index++;
            return ret;
        } else {
            if(Character.isLowerCase(expression.charAt(index))){
                String var=parseVar();
                return scope.get(var).peek();
            } else {
                return parseInt();
            }
        }
    }
    private int parseInt(){
        boolean negative=false;
        if(expression.charAt(index)=='-'){
            negative=true;
            index++;
        }
        int ret=0;
        while(Character.isDigit(expression.charAt(index))){
            ret*=10;
            ret+=expression.charAt(index)-'0';
            index++;
        }
        if(negative) return -ret;
        return ret;
    }
    private String parseVar(){
        StringBuilder sb=new StringBuilder();
        char c=expression.charAt(index);
        while(c!=' ' && c!=')'){
            sb.append(c);
            c=expression.charAt(++index);
        }
        return sb.toString();
    }
}
```
