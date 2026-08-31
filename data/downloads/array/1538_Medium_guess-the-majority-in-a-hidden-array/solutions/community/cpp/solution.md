# Java C C++, two Parts, step-by-step comments with ideas

**Author:** jsyeh
**Votes:** 3
**Link:** [https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solutions/3470257/](https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solutions/3470257/)

---

# Intuition
1. Idea: Keep/Maintain 3 Points of Contact, only 1 Point Move
2. Boolean array `same[i]`:  if `a[0]` and `a[i]` are the same
2. Part 1: The first 5 elements (combination -- not easy)
    - `same[0]` : of course, `a[0]` and `a[0]` are the same
    - `same[1]` : keep <ins>2,3,4</ins> \u27A1\uFE0F find __1__
    - `same[2]` : keep <ins>1,3,4</ins> \u27A1\uFE0F find __2__
    - `same[3]` : keep <ins>1,2,4</ins> \u27A1\uFE0F find __3__
    - `same[4]` : find in Part 2
3. Part 2: The others (use for loop -- easy)
    - int Q0 = query(__0__, <ins>1,2,3</ins>);
    - for(int i=4; i<N; i++)
        - `same[i]` = (Q0 == query(<ins>1,2,3,</ins> __i__));
4. Finally: Vote majority from `same[i]`

## Part 1:
### 1-1: keep 2,3,4 \u27A1\uFE0F find `same[1]`
|a[0] |a[1] |a[2] |a[3] |a[4] | `query(a,b,c,d)`|
| --- | --- | --- | --- | --- | --- |
|  0  |     |  2  |  3  |  4  | `query(0,2,3,4)`|
|     |  1  |  2  |  3  |  4  | `query(1,2,3,4)`|
|     |__find__ |<ins>keep</ins>|<ins>keep</ins> |<ins>keep</ins>|     |


### 1-2: keep 1,3,4 \u27A1\uFE0F find `same[2]`
|a[0] |a[1] |a[2] |a[3] |a[4] | `query(a,b,c,d)`|
| --- | --- | --- | --- | --- | --- |
|  0  |  1  |     |  3  |  4  | `query(0,1,3,4)`|
|     |  1  |  2  |  3  |  4  | `query(1,2,3,4)`|
|     |<ins>keep</ins>|__find__ |<ins>keep</ins> |<ins>keep</ins> |     |

### 1-3: keep 1,2,4 \u27A1\uFE0F find `same[3]`
|a[0] |a[1] |a[2] |a[3] |a[4] | `query(a,b,c,d)`|
| --- | --- | --- | --- | --- | --- |
|  0  |  1  |  2  |     |  4  | `query(0,1,2,4)`|
|     |  1  |  2  |  3  |  4  | `query(1,2,3,4)`|
|     |<ins>keep</ins>|<ins>keep</ins>|__find__ |<ins>keep</ins>|     |

## Part 2: keep 1,2,3 \u27A1\uFE0F find `same[i]`
|a[0] |a[1] |a[2] |a[3] | ... |a[i] | `query(a,b,c,d)`|
| --- | --- | --- | --- | --- | --- | --- |
|  0  |  1  |  2  |  3  |     |     |`query(0,1,2,3)`|
|     |  1  |  2  |  3  |     |  i  |`query(1,2,3,i)`|
|     |<ins>keep</ins>|<ins>keep</ins>|<ins>keep</ins>|     |__find__|     |


# Code
<iframe src="https://leetcode.com/playground/bcbjm8hk/shared" frameBorder="0" width="800" height="1500"></iframe>