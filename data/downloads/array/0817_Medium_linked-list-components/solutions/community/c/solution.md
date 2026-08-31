# Single check per element

**Author:** votrubac
**Votes:** 17
**Link:** [https://leetcode.com/problems/linked-list-components/solutions/123879/](https://leetcode.com/problems/linked-list-components/solutions/123879/)

---

We increase our counter when we start a new connection:
- current item is in the list, and
- previous item is not (!connected).

Note that this approach allows checking the set just once per an element.

**C++**
```cpp
int numComponents(ListNode* h, vector<int>& nums) {
    unordered_set<int> s(begin(nums), end(nums));
    int res = 0, connected = 0;
    for (; h != nullptr; h = h->next) {
        if (s.count(h->val)) {
            res += !connected;
            connected = true;
        }
        else
            connected = false;
    }
    return res;
}
```