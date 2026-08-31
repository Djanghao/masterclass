# Real iterator in Python, Java, C++

**Author:** StefanPochmann
**Votes:** 640
**Link:** [https://leetcode.com/problems/flatten-nested-list-iterator/solutions/80146/](https://leetcode.com/problems/flatten-nested-list-iterator/solutions/80146/)

---

In my opinion an iterator shouldn't copy the entire data (which some solutions have done) but just iterate over the original data structure.

I keep the current progress in a stack. My `hasNext` tries to find an integer. My `next` returns it and moves on. I call `hasNext` in `next` because `hasNext` is optional. Some user of the iterator might call only `next` and never `hasNext`, e.g., if they know how many integers are in the structure or if they want to handle the ending with exception handling.

---

**Python**

Using a stack of [list, index] pairs.

    class NestedIterator(object):
    
        def __init__(self, nestedList):
            self.stack = [[nestedList, 0]]
    
        def next(self):
            self.hasNext()
            nestedList, i = self.stack[-1]
            self.stack[-1][1] += 1
            return nestedList[i].getInteger()
                
        def hasNext(self):
            s = self.stack
            while s:
                nestedList, i = s[-1]
                if i == len(nestedList):
                    s.pop()
                else:
                    x = nestedList[i]
                    if x.isInteger():
                        return True
                    s[-1][1] += 1
                    s.append([x.getList(), 0])
            return False

---

**Java**

Using a stack of ListIterators.

    public class NestedIterator implements Iterator<Integer> {
    
        public NestedIterator(List<NestedInteger> nestedList) {
            lists = new Stack<>();
            lists.push(nestedList.listIterator());
        }
    
        public Integer next() {
            hasNext();
            return lists.peek().next().getInteger();
        }
    
        public boolean hasNext() {
            while (!lists.empty()) {
                if (!lists.peek().hasNext()) {
                    lists.pop();
                } else {
                    NestedInteger x = lists.peek().next();
                    if (x.isInteger())
                        return lists.peek().previous() == x;
                    lists.push(x.getList().listIterator());
                }
            }
            return false;
        }
        
        private Stack<ListIterator<NestedInteger>> lists;
    }

---

**C++**

Using stacks of begin and end iterators.

    class NestedIterator {
    public:
        NestedIterator(vector<NestedInteger> &nestedList) {
            begins.push(nestedList.begin());
            ends.push(nestedList.end());
        }
    
        int next() {
            hasNext();
            return (begins.top()++)->getInteger();
        }
    
        bool hasNext() {
            while (begins.size()) {
                if (begins.top() == ends.top()) {
                    begins.pop();
                    ends.pop();
                } else {
                    auto x = begins.top();
                    if (x->isInteger())
                        return true;
                    begins.top()++;
                    begins.push(x->getList().begin());
                    ends.push(x->getList().end());
                }
            }
            return false;
        }
    
    private:
        stack<vector<NestedInteger>::iterator> begins, ends;
    };