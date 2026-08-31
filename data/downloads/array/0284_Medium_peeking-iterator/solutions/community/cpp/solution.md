# Another C++ solution with one line in peek() and hasNext(), AC

**Author:** wen_alan
**Votes:** 72
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/72598/](https://leetcode.com/problems/peeking-iterator/solutions/72598/)

---

    class PeekingIterator : public Iterator {
    private:
        int m_next;
        bool m_hasnext;
    public:
    	PeekingIterator(const vector<int>& nums) : Iterator(nums) {
    	    m_hasnext = Iterator::hasNext();
    	    if (m_hasnext) m_next = Iterator::next();
    	}
    
    	int peek() {
            return m_next;
    	}
    
    	int next() {
    	    int t = m_next;
    	    m_hasnext = Iterator::hasNext();
    	    if (m_hasnext) m_next = Iterator::next();
    	    return t;
    	}
    
    	bool hasNext() const {
    	    return m_hasnext;
    	}
    };