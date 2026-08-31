# C++, Two iterators, beats 98.8%

**Author:** hongta
**Votes:** 2
**Link:** [https://leetcode.com/problems/flatten-2d-vector/solutions/3353331/](https://leetcode.com/problems/flatten-2d-vector/solutions/3353331/)

---

# Intuition
When using two iterators, some edge cases need to be handled. Check the comments.

# Code
```
class Vector2D {
public:
    vector<vector<int>>::iterator i, i_end;
    // We don't need j_end since we can get it from i->end() if necessary.
    vector<int>::iterator j;
    Vector2D(vector<vector<int>>& vec) {
        i = vec.begin();
        i_end = vec.end();
        // Only assign j if Vector2D is not empty.
        if (i != i_end) j = i->begin();
    }
    
    int next() {
        // Move j to the desired point with `hasNext()`.
        hasNext();
        return *(j++);
    }
    
    bool hasNext() {
        // Keep iterating before reaching the end of the 2D vector.
        // Keep iterating when a vector is empty.
        while (i != i_end && j == i->end()) {
            ++i;
            // When eaching the end of the 2D vector, we don't assign j anymore.
            if (i != i_end) j = i->begin();
        }
        return i != i_end;
    }
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * Vector2D* obj = new Vector2D(vec);
 * int param_1 = obj->next();
 * bool param_2 = obj->hasNext();
 */
```