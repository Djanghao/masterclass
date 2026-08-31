# Evolve from intuition to optimal, a review of top solutions

**Author:** yu6
**Votes:** 159
**Link:** [https://leetcode.com/problems/flatten-nested-list-iterator/solutions/80234/](https://leetcode.com/problems/flatten-nested-list-iterator/solutions/80234/)

---

This problem is simialr to [589. N-ary Tree Preorder Traversal](https://leetcode.com/problems/n-ary-tree-preorder-traversal/discuss/1041021/Three-solutions).
1. O(n) space, Flatten the list in constructor. The nested list can be visualized as a tree and the iterator order is dfs.
* c++
```
class NestedIterator {
public:
    NestedIterator(vector<NestedInteger> &nestedList) {
        dfs(nestedList); 
    }
    void dfs(vector<NestedInteger> &nestedList) {
         for(int i=nestedList.size()-1;i>=0;i--)
            if(nestedList[i].isInteger()) stk.push(nestedList[i].getInteger());
            else dfs(nestedList[i].getList());
    }
    int next() {
        int nxt = stk.top();
        stk.pop();
        return nxt;
    }
    bool hasNext() {
        return !stk.empty();
    }
private:
    stack<int> stk;
};
```
* java
```
public class NestedIterator implements Iterator<Integer> {
    Queue<Integer> q;
    public NestedIterator(List<NestedInteger> nestedList) {
        q=new LinkedList<Integer>();
        dfs(nestedList);
    }
    private void dfs(List<NestedInteger> nestedList){
        for(NestedInteger ni:nestedList)
            if(ni.isInteger()) q.add(ni.getInteger());
            else dfs(ni.getList());    
    }
    @Override
    public Integer next() {
        return q.poll(); 
    }

    @Override
    public boolean hasNext() {
        return !q.isEmpty(); 
    }
}
```
2. O(n) space, Flatten the list as you go. #1 is not an iterator because an iterator should never copy the data structure. Besides, it is a waste of time to flatten and store the whole list if we may only visit a few elements. So we can store the first level in the stack and flatten it as we go. If the list is flat, then there is no saving over #1.
* c++
```
class NestedIterator {
public:
    NestedIterator(vector<NestedInteger> &nestedList) {
        for(int i=nestedList.size()-1;i>=0;i--) stk.push(&nestedList[i]);
    }
    int next() {
        int nxt = stk.top()->getInteger();
        stk.pop();
        return nxt;
    }
    bool hasNext() {
        while(!stk.empty()) {
            NestedInteger *p = stk.top();
            if(p->isInteger()) return 1;
            vector<NestedInteger> &vec = p->getList();
            stk.pop();
            for(int i=vec.size()-1;i>=0;i--) stk.push(&vec[i]);
        }
        return 0;
    }
private:
    stack<NestedInteger*> stk;
};
```
* java
```
public class NestedIterator implements Iterator<Integer> {
    Stack<NestedInteger> stk;
    public NestedIterator(List<NestedInteger> nestedList) {
        stk=new Stack<NestedInteger>();
        addToStack(nestedList);
    }
    private void addToStack(List<NestedInteger> nestedList) {
        for(int i=nestedList.size()-1;i>=0;i--) 
            stk.push(nestedList.get(i));    
    }
    @Override
    public Integer next() {
        return stk.pop().getInteger(); 
    }

    @Override
    public boolean hasNext() {
        while(!stk.isEmpty()&&!stk.peek().isInteger()) {  //dfs until an integer is found
            addToStack(stk.pop().getList());
        }
        return !stk.isEmpty(); 
    }
}
```
3. Real iterator, O(h) space, h is the depth of the list. #2 stores each element in the current list. This still can be large. A list iterator is sufficient to dfs the list.
* c++ 
This solution only stores 2 iterators of the current list. The great idea is from [@StefanPochmann](https://discuss.leetcode.com/topic/41870/real-iterator-in-python-java-c). 
```
class NestedIterator {
public:
    typedef vector<NestedInteger>::iterator iter;  
    NestedIterator(vector<NestedInteger> &nestedList) {
        begins.push(nestedList.begin());
        ends.push(nestedList.end());
    }
    int next() {
        return begins.top()++->getInteger();
    }
    bool hasNext() {
        while(!begins.empty()) {
            iter it = begins.top();
            if(it == ends.top()) {
                begins.pop();
                ends.pop();
                if(!begins.empty()) begins.top()++;
            } else if (it->isInteger()) return 1;
            else {
                vector<NestedInteger>& lst = it->getList();
                begins.push(lst.begin());
                ends.push(lst.end());
            }
        }
        return 0;
    }
private:
   stack<iter> begins, ends;
};
```
* java
```
public class NestedIterator implements Iterator<Integer> {
    Stack<Iterator<NestedInteger>> stk;
    Integer next;
    public NestedIterator(List<NestedInteger> nestedList) {
        stk=new Stack<Iterator<NestedInteger>>();
        stk.add(nestedList.iterator());
        advance();
    }
    private void advance() {
        next = null;
        while(!stk.isEmpty()) {
            Iterator<NestedInteger> it = stk.peek();
            if(!it.hasNext()) {
                stk.pop();
            } else {
                NestedInteger ni = it.next();
                if(ni.isInteger()) {
                    next = ni.getInteger();
                    return;
                }
                stk.add(ni.getList().iterator());
            }
        }
    }
    @Override
    public Integer next() {
        Integer ret = next;
        advance();
        return ret; 
    }

    @Override
    public boolean hasNext() {
        return next != null;
    }
}
```