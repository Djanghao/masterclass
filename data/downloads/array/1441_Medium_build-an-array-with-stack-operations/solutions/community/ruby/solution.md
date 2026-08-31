# Ruby solution

**Author:** fredo30400
**Votes:** 1
**Link:** [https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4245914/](https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4245914/)

---



# Code
```
def build_array(target, n)
    stack,out = [],[]
    (1..n).each{ |i|
        out << "Push"
        !target.include?(i) ? out << "Pop" : stack << i
        return out if stack==target
    }
end
```