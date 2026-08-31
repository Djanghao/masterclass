# JS, Python, Java, C++ | Short Solution w/ Explanation

**Author:** sgallivan
**Votes:** 32
**Link:** [https://leetcode.com/problems/advantage-shuffle/solutions/1125217/](https://leetcode.com/problems/advantage-shuffle/solutions/1125217/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The general principle here is easy to understand: for each value in **B**, we ideally want to pick a number from **A** that is *just* higher to match up against it. The naive way to do this would require sorting **A**, then iterating through it until we find the ideal number, then removing that number from **A** and moving it to the answer array (**ans**) at a **time complexity** of **O(n^2)**.

We could employ a **binary search** instead of a straight iteration, which would drop the overall time complexity to **O(n * log n)**, matching the sort time complexity. The issue that remains, however, is that getting rid of elements of **A** can be time-consuming. (*Note: This method actually works well in Python; see the code below.*)

Instead, if we had a sorted **B** as well, we could just match up the values very easily in descending order. If the largest remaining value of **A** is larger than the largest remaining value of **B**, then use it, otherwise, use the smallest remaining value of **A**, which is the least useful.

Since we need to return our answer matched up agains the original order of **B**, however, we can't just sort **B**. We can, however, create an **index order lookup array** and sort it in reference to the values in **B**, then use it as a bridge between the sorted **A** and unsorted **B**.

Once we've finished iterating, we can **return ans**.

---

#### ***Implementation:***

Javascript as usual should take advantage of the faster typed arrays here.

Python can convert **A** to a **deque** when it sorts to speed up the removal of elements from both ends. (Thanks [**@gizmo707**](https://leetcode.com/gizmo707)!)

As noted above, Python also has a very short, competitively performant version using **bisect** and without needing to sort **B**.

Java will have to use a basic sort on **A**, as it's a primitive array, but we can make **ord** an Integer array so that we can use a **lambda** sort. That means we'll have to swap **i** and **j**.

---

#### ***Javascript Code:***

The best result for the code below is **160ms / 47.8MB** (beats 100% / 70%).
```javascript
var advantageCount = function(A, B) {
    let ord = Uint16Array.from({length:B.length}, (_,i) => i), 
        ans = new Uint32Array(B.length),
        i = 0, j = B.length - 1
    ord.sort((a,b) => B[b] - B[a])
    A.sort((a,b) => b - a)
    for (let ix of ord)
        ans[ix] = A[i] > B[ix] ? A[i++] : A[j--]
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **308ms / 16.7MB** (beats 100% / 99%).
```python
class Solution:
    def advantageCount(self, A: List[int], B: List[int]) -> List[int]:
        n = len(A)
        order = sorted(range(n), key=lambda x: B[x], reverse=True)
        ans = [0] * n
        A = deque(sorted(A))
        for ix in order:
            ans[ix] = A.pop() if A[-1] > B[ix] else A.popleft()
        return ans
```

---

#### ***Python Code w/ Binary Search:***

The best result for the code below is **344ms / 16.6MB** (beats 88% / 100%).
```python
class Solution:
    def advantageCount(self, A: List[int], B: List[int]) -> List[int]:
        ans, A = [], sorted(A)
        for num in B:
            val = bisect_right(A, num)
            ans.append(A.pop(0) if val == len(A) else A.pop(val))
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **25ms / 41.3MB** (beats 100% / 85%).
```java
class Solution {
    public int[] advantageCount(int[] A, int[] B) {
        Integer[] ord = new Integer[B.length];
        int[] ans = new int[A.length];
        for (int i = 0; i < B.length; i++) ord[i] = i;
        Arrays.sort(ord, (a,b) -> Integer.compare(B[b], B[a]));
        Arrays.sort(A);
        int i = 0, j = B.length - 1;
        for (int ix : ord)
            ans[ix] = A[j] > B[ix] ? A[j--] : A[i++];
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **60ms / 33.4MB** (beats 99% / 97%).
```c++
class Solution {
public:
    vector<int> advantageCount(vector<int>& A, vector<int>& B) {
        vector<int> ord = vector<int>(B.size()), ans = vector<int>(A.size());
        for (int i = 0; i < B.size(); i++) ord[i] = i;
        sort(ord.begin(), ord.end(), [&](int a, int b) {return B[a] > B[b];});
        sort(A.begin(), A.end(), greater<>());
        int i = 0, j = B.size() - 1;
        for (int ix : ord)
            ans[ix] = A[i] > B[ix] ? A[i++] : A[j--];
        return ans;
    }
};
```