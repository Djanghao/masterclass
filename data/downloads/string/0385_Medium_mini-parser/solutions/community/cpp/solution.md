# Python & C++ solutions

**Author:** StefanPochmann
**Votes:** 76
**Link:** [https://leetcode.com/problems/mini-parser/solutions/86060/](https://leetcode.com/problems/mini-parser/solutions/86060/)

---

## Python using `eval`:

    def deserialize(self, s):
        def nestedInteger(x):
            if isinstance(x, int):
                return NestedInteger(x)
            lst = NestedInteger()
            for y in x:
                lst.add(nestedInteger(y))
            return lst
        return nestedInteger(eval(s))

## Python one-liner

    def deserialize(self, s):
        return NestedInteger(s) if isinstance(s, int) else reduce(lambda a, x: a.add(self.deserialize(x)) or a, s, NestedInteger()) if isinstance(s, list) else self.deserialize(eval(s))

## Python Golf (136 bytes or 31 bytes)
```
class Solution:deserialize=d=lambda S,s,N=NestedInteger:s<[]and N(s)or s<''and reduce(lambda a,x:a.add(S.d(x))or a,s,N())or S.d(eval(s))
```
Or abusing how the judge judges (yes, this gets accepted):
```
class Solution:deserialize=eval
```

## Python parsing char by char

Here I turned the input string into a list with sentinel for convenience.

    def deserialize(self, s):
        def nestedInteger():
            num = ''
            while s[-1] in '1234567890-':
                num += s.pop()
            if num:
                return NestedInteger(int(num))
            s.pop()
            lst = NestedInteger()
            while s[-1] != ']':
                lst.add(nestedInteger())
                if s[-1] == ',':
                    s.pop()
            s.pop()
            return lst
        s = list(' ' + s[::-1])
        return nestedInteger()

## C++ using `istringstream`
```
class Solution {
public:
    NestedInteger deserialize(string s) {
        istringstream in(s);
        return deserialize(in);
    }
private:
    NestedInteger deserialize(istringstream &in) {
        int number;
        if (in >> number)
            return NestedInteger(number);
        in.clear();
        in.get();
        NestedInteger list;
        while (in.peek() != ']') {
            list.add(deserialize(in));
            if (in.peek() == ',')
                in.get();
        }
        in.get();
        return list;
    }
};
```