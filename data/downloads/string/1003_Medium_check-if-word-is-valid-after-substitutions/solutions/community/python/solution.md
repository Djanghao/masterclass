# [Python] Stack O(N) Solution with Explanation

**Author:** mokar2001
**Votes:** 21
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/266550/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/266550/)

---

#### Explanation :
1. If length of S be less than 3, absolutely it doesn't contains any *'abc'*
2. Create a Stack and call it **Check**.
3. If the last three character of **Check** be *'abc'*, remove them.*(pop, pop, pop)*
4. So on.
5. if stack be empty, return true otherwise false.

#### Example 1 :
`Input: "aabcbc"`
1. Check = [a]
2. Check = [a, a]
3. Check = [a, a, b]
4. Check = [a, **a, b, c**], Remove a,b,c (pop, pop , pop), Then Check = [a]
5. Check = [a, b]
6. Check = [**a, b, c**], Remove a,b,c (pop, pop , pop), Then Check = []
7. Check is Empty, Return `True`.

#### Example 2 :
`Input: "abcaba"`
1. Check = [a]
2. Check = [a, b]
3. Check = [a, **a, b, c**], Remove a,b,c (pop, pop , pop), Then Check = [a]
4. Check = [a, b]
5. Check = [a, b, a]
6. Check is not Empty, Return `False`.

#### Code : 
```
def isValid(self, S: str) -> bool:
    if len(S)<3:
        return False
    check=[]
    for c in S:
        check.append(c)
        if len(check)>=3:
            if check[-1]=='c' and check[-2]=='b' and check[-3]=='a': #three last characters be a,b,c
                check.pop()
                check.pop()
                check.pop()
    return not check '''means check == []'''
```