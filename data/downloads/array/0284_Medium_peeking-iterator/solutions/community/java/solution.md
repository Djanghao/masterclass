# Concise Java Solution

**Author:** Metahunter
**Votes:** 253
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/72558/](https://leetcode.com/problems/peeking-iterator/solutions/72558/)

---

    class PeekingIterator implements Iterator<Integer> {  
        private Integer next = null;
        private Iterator<Integer> iter;

        public PeekingIterator(Iterator<Integer> iterator) {
            // initialize any member here.
            iter = iterator;
            if (iter.hasNext())
                next = iter.next();
        }
        
        // Returns the next element in the iteration without advancing the iterator. 
        public Integer peek() {
            return next; 
        }
    
        // hasNext() and next() should behave the same as in the Iterator interface.
        // Override them if needed.
        @Override
        public Integer next() {
            Integer res = next;
            next = iter.hasNext() ? iter.next() : null;
            return res; 
        }

        @Override
        public boolean hasNext() {
            return next != null;
        }
    }

cache the next element. If next is null, there is no more elements in iterator.

Edit: check AlexTheGreat's answer. It's better.

Edit after 2 years: the old solution didn't consider null values and @AlexTheGreat already posted the correct solution but looks like no one is checking his/her answer. So I took his/her answer as a reference:
```
import java.util.NoSuchElementException;
class PeekingIterator implements Iterator<Integer> {
    Integer next;
    Iterator<Integer> iter;
    boolean noSuchElement;

    public PeekingIterator(Iterator<Integer> iterator) {
	// initialize any member here.
	iter = iterator;
        advanceIter();
    }

    // Returns the next element in the iteration without advancing the iterator.
    public Integer peek() {
        // you should confirm with interviewer what to return/throw
        // if there are no more values
        return next;
    }

    // hasNext() and next() should behave the same as in the Iterator interface.
    // Override them if needed.
    @Override
    public Integer next() {
        if (noSuchElement)
            throw new NoSuchElementException();
        Integer res = next;
        advanceIter();
        return res;
    }

    @Override 
    public boolean hasNext() {
        return !noSuchElement;
    }
    
    private void advanceIter() {
        if (iter.hasNext()) {
            next = iter.next();
        } else {
            noSuchElement = true;
        }
    }
}
```