# Binary search does not work - counterexample added

**Author:** przemysaw2
**Votes:** 19
**Link:** [https://leetcode.com/problems/split-message-based-on-limit/solutions/2819118/](https://leetcode.com/problems/split-message-based-on-limit/solutions/2819118/)

---

# Counter example
```
"abbababbbaaa aabaa a"
8
```

The above test can be split into 7 tokens, can't be split into 10 tokens and it can be split again into 11 tokens. This problem does not have the BS property.

Some of the incorrect BS solutions passed these tests, because of the order in which they check the values.

If they hit 11 first, they detect, it is possible, so they go to the left and they find the 7 solution later.

If they hit 10 first, they detect it is impossible and they go right, finding the 11 solution. It is possible to design the test cases to kill all BS solutions though.