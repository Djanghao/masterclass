# Simple Ruby String Replace in one line

**Author:** rajkamallashkari
**Votes:** 2
**Link:** [https://leetcode.com/problems/push-dominoes/solutions/2053804/](https://leetcode.com/problems/push-dominoes/solutions/2053804/)

---

One line solution:
```
def push_dominoes(dominoes)
    loop { return dominoes if dominoes == dominoes = dominoes.gsub('R.L', '|').gsub('.L', 'LL').gsub('R.', 'RR').gsub('|', 'R.L') }
end
```

Can also write in much more readable form:
```
def push_dominoes(dominoes)
    loop { return dominoes if dominoes == dominoes = execute(dominoes) }
end

def execute(dominoes)
    dominoes
    .gsub('R.L', '|')
    .gsub('.L', 'LL')
    .gsub('R.', 'RR')
    .gsub('|', 'R.L')
end
```
