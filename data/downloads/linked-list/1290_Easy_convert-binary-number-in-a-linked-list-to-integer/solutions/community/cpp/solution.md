# [C++] Recursive vs. Iterative approach, both around 100% Time, 100% space

**Author:** Ajna
**Votes:** 36
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/732045/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/732045/)

---

I thought this was an excellent training ground to compare the 2 approaches: simple problem, so our hands are free from some complex bits of logic, little to write, pretty straightforward approach.

The recursive one was probably more fun, as it is often the case with straight one-liners; notice that in order for it to work we needed to modify the function signature, adding the accumulator variable `res`, defaulting it to `0` and returning it when `head` is `NULL` - ie: we are done:

```cpp
class Solution {
public:
    int getDecimalValue(ListNode* head, int res = 0) {
        return head ? getDecimalValue(head->next, res * 2 + head->val) : res;
    }
};
```

The iterative one is probably what your compiler would turn a tail recursive approach into anyway; IMHO is slightly less elegant once you expand the logic to work step-by-step, but it might also be more understandable for beginners: I moved the declaration of `res` from the signature of the function to its body, wrapped the whole advancing logic into a `while` loop and finally returned `res`:

```cpp
class Solution {
public:
    int getDecimalValue(ListNode* head) {
        int res = 0;
        while (head) {
            res = res * 2 + head->val;
            head = head->next;
        }
        return res;
    }
};
```