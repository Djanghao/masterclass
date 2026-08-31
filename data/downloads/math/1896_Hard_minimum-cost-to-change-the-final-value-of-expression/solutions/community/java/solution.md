# Shunting yard algorithm |  Kind of Annoying Problem Though

**Author:** Student2091
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/2333689/](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/2333689/)

---

Did amazon really give such interview problems? I don't understand what they are testing the candidates. 

It is not a hard problem, but the implementation can be annoying. 

I based my implementation on https://en.wikipedia.org/wiki/Shunting_yard_algorithm in which we will have 2 stacks.
1 for operands and 1 for operators.

Only process the operands w/ its operator when we encounter an operator that has a higher precedence or same precedence & left-associative.
On top of that, we also have this: **ans[0] = value, ans[1] = min operations needed to change that value.**
```Java
    private int[] check(char op, int[] r, int[] l){
        int[] ans;
        int rval = r[0], rcost = r[1];
        int lval = l[0], lcost = l[1];
        if (op == '|' && rval == '0' && lval == '0'){
            ans = new int[]{'0', Math.min(rcost, lcost)};
        }else if (op == '|' && rval == '1' && lval == '0'){
            ans = new int[]{'1', 1};
        }else if (op == '|' && rval == '0' && lval == '1'){
            ans = new int[]{'1', 1};
        }else if (op == '|' && rval == '1' && lval == '1'){
            ans = new int[]{'1', 1 + Math.min(rcost, lcost)};
        }else if (op == '&' && rval == '0' && lval == '0'){
            ans = new int[]{'0', 1 + Math.min(rcost, lcost)};
        }else if (op == '&' && rval == '1' && lval == '0'){
            ans = new int[]{'0', 1};
        }else if (op == '&' && rval == '0' && lval == '1'){
            ans = new int[]{'0', 1};
        }else{ // &, 1, 1
            ans = new int[]{'1', Math.min(rcost, lcost)};
        }
        return ans;
    }
```
#### Java
#### Time Complexity O(n)
#### Space O(n)
```Java
class Solution {
    Deque<int[]> stack = new ArrayDeque<>();
    Deque<Character> opStack = new ArrayDeque<>();
    public int minOperationsToFlip(String expression) {
        for (char ch : expression.toCharArray()){
            if (ch == '('){
                opStack.push(ch);
            }else if (ch == ')'){
                while(opStack.peek()!='('){
                    go();
                }
                opStack.pop(); // remove '('
            }else if (ch == '&' || ch == '|'){
                while(!opStack.isEmpty() && opStack.peek() != '('){
                    go();
                }
                opStack.push(ch);
            }else{ // num
                stack.push(new int[]{ch, 1});
            }
        }
        while(!opStack.isEmpty()){
            go();
        }

        return stack.peek()[1];
    }
    
    private void go(){
        stack.push(check(opStack.pop(), stack.pop(), stack.pop()));
    }

    private int[] check(char op, int[] r, int[] l){
        int[] ans;
        int rval = r[0], rcost = r[1];
        int lval = l[0], lcost = l[1];
        if (op == '|' && rval == '0' && lval == '0'){
            ans = new int[]{'0', Math.min(rcost, lcost)};
        }else if (op == '|' && rval == '1' && lval == '0'){
            ans = new int[]{'1', 1};
        }else if (op == '|' && rval == '0' && lval == '1'){
            ans = new int[]{'1', 1};
        }else if (op == '|' && rval == '1' && lval == '1'){
            ans = new int[]{'1', 1 + Math.min(rcost, lcost)};
        }else if (op == '&' && rval == '0' && lval == '0'){
            ans = new int[]{'0', 1 + Math.min(rcost, lcost)};
        }else if (op == '&' && rval == '1' && lval == '0'){
            ans = new int[]{'0', 1};
        }else if (op == '&' && rval == '0' && lval == '1'){
            ans = new int[]{'0', 1};
        }else{ // &, 1, 1
            ans = new int[]{'1', Math.min(rcost, lcost)};
        }
        return ans;
    }
}
```