# Go solution 100% 100%

**Author:** slightly-anonymous
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-rational-numbers/solutions/5573022/](https://leetcode.com/problems/equal-rational-numbers/solutions/5573022/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func isRationalEqual(s string, t string) bool {
    iter1, iter2 := getIter(s), getIter(t)
    for i:=0; i < 24; i++ {
        a,b := iter1.next(), iter2.next()
        if a == b { continue }
        if b > a {
            a,b = b, a
            iter1, iter2 = iter2, iter1
        }
        if a-b != 1 {
            return false
        }
        for i:=0; i < 24; i++ {
            if iter1.next() != byte('0') || iter2.next() != byte('9') {
                return false
            }
        }
        return true
    }
    return true
}

type iterator struct {
    nonRepeating string
    repeating string
    i int
}

func (iter *iterator) next() byte {
    iter.i++
    if iter.i < len(iter.nonRepeating) {
        if iter.nonRepeating[iter.i] == byte('.') {
            iter.i++
        }
    }
    if iter.i < len(iter.nonRepeating) {
        return iter.nonRepeating[iter.i]
    }
    if len(iter.repeating) == 0 {
        return byte('0')
    }
    index := (iter.i - len(iter.nonRepeating)) % len(iter.repeating)
    return iter.repeating[index]
}

func getIter(s string) *iterator {
    repeatSplit := strings.Split(s, "(")
    if len(repeatSplit) == 1 {
        return &iterator {
            s,"",-1,
        }
    }
    repeat := repeatSplit[1][:len(repeatSplit[1])-1]
    return &iterator {
        repeatSplit[0],
        repeat,
        -1,
    }
}
```