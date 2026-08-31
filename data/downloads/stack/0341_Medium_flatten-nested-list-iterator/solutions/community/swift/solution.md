# ✅ Much Easier ✅ Simple Approach ✅ Beats 100% ✅ Easy To Understand

**Author:** millenium103
**Votes:** 20
**Link:** [https://leetcode.com/problems/flatten-nested-list-iterator/solutions/4188012/](https://leetcode.com/problems/flatten-nested-list-iterator/solutions/4188012/)

---

![Screenshot 2023-10-20 075730.png](./images/0.png)

# YouTube Video Explanation
[https://youtu.be/2xje3jqk72w](https://youtu.be/2xje3jqk72w)

\uD83D\uDD25 ***Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.***

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

***Subscribe Goal: 100 Subscribers
Current Subscribers: 84***

# Intuition:
The Nested Iterator problem requires us to flatten a nested list structure and provide a simple way to iterate through the flattened elements. This is a common task in programming when dealing with data structures. In this video, we will discuss the problem, the provided interface, and implement the solution.

# Approach:
We'll create a `NestedIterator` class that initializes with a nested list. To do this, we will use a recursive approach to traverse the nested list, adding integers to a flattened list. We can then use a simple iterator to traverse this flattened list, providing the `next` and `hasNext` methods as required.

# Pseudocode:
1. Initialize the iterator with the nested list.
2. Create an empty list `res`.
3. While the iterator has more elements, append the next element to the end of `res`.
4. Return `res` as the flattened list.

# Code (For JAVA):
Other language codes are mentioned below.

```java
public class NestedIterator implements Iterator<Integer> {

    private List<Integer> flattenedList;
    private Iterator<Integer> it;

    public NestedIterator(List<NestedInteger> nestedList) {
        flattenedList = new LinkedList<Integer>();
        flatten(nestedList);
        it = flattenedList.iterator();
    }

    private void flatten(List<NestedInteger> nestedList) {
        for (NestedInteger i : nestedList) {
            if (i.isInteger()) {
                flattenedList.add(i.getInteger());
            } else {
                flatten(i.getList());
            }
        }
    }

    @Override
    public Integer next() {
        return it.next();
    }

    @Override
    public boolean hasNext() {
        return it.hasNext();
    }
}

// Usage example:
// NestedIterator i = new NestedIterator(nestedList);
// while (i.hasNext()) {
//     v[f()] = i.next();
// }
```

Complexity Analysis:
- Time complexity: Initializing the iterator and flattening the nested list takes O(N), where N is the total number of nested elements. Both `next` and `hasNext` methods run in O(1) time.
- Space complexity: We use additional space to store the flattened list, resulting in O(N) space complexity, where N is the total number of nested elements in the list.

Flattening nested structures is a fundamental operation that comes up frequently in programming, so understanding how to implement it efficiently is a valuable skill.

# Code in Other Languages

<iframe src="https://leetcode.com/playground/NknVTKbW/shared" frameBorder="0" width="600" height="600"></iframe>

---

![upvote1.jpeg](./images/1.jpeg)