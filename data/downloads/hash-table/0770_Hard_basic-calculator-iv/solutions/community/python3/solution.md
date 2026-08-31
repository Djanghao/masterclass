# Solution

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/basic-calculator-iv/solutions/3460101/](https://leetcode.com/problems/basic-calculator-iv/solutions/3460101/)

---

```C++ []
class Solution {
public:
    vector<string> basicCalculatorIV(string expression, vector<string>& evalvars, vector<int>& evalints) {
        unordered_map<string, int> mp;
        int n = evalvars.size();
        for (int i = 0; i < n; ++i) mp[evalvars[i]] = evalints[i];
        int pos = 0;
        unordered_map<string, int> output = helper(expression, mp, pos);
        vector<pair<string, int>> ans(output.begin(), output.end());
        sort(ans.begin(), ans.end(), mycompare);
        vector<string> res;
        for (auto& p: ans) {
            if (p.second == 0) continue;
            res.push_back(to_string(p.second));
            if (p.first != "") res.back() += "*"+p.first;
        }
        return res;
    }
private:
    unordered_map<string, int> helper(string& s, unordered_map<string, int>& mp, int& pos) {
        vector<unordered_map<string, int>> operands;
        vector<char> ops;
        ops.push_back('+');
        int n = s.size();
        while (pos < n && s[pos] != ')') {
            if (s[pos] == '(') {
               pos++;
               operands.push_back(helper(s, mp, pos));
            }
            else {
               int k = pos;
               while (pos < n && s[pos] != ' ' && s[pos] != ')') pos++;
               string t = s.substr(k, pos-k);
               bool isNum = true;
               for (char c: t) {
                   if (!isdigit(c)) isNum = false;
               }
               unordered_map<string, int> tmp;
               if (isNum) 
                   tmp[""] = stoi(t);
               else if (mp.count(t)) 
                   tmp[""] = mp[t];
               else              
                   tmp[t] = 1;
               operands.push_back(tmp);
            }
            if (pos < n && s[pos] == ' ') {
               ops.push_back(s[++pos]);
               pos += 2;
            }
        }
        pos++;
        return calculate(operands, ops);
    }
    unordered_map<string, int> calculate(vector<unordered_map<string, int>>& operands, vector<char>& ops) {
        unordered_map<string, int> ans;
        int n = ops.size();
        for (int i = n-1; i >= 0; --i) {
            unordered_map<string, int> tmp = operands[i];
            while (i >= 0 && ops[i] == '*')
                tmp = multi(tmp, operands[--i]);
            int sign = ops[i] == '+'? 1: -1;
            for (auto& p: tmp) ans[p.first] += sign*p.second;
        }
        return ans;
    }
    unordered_map<string, int> multi(unordered_map<string, int>& lhs, unordered_map<string, int>& rhs) {
        unordered_map<string, int> ans;
        int m = lhs.size(), n = rhs.size();
        for (auto& p: lhs) {
            for (auto& q: rhs) {
                string t = combine(p.first, q.first);
                ans[t] += p.second*q.second;
            }
        }
        return ans;
    }
    string combine(const string& a, const string& b) {
        if (a == "") return b;
        if (b == "") return a;
        vector<string> strs = split(a, '*');
        for (auto& s: split(b, '*')) strs.push_back(s);
        sort(strs.begin(), strs.end());
        string s;
        for (auto& t: strs) s += t +'*';
        s.pop_back();
        return s;
    }
    static vector<string> split(const string& s, char c) {
        vector<string> ans;
        int i = 0, n = s.size();
        while (i < n) {
            int j = i;
            i = s.find(c, i);
            if (i == -1) i = n;
            ans.push_back(s.substr(j, i-j));
            i++;
        }
        return ans;
    }
    static bool mycompare(pair<string, int>& a, pair<string, int>& b) {
        string s1 = a.first, s2 = b.first;
        vector<string> left = split(s1, '*'); 
        vector<string> right = split(s2, '*');
        return left.size() > right.size() || (left.size() == right.size() && left < right);
    } 
};
```

```Python3 []
from functools import cmp_to_key

class Expr:
    def __init__(self):
        self.coef = 0
        self.vars = []

    def getVal(self):
        if not self.coef:
            return ""
        if not self.vars:
            return str(self.coef)
        return str(self.coef) + "*" + "*".join(self.vars)
        
def mul(expr1, expr2):
    ret = Expr()
    ret.coef = expr1.coef * expr2.coef
    if ret.coef == 0:
        return ret
    ret.vars = list(sorted(expr1.vars + expr2.vars))
    return ret

def mergeExpr(stack, signs, expr):
    sign = signs[-1][-1]
    match sign:
        case "+":
            stack[-1].append([expr])
        case "-":
            expr.coef = - expr.coef
            stack[-1].append([expr])
        case "*":
            last = stack[-1][-1]
            temp = []
            for prev in last:
                temp.append(mul(prev, expr))
            stack[-1][-1] = temp
    signs[-1].pop()

def mergeGroup(stack, signs, group):
    sign = signs[-1][-1]
    match sign:
        case "+":
            stack[-1].append(group)    
        case "-":
            temp = []
            for expr in group:
                expr.coef = -expr.coef
                temp.append(expr)   
            stack[-1].append(temp)
        case "*":
            last = stack[-1].pop()
            temp = []
            for expr1 in last:
                for expr2 in group:
                    temp.append(mul(expr1, expr2))
            stack[-1].append(temp)
    signs[-1].pop()

def compare(c, d):
    a, b = c.split("*"), d.split("*")
    if len(a) != len(b):
        return len(b) - len(a)
    return 1 if a > b else -1

def getSum(curLevel):
    exprs = {"":0}
    for groups in curLevel:
        for expr in groups:
            if not expr.vars:
                exprs[""] += expr.coef
            else:
                key = "*".join(expr.vars)
                if key not in exprs:
                    exprs[key] = expr
                else:
                    exprs[key].coef += expr.coef
    ret = [exprs[key] for key in sorted(exprs.keys(), key=cmp_to_key(compare)) if key != "" and exprs[key].coef]

    if exprs[""] != 0:
        temp = Expr()
        temp.coef = exprs[""]
        ret.append(temp)
    return ret

def calculate(s, a, b):
    stack, signs = [[]], [["+"]]
    i, n = 0, len(s)
    dic = {x:y for x, y in zip(a, b)}
    while i < n:
        if s[i] == " ":
            i += 1
            continue
        if s[i].isalpha():
            expr = Expr()
            temp = s[i]
            while i+1 < n and s[i+1].isalpha():
                temp += s[i+1]
                i += 1
            if temp in dic:
                expr.coef = dic[temp]
            else:
                expr.coef = 1
                expr.vars = [temp]
            mergeExpr(stack, signs, expr)
        elif s[i].isdigit():
            expr = Expr()
            num = int(s[i])
            while i+1 < n and s[i+1].isdigit():
                num = num * 10 + int(s[i+1])
                i += 1
            expr.coef = num
            mergeExpr(stack, signs, expr)
        elif s[i] in "+-*":
            signs[-1].append(s[i])
        elif s[i] == "(":
            stack.append([])
            signs.append(["+"])
        elif s[i] == ")":
            curLevel = getSum(stack.pop())
            signs.pop()
            mergeGroup(stack, signs, curLevel)
        i += 1
    res = getSum(stack.pop())
    return [expr.getVal() for expr in res]
class Solution:
    def basicCalculatorIV(self, expression: str, evalvars: List[str], evalints: List[int]) -> List[str]:
        return calculate(expression, evalvars, evalints)
```

```Java []
class Solution {
    int n;
    String s;
    char[] arr;
    int[] braces;
    HashMap<String, Integer> variables = new HashMap<>();
    
    public List<String> basicCalculatorIV(String expression, String[] evalvars, int[] evalints) {
        s = expression;
        arr = s.toCharArray();
        n = arr.length;
        braces = new int[n];
        Arrays.fill(braces, -1);
        int[] stack = new int[n/2];
        int index = -1;
        for(int i=0; i<n; ++i) {
            if(arr[i] == '(') stack[++index] = i;
            else if(arr[i] == ')') {
                int last = stack[index--];
                braces[last] = i;
                braces[i] = last;
            }
        }
        for(int i=0; i<evalvars.length; ++i) variables.put(evalvars[i], evalints[i]);
        List<Term> terms = dewIt(0, n-1);
        TreeMap<String, Integer> map = new TreeMap<>(new Comparator<>() {
            public int compare(String a, String b) {
                int ca = countStars(a), cb = countStars(b);
                if(ca != cb) return cb - ca;
                else return a.compareTo(b);
            }
            private int countStars(String s) {
                int ans = 0;
                for(char c: s.toCharArray()) if(c == '*') ++ans;
                return ans;
            }
        });
        for(Term term: terms) {
            if(term.coeff != 0) {
                String key = term.getKey();
                if(map.containsKey(key)) {
                    int oldCoeff = map.get(key);
                    if(oldCoeff == -term.coeff) map.remove(key);
                    else map.put(key, oldCoeff + term.coeff);
                } else map.put(key, term.coeff);
            }
        }
        List<String> ans = new LinkedList<>();
        for(String k: map.keySet()) ans.add(map.get(k) + "" + k);
        return ans;
    }
    private List<Term> dewIt(int a, int b) {
        if(braces[a] == b) return dewIt(a+1, b-1);
        List<Term> ans = new LinkedList<>(), buffer = new LinkedList<>();
        buffer.add(new Term(1, new LinkedList<>()));
        for(int i=a; i<=b; ) {
            int j = i;
            List<Term> curr = null;
            if(arr[i] == '(') {
                j = braces[i] + 1;
                curr = dewIt(i+1, j-2);
            }
            else {
                while(j <= b && arr[j] != ' ') ++j;
                String exp = s.substring(i, j);
                int val = 1;
                List<String> vars = new LinkedList<>();
                if(variables.containsKey(exp)) val = variables.get(exp);
                else if (exp.charAt(0) <= '9') val = Integer.valueOf(exp);
                else vars.add(exp);
                curr = new LinkedList<>();
                curr.add(new Term(val, vars));
            }
            buffer = multiply(buffer, curr);
            if(j > b || arr[j+1] == '+' || arr[j+1] == '-') {
                ans.addAll(buffer);
                buffer = new LinkedList<>();
            }
            if(j < b) {
                ++j;
                if(arr[j] == '+') buffer.add(new Term(1, new LinkedList<>()));
                else if(arr[j] == '-') buffer.add(new Term(-1, new LinkedList<>()));
                j += 2;
            }
            i = j;
        }
        return ans;
    }
    private List<Term> multiply(List<Term> a, List<Term> b) {
        List<Term> ans = new LinkedList<>();
        for(Term x: a) for(Term y: b) {
            Term prod = x.clone();
            prod.multiply(y);
            ans.add(prod);
        }
        return ans;
    }
}
class Term {
    int coeff;
    List<String> vars;

    public Term(int a, List<String> c) {
        this.coeff = a;
        vars = new LinkedList<>();
        vars.addAll(c);
    }
    public String getKey() {
        StringBuilder b = new StringBuilder();
        Collections.sort(vars);
        for(String x: vars) {
            b.append('*');
            b.append(x);
        }
        return b.toString();
    }
    public void multiply(Term that) {
        this.coeff *= that.coeff;
        if(this.coeff == 0) vars.clear();
        else this.vars.addAll(that.vars);
    }
    public Term clone() {
        return new Term(coeff, vars);
    }
}
```
