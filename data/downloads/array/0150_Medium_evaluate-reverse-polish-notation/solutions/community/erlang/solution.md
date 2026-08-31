# Erlang, Go Solutions

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/2981979/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/2981979/)

---

#### Reverse Polish Notation Solution

#### Erlang

```erlang
-spec eval_rpn(Tokens :: [unicode:unicode_binary()]) -> integer().
eval_rpn(Tokens) ->
    eval_rpn(Tokens, []).

eval_rpn([], [Result]) -> Result;
eval_rpn([<<"+">>|Rest], [X, Y|T]) ->
    eval_rpn(Rest, [Y + X|T]);
eval_rpn([<<"-">>|Rest], [X, Y|T]) ->
    eval_rpn(Rest, [Y - X|T]);
eval_rpn([<<"*">>|Rest], [X, Y|T]) ->
    eval_rpn(Rest, [Y * X|T]);
eval_rpn([<<"/">>|Rest], [X, Y|T]) ->
    eval_rpn(Rest, [Y div X|T]);
eval_rpn([H|Rest], Stack) ->
    eval_rpn(Rest, [binary_to_integer(H)|Stack]).
```

---

#### Go

```go
func evalRPN(tokens []string) int {
    stack := []int{}
    for _, t := range tokens {
        if isOperator(t) {
            y, x := stack[len(stack)-1], stack[len(stack)-2]
            stack = stack[:len(stack)-2]
            switch t {
            case "+":
                stack = append(stack, x + y)
            case "-":
                stack = append(stack, x - y)
            case "*":
                stack = append(stack, x * y)
            case "/":
                stack = append(stack, x / y)
            }
        } else {
            i, _ := strconv.Atoi(t)
            stack = append(stack, i)
        }
    }
    return stack[0]
}

func isOperator(s string) bool {
    if s == "+" || s == "-" || s == "*" || s == "/" {
        return true
    }
    return false
}
```