# No recursive and with stack, simple

**Author:** lwmqwer
**Votes:** 0
**Link:** [https://leetcode.com/problems/mini-parser/solutions/5116505/](https://leetcode.com/problems/mini-parser/solutions/5116505/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * type NestedInteger struct {
 * }
 *
 * // Return true if this NestedInteger holds a single integer, rather than a nested list.
 * func (n NestedInteger) IsInteger() bool {}
 *
 * // Return the single integer that this NestedInteger holds, if it holds a single integer
 * // The result is undefined if this NestedInteger holds a nested list
 * // So before calling this method, you should have a check
 * func (n NestedInteger) GetInteger() int {}
 *
 * // Set this NestedInteger to hold a single integer.
 * func (n *NestedInteger) SetInteger(value int) {}
 *
 * // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 * func (n *NestedInteger) Add(elem NestedInteger) {}
 *
 * // Return the nested list that this NestedInteger holds, if it holds a nested list
 * // The list length is zero if this NestedInteger holds a single integer
 * // You can access NestedInteger's List element directly if you want to modify it
 * func (n NestedInteger) GetList() []*NestedInteger {}
 */
func deserialize(s string) *NestedInteger {
	stack := []NestedInteger{NestedInteger{}}
	for i := 0; i < len(s); {
		if s[i] == ',' {
			i++
			continue
		}
		if s[i] == '[' {
			stack = append(stack, NestedInteger{})
			i++
			continue
		} else if s[i] == ']' {
			s := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			stack[len(stack)-1].Add(s)
			i++
			continue
		}
		if s[i] == '-' || (s[i] >= '0' && s[i] <= '9')  {
			var temp int
            var minus bool
            if s[i] == '-' {
                minus = true
                i++
            }
			for i < len(s) && s[i] != ',' && s[i] != ']' {
				temp = temp*10 + int(s[i]-'0')
				i++
			}
            if minus {
                temp = -temp
            }
            var new NestedInteger
            new.SetInteger(temp)
			stack[len(stack)-1].Add(new)
		}

	}
	return stack[0].GetList()[0]
}
```