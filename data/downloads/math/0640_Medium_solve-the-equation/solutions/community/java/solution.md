# Solution

**Author:** deleted_user
**Votes:** 4
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/3418040/](https://leetcode.com/problems/solve-the-equation/solutions/3418040/)

---

```C++ []
class Solution {
 public:
  string solveEquation(string equation) {
    const string lhsEquation = equation.substr(0, equation.find('='));
    const string rhsEquation = equation.substr(equation.find('=') + 1);
    const auto& [lhsCoefficient, lhsConstant] = calculate(lhsEquation);
    const auto& [rhsCoefficient, rhsConstant] = calculate(rhsEquation);
    const int coefficient = lhsCoefficient - rhsCoefficient;
    const int constant = rhsConstant - lhsConstant;

    if (coefficient == 0 && constant == 0)
      return "Infinite solutions";
    if (coefficient == 0 && constant != 0)
      return "No solution";
    return "x=" + to_string(constant / coefficient);
  }
 private:
  pair<int, int> calculate(const string& s) {
    int coefficient = 0;
    int constant = 0;
    int num = 0;
    int sign = 1;

    for (int i = 0; i < s.length(); ++i) {
      const char c = s[i];
      if (isdigit(c))
        num = num * 10 + (c - '0');
      else if (c == '+' || c == '-') {
        constant += sign * num;
        sign = c == '+' ? 1 : -1;
        num = 0;
      } else {
        if (i > 0 && num == 0 && s[i - 1] == '0')
          continue;
        coefficient += num == 0 ? sign : sign * num;
        num = 0;
      }
    }
    return {coefficient, constant + sign * num};
  }
};
```

```Python3 []
class Solution:
    def solveEquation(self, equation):
        x = a = 0
        side = 1
        for eq, sign, num, isx in re.findall('(=)|([-+]?)(\\d*)(x?)', equation):
            if eq:
                side = -1
            elif isx:
                x += side * int(sign + '1') * int(num or 1)
            elif num:
                a -= side * int(sign + num)
        return 'x=%d' % (a / x) if x else 'No solution' if a else 'Infinite solutions'
```

```Java []
class Solution {
    public String solveEquation(String equation) {
        int x1 = 0,x2 = 0;
        int sum1=0,sum2=0;
        int sign = 1;
        int i=0;
        boolean flag = true;
        for(i=0;i<equation.length();i++){
            char ch = equation.charAt(i);
            if(ch == '=') flag = false;
            else if(ch == 'x'){
                if(flag) x1 += sign;
                else x2 += sign;
                sign = 1;
            }
            else if(Character.isDigit(ch)){
                int val =0;
                while(i<equation.length() && Character.isDigit(equation.charAt(i))){
                    val = val*10 + Character.getNumericValue(equation.charAt(i)); 
                    i++;
                }
                i--;
                if(i<equation.length()-1 && equation.charAt(i+1) == 'x'){
                    i++;
                    if(flag) x1+=sign * val;
                    else x2 += sign * val;
                }
                else{
                    if(flag)sum1 += sign * val;
                    else sum2 += sign * val;
                }
                sign = 1;
            }else if(ch == '-') sign = -1;
        }
        StringBuilder sb = new StringBuilder();
        if(x1==x2 && sum1 == sum2) return "Infinite solutions";
        else if(sum1 == 0 && sum2 == 0) return "x=0";
        else if(x1 == x2 && ((sum1!=0)||(sum2!=0))) return "No solution";
        int sum=0;
        int x=0;
        if(x1>x2){
            x = x1 - x2;
            sum = sum2-sum1;
            sum = sum/x;
        }
        else if(x2>x1){
            x = x2 - x1;
            sum = sum1-sum2;
            sum = sum/x;
        }
        sb.append("x=");
        sb.append(sum);
        return sb.toString();
    }
}
```
