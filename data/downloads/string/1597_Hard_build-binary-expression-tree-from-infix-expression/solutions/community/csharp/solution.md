# C# Stack and '>' overloading

**Author:** clewBy
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/solutions/2798173/](https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/solutions/2798173/)

---

```
public class Solution {
    public Node ExpTree(string s) {
        Stack<Node> operands = new();
        Stack<Operator> operators = new();

        foreach(char ch in s){
            if(Char.IsDigit(ch)){
                operands.Push(new Node(ch));
            } else if(ch == '('){
                operators.Push(new Operator(ch));
            } else if(ch == ')'){
                while(operators.Peek().val != '(')
                    operands.Push(GetNode(operands, operators));
                operators.Pop();
            } else{
                Operator op = new Operator(ch);
                while(operators.Count > 0 && operators.Peek() > op)
                    operands.Push(GetNode(operands, operators));
                operators.Push(op);
            }
        }
        while(operators.Count > 0)
            operands.Push(GetNode(operands, operators));
        return operands.Peek();
    }

    private Node GetNode(Stack<Node> operands, Stack<Operator> operators){
        Node right = operands.Pop();
        return new Node(operators.Pop().val, operands.Pop(), right);
    }

    class Operator{
        public char val {get; private set;}
        public Operator(char val){
            this.val = val;
        }
        public static bool operator > (Operator op1, Operator op2){
            if(op1.val == '(') return false;
            return op1.val == '*' || op1.val == '/' || op2.val == '+' || op2.val == '-';
        }
        public static bool operator < (Operator op1, Operator op2){
            if(op1.val == '(') return true;
            return (op1.val == '+' || op1.val == '-') && (op2.val == '*' || op2.val == '/');
        }
    }
}
```