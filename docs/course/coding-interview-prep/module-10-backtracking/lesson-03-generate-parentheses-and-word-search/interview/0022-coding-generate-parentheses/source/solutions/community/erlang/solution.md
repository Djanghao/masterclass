# Erlang, Go Solutions, Recursive, For Loop (DFS)

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/2899060/](https://leetcode.com/problems/generate-parentheses/solutions/2899060/)

---

#### Erlang

```erlang
-spec generate_parenthesis(N :: integer()) -> [unicode:unicode_binary()].
generate_parenthesis(N) ->
  StringRep = generate_parenthesis(0, 0, N * 2, "", []),
  strings_to_unicode_binaries(StringRep).

generate_parenthesis(N, N, 0, P, All) ->
    [P|All];
generate_parenthesis(N, M, 0, P, All) ->
    [];
generate_parenthesis(O, C, N, P, All) when O =:= C ->
    generate_parenthesis(O+1, C, N-1, P ++ "(", All);
generate_parenthesis(O, C, N, P, All) when O > C ->
    All2 = generate_parenthesis(O+1, C, N-1, P ++ "(", All),
    case All2 of
        [] ->
            generate_parenthesis(O, C+1, N-1, P ++ ")", All);
        _ ->
            generate_parenthesis(O, C+1, N-1, P ++ ")", All) ++ All2
    end.

strings_to_unicode_binaries(Strings) ->
    [list_to_binary(String) || String <- Strings].
```

#### Recursive

```
func generateParenthesis(n int) []string {
    return generate(n, n, "", []string{})
}

func generate(left, right int, current string, all []string) []string {
    if left > right {
        return nil
    }
    
    if left == 0 && right == 0 {
        all = append(all, current)
        return all
    }
    
    lResult, rResult := []string{}, []string{}
    if left > 0 {
        lResult = generate(left - 1, right, current + "(", all)
    }
    
    if right > 0 {
        rResult = generate(left, right - 1, current + ")", all)
    }
    
    return append(lResult, rResult...)
}
```

#### For Loop

```
type parenCombo struct {
    str string
    left int
    right int
}

func generateParenthesis(n int) []string {
    allCombos := []string{}
    
    stack := []*parenCombo{
        {
            str: "(",
            left: n - 1,
            right: n,
        },
    }
    
    for len(stack) > 0 {
        popped := stack[len(stack)-1]
        stack = stack[:len(stack)-1]
        
        if popped.left > popped.right {
            continue
        }
        
        if popped.left == 0 && popped.right == 0 {
            allCombos = append(allCombos, popped.str)
        }
        
        if popped.left > 0 {
            newCombo := &parenCombo{
                str: popped.str + "(",
                left: popped.left-1,
                right: popped.right,
            }
            stack = append(stack, newCombo)
        }
        
        if popped.right > 0 {
            newCombo := &parenCombo{
                str: popped.str + ")",
                left: popped.left,
                right: popped.right-1,
            }
            stack = append(stack, newCombo)
        }
    }
    
    return allCombos
}
```