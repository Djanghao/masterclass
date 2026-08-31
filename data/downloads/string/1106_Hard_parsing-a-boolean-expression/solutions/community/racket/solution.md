# quick and dirty eval

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5939367/](https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5939367/)

---

# Intuition
Do some `string-replace` operations to get the string into an s-expression racket recognizes. Then run `eval` on it. But on leetcode, we need to do something extra to be able to run `eval`. That's the purpose of the first two definitions.

# Code
```racket []
(define-namespace-anchor a)
(define ns (namespace-anchor->namespace a)) 

(define (parse-bool-expr expr)
  (let ([s (string-replace
            (string-replace
             (string-replace
              (string-replace
               (string-replace
                (string-replace expr "&(" "(and ")
                "|(" "(or ")
               "t" "#t")
              "," " ")
             "!(" "(not ")
            "f" "#f")])
    (eval (read (open-input-string s)) ns)))
```